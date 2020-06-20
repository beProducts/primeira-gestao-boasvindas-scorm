<template>
  <div id="page">
    <div id="login-box">
      <div id="presentation">
        <img src="../../assets/images/login-cover.jpg" alt="Login">
        <div class="content">
          <h1>Primeira Gestão</h1>
          <p>
            A primeira liderança é um passo importante para conectar pessoas e negócio. 
            Apropriar-se de conteúdos e ferramentas de gestão, além de se inspirar 
            com o apoio de práticas e simulações, ajudará na sua jornada de evolução e conquistas.
          </p>
        </div>
      </div>
      <div id="access">
        <h3>Área de acesso</h3>
        <form id="frmAccess" name="frmAccess" method="POST" @submit.prevent="handleSubmit">
          <div class="input-control">
            <input type="text" v-model="login" name="login" id="login" placeholder="E-mail" @keyup="handleLogin">
            <span class="labelError">{{ loginError }}</span>
          </div>
          <div class="input-control">
            <input type="password" v-model="password" name="password" id="password" placeholder="Senha" @keyup="handlePassword">
            <span class="labelError">{{ passwordError }}</span>
          </div>
          <button>Entrar</button>
        </form>
        <a href="javascript:;" class="link" @click="goToRoute('/forgotPassword')">Esqueceu sua senha ?</a>
        <div id="accessError" class="labelError" v-if="accessError != ''">{{ accessError }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '../../mixins/mixin';

export default {
  name: 'Login',
  mixins: [mixin],
  data () {
    return {
      login: '',
      loginError: '',
      password: '',
      passwordError: '',
      accessError: ''
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.loginError = '';
      vm.passwordError = '';
      vm.accessError = '';
    });
  },
  methods: {
    handleLogin() {
      this.loginError = "";
    },
    handlePassword() {
      this.passwordError = "";
    },
    handleSubmit () {
      const { login, password } = this;
      const api = process.env.VUE_APP_BACKEND_ENDPOINT;
      const productId = process.env.VUE_APP_PRODUCT_ID;
      const companyId = process.env.VUE_APP_COMPANY_ID;
      const productUserKey = `product-${productId}-user`;
      const productTokenKey = `product-${productId}-token`;
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, password, companyId, productId })
      };

      if(login === ""){
        this.loginError = "Entre com o login.";
        return;
      }
      if(password === ""){
        this.passwordError = "Entre com a senha.";
        return;
      }

      fetch(`${api}/authentication/product`, requestOptions)
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

  #login-box{
    display: flex;
    width: 70vw;
    max-width: 800px;
    display:flex;

    #presentation{
      width: 55%;
      background-color: #{$primary}d9;
      color: #FFFFFF;

      .content{
        padding: 20px 45px 20px 30px;
      }

      img{
        max-width: 100%;
        width: 100%;
      }

      h1{
        margin: 0;
      }

      p{
        margin: 1rem 0;
        line-height: 130%;
      }
    }

    #access{
      width: 45%;
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

      .labelError{
        color: red;
      }

      .link{
        text-decoration: none;
        color: $primary;
      }

      #accessError{
        margin: 15px 0 0 0;
        position: relative;
        padding: 7px;
        border: 1px solid transparent;
        border-radius: .25rem;
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
      }

      #frmAccess{
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
    }
  }

  /* Table - Portrait */
  @media (max-width: 768px) and (orientation: portrait) {
    #login-box{
      flex-direction: column;
      max-width: 650px;

      #presentation{
        width: 100%;

        .content{
          display: none;
        }
      }

      #access{
        width: 100%;
        transform: none;
        box-shadow: none;
        padding: 40px 20px;
      }
    }
  }

  /* Mobile - Landscape */
  @media (max-width: 896px) and (orientation: landscape) {
    #login-box{
      width: 80vw;

      #presentation{
        width: 50%;

        .content{
          p{
            display: none;
          }
        }
      }

      #access{
        padding: 25px 15px;
        width: 50%;
      }
    }
  }

  /* Mobile - Portrait */
  @media (max-width: 414px) and (orientation: portrait) {
    #login-box{
      width: 80vw;

      #presentation{
        display: none;
      }
    }
  }
</style>