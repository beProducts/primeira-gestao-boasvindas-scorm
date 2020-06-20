// Basic
import Vue from 'vue';
import Router from 'vue-router';

// Views :: Onboarding
import Welcome from '@/views/ongoing/Welcome.vue';
import howIsTheJourneyOrganized from '@/views/ongoing/HowIsTheJourneyOrganized.vue';
import chooseYourNavigationType from '@/views/ongoing/ChooseYourNavigationType.vue';

// Views :: Pages
import ComecePorAqui from '@/views/pages/ComecePorAqui.vue';
import EASuaPrimeiraVez from '@/views/pages/EASuaPrimeiraVez.vue';
import AHistoriaDaLideranca from '@/views/pages/AHistoriaDaLideranca.vue';
import AHistoriaDeRanimiroLotufo from '@/views/pages/AHistoriaDeRanimiroLotufo.vue';
import AgoraEComVoce from '@/views/pages/AgoraEComVoce.vue';
import CampoOuArquibancada from '@/views/pages/CampoOuArquibancada.vue';

// View :: Login
import Login from '@/views/login/Login.vue';
import Profile from '@/views/login/Profile.vue';
import ForgotPassword from '@/views/login/ForgotPassword.vue';
import SSO from '@/views/login/Sso.vue';

// Use Router
Vue.use(Router);

// Init Onboarding
const productOnboardingKey = `product-${process.env.VUE_APP_PRODUCT_ID}-onboarding`;
localStorage.setItem(productOnboardingKey, 'N');  ///////// DESABLE ONBOARDING  /////////
if (localStorage.getItem(productOnboardingKey) === null) {
  localStorage.setItem(productOnboardingKey, 'Y');
}

const router = new Router({
  // mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      redirect: () => {
        if (process.env.VUE_APP_SCORM_MODE !== 'ON')  return '/login';
        else  return '/comece-por-aqui';
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { transitionName: 'fade' },
    },
    {
      path: '/sso/:token',
      name: 'sso',
      component: SSO,
      meta: { transitionName: 'fade' },
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { transitionName: 'fade' },
    },
    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: ForgotPassword,
      meta: { transitionName: 'fade' },
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
      meta: { transitionName: 'slide', transitionOrder: 1 },
    },
    {
      path: '/how-is-the-journey-organized',
      name: 'howIsTheJourneyOrganized',
      component: howIsTheJourneyOrganized,
      meta: { transitionName: 'slide', transitionOrder: 2 },
    },
    {
      path: '/choose-your-navigation-type',
      name: 'chooseYourNavigationType',
      component: chooseYourNavigationType,
      meta: { transitionName: 'slide', transitionOrder: 3 },
    },
    {
      path: '/comece-por-aqui',
      name: 'ComecePorAqui',
      component: ComecePorAqui,
      meta: { transitionName: 'fade', transitionOrder: 4, pageId: 81 },
    },
    {
      path: '/e-a-sua-primeira-vez',
      name: 'EASuaPrimeiraVez',
      component: EASuaPrimeiraVez,
      meta: { transitionName: 'fade', transitionOrder: 5, pageId: 82 },
    },
    {
      path: '/a-historia-da-lideranca',
      name: 'AHistoriaDaLideranca',
      component: AHistoriaDaLideranca,
      meta: { transitionName: 'fade', transitionOrder: 6, pageId: 83 },
    },
    {
      path: '/a-historia-de-ranimiro-lotufo',
      name: 'AHistoriaDeRanimiroLotufo',
      component: AHistoriaDeRanimiroLotufo,
      meta: { transitionName: 'fade', transitionOrder: 7, pageId: 30 },
    },
    {
      path: '/agora-e-com-voce',
      name: 'AgoraEComVoce',
      component: AgoraEComVoce,
      meta: { transitionName: 'fade', transitionOrder: 8, pageId: 31 },
    },
    {
      path: '/campo-ou-arquibancada',
      name: 'CampoOuArquibancada',
      component: CampoOuArquibancada,
      meta: { transitionName: 'fade', transitionOrder: 9, pageId: 32 },
    }
  ],
});

router.beforeEach((to, from, next) => {
  // Check if it is public
  const publicPages = ['login', 'forgotPassword', 'sso'];
  const authRequired = !publicPages.includes(to.name);

  // check token
  const productId = process.env.VUE_APP_PRODUCT_ID;
  const productTokenKey = `product-${productId}-token`;
  const loggedIn = localStorage.getItem(productTokenKey);

  // Check authentication
  if (authRequired && !loggedIn) {
    return next('/');
  }

  // Check tutorial
  const onBoardingPages = ['welcome', 'howIsTheJourneyOrganized', 'chooseYourNavigationType'];
  if (localStorage.getItem(productOnboardingKey) === 'N' && onBoardingPages.includes(to.name)) {
    next({ path: '/comece-por-aqui' })
  }

  next();
})

export default router;