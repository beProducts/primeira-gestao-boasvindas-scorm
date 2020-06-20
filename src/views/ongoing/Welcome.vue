<template>
  <div id="page">
    <div class="text-block">
      <h1>
        Olá, que bom que você veio explorar um pouco mais o
        tema "Integridade e Ética".
      </h1>
      <p>
        Desde muito tempo atrás o comportamento ético permeia as relações
        saudáveis da humanidade, permitindo que o bem‐estar coletivo se
        sobressaia ao bem‐estar individual. Nesta jornada de aprendizagem
        você poderá refletir sobre este assunto, inclusive ampliando sua
        percepção sobre o seu comportamento ético no dia a dia.
      </p>
    </div>
    <a href="javascript:void(0)" @click="goToRoute('/how-is-the-journey-organized')" class="arrow animated zoomIn">
      <img src="../../assets/images/arrow-right.png" alt="Arrow right">
    </a>
    <div class="navigation animated zoomIn">
      <a href="javascript:void(0)" @click="goToRoute('/welcome')" class="selected">&#9679;</a>
      <a href="javascript:void(0)" @click="goToRoute('/how-is-the-journey-organized')">&#9679;</a>
      <a href="javascript:void(0)" @click="goToRoute('/choose-your-navigation-type')">&#9679;</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  methods: {
    goToRoute(route) {
      this.$router.push({ path: route });
    }
  },
};
</script>

<style lang="scss" scoped>
  $primary: $PRIMARY;

  h1, p{
    color: #FFFFFF;
    margin: 0;
    font-family: 'sanukOT', sans-serif;
  }
  h1{
    font-size: 2.5vw;
    text-align: center;
    margin-bottom: 3vw;
    font-weight: bold;
  }
  p{
    font-size: 1.6vw;
    font-weight: 400;
  }

  #page{
    background-color: $primary;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
  }

  .text-block{
    width: 100%;
    text-align: center;
    bottom: 25vw;
    left: 0;
    padding: 0 18vw;
    box-sizing: border-box;
    margin-top: -5vh;
  }

  .arrow{
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 7vw;
    left: 0;
  }
  .arrow img{
    height: 4vw;
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
      font-size: 3.8vh;
    }
    p{
      font-size: 2.5vh;
    }
    .text-block{
      padding: 0 10vw;
    }
    .navigation a{
      font-size: 7vw;
    }
    .arrow{
      bottom: 15vw;
    }
    .arrow img{
      height: 10vw;
    }
  }
</style>