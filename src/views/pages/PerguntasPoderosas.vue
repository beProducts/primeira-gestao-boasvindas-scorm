<template>
  <div class="main">
    <div class="scroll-wrapper">
      <iframe ref="content" id="content" src="https://empreenda-se.digital/products/primeira-gestao/content/11-perguntas-poderosas/index.html" allowfullscreen></iframe>
    </div>
    <div class="toolbar">
      <ToolBar />
    </div>
  </div>
</template>
<script>
// Import Vue
import Vue from 'vue';
import ToolBar from '../../components/Toolbar.vue';
import mixin from '../../mixins/mixin';

// Event Bus
const EventBus = new Vue();

// Event listener for warranty transaction success
window.addEventListener('message', function (e) {
  if (e.data.event === 'goToRoute') {
    EventBus.$emit('goToRoute', e.data.data);
  }
  if (e.data.event === 'loaded') {
    EventBus.$emit('iframeLoaded', e.data.data);
  }
});

export default {
  name: 'PerguntasPoderosas',
  mixins: [mixin],
  components: {
    ToolBar,
  },
  data() {
    return {
      timeSpentOnPage: 0,
      mainTimer: null,
      alarmTimer: null,
    };
  },
  mounted() {
    // Receive data from iframe
    EventBus.$on('goToRoute', this.goToRoute);

    // Send data to iframe
    EventBus.$on('iframeLoaded', this.sendStorageToIframe);
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.timeSpentOnPage = 0;
      vm.saveVisit(to.meta.pageId);
      vm.initTimer();
    });
  },
  beforeRouteLeave(to, from, next) {
    this.stopTimer();
    this.setUserExit(from.meta.pageId, this.timeSpentOnPage);
    next();
  },
  methods: {
    initTimer() {
      this.mainTimer = setInterval(() => {
        if (!document.hidden) this.timeSpentOnPage += 1;
        if (this.timeSpentOnPage === parseInt(process.env.VUE_APP_DEFAULT_CHECK_TIME, 10)) {
          this.setChecked(this.$route.meta.pageId);
        }
      }, 1000);
      this.alarmTimer = setInterval(() => {
        if (!document.hidden) {
          this.setUserTimeElapsed(this.$route.meta.pageId, this.timeSpentOnPage);
        }
      }, 10000);
    },
    stopTimer() {
      clearTimeout(this.mainTimer);
      clearTimeout(this.alarmTimer);
    },
    sendStorageToIframe() {
      const productId = process.env.VUE_APP_PRODUCT_ID;
      const productUserKey = `product-${productId}-user`;

      // Storage data
      let userData = localStorage.getItem(productUserKey);
      userData = JSON.parse(userData);

      // Send data to iframe
      const storage = {
        endpoint: process.env.VUE_APP_BACKEND_ENDPOINT,
        companyId: process.env.VUE_APP_COMPANY_ID,
        objectId: this.$route.meta.pageId,
        customerId: userData.customerId
      }

      const $iframe = this.$refs.content;
      $iframe.contentWindow.postMessage({
        event: 'storage',
        data: JSON.stringify(storage)
      }, "*");
    },
  },
}
</script>

<style scoped>
  html, body {
    margin: 0;
    padding: 0;
  }
  html, body, .main {
    width: 100%;
    height: 100%;
  }
  .main .scroll-wrapper {
    width: 100vw;
    height: 90vh;
    position: relative;
  }
  .main .toolbar{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: auto;
  }
  .main iframe {
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 90vh;
  }
</style>