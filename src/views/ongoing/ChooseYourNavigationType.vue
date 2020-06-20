<template>
  <div id="page">
    <div class="text-block">
      <h1>Escolha como você quer navegar</h1>
      <div id="navigation-types">
        <div>
            <span>
              Você tem a opção de fazer um caminho linear.
              Para isso, basta navegar nos conteúdos das
              páginas e clicar nos botões que você encontrará
              na parte inferior de cada tela.
            </span>
            <img src="../../assets/images/sequel-navigation.png" alt="Sequel">
        </div>
        <div>
            <span>
              Você terá também a opção de
              visitar o menu "Mapa da Jornada"
              e escolher para onde deseja ir.
            </span>
            <img src="../../assets/images/random-navigation.png" alt="Random">
        </div>
      </div>
      <a href="javascript:void(0)" id="start-jorney" @click="startJorney">Clique para começar</a>
    </div>
    <div class="navigation animated zoomIn">
      <a href="javascript:void(0)" @click="goToRoute('/welcome')">&#9679;</a>
      <a href="javascript:void(0)" @click="goToRoute('/how-is-the-journey-organized')">&#9679;</a>
      <a href="javascript:void(0)" @click="goToRoute('/choose-your-navigation-type')" class="selected">&#9679;</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChooseYourNavigationType',
  methods: {
    goToRoute(route) {
      this.$router.push({ path: route });
    },
    startJorney() {
      const productOnboardingKey = `product-${process.env.VUE_APP_PRODUCT_ID}-onboarding`;
      localStorage.setItem(productOnboardingKey, 'N');
      this.$router.push({ path: '/what-is-ethics' });
    }
  },
};
</script>

<style lang="scss" scoped>
  $primary: $PRIMARY;

  h1{
    color: #FFFFFF;
    margin: 0;
    font-family: 'sanukOT', sans-serif;
    font-weight: bold;
    font-size: 2.3vw;
    text-align: center;
  }

  #page{
    background-color: $primary;
    width: 100%;
    height: 100%;
    display: flex;
    color: #FFFFFF;
  }

  #navigation-types{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4vw;
  }

  #navigation-types div{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 26vw;
  }
  #navigation-types div img{
    width: 24.5vw;
  }
  #navigation-types div span{
    font-family: 'sanukOT', sans-serif;
    font-weight: 400;
    font-size: 1.4vw;
    min-height: 20vh;
    display: flex;
    align-items: center;
  }

  #start-jorney{
    display: inline-flex;
    font-family: 'sanukOT', sans-serif;
    font-weight: bold;
    font-size: 1.8vw;
    border: 1px solid #FFFFFF;
    background-color: #74BF95;
    color: #1B3A45;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5vw 3vw;
  }

  .text-block{
    position: absolute;
    width: 100%;
    text-align: center;
    top: 8vh;
    left: 0;
    padding: 0 18vw;
    box-sizing: border-box;
  }

  .navigation{
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 2vw;
    left: 0;
  }
  .navigation a{
    font-size: 2.3vw;
    text-decoration: none;
    color: #FFFFFF;
    opacity: 0.6;
    display: inline-block;
    padding: 0 0.8vw;
  }
  .navigation a.selected{
    color: #FFFFFF;
    opacity: 1;
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    .navigation a{
      font-size: 3.8vw;
    }
  }

  @media (max-width: 768px) and (orientation: portrait) {
    h1{
      font-size: 2.8vh;
    }
    #navigation-types{
      flex-direction: column;
      margin-bottom: 4vh;
    }
    #navigation-types div{
      width: 80%;
    }
    #navigation-types div span{
      font-size: 2vh;
      min-height: 13vh;
    }
    #navigation-types div img{
      width: 70%;
    }
    .text-block{
      padding: 0 5vw;
      top: 5vh;
    }
    #start-jorney{
      font-size: 1.8vh;
      padding: 1.5vh 3vh;
    }
    .navigation a{
      font-size: 7vw;
    }
  }
</style>