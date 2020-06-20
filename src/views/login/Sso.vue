<template>
  <div id="page">
    <div>
      <img src="../../assets/images/loading.gif" alt="Loading">
      <p>{{ accessError }}</p>
    </div>
  </div>
</template>

<script>
import mixin from '../../mixins/mixin';

export default {
  name: 'Sso',
  mixins: [mixin],
  data () {
    return {
      accessError: ''
    }
  },
  mounted () {
    this.checkToken()
  },
  methods: {
    checkToken () {
      // Init
      const api = process.env.VUE_APP_BACKEND_ENDPOINT
      const productId = process.env.VUE_APP_PRODUCT_ID
      const companyId = process.env.VUE_APP_COMPANY_ID
      const productUserKey = `product-${productId}-user`
      const productTokenKey = `product-${productId}-token`
      const token = this.$route.params.token

      // Prepare rquest
      const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ companyId, productId, token })
      };

      // Request
      fetch(`${api}/authentication/platformToProduct`, requestOptions)
      .then(res => res.json())
      .then(response => {
        if(response.status === true){
          // login successful if there's a jwt token in the response
          if (response.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem(productUserKey, JSON.stringify(response.data));
            localStorage.setItem(productTokenKey, response.token);
          }
        }else{
          if(response.message === 'User not founded.'){
            this.accessError = 'Dados de acesso inválidos.';
          } else if (response.message === 'No active voucher founded.'){
            this.accessError = 'Você não tem acesso a esse produto.';
          } else {
            this.accessError = 'Erro ao tentar autenticar. Tente novamente mais tarde.';
          }
        }
        return response;
      })
      .then(response => {
        if (response.token) this.goToRoute('/welcome');
      })
      .catch(() => {
        this.accessError = 'Erro ao tentar autenticar. Tente novamente mais tarde.';
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  #page{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>
