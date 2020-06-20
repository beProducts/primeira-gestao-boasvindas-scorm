<template>
  <div id="page">
    <div class="text-block">
      <h1>Como a jornada está organizada</h1>
      <hr />
      <img src="../../assets/images/map.png" alt="map" class="landscape">
      <img src="../../assets/images/map-v.png" alt="map" class="portrait" style="margin-bottom: 3vh;">

      <div class="arrows animated zoomIn" >
        <a href="javascript:void(0)" @click="goToRoute('/welcome')">
          <img src="../../assets/images/arrow-left.png" alt="Arrow left">
        </a>
        <a href="javascript:void(0)" @click="goToRoute('/choose-your-navigation-type')">
          <img src="../../assets/images/arrow-right.png" alt="Arrow right">
        </a>
      </div>
      <div class="navigation animated zoomIn">
        <a href="javascript:void(0)" @click="goToRoute('/welcome')">&#9679;</a>
        <a href="javascript:void(0)" @click="goToRoute('/how-is-the-journey-organized')" class="selected">&#9679;</a>
        <a href="javascript:void(0)" @click="goToRoute('/choose-your-navigation-type')">&#9679;</a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HowIsTheJourneyOrganized',
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
    font-weight: bold;
  }
  hr{
    margin-bottom: 3vw;
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
    align-items: flex-start;
    justify-content: center;
    color: #FFFFFF;
  }
  .text-block{
    width: 100%;
    text-align: center;
    padding: 0 10vw;
    box-sizing: border-box;
    margin-top: 3%;
    height: auto;
  }

  .arrows{
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 7vw;
    left: 0;
  }
  .arrows img{
    margin-left: 2vw;
    height: 4vw;
  }
  .arrows a{
    display: inline-block;
  }
  .arrows a:first-child img{
    margin-right: 2vw;
    margin-left: 0;
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

  @media (orientation: landscape) {
    img.portrait{
      display: none;
    }
    .text-block img.landscape{
      height: 50vh;
    }
  }
  @media (max-width: 1024px) and (orientation: landscape) {
    .navigation a{
      font-size: 3.8vw;
    }
  }

  @media (orientation: portrait) {
    #page{
      overflow: auto;
    }
    img.landscape{
      display: none;
    }
    .text-block img.landscape{
      width: 100%;
      height: auto;
    }
    .navigation, .arrows{
      position: static;
    }
  }
  @media (max-width: 768px) and (orientation: portrait) {
    h1{
      font-size: 6.5vh;
      margin-bottom: 5vw;
    }
    p{
      font-size: 1.6vh;
    }
    .navigation a{
      font-size: 7vw;
    }
    .text-block{
      padding: 0;
      background: #007C85;
    }
    .arrows{
      bottom: 15vw;
      margin-bottom: 4vh;
    }
    .arrows img{
      height: 10vw;
    }
  }
</style>