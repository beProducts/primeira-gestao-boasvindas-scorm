<template>
  <div id="page">
    <div id="forgot-password-box">
        <h3>Redefinição de senha</h3>
        <form id="frmForgotPassword" name="frmForgotPassword" method="POST" @submit.prevent="handleSubmit">
          <div class="input-control">
            <input type="text" v-model="login" name="login" id="login" placeholder="Informe seu e-mail" @keyup="handleLogin">
            <span class="labelError" v-if="loginError != ''">{{ loginError }}</span>
            <span class="labelSuccess" v-if="loginSuccess !== ''">{{ loginSuccess }}</span>
          </div>
          <div class="actions">
            <a href="javascript:;" class="link" @click="goToRoute('/')">Cancelar</a>
            <button>Enviar</button>
          </div>
        </form>
    </div>
  </div>
</template>
<script>
import mixin from '../../mixins/mixin';

export default {
  name: 'ForgotPassword',
  mixins: [mixin],
  data () {
    return {
      login: '',
      loginError: ''
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.loginError = '';
      vm.loginSuccess = '';
    });
  },
  methods: {
    handleLogin() {
      this.loginError = "";
    },
    handleSubmit () {
      const { login } = this;
      const api = process.env.VUE_APP_BACKEND_ENDPOINT;
      const productId = process.env.VUE_APP_PRODUCT_ID;
      const companyId = process.env.VUE_APP_COMPANY_ID;
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, companyId, productId })
      };

      // Cleaning messages
      this.loginError = ""
      this.loginSuccess = ""

      // Validations
      if(login === ""){
        this.loginError = "Entre com o e-mail.";
        return;
      }

      fetch(`${api}/authentication/forgotPassword`, requestOptions)
      .then(res => res.json())
      .then(response => {
        this.login = ''
        this.loginSuccess = 'Um e-mail com instruções foi enviado.'
        return response;
      })
      .catch(() => {
        this.loginError = 'Erro ao tentar autenticar. Tente novamente mais tarde.';
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
    display:flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(#406c8b, #2ebb88);
  }

  #forgot-password-box{
    width: 30%;
    background-color: #FFFFFF;
    padding: 50px 30px;
    box-shadow: -13px -1px 13px 4px rgba(0, 0, 0, 0.4);
    transform: scale(1.07);
    box-sizing: border-box;

    h3{
      color: $primary;
      margin: 0 0 1rem 0;
      font-size: 1.5rem;
    }

    .link{
      text-decoration: none;
      color: $primary;
      display: inline-flex;
      align-items: center;
    }

    .labelError{
      color: red;
    }
    .labelSuccess{
      color: #50BC0D;
    }

    #frmForgotPassword{
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
      .input-control{
        margin-bottom: 20px;
      }

      .actions{
        display: flex;
        justify-content: space-between;

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
          box-sizing: border-box;
          transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

          &:focus {
            outline: 0;
            box-shadow: 0 0 0 0.2rem #{$primary}99;
          }
          &:hover{
            background-color: #{$primary}cc;
          }
        }
      }
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