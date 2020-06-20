<template>
  <transition
    :name="transitionName"
    :mode="transitionMode"
    :enter-active-class="transitionEnterActiveClasses"
    :leave-active-class="transitionLeaveActiveClasses">
    <slot/>
  </transition>
</template>

<script>
/* eslint-disable */
const DEFAULT_TRANSITION = 'fade';
const DEFAULT_TRANSITION_MODE = ''; //out-in | in-out

export default {
  name: 'TransitionPage',
  data() {
    return {
      transitionName: DEFAULT_TRANSITION,
      transitionMode: DEFAULT_TRANSITION_MODE,
      transitionEnterActiveClasses: '',
      transitionLeaveActiveClasses: '',
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName || DEFAULT_TRANSITION;
      let transitionMode = to.meta.transitionMode || from.meta.transitionMode || DEFAULT_TRANSITION_MODE;

      if (transitionName === 'slide') {
        let transitionOrderFrom = from.meta.transitionOrder || 0;
        let transitionOrderTo   = to.meta.transitionOrder || 0;
        transitionMode = '';

        if(transitionOrderFrom >= transitionOrderTo){
            this.transitionEnterActiveClasses = 'animated slideInLeft fast';
            this.transitionLeaveActiveClasses = 'animated slideOutRight fast';
        }else{
            this.transitionEnterActiveClasses = 'animated slideInRight fast';
            this.transitionLeaveActiveClasses = 'animated slideOutLeft fast';
        }
      }

      if (transitionName === 'slideEnd') {
        let transitionOrderFrom = from.meta.transitionOrder || 0;
        let transitionOrderTo   = to.meta.transitionOrder || 0;
        transitionMode = '';

        if(transitionOrderFrom >= transitionOrderTo){
            this.transitionEnterActiveClasses = 'animated fadeIn fast';
            this.transitionLeaveActiveClasses = 'animated fadeOut fast';
        }else{
            this.transitionEnterActiveClasses = 'animated slideInRight fast';
            this.transitionLeaveActiveClasses = 'animated slideOutLeft fast';
        }
      }

      if (transitionName === 'fade') {
          this.transitionEnterActiveClasses = 'animated fadeIn fast';
          this.transitionLeaveActiveClasses = 'animated fadeOut fast';
          transitionMode = '';
      }

      this.transitionMode = transitionMode;
      this.transitionName = transitionName;

      next();
    });
  },
};
</script>
<style scoped></style>