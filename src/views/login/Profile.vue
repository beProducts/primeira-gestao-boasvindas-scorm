<template>
  <div id="page">
    <div class="content">
      <h1>Perfil</h1>
      <form id="frmProfile" @submit.prevent="saveProfile">
        <div class="input-control">
          <label for="name">Login</label>
          <input type="text" id="login" disabled />
        </div>
        <div class="input-control">
          <label for="name">Senha</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div class="input-control">
          <label for="name">Nome</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div class="input-control">
          <label for="email">E-mail</label>
          <input type="email" name="email" id="email" required />
        </div>
        <button>Salvar</button>
      </form>
    </div>
    <div class="toolbar">
      <ToolBar />
    </div>
  </div>
</template>

<script>
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Vue from 'vue';
import mixin from '../../mixins/mixin';
import ToolBar from '../../components/Toolbar.vue';

Vue.use(VueSweetalert2);

export default {
  name: 'Profile',
  mixins: [mixin],
  components: {
    ToolBar,
  },
  data () {
    return {
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.readProfile();
    });
  },
  methods: {
    readProfile() {
      // Env variables
      const api = process.env.VUE_APP_BACKEND_ENDPOINT;
      const productId = process.env.VUE_APP_PRODUCT_ID;

      // Get keys
      const productUserKey = `product-${productId}-user`;
      const productTokenKey = `product-${productId}-token`;

      // Storage data
      const token = localStorage.getItem(productTokenKey);
      let userData = localStorage.getItem(productUserKey);
      userData = JSON.parse(userData);

      // Prepare request
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
      };

      fetch(`${api}/customers/${userData.customerId}`, requestOptions)
        .then(res => res.json())
        .then((response) => {
          if (response.status === true) {
            document.getElementById('login').value = response.data.login;
            document.getElementById('name').value = response.data.fullName;
            document.getElementById('email').value = response.data.email;
          } else {
            this.$swal({
              icon: 'error',
              text: response.message,
            });
          }
        })
        .catch((error) => {
          throw error;
        });
    },
    saveProfile() {
      // Env variables
      const api = process.env.VUE_APP_BACKEND_ENDPOINT;
      const productId = process.env.VUE_APP_PRODUCT_ID;

      // Get keys
      const productUserKey = `product-${productId}-user`;
      const productTokenKey = `product-${productId}-token`;

      // Storage data
      const token = localStorage.getItem(productTokenKey);
      let userData = localStorage.getItem(productUserKey);
      userData = JSON.parse(userData);

      // Form Data
      const form = document.getElementById('frmProfile');
      const formData = new URLSearchParams();
      // eslint-disable-next-line
      formData.append('customerId', userData.customerId);
      for (const pair of new FormData(form)) {
        formData.append(pair[0], pair[1]);
      }

      // Prepare request
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        body: formData
      };

      fetch(`${api}/customers/${userData.customerId}`, requestOptions)
        .then(res => res.json())
        .then((data) => {
          if (data.status === true) {
            this.$swal({
              icon: 'success',
              text: 'Dados salvos com sucesso!',
            });
          } else {
            this.$swal({
              icon: 'error',
              text: data.message,
            });
          }
        })
        .catch((error) => {
          this.$swal({
            icon: 'error',
            text: 'Erro ao processar seu pedido. Tenta novamente mais tarde.',
          });
          throw error;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
  $primary: $PRIMARY;
  
  #page{
    width: 100%;
    height: 100%;
    font-family: 'sanukOT', sans-serif;

    .content{
      width: 70vw;
      margin: 5%  auto 0;
      max-height: 90vh;
      overflow: auto;
    }
  }

  h1{
    margin: 0 0 1vw 0;
    text-transform: uppercase;
    font-size: 2.5vw;
    font-weight: 400;
  }

  #frmProfile{
    input{
      display: block;
      width: 100%;
      padding: .375rem .75rem;
      box-sizing: border-box;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: #FFFFFF;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: .25rem;
      transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      margin-bottom: 3px;

      &:focus {
        color: $primary;
        background-color: #FFFFFF;
        border-color: $primary;
        outline: 0;
        box-shadow: 0 0 0 0.2rem #{$primary}40;
      }
    }

    button{
      background-color: $primary;
      color: #FFFFFF;
      cursor: pointer;
      display: inline-block;
      font-weight: 400;
      text-align: center;
      vertical-align: middle;
      user-select: none;
      border: 1px solid transparent;
      padding: .375rem .75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: .25rem;
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 20px;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

      &:focus {
        outline: 0;
        box-shadow: 0 0 0 0.2rem #{$primary}99;
      }
      &:hover{
        background-color: #{$primary}cc;
      }
    }

    .input-control{
      margin-bottom: 20px;
    }

  }


  /* Table - Portrait */
  @media (max-width: 768px) and (orientation: portrait) {

  }

  /* Mobile - Landscape */
  @media (max-width: 896px) and (orientation: landscape) {

  }

  /* Mobile - Portrait */
  @media (max-width: 414px) and (orientation: portrait) {

  }
</style>