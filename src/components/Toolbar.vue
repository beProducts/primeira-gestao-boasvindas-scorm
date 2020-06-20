<template>
  <div class="be-toolbar">
    <div class="wrapper">
      <div>
        <p class="center-align">
          <a href="javascript:void(0);" @click="openNavigation">
            <MapMarker />
            <span class="text">Mapa</span>
          </a>
        </p>
      </div>
      <div>
        <p class="center-align">
          <a href="javascript:void(0);" @click="openHelpBar">
            <HelpCircle />
            <span class="text">Ajuda</span>
          </a>
        </p>
      </div>
      <div>
        <p class="center-align">
          <a href="javascript:void(0);" @click="toggleCommentBar">
            <ChatIcon />
            <span class="text">Comentar</span>
          </a>
        </p>
      </div>
    </div>

    <!-- Be Navigation Bar -->
    <div class="be-navigation" ref="beNavigation">
      <div class="header-toolbar">
        <div class="account-functions">
          <a href="javascript:void(0);" class="close" @click="goToRoute('/profile');">
            <span>Perfil</span> <AccountEdit />
          </a>
          <span class="separator">|</span>
          <a href="javascript:void(0);" class="close" @click="logoff">
            <span>Sair</span> <Logout />
          </a>
        </div>
        <a href="javascript:void(0);" class="close" @click="closeNavigation">
          <span>Fechar</span> <CloseIcon />
        </a>
      </div>
      <div class="nav-body">
        <div class="be-menu-main">
          <div class="nav-body-item">
            <NavMenuItem
              text="Comece por aqui"
              src="menu-icon-1.png"
              asrc="menu-icon-1-active.png"
              route="/comece-por-aqui"
              :selected="route1Selected"
              :checked="route1Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="É a sua primeira vez?"
              src="menu-icon-2.png"
              asrc="menu-icon-2-active.png"
              route="/e-a-sua-primeira-vez"
              :selected="route2Selected"
              :checked="route2Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="A história da liderança"
              src="menu-icon-3.png"
              asrc="menu-icon-3-active.png"
              route="/a-historia-da-lideranca"
              :selected="route3Selected"
              :checked="route3Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="A História de Ranimiro Lotufo"
              src="menu-icon-4.png"
              asrc="menu-icon-4-active.png"
              route="/a-historia-de-ranimiro-lotufo"
              :selected="route4Selected"
              :checked="route4Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Agora é com você!"
              src="menu-icon-5.png"
              asrc="menu-icon-5-active.png"
              route="/agora-e-com-voce"
              :selected="route5Selected"
              :checked="route5Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Campo ou Arquibancada"
              src="menu-icon-6.png"
              asrc="menu-icon-6-active.png"
              route="/campo-ou-arquibancada"
              :selected="route6Selected"
              :checked="route6Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Estar preparado faz diferença"
              src="menu-icon-7.png"
              asrc="menu-icon-7-active.png"
              route="/estar-preparado-faz-diferenca"
              :selected="route7Selected"
              :checked="route7Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Mapa de investigação do negócio"
              src="menu-icon-8.png"
              asrc="menu-icon-8-active.png"
              route="/mapa-de-investigacao-do-negocio"
              :selected="route8Selected"
              :checked="route8Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Mapa de investigação da área"
              src="menu-icon-9.png"
              asrc="menu-icon-9-active.png"
              route="/mapa-de-investigacao-da-area"
              :selected="route9Selected"
              :checked="route9Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Estresse e nervosismo"
              src="menu-icon-10.png"
              asrc="menu-icon-10-active.png"
              route="/estresse-e-nervosismo"
              :selected="route10Selected"
              :checked="route10Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Perguntas poderosas"
              src="menu-icon-11.png"
              asrc="menu-icon-11-active.png"
              route="/perguntas-poderosas"
              :selected="route11Selected"
              :checked="route11Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Agora é com você!"
              src="menu-icon-12.png"
              asrc="menu-icon-12-active.png"
              route="/agora-e-com-voce-2"
              :selected="route12Selected"
              :checked="route12Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Inspire-se aqui"
              src="menu-icon-13.png"
              asrc="menu-icon-13-active.png"
              route="/inspire-se-aqui-1"
              :selected="route13Selected"
              :checked="route13Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Ponto de partida para a prática"
              src="menu-icon-14.png"
              asrc="menu-icon-14-active.png"
              route="/ponto-de-partida-para-a-pratica"
              :selected="route14Selected"
              :checked="route14Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Lidando com as emoções"
              src="menu-icon-15.png"
              asrc="menu-icon-15-active.png"
              route="/lidando-com-as-emocoes"
              :selected="route15Selected"
              :checked="route15Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Como se preparar"
              src="menu-icon-16.png"
              asrc="menu-icon-16-active.png"
              route="/como-se-preparar"
              :selected="route16Selected"
              :checked="route16Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Inspire-se aqui"
              src="menu-icon-17.png"
              asrc="menu-icon-17-active.png"
              route="/inspire-se-aqui-2"
              :selected="route17Selected"
              :checked="route17Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Ponto de partida para a prática"
              src="menu-icon-18.png"
              asrc="menu-icon-18-active.png"
              route="/ponto-de-partida-para-a-pratica-2"
              :selected="route18Selected"
              :checked="route18Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Sobre gerir a si mesmo"
              src="menu-icon-19.png"
              asrc="menu-icon-19-active.png"
              route="/sobre-gerir-a-si-mesmo"
              :selected="route19Selected"
              :checked="route19Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="O que já sei sobre mim"
              src="menu-icon-20.png"
              asrc="menu-icon-20-active.png"
              route="/o-que-ja-sei-sobre-mim"
              :selected="route20Selected"
              :checked="route20Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="O olhar do outro sobre mim"
              src="menu-icon-21.png"
              asrc="menu-icon-21-active.png"
              route="/o-olhar-do-outro-sobre-mim"
              :selected="route21Selected"
              :checked="route21Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Meu olhar sobre quem sou Eu"
              src="menu-icon-22.png"
              asrc="menu-icon-22-active.png"
              route="/meu-olhar-sobre-quem-sou-eu"
              :selected="route22Selected"
              :checked="route22Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Meu olhar sobre a minha história"
              src="menu-icon-23.png"
              asrc="menu-icon-23-active.png"
              route="/meu-olhar-sobre-a-minha-historia"
              :selected="route23Selected"
              :checked="route23Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Análise"
              src="menu-icon-24.png"
              asrc="menu-icon-24-active.png"
              route="/analise"
              :selected="route24Selected"
              :checked="route24Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Impacto dos sentimentos"
              src="menu-icon-25.png"
              asrc="menu-icon-25-active.png"
              route="/impacto-dos-sentimentos"
              :selected="route25Selected"
              :checked="route25Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Mindset de liderança"
              src="menu-icon-26.png"
              asrc="menu-icon-26-active.png"
              route="/mindset-de-lideranca"
              :selected="route26Selected"
              :checked="route26Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Ansiedade e Normose"
              src="menu-icon-27.png"
              asrc="menu-icon-27-active.png"
              route="/ansiedade-e-normose"
              :selected="route27Selected"
              :checked="route27Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="O efeito Dunning-kruger"
              src="menu-icon-28.png"
              asrc="menu-icon-28-active.png"
              route="/o-efeito-dunning-kruger"
              :selected="route28Selected"
              :checked="route28Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Síndrome do Impostor"
              src="menu-icon-29.png"
              asrc="menu-icon-29-active.png"
              route="/sindrome-do-impostor"
              :selected="route29Selected"
              :checked="route29Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Os próximos 15 dias"
              src="menu-icon-30.png"
              asrc="menu-icon-30-active.png"
              route="/os-proximos-15-dias"
              :selected="route30Selected"
              :checked="route30Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Gerindo de perto a equipe"
              src="menu-icon-31.png"
              asrc="menu-icon-31-active.png"
              route="/gerindo-de-perto-a-equipe"
              :selected="route31Selected"
              :checked="route31Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Foto novela"
              src="menu-icon-32.png"
              asrc="menu-icon-32-active.png"
              route="/foto-novela"
              :selected="route32Selected"
              :checked="route32Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Proximidade"
              src="menu-icon-33.png"
              asrc="menu-icon-33-active.png"
              route="/proximidade"
              :selected="route33Selected"
              :checked="route33Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Situações delicadas"
              src="menu-icon-34.png"
              asrc="menu-icon-34-active.png"
              route="/situacoes-delicadas"
              :selected="route34Selected"
              :checked="route34Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Criar espaço"
              src="menu-icon-35.png"
              asrc="menu-icon-35-active.png"
              route="/criar-espaco"
              :selected="route35Selected"
              :checked="route35Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Princípios da colaboração"
              src="menu-icon-36.png"
              asrc="menu-icon-36-active.png"
              route="/principios-da-colaboracao"
              :selected="route36Selected"
              :checked="route36Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="O essencial para delegar"
              src="menu-icon-37.png"
              asrc="menu-icon-37-active.png"
              route="/o-essencial-para-delegar"
              :selected="route37Selected"
              :checked="route37Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Disposto a correr o risco"
              src="menu-icon-38.png"
              asrc="menu-icon-38-active.png"
              route="/disposto-a-correr-o-risco"
              :selected="route38Selected"
              :checked="route38Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Um mapa da conﬁança"
              src="menu-icon-39.png"
              asrc="menu-icon-39-active.png"
              route="/um-mapa-da-conﬁanca"
              :selected="route39Selected"
              :checked="route39Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Prepare-se para delegar"
              src="menu-icon-40.png"
              asrc="menu-icon-40-active.png"
              route="/prepare-se-para-delegar"
              :selected="route40Selected"
              :checked="route40Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Inspire-se aqui"
              src="menu-icon-41.png"
              asrc="menu-icon-41-active.png"
              route="/inspire-se-aqui-3"
              :selected="route41Selected"
              :checked="route41Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Quem já passou por isso"
              src="menu-icon-42.png"
              asrc="menu-icon-42-active.png"
              route="/quem-ja-passou-por-isso"
              :selected="route42Selected"
              :checked="route42Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Mestre e Aprendiz"
              src="menu-icon-43.png"
              asrc="menu-icon-43-active.png"
              route="/mestre-e-aprendiz"
              :selected="route43Selected"
              :checked="route43Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="O poder do hábito"
              src="menu-icon-44.png"
              asrc="menu-icon-44-active.png"
              route="/o-poder-do-habito"
              :selected="route44Selected"
              :checked="route44Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Uma experiência transformadora"
              src="menu-icon-45.png"
              asrc="menu-icon-45-active.png"
              route="/uma-experiencia-transformadora"
              :selected="route45Selected"
              :checked="route45Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Você conhece o outro?"
              src="menu-icon-46.png"
              asrc="menu-icon-46-active.png"
              route="/voce-conhece-o-outro"
              :selected="route46Selected"
              :checked="route46Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Inspire-se aqui"
              src="menu-icon-47.png"
              asrc="menu-icon-47-active.png"
              route="/inspire-se-aqui-4"
              :selected="route47Selected"
              :checked="route47Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Assuntos difíceis de tratar"
              src="menu-icon-48.png"
              asrc="menu-icon-48-active.png"
              route="/assuntos-dificeis-de-tratar"
              :selected="route48Selected"
              :checked="route48Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Comunicação com a equipe"
              src="menu-icon-49.png"
              asrc="menu-icon-49-active.png"
              route="/comunicacao-com-a-equipe"
              :selected="route49Selected"
              :checked="route49Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Da atração à demissão"
              src="menu-icon-50.png"
              asrc="menu-icon-50-active.png"
              route="/da-atracao-a-demissao"
              :selected="route50Selected"
              :checked="route50Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Os caminhos da contratação"
              src="menu-icon-51.png"
              asrc="menu-icon-51-active.png"
              route="/os-caminhos-da-contratacao"
              :selected="route51Selected"
              :checked="route51Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Perguntas na hora de contratar"
              src="menu-icon-52.png"
              asrc="menu-icon-52-active.png"
              route="/perguntas-na-hora-de-contratar"
              :selected="route52Selected"
              :checked="route52Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Check list"
              src="menu-icon-53.png"
              asrc="menu-icon-53-active.png"
              route="/check-list"
              :selected="route53Selected"
              :checked="route53Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="O momento de demitir"
              src="menu-icon-54.png"
              asrc="menu-icon-54-active.png"
              route="/o-momento-de-demitir"
              :selected="route54Selected"
              :checked="route54Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Para reﬂetir"
              src="menu-icon-55.png"
              asrc="menu-icon-55-active.png"
              route="/para-reﬂetir"
              :selected="route55Selected"
              :checked="route55Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="A parceria com o RH"
              src="menu-icon-56.png"
              asrc="menu-icon-56-active.png"
              route="/a-parceria-com-o-rh"
              :selected="route56Selected"
              :checked="route56Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Baixo desempenho profissional"
              src="menu-icon-57.png"
              asrc="menu-icon-57-active.png"
              route="/baixo-desempenho-profissional"
              :selected="route57Selected"
              :checked="route57Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Reestruturação da empresa"
              src="menu-icon-58.png"
              asrc="menu-icon-58-active.png"
              route="/reestruturacao-da-empresa"
              :selected="route58Selected"
              :checked="route58Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Falta de aderência à cultura"
              src="menu-icon-59.png"
              asrc="menu-icon-59-active.png"
              route="/falta-de-aderencia-a-cultura"
              :selected="route59Selected"
              :checked="route59Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Relacionamento ruim com a equipe"
              src="menu-icon-60.png"
              asrc="menu-icon-60-active.png"
              route="/relacionamento-ruim-com-a-equipe"
              :selected="route60Selected"
              :checked="route60Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Falta de ética"
              src="menu-icon-61.png"
              asrc="menu-icon-61-active.png"
              route="/falta-de-etica"
              :selected="route61Selected"
              :checked="route61Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Inspire-se aqui"
              src="menu-icon-62.png"
              asrc="menu-icon-62-active.png"
              route="/inspire-se-aqui-5"
              :selected="route62Selected"
              :checked="route62Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Mais sobre preparação"
              src="menu-icon-63.png"
              asrc="menu-icon-63-active.png"
              route="/mais-sobre-preparacao"
              :selected="route63Selected"
              :checked="route63Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Mais sobre gerir a equipe"
              src="menu-icon-64.png"
              asrc="menu-icon-64-active.png"
              route="/mais-sobre-gerir-a-equipe"
              :selected="route64Selected"
              :checked="route64Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Mais sobre gerir a si mesmo"
              src="menu-icon-65.png"
              asrc="menu-icon-65-active.png"
              route="/mais-sobre-gerir-a-si-mesmo"
              :selected="route65Selected"
              :checked="route65Check"
              @changeRoute="closeNavigation" />
          </div>
        </div>
      </div>
      <div class="be-progress">
          <div class="background-bar"></div>
          <div class="progress-bar">
              <div class="progress-label">Você percorreu <span>{{ percent }}</span>% da jornada</div>
              <div class="loadded-bar" :style="`width: ${percent}vw;`"></div>
          </div>
      </div>
    </div>

    <!-- Be Help Bar -->
    <div class="be-help-bar" ref="beHelpBar">
      <div class="modal-content">
        <div class="container">
          <header>
            <h3>Ajuda sobre a jornada?</h3>
            <a href="javascript:void(0);" class="closeHelpBar" @click="closeHelpBar">
              <CloseIcon />
            </a>
          </header>
          <div id="help-content" ref="helpTextContainer"></div>
        </div>
      </div>
    </div>

    <!-- Be Comment Bar -->
    <div class="be-comment-bar" ref="beCommentBar">
      <div id="loading-comment-container" class="state">
        <img :src="LoadingImage" alt="Loading" />
      </div>
      <div id="first-comment-container" class="state hidden">
          <header>
            <div class="title">Comentários</div>
            <a href="javascript:void(0);" @click="closeCommentBar" class="close">
              <CloseIcon />
            </a>
          </header>
          <section id="first-comment">
            <div id="no-comments">
              <p class="chat-icon"><MessageReplyTextIcon /></p>
              <p>
                <strong>Nenhum comentário</strong><br>
                Seja o primeiro a enviar um comentário
              </p>
            </div>
          </section>
          <div class="button-comments" @click="requestNewComment">
            <a href="javascript:void(0)" class="new-comment">
                <PencilIcon />
            </a>
          </div>
      </div>
      <div id="form-comment-container" class="state hidden">
        <header>
          <div class="title">Postar um comentário</div>
          <a href="javascript:void(0);" class="close" @click="cancelNewComment">
            <CloseIcon />
          </a>
        </header>
        <section id="form-comment">
          <div class="user-avatar">
            <div>
              <div class="avatar" :style="{ 'background-image': 'url(' + LoadingImage + ')' }"></div>
            </div>
            <div class="author">Loading...</div>
          </div>
          <div class="input-comment">
            <textarea id="user-comment" placeholder="Insira seu texto" v-on:keyup="validateCommentForm($event)"></textarea>
          </div>
        </section>
        <div id="input-comment-send">
          <button id="btnCommentSend" disabled @click.stop.prevent="submitCommentForm">Enviar</button>
        </div>
      </div>
      <div id="list-comment-container" class="state hidden">
        <header>
          <div class="title">Comentários</div>
          <a href="javascript:void(0);" class="close" @click="closeCommentBar">
            <CloseIcon />
          </a>
        </header>
        <section id="comment-list">
          <div class="comment-list-container"></div>
        </section>
        <div class="button-comments" @click="requestNewComment">
          <a href="javascript:void(0)" class="new-comment">
            <PencilIcon />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Mixins
import mixin from '../mixins/mixin';

// UI Compoenents
import NavMenuItem from './NavMenuItem.vue';

// Icons
import MapMarker from "vue-material-design-icons/MapMarker.vue";
import HelpCircle from "vue-material-design-icons/HelpCircle.vue";
import ChatIcon from "vue-material-design-icons/Chat.vue";
import CloseIcon from "vue-material-design-icons/Close.vue";
import MessageReplyTextIcon from "vue-material-design-icons/MessageReplyText.vue";
import PencilIcon from "vue-material-design-icons/Pencil.vue";
import Logout from "vue-material-design-icons/Logout.vue";
import AccountEdit from "vue-material-design-icons/AccountEdit.vue";

// Images
import LoadingImage from "../assets/images/loading.gif";

export default {
  name: 'Toolbar',
  mixins: [mixin],
  components: {
    MapMarker,
    HelpCircle,
    ChatIcon,
    CloseIcon,
    MessageReplyTextIcon,
    PencilIcon,
    Logout,
    NavMenuItem,
    AccountEdit,
  },
  data() {
    return {
      route1Check: false,
      route2Check: false,
      route3Check: false,
      route4Check: false,
      route5Check: false,
      route6Check: false,
      route7Check: false,
      route8Check: false,
      route9Check: false,
      route10Check: false,
      route11Check: false,
      route12Check: false,
      route13Check: false,
      route14Check: false,
      route15Check: false,
      route16Check: false,
      route17Check: false,
      route18Check: false,
      route19Check: false,
      route20Check: false,
      route21Check: false,
      route22Check: false,
      route23Check: false,
      route24Check: false,
      route25Check: false,
      route26Check: false,
      route27Check: false,
      route28Check: false,
      route29Check: false,
      route30Check: false,
      route31Check: false,
      route32Check: false,
      route33Check: false,
      route34Check: false,
      route35Check: false,
      route36Check: false,
      route37Check: false,
      route38Check: false,
      route39Check: false,
      route40Check: false,
      route41Check: false,
      route42Check: false,
      route43Check: false,
      route44Check: false,
      route45Check: false,
      route46Check: false,
      route47Check: false,
      route48Check: false,
      route49Check: false,
      route50Check: false,
      route51Check: false,
      route52Check: false,
      route53Check: false,
      route54Check: false,
      route55Check: false,
      route56Check: false,
      route57Check: false,
      route58Check: false,
      route59Check: false,
      route60Check: false,
      route61Check: false,
      route62Check: false,
      route63Check: false,
      route64Check: false,
      route65Check: false,
      route1Selected: false,
      route2Selected: false,
      route3Selected: false,
      route4Selected: false,
      route5Selected: false,
      route6Selected: false,
      route7Selected: false,
      route8Selected: false,
      route9Selected: false,
      route10Selected: false,
      route11Selected: false,
      route12Selected: false,
      route13Selected: false,
      route14Selected: false,
      route15Selected: false,
      route16Selected: false,
      route17Selected: false,
      route18Selected: false,
      route19Selected: false,
      route20Selected: false,
      route21Selected: false,
      route22Selected: false,
      route23Selected: false,
      route24Selected: false,
      route25Selected: false,
      route26Selected: false,
      route27Selected: false,
      route28Selected: false,
      route29Selected: false,
      route30Selected: false,
      route31Selected: false,
      route32Selected: false,
      route33Selected: false,
      route34Selected: false,
      route35Selected: false,
      route36Selected: false,
      route37Selected: false,
      route38Selected: false,
      route39Selected: false,
      route40Selected: false,
      route41Selected: false,
      route42Selected: false,
      route43Selected: false,
      route44Selected: false,
      route45Selected: false,
      route46Selected: false,
      route47Selected: false,
      route48Selected: false,
      route49Selected: false,
      route50Selected: false,
      route51Selected: false,
      route52Selected: false,
      route53Selected: false,
      route54Selected: false,
      route55Selected: false,
      route56Selected: false,
      route57Selected: false,
      route58Selected: false,
      route59Selected: false,
      route60Selected: false,
      route61Selected: false,
      route62Selected: false,
      route63Selected: false,
      route64Selected: false,
      route65Selected: false,
      percent: 0,
      LoadingImage: LoadingImage,
    };
  },
  mounted() {
    this.setSelectedMenu();
    this.setChecksMenu();
  },
  methods: {
    openNavigation() {
      this.setChecksMenu();
      this.$refs.beNavigation.classList.remove('animated', 'fadeIn', 'fadeOut');
      this.$refs.beNavigation.style.display = 'block';
      this.$refs.beNavigation.classList.add('animated', 'fadeIn');
    },
    closeNavigation(){
      let $element = this.$refs.beNavigation;
      $element.classList.remove('animated', 'fadeIn', 'fadeOut');
      $element.classList.add('animated', 'fadeOut');
      setTimeout(function(){
        $element.style.display = 'none';
      }, 800)
    },
    setSelectedMenu(){
      const pageId = this.$route.meta.pageId || 0;
      switch(pageId){
        case 81: this.route1Selected = true; break;
        case 82: this.route2Selected = true; break;
        case 83: this.route3Selected = true; break;
        case 30: this.route4Selected = true; break;
        case 31: this.route5Selected = true; break;
        case 32: this.route6Selected = true; break;
        case 84: this.route7Selected = true; break;
        case 85: this.route8Selected = true; break;
        case 86: this.route9Selected = true; break;
        case 87: this.route10Selected = true; break;
        case 88: this.route11Selected = true; break;
        case 89: this.route12Selected = true; break;
        case 90: this.route13Selected = true; break;
        case 91: this.route14Selected = true; break;
        case 92: this.route15Selected = true; break;
        case 93: this.route16Selected = true; break;
        case 94: this.route17Selected = true; break;
        case 95: this.route18Selected = true; break;
        case 96: this.route19Selected = true; break;
        case 33: this.route20Selected = true; break;
        case 34: this.route21Selected = true; break;
        case 35: this.route22Selected = true; break;
        case 36: this.route23Selected = true; break;
        case 37: this.route24Selected = true; break;
        case 38: this.route25Selected = true; break;
        case 39: this.route26Selected = true; break;
        case 40: this.route27Selected = true; break;
        case 41: this.route28Selected = true; break;
        case 42: this.route29Selected = true; break;
        case 97: this.route30Selected = true; break;
        case 43: this.route31Selected = true; break;
        case 44: this.route32Selected = true; break;
        case 45: this.route33Selected = true; break;
        case 46: this.route34Selected = true; break;
        case 47: this.route35Selected = true; break;
        case 48: this.route36Selected = true; break;
        case 49: this.route37Selected = true; break;
        case 50: this.route38Selected = true; break;
        case 51: this.route39Selected = true; break;
        case 52: this.route40Selected = true; break;
        case 53: this.route41Selected = true; break;
        case 54: this.route42Selected = true; break;
        case 24: this.route43Selected = true; break;
        case 25: this.route44Selected = true; break;
        case 26: this.route45Selected = true; break;
        case 27: this.route46Selected = true; break;
        case 28: this.route47Selected = true; break;
        case 29: this.route48Selected = true; break;
        case 55: this.route49Selected = true; break;
        case 56: this.route50Selected = true; break;
        case 57: this.route51Selected = true; break;
        case 58: this.route52Selected = true; break;
        case 59: this.route53Selected = true; break;
        case 60: this.route54Selected = true; break;
        case 61: this.route55Selected = true; break;
        case 62: this.route56Selected = true; break;
        case 63: this.route57Selected = true; break;
        case 64: this.route58Selected = true; break;
        case 65: this.route59Selected = true; break;
        case 66: this.route60Selected = true; break;
        case 67: this.route61Selected = true; break;
        case 68: this.route62Selected = true; break;
        case 98: this.route63Selected = true; break;
        case 99: this.route64Selected = true; break;
        case 100: this.route65Selected = true; break;
      }
    },
    setChecksMenu() {
      this.getUserChecks().then( (data) => {
        if(data.status === true){
          this.percent = ((data.userChecks.length / 65) * 100).toFixed(0);

          data.userChecks.forEach((e) => {
            const objectId = parseInt(e.objectId, 10);
            switch(objectId){
              case 81: this.route1Check = true; break;
              case 82: this.route2Check = true; break;
              case 83: this.route3Check = true; break;
              case 30: this.route4Check = true; break;
              case 31: this.route5Check = true; break;
              case 32: this.route6Check = true; break;
              case 84: this.route7Check = true; break;
              case 85: this.route8Check = true; break;
              case 86: this.route9Check = true; break;
              case 87: this.route10Check = true; break;
              case 88: this.route11Check = true; break;
              case 89: this.route12Check = true; break;
              case 90: this.route13Check = true; break;
              case 91: this.route14Check = true; break;
              case 92: this.route15Check = true; break;
              case 93: this.route16Check = true; break;
              case 94: this.route17Check = true; break;
              case 95: this.route18Check = true; break;
              case 96: this.route19Check = true; break;
              case 33: this.route20Check = true; break;
              case 34: this.route21Check = true; break;
              case 35: this.route22Check = true; break;
              case 36: this.route23Check = true; break;
              case 37: this.route24Check = true; break;
              case 38: this.route25Check = true; break;
              case 39: this.route26Check = true; break;
              case 40: this.route27Check = true; break;
              case 41: this.route28Check = true; break;
              case 42: this.route29Check = true; break;
              case 97: this.route30Check = true; break;
              case 43: this.route31Check = true; break;
              case 44: this.route32Check = true; break;
              case 45: this.route33Check = true; break;
              case 46: this.route34Check = true; break;
              case 47: this.route35Check = true; break;
              case 48: this.route36Check = true; break;
              case 49: this.route37Check = true; break;
              case 50: this.route38Check = true; break;
              case 51: this.route39Check = true; break;
              case 52: this.route40Check = true; break;
              case 53: this.route41Check = true; break;
              case 54: this.route42Check = true; break;
              case 24: this.route43Check = true; break;
              case 25: this.route44Check = true; break;
              case 26: this.route45Check = true; break;
              case 27: this.route46Check = true; break;
              case 28: this.route47Check = true; break;
              case 29: this.route48Check = true; break;
              case 55: this.route49Check = true; break;
              case 56: this.route50Check = true; break;
              case 57: this.route51Check = true; break;
              case 58: this.route52Check = true; break;
              case 59: this.route53Check = true; break;
              case 60: this.route54Check = true; break;
              case 61: this.route55Check = true; break;
              case 62: this.route56Check = true; break;
              case 63: this.route57Check = true; break;
              case 64: this.route58Check = true; break;
              case 65: this.route59Check = true; break;
              case 66: this.route60Check = true; break;
              case 67: this.route61Check = true; break;
              case 68: this.route62Check = true; break;
              case 98: this.route63Check = true; break;
              case 99: this.route64Check = true; break;
              case 100: this.route65Check = true; break;
            }
          });
        }
      })
    },
    openHelpBar() {
      this.getHelpBarText().then((data) => {
        if(data.status === true){
          this.$refs.helpTextContainer.innerHTML = data.helpText;
          this.$refs.beHelpBar.classList.add('open');
        }
      })
    },
    closeHelpBar() {
      let $element = this.$refs.beHelpBar;
      $element.classList.remove('open');
    },
    toggleCommentBar() {
      if(this.$refs.beCommentBar.classList.contains('open')){
        this.closeCommentBar();
      }else{
        this.openCommentBar();
      }
    },
    openCommentBar() {
      // Cleaning and loading
      const $element = this.$refs.beCommentBar;
      $element.querySelectorAll('.state').forEach((e) => e.classList.add('hidden'));
      $element.querySelector('#loading-comment-container').classList.remove('hidden');

      // Loading comments
      this.loadCommentList();

      // Open
      this.$refs.beCommentBar.classList.add('open');
    },
    closeCommentBar() {
      this.$refs.beCommentBar.classList.remove('open');
    },
    loadCommentList() {
      const pageId = this.$route.meta.pageId || 0;
      const $element = this.$refs.beCommentBar;

      this.getCommentList(pageId).then( (data) => {
        if(data.status === true){
          const commentList = data.commentList;
          if(commentList.length === 0){
            // Show first comment screen
            $element.querySelectorAll('.state').forEach((e) => e.classList.add('hidden'));
            $element.querySelector('#first-comment-container').classList.remove('hidden');
          }else{
            // Fill HTML
            $element.querySelector('#comment-list .comment-list-container').innerHTML = data.html;

            // Show comment list screen
            $element.querySelectorAll('.state').forEach((e) => e.classList.add('hidden'));
            $element.querySelector('#list-comment-container').classList.remove('hidden');
          }
        }
      });
    },
    requestNewComment() {
      // Get vars
      const productId = process.env.VUE_APP_PRODUCT_ID;
      const productUserKey = `product-${productId}-user`;
      const $element = this.$refs.beCommentBar;
      const userData = JSON.parse(localStorage.getItem(productUserKey));

      // Prepare screen
      $element.querySelector('.user-avatar .avatar').style.backgroundImage = `url(${userData.urlPhoto})`;
      $element.querySelector('.user-avatar .author').innerText = userData.fullName;

      // Show screen
      $element.querySelectorAll('.state').forEach((e) => e.classList.add('hidden'));
      $element.querySelector('#form-comment-container').classList.remove('hidden');
    },
    cancelNewComment() {
      this.loadCommentList();
    },
    validateCommentForm(event) {
      // Get vars
       const $element = this.$refs.beCommentBar;

      if(event.target.value === ''){
        $element.querySelector('#btnCommentSend').disabled = true;
      }else{
        $element.querySelector('#btnCommentSend').disabled = false;
      }
    },
    submitCommentForm(){
      const pageId = this.$route.meta.pageId || 0;
      const $element = this.$refs.beCommentBar;
      const commentText = $element.querySelector('#user-comment').value;

      this.sendCommentForm(pageId, commentText).then(() => {
        this.loadCommentList();
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  $primary: $PRIMARY;

  /* Toolbar */
  .be-toolbar{
    height: 10vh;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    background-color: $primary;

      .wrapper{
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
      }
      .wrapper > div{
        width: 25%;
      }
      .wrapper > div p{
        text-align: center;
        margin: 0;
      }
      .wrapper > div p a{
        text-decoration: none;
        color: #FFFFFF;
        font-family: 'sanukOT', sans-serif;
        display: flex;
        flex-direction: column;

        span{
          font-size: 2rem;
        }
        span.text{
          font-size: 1rem;
          margin-top: 0.4rem;
        }
      }
  }

  /* Help bar */
  .be-help-bar{
    z-index: 1003;
    display: none;
    opacity: 0;
    width: 100%;
    max-height: 45%;
    border-radius: 0;
    position: fixed;
    top: auto;
    left: 0;
    right: 0;
    bottom: -100%;
    background-color: #fafafa;
    padding: 0;
    margin: 0;
    overflow-y: auto;
    transition: 2s;
    font-family: 'sanukOT', sans-serif;
  }
  .be-help-bar.open{
    z-index: 1003;
    display: block;
    opacity: 1;
    bottom: 0;
  }
  .be-help-bar .container{
    margin: 0 auto;
    width: 70%;
  }
  .be-help-bar .container header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .closeHelpBar{
      font-size: 1.5rem;
      margin-top: -0.5rem;
      color: #000000;
    }
  }

  /* Comment Bar */
  .be-comment-bar{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 400px;
    min-width: 0;
    z-index: 49;
    visibility: hidden;
    outline: 0;
    box-sizing: border-box;
    overflow-y: auto;
    background-color: #FFFFFF;
    transition: ease 0.5s;
    transform: translate3d(100%,0,0);
    box-shadow: 0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12);
    font-family: 'sanukOT', sans-serif;
    max-width: 100%;
  }
  .be-comment-bar .hidden{
    display: none !important;
  }
  .be-comment-bar.open{
    transform: translate3d(0px, 0px, 0px);
    visibility: visible;
  }
  .be-comment-bar header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $primary;
    color: #FFFFFF;
    height: 60px;
  }
  .be-comment-bar header div.title{
    display: flex;
    justify-content: center;
    font-size: 24px;
    text-align: center;
    flex: 1;
    font-size: 1.6rem;
  }
  .be-comment-bar header a.close{
    text-align: center;
    color: #FFFFFF;
    font-size: 2.5rem;
  }
  .be-comment-bar .button-comments{
    height: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
  }
  .be-comment-bar .button-comments .new-comment{
    background-color: $primary;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 40px;
    height: 40px;
    padding: 10px;
    border-radius: 50%;
    transition: background-color .3s;
    cursor: pointer;
    font-size: 2rem;
  }
  .be-comment-bar .button-comments .new-comment span{
    margin-top: -0.5rem;
  }

  /* Comment Bar :: Loading screen */
  .be-comment-bar #loading-comment-container{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Comment Bar :: First comment screen */
  .be-comment-bar #first-comment-container{
    height: 100%;
  }
  .be-comment-bar #first-comment{
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc( 100% - 160px );
  }
  .be-comment-bar #first-comment p{
    margin: 0;
    text-align: center;
    font-size: 1.2rem;
  }
  .be-comment-bar #first-comment p.chat-icon{
    font-size: 5rem;
  }

  /* Comment Bar :: Post comment screen */
  .be-comment-bar #form-comment-container{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .be-comment-bar #form-comment-container .input-comment{
    width: 100%;
    padding: 14px;
    box-sizing: border-box;
    margin-bottom: auto;
  }
  .be-comment-bar #form-comment-container .input-comment textarea{
    width: 100%;
    line-height: normal;
    overflow-y: hidden;
    padding: 0.5rem;
    resize: none;
    min-height: 3rem;
    box-sizing: border-box;
    min-height: 180px;
  }
  .be-comment-bar #form-comment-container #form-comment{
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    height: calc(100% - 108px);
  }
  .be-comment-bar #form-comment-container #user-comment{
    min-height: 180px;
    height: 180px;
  }
  .be-comment-bar #form-comment-container #input-comment-send{
    width: 100%;
    height: 48px;
  }
  .be-comment-bar #form-comment-container #input-comment-send button{
    width: 100%;
    text-transform: uppercase;
    font-size: 1.35rem;
    height: 3rem;
    cursor: pointer;
    border: none;
    transition: background-color .2s ease-out;
    background-color: $primary;
    color: #FFFFFF;
  }
  .be-comment-bar #form-comment-container #input-comment-send button:hover{
    opacity: 0.9;
  }
  .be-comment-bar #form-comment-container #input-comment-send button[disabled]{
    background-color: rgb(155, 146, 160);
    color: #CDCDCD;
  }
  .be-comment-bar #form-comment-container .user-avatar{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 18px;
    border-bottom: 1px solid rgb(227, 227, 227);
  }
  .be-comment-bar #form-comment-container .user-avatar .author{
    color: rgb(51, 51, 51);
    font-size: 18px;
    margin-left: 18px;
  }
  .be-comment-bar #form-comment-container .user-avatar .avatar{
    border-radius: 50%;
    width: 48px;
    height: 48px;
    line-height: 48px;
    display: inline-block;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  /* Comment Bar :: Comment list screen */
  .be-comment-bar #list-comment-container{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .be-comment-bar #list-comment-container #comment-list{
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    height: calc(100% - 108px);
  }
  .be-comment-bar #list-comment-container #comment-list .comment-list-container{
    display: block;
    flex-direction: column;
    flex: 1;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
    position: relative;
    height: 100%;
    max-height: 100%;
    overflow-y: auto;
  }

  /* Navigation */
  .be-navigation{
      width: 100%;
      height: 100%;
      background-color: $primary;
      position: fixed;
      z-index: 150;
      display: none;
      top: 0;
      left: 0;
      font-family: 'sanukOT', sans-serif;
  }
  .be-navigation .nav-body{
    height: 82%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .be-navigation .header-toolbar{
    height: 8%;
    border-top: 1px solid #FFFFFF;
    border-bottom: 1px solid #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 2vw;
  }
  .be-navigation .header-toolbar .account-functions{
    display: flex;
  }
  .be-navigation .header-toolbar .account-functions span.separator{
    color: #FFFFFF;
    padding: 0 10px;
  }
  .be-navigation .header-toolbar a.close{
    color: #FFFFFF;
    text-decoration: none;
    display: flex;
    align-items: center;
    text-transform: uppercase;
  }
  .be-navigation .header-toolbar a.close span.material-design-icon{
    font-size: 1.5rem;
    margin-top: -0.5rem;
  }
  .be-navigation .be-menu-main{
    width: 98vw;
    height: 98%;
    display: flex;
    flex-wrap: wrap;
    flex: auto;
    overflow: auto;
  }
  .be-navigation .nav-body-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    flex-basis: 14%;
  }

  .be-navigation .be-progress{
    height: 10%;
    box-sizing: border-box;
    position: relative;
  }
  .be-navigation .be-progress .background-bar{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6.5vh;
    background-color: #75657E;
  }
  .be-navigation .be-progress .progress-bar{
    display: flex;
    position: absolute;
    height: 10vh;
    flex-direction: column;
  }
  .be-navigation .be-progress .progress-label{
    height: 3.5vh;
    color: #FFFFFF;
    text-align: right;
    padding: 0 0.3vw;
    font-size: 1.2vw;
  }
  .be-navigation .be-progress .progress-bar .loadded-bar{
    height: 6.5vh;
    background-color: #FFC03C;
    transition: 1.5s;
  }

  @media (max-width: 768px) and (orientation: portrait) {
    .be-navigation .be-menu-item span{
      font-size: 2.5vh;
      line-height: 120%;
    }
    .be-navigation .be-progress{
      height: 7vh;
    }
    .be-navigation .be-progress .progress-label{
      font-size: 1.8vh;
      height: 2vh;
    }
    .be-navigation .be-progress .background-bar{
      height: 5vh;
    }
    .be-navigation .be-progress .progress-bar .loadded-bar{
      height: 5vh;
    }
    .be-navigation .be-main .protagonist .be-menu-item{
      margin-bottom: 3vh;
    }
  }

  @media screen and (max-width: 768px){
    .be-navigation .be-menu-main{
      width: 90vw;
    }
  }

  @media screen and (max-width: 667px){
    .be-toolbar{
      height: auto;
      z-index: 900;
    }
    .be-toolbar .wrapper{
      width: 100%;
    }
  }

  @media (max-width: 375px) and (orientation: portrait) {
    .be-navigation{
      overflow-y: auto;
      z-index: 1000;
    }
    .be-navigation .be-menu-item .menu-image img{
      width: 10vh;
    }
    .be-navigation .be-menu-item span{
      font-size: 4.5vw;
      padding: 0;
    }
    .be-navigation .be-menu-item .menu-image .menu-item-check{
      width: 8vw;
    }
    .be-navigation .be-progress{
      display: none;
    }
    .be-help-bar .container{
      width: 85%;
    }
  }
</style>

<style>
  .be-comment-bar #list-comment-container .comment-cell{
      display: block;
      text-align: left;
      border: 0;
      border-bottom: 1px solid rgb(227, 227, 227);
  }
  .be-comment-bar #list-comment-container .comment-cell .comment-header{
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 18px 18px 9px;
  }
  .be-comment-bar #list-comment-container .comment-cell .comment-header .comment-avatar{
      display: inline-block;
      padding: 18px;
      border-bottom: 1px solid rgb(227, 227, 227);
      margin-right: 18px;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      line-height: 48px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
  }
  .be-comment-bar #list-comment-container .comment-cell .comment-header .comment-infos{
      display: flex;
      flex-direction: column;
  }
  .be-comment-bar #list-comment-container .comment-cell .comment-content{
      color: rgb(102, 102, 102);
      font-size: 1rem;
      padding: 9px 18px 18px;
  }
</style>