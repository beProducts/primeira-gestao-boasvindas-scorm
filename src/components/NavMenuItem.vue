<template>
    <a href="javascript:void(0);" class="be-menu-item" @click="changeRoute(route)">
      <div class="menu-image">
        <img src="../assets/images/menu-icon-check.png" class="menu-item-check" alt="check" v-show="this.checked" />
        <img v-show="!this.selected" :src="require(`@/assets/images/${this.src}`)" alt="icon" />
        <img v-show="this.selected" :src="require(`@/assets/images/${this.asrc}`)" alt="icon" />
      </div>
      <span :class="{ 'selected' : this.selected == true}">{{ text }}</span>
    </a>
</template>

<script>
import mixin from '../mixins/mixin';

export default {
  name: 'NavMenuItem',
  mixins: [mixin],
  props: {
    text: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      required: false,
      default: false
    },
    route: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    asrc: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    changeRoute(route) {
      this.goToRoute(route);
      this.$emit('changeRoute');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .be-navigation .be-menu-item{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      position: relative;
      min-width: 10vw;
  }
  .be-navigation .be-menu-item .menu-image{
      position: relative;
  }
  .be-navigation .be-menu-item .menu-image img{
      width: 4.5vw;
  }
  .be-navigation .be-menu-item .menu-image .menu-item-check{
      position: absolute;
      right: -5px;
      top: -5px;
      width: 2.3vw;
  }
  .be-navigation .be-menu-item span{
    font-size: 1.5vw;
    text-align: center;
    padding: 0 1.5vw;
    line-height: 110%;
    color: #FFFFFF;
  }
  .be-navigation .be-menu-item span.selected{
      color: #FFC127;
  }

  @media screen and (max-width: 768px){
    .be-navigation .be-menu-item .menu-image img{
      width: 8vw;
    }
    .be-navigation .be-menu-item span{
      font-size: 3vw;
    }
  }

  @media (max-width: 667px) and (orientation: landscape) {
    .be-navigation .be-menu-item .menu-image img{
      width: 7vw;
    }
    .be-navigation .be-menu-item span{
      font-size: 2.5vw;
    }
  }
</style>
