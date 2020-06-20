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
import EstarPreparadoFazDiferenca from '@/views/pages/EstarPreparadoFazDiferenca.vue';
import MapaDeInvestigacaoDoNegocio from '@/views/pages/MapaDeInvestigacaoDoNegocio.vue';
import MapaDeInvestigacaoDaArea from '@/views/pages/MapaDeInvestigacaoDaArea.vue';
import EstresseENervosismo from '@/views/pages/EstresseENervosismo.vue';
import PerguntasPoderosas from '@/views/pages/PerguntasPoderosas.vue';
import AgoraEComVoce2 from '@/views/pages/AgoraEComVoce2.vue';
import InspireSeAqui1 from '@/views/pages/InspireSeAqui1.vue';
import PontoDePartidaParaAPratica from '@/views/pages/PontoDePartidaParaAPratica.vue';
import LidandoComAsEmocoes from '@/views/pages/LidandoComAsEmocoes.vue';
import ComoSePreparar from '@/views/pages/ComoSePreparar.vue';
import InspireSeAqui2 from '@/views/pages/InspireSeAqui2.vue';
import PontoDePartidaParaAPratica2 from '@/views/pages/PontoDePartidaParaAPratica2.vue';
import SobreGerirASiMesmo from '@/views/pages/SobreGerirASiMesmo.vue';
import OQueJaSeiSobreMim from '@/views/pages/OQueJaSeiSobreMim.vue';
import OOlharDoOutroSobreMim from '@/views/pages/OOlharDoOutroSobreMim.vue';
import MeuOlharSobreQuemSouEu from '@/views/pages/MeuOlharSobreQuemSouEu.vue';
import MeuOlharSobreAMinhaHistoria from '@/views/pages/MeuOlharSobreAMinhaHistoria.vue';
import Analise from '@/views/pages/Analise.vue';
import ImpactoDosSentimentos from '@/views/pages/ImpactoDosSentimentos.vue';
import MindsetDeLideranca from '@/views/pages/MindsetDeLideranca.vue';
import AnsiedadeENormose from '@/views/pages/AnsiedadeENormose.vue';
import OEfeitoDunningKruger from '@/views/pages/OEfeitoDunningKruger.vue';
import SindromeDoImpostor from '@/views/pages/SindromeDoImpostor.vue';
import OsProximos15Dias from '@/views/pages/OsProximos15Dias.vue';
import GerindoDePertoAEquipe from '@/views/pages/GerindoDePertoAEquipe.vue';
import FotoNovela from '@/views/pages/FotoNovela.vue';
import Proximidade from '@/views/pages/Proximidade.vue';
import SituacoesDelicadas from '@/views/pages/SituacoesDelicadas.vue';
import CriarEspaco from '@/views/pages/CriarEspaco.vue';
import PrincipiosDaColaboracao from '@/views/pages/PrincipiosDaColaboracao.vue';
import OEssencialParaDelegar from '@/views/pages/OEssencialParaDelegar.vue';
import DispostoACorrerORisco from '@/views/pages/DispostoACorrerORisco.vue';
import UmMapaDaConﬁanca from '@/views/pages/UmMapaDaConﬁanca.vue';
import PrepareSeParaDelegar from '@/views/pages/PrepareSeParaDelegar.vue';
import InspireSeAqui3 from '@/views/pages/InspireSeAqui3.vue';
import QuemJaPassouPorIsso from '@/views/pages/QuemJaPassouPorIsso.vue';
import MestreAprendiz from '@/views/pages/MestreAprendiz.vue';
import OPoderDoHabito from '@/views/pages/OPoderDoHabito.vue';
import UmaExperienciaTransformadora from '@/views/pages/UmaExperienciaTransformadora.vue';
import VoceConheceOOutro from '@/views/pages/VoceConheceOOutro.vue';
import InspireSeAqui4 from '@/views/pages/InspireSeAqui4.vue';
import AssuntosDificeisDeTratar from '@/views/pages/AssuntosDificeisDeTratar.vue';
import ComunicacaoComAEquipe from '@/views/pages/ComunicacaoComAEquipe.vue';
import DaAtracaoADemissao from '@/views/pages/DaAtracaoADemissao.vue';
import OsCaminhosDaContratacao from '@/views/pages/OsCaminhosDaContratacao.vue';
import PerguntasNaHoraDeContratar from '@/views/pages/PerguntasNaHoraDeContratar.vue';
import CheckList from '@/views/pages/CheckList.vue';
import OMomentoDeDemitir from '@/views/pages/OMomentoDeDemitir.vue';
import ParaReﬂetir from '@/views/pages/ParaReﬂetir.vue';
import AParceriaComORH from '@/views/pages/AParceriaComORH.vue';
import BaixoDesempenhoProfissional from '@/views/pages/BaixoDesempenhoProfissional.vue';
import ReestruturacaoDaEmpresa from '@/views/pages/ReestruturacaoDaEmpresa.vue';
import FaltaDeAderenciaACultura from '@/views/pages/FaltaDeAderenciaACultura.vue';
import RelacionamentoRuimComAEquipe from '@/views/pages/RelacionamentoRuimComAEquipe.vue';
import FaltaDeEtica from '@/views/pages/FaltaDeEtica.vue';
import InspireSeAqui5 from '@/views/pages/InspireSeAqui5.vue';
import MaisSobrePreparacao from '@/views/pages/MaisSobrePreparacao.vue';
import MaisSobreGerirAEquipe from '@/views/pages/MaisSobreGerirAEquipe.vue';
import MaisSobreGerirASiMesmo from '@/views/pages/MaisSobreGerirASiMesmo.vue';

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
    },
    {
      path: '/estar-preparado-faz-diferenca',
      name: 'EstarPreparadoFazDiferenca',
      component: EstarPreparadoFazDiferenca,
      meta: { transitionName: 'fade', transitionOrder: 10, pageId: 84 },
    },
    {
      path: '/mapa-de-investigacao-do-negocio',
      name: 'MapaDeInvestigacaoDoNegocio',
      component: MapaDeInvestigacaoDoNegocio,
      meta: { transitionName: 'fade', transitionOrder: 11, pageId: 85 },
    },
    {
      path: '/mapa-de-investigacao-da-area',
      name: 'MapaDeInvestigacaoDaArea',
      component: MapaDeInvestigacaoDaArea,
      meta: { transitionName: 'fade', transitionOrder: 12, pageId: 86 },
    },
    {
      path: '/estresse-e-nervosismo',
      name: 'EstresseENervosismo',
      component: EstresseENervosismo,
      meta: { transitionName: 'fade', transitionOrder: 13, pageId: 87 },
    },
    {
      path: '/perguntas-poderosas',
      name: 'PerguntasPoderosas',
      component: PerguntasPoderosas,
      meta: { transitionName: 'fade', transitionOrder: 14, pageId: 88 },
    },
    {
      path: '/agora-e-com-voce-2',
      name: 'AgoraEComVoce2',
      component: AgoraEComVoce2,
      meta: { transitionName: 'fade', transitionOrder: 15, pageId: 89 },
    },
    {
      path: '/inspire-se-aqui-1',
      name: 'InspireSeAqui1',
      component: InspireSeAqui1,
      meta: { transitionName: 'fade', transitionOrder: 16, pageId: 90 },
    },
    {
      path: '/ponto-de-partida-para-a-pratica',
      name: 'PontoDePartidaParaAPratica',
      component: PontoDePartidaParaAPratica,
      meta: { transitionName: 'fade', transitionOrder: 17, pageId: 91 },
    },
    {
      path: '/lidando-com-as-emocoes',
      name: 'LidandoComAsEmocoes',
      component: LidandoComAsEmocoes,
      meta: { transitionName: 'fade', transitionOrder: 18, pageId: 92 },
    },
    {
      path: '/como-se-preparar',
      name: 'ComoSePreparar',
      component: ComoSePreparar,
      meta: { transitionName: 'fade', transitionOrder: 19, pageId: 93 },
    },
    {
      path: '/inspire-se-aqui-2',
      name: 'InspireSeAqui2',
      component: InspireSeAqui2,
      meta: { transitionName: 'fade', transitionOrder: 20, pageId: 94 },
    },
    {
      path: '/ponto-de-partida-para-a-pratica-2',
      name: 'PontoDePartidaParaAPratica2',
      component: PontoDePartidaParaAPratica2,
      meta: { transitionName: 'fade', transitionOrder: 21, pageId: 95 },
    },
    {
      path: '/sobre-gerir-a-si-mesmo',
      name: 'SobreGerirASiMesmo',
      component: SobreGerirASiMesmo,
      meta: { transitionName: 'fade', transitionOrder: 22, pageId: 96 },
    },
    {
      path: '/o-que-ja-sei-sobre-mim',
      name: 'OQueJaSeiSobreMim',
      component: OQueJaSeiSobreMim,
      meta: { transitionName: 'fade', transitionOrder: 23, pageId: 33 },
    },
    {
      path: '/o-olhar-do-outro-sobre-mim',
      name: 'OOlharDoOutroSobreMim',
      component: OOlharDoOutroSobreMim,
      meta: { transitionName: 'fade', transitionOrder: 24, pageId: 34 },
    },
    {
      path: '/meu-olhar-sobre-quem-sou-eu',
      name: 'MeuOlharSobreQuemSouEu',
      component: MeuOlharSobreQuemSouEu,
      meta: { transitionName: 'fade', transitionOrder: 25, pageId: 35 },
    },
    {
      path: '/meu-olhar-sobre-a-minha-historia',
      name: 'MeuOlharSobreAMinhaHistoria',
      component: MeuOlharSobreAMinhaHistoria,
      meta: { transitionName: 'fade', transitionOrder: 26, pageId: 36 },
    },
    {
      path: '/analise',
      name: 'Analise',
      component: Analise,
      meta: { transitionName: 'fade', transitionOrder: 27, pageId: 37 },
    },
    {
      path: '/impacto-dos-sentimentos',
      name: 'ImpactoDosSentimentos',
      component: ImpactoDosSentimentos,
      meta: { transitionName: 'fade', transitionOrder: 28, pageId: 38 },
    },
    {
      path: '/mindset-de-lideranca',
      name: 'MindsetDeLideranca',
      component: MindsetDeLideranca,
      meta: { transitionName: 'fade', transitionOrder: 29, pageId: 39 },
    },
    {
      path: '/ansiedade-e-normose',
      name: 'AnsiedadeENormose',
      component: AnsiedadeENormose,
      meta: { transitionName: 'fade', transitionOrder: 30, pageId: 40 },
    },
    {
      path: '/o-efeito-dunning-kruger',
      name: 'OEfeitoDunningKruger',
      component: OEfeitoDunningKruger,
      meta: { transitionName: 'fade', transitionOrder: 31, pageId: 41 },
    },
    {
      path: '/sindrome-do-impostor',
      name: 'SindromeDoImpostor',
      component: SindromeDoImpostor,
      meta: { transitionName: 'fade', transitionOrder: 32, pageId: 42 },
    },
    {
      path: '/os-proximos-15-dias',
      name: 'OsProximos15Dias',
      component: OsProximos15Dias,
      meta: { transitionName: 'fade', transitionOrder: 33, pageId: 97 },
    },
    {
      path: '/gerindo-de-perto-a-equipe',
      name: 'GerindoDePertoAEquipe',
      component: GerindoDePertoAEquipe,
      meta: { transitionName: 'slide', transitionOrder: 34, pageId: 43 },
    },
    {
      path: '/foto-novela',
      name: 'FotoNovela',
      component: FotoNovela,
      meta: { transitionName: 'slide', transitionOrder: 35, pageId: 44 },
    },
    {
      path: '/proximidade',
      name: 'Proximidade',
      component: Proximidade,
      meta: { transitionName: 'slide', transitionOrder: 36, pageId: 45 },
    },
    {
      path: '/situacoes-delicadas',
      name: 'SituacoesDelicadas',
      component: SituacoesDelicadas,
      meta: { transitionName: 'slide', transitionOrder: 37, pageId: 46 },
    },
    {
      path: '/criar-espaco',
      name: 'CriarEspaco',
      component: CriarEspaco,
      meta: { transitionName: 'slide', transitionOrder: 38, pageId: 47 },
    },
    {
      path: '/principios-da-colaboracao',
      name: 'PrincipiosDaColaboracao',
      component: PrincipiosDaColaboracao,
      meta: { transitionName: 'slide', transitionOrder: 39, pageId: 48 },
    },
    {
      path: '/o-essencial-para-delegar',
      name: 'OEssencialParaDelegar',
      component: OEssencialParaDelegar,
      meta: { transitionName: 'slide', transitionOrder: 40, pageId: 49 },
    },
    {
      path: '/disposto-a-correr-o-risco',
      name: 'DispostoACorrerORisco',
      component: DispostoACorrerORisco,
      meta: { transitionName: 'slide', transitionOrder: 41, pageId: 50 },
    },
    {
      path: '/um-mapa-da-conﬁanca',
      name: 'UmMapaDaConﬁanca',
      component: UmMapaDaConﬁanca,
      meta: { transitionName: 'slide', transitionOrder: 42, pageId: 51 },
    },
    {
      path: '/prepare-se-para-delegar',
      name: 'PrepareSeParaDelegar',
      component: PrepareSeParaDelegar,
      meta: { transitionName: 'slide', transitionOrder: 43, pageId: 52 },
    },
    {
      path: '/inspire-se-aqui-3',
      name: 'InspireSeAqui3',
      component: InspireSeAqui3,
      meta: { transitionName: 'slide', transitionOrder: 44, pageId: 53 },
    },
    {
      path: '/quem-ja-passou-por-isso',
      name: 'QuemJaPassouPorIsso',
      component: QuemJaPassouPorIsso,
      meta: { transitionName: 'slide', transitionOrder: 45, pageId: 54 },
    },
    {
      path: '/mestre-e-aprendiz',
      name: 'mestreAprendiz',
      component: MestreAprendiz,
      meta: { transitionName: 'fade', transitionOrder: 46, pageId: 24 },
    },
    {
      path: '/o-poder-do-habito',
      name: 'oPoderDoHabito',
      component: OPoderDoHabito,
      meta: { transitionName: 'fade', transitionOrder: 47, pageId: 25 },
    },
    {
      path: '/uma-experiencia-transformadora',
      name: 'umaExperienciaTransformadora',
      component: UmaExperienciaTransformadora,
      meta: { transitionName: 'fade', transitionOrder: 48, pageId: 26 },
    },
    {
      path: '/voce-conhece-o-outro',
      name: 'voceConheceOOutro',
      component: VoceConheceOOutro,
      meta: { transitionName: 'fade', transitionOrder: 49, pageId: 27 },
    },
    {
      path: '/inspire-se-aqui-4',
      name: 'inspireSeAqui4',
      component: InspireSeAqui4,
      meta: { transitionName: 'fade', transitionOrder: 50, pageId: 28 },
    },
    {
      path: '/assuntos-dificeis-de-tratar',
      name: 'assuntosDificeisDeTratar',
      component: AssuntosDificeisDeTratar,
      meta: { transitionName: 'fade', transitionOrder: 51, pageId: 29 },
    },
    {
      path: '/comunicacao-com-a-equipe',
      name: 'ComunicacaoComAEquipe',
      component: ComunicacaoComAEquipe,
      meta: { transitionName: 'fade', transitionOrder: 52, pageId: 55 },
    },
    {
      path: '/da-atracao-a-demissao',
      name: 'DaAtracaoADemissao',
      component: DaAtracaoADemissao,
      meta: { transitionName: 'fade', transitionOrder: 53, pageId: 56 },
    },
    {
      path: '/os-caminhos-da-contratacao',
      name: 'OsCaminhosDaContratacao',
      component: OsCaminhosDaContratacao,
      meta: { transitionName: 'fade', transitionOrder: 54, pageId: 57 },
    },
    {
      path: '/perguntas-na-hora-de-contratar',
      name: 'PerguntasNaHoraDeContratar',
      component: PerguntasNaHoraDeContratar,
      meta: { transitionName: 'fade', transitionOrder: 55, pageId: 58 },
    },
    {
      path: '/check-list',
      name: 'CheckList',
      component: CheckList,
      meta: { transitionName: 'fade', transitionOrder: 56, pageId: 59 },
    },
    {
      path: '/o-momento-de-demitir',
      name: 'OMomentoDeDemitir',
      component: OMomentoDeDemitir,
      meta: { transitionName: 'fade', transitionOrder: 57, pageId: 60 },
    },
    {
      path: '/para-reﬂetir',
      name: 'ParaReﬂetir',
      component: ParaReﬂetir,
      meta: { transitionName: 'fade', transitionOrder: 58, pageId: 61 },
    },
    {
      path: '/a-parceria-com-o-rh',
      name: 'AParceriaComORH',
      component: AParceriaComORH,
      meta: { transitionName: 'fade', transitionOrder: 59, pageId: 62 },
    },
    {
      path: '/baixo-desempenho-profissional',
      name: 'BaixoDesempenhoProfissional',
      component: BaixoDesempenhoProfissional,
      meta: { transitionName: 'fade', transitionOrder: 60, pageId: 63 },
    },
    {
      path: '/reestruturacao-da-empresa',
      name: 'ReestruturacaoDaEmpresa',
      component: ReestruturacaoDaEmpresa,
      meta: { transitionName: 'fade', transitionOrder: 61, pageId: 64 },
    },
    {
      path: '/falta-de-aderencia-a-cultura',
      name: 'FaltaDeAderenciaACultura',
      component: FaltaDeAderenciaACultura,
      meta: { transitionName: 'fade', transitionOrder: 62, pageId: 65 },
    },
    {
      path: '/relacionamento-ruim-com-a-equipe',
      name: 'RelacionamentoRuimComAEquipe',
      component: RelacionamentoRuimComAEquipe,
      meta: { transitionName: 'fade', transitionOrder: 63, pageId: 66 },
    },
    {
      path: '/falta-de-etica',
      name: 'FaltaDeEtica',
      component: FaltaDeEtica,
      meta: { transitionName: 'fade', transitionOrder: 64, pageId: 67 },
    },
    {
      path: '/inspire-se-aqui-5',
      name: 'InspireSeAqui5',
      component: InspireSeAqui5,
      meta: { transitionName: 'fade', transitionOrder: 65, pageId: 68 },
    },
    {
      path: '/mais-sobre-preparacao',
      name: 'MaisSobrePreparacao',
      component: MaisSobrePreparacao,
      meta: { transitionName: 'fade', transitionOrder: 66, pageId: 98 },
    },
    {
      path: '/mais-sobre-gerir-a-equipe',
      name: 'MaisSobreGerirAEquipe',
      component: MaisSobreGerirAEquipe,
      meta: { transitionName: 'fade', transitionOrder: 67, pageId: 99 },
    },
    {
      path: '/mais-sobre-gerir-a-si-mesmo',
      name: 'MaisSobreGerirASiMesmo',
      component: MaisSobreGerirASiMesmo,
      meta: { transitionName: 'fade', transitionOrder: 68, pageId: 100 },
    },
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