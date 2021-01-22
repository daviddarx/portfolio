
<template>
  <project
    v-if="this.isMounted"
    class="eao"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <template
      v-slot:preheader
      v-bind:mediasPath="mediasPath"
      v-bind:loadNextImage="loadNextImage"
    >
       <deco-image
          v-bind:url="mediasPath+'deco_background_hd.jpg'"
          v-bind:hdRatio="1"
          v-bind:autoLoad="false"
          v-on:loaded="loadNextImage"
          ref="bgDeco1"
          class="deco-bg deco-bg--1 animate-in"
        >
        </deco-image>
    </template>

    <div class="project__cols project__intro eao-intro">
      <div class="project__col-left">
        <deco-image
          v-if="this.isMounted"
          v-bind:url="this.stopIntroDatas.url"
          v-bind:hdRatio="this.stopIntroDatas.hd"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="imageIntro"
          class="eao-intro__img"
        >
        </deco-image>
      </div>
      <div class="project__col-right">
        <p class="project__lead">
          Die EAO AG ist eine der weltweit führenden Herstellerinnen von hochkomplexen, spezifischen Human Machine Interfaces (HMI) – darunter beispielsweise Bedienelemente für Cockpits, Türöffner oder Not-Halt-Tasten.
        </p>
        <div class="project__desc eao-desc">
          <p>
            Für ihren ersten Schritt in der digitalen Transformation ihrer Produkt-Beratung beauftragte EAO Eyekon und die Produktdaten-Spezialisten von <a href="https://www.intelliact.ch" target="_blank" class="text-link">Intelliact</a> mit der Erstellung eines digitalen Produkt-Konfigurators für die Not-Aus-Tasten der Marke.
          </p>
          <p>
            Letzteres ermöglicht dieser, über die Produkt -Auswahl und -Konfiguration hinaus die Hochwertigkeit von EAO in Bezug auf Design und Verarbeitung zu vermitteln.
          </p>
        </div>
      </div>
    </div>

    <section class="project__section project__section--padding-2x project__cols project__cols--reversed eao-ps">
      <div class="project__col-right eao-ps__left">
        <div
          class="eao-ps__step eao-ps__step--1"
          v-bind:class="{ 'eao-ps__step--hidden': this.currentProductStage == 2 }"
        >
          <deco-image
            v-if="this.isMounted"
            v-bind:url="this.mediasPath+'stages/stage_01.jpg'"
            v-bind:hdRatio="1"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="imagePS11"
            class="eao-ps__img eao-ps__img--1"
          >
          </deco-image>
          <deco-image
            v-if="this.isMounted"
            v-bind:url="this.mediasPath+'stages/stage_01_overlay.svg'"
            v-bind:hdRatio="1"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="imagePS12"
            class="eao-ps__overlay"
          >
          </deco-image>
        </div>

        <div
          class="eao-ps__step eao-ps__step--2"
          v-bind:class="{ 'eao-ps__step--hidden': this.currentProductStage == 1 }"
        >
          <deco-image
            v-if="this.isMounted"
            v-bind:url="this.mediasPath+'stages/stage_02.jpg'"
            v-bind:hdRatio="1"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="imagePS21"
            class="eao-ps__img eao-ps__img--2"
          >
          </deco-image>
          <deco-image
            v-if="this.isMounted"
            v-bind:url="this.mediasPath+'stages/stage_02_overlay.svg'"
            v-bind:hdRatio="1"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="imagePS22"
            class="eao-ps__overlay"
          >
          </deco-image>
        </div>
      </div>

      <div class="project__col-left eao-ps__right">
        <div class="project__pick">
          <h2 class="project__pick-title">
            Zielgruppenspezifische Zugänge &amp; Produktenbühne
          </h2>
          <div class="project__pick-desc eao-ps__desc">
            <p>
              Der Konfigurator bietet einen differenzierten Ansatz, um  die beiden Hauptzielgruppen spezifisch anzusprechen, die während der Benutzer-recherche aufgetreten sind.
            </p>
            <p>
              Technisch versierte Ingenieure können direkt auf das gewünschte Produkt zugreifen, indem sie eine erweiterte Filterung basierend auf technischen Kriterien verwenden.
            </p>
            <p>
	            Produktdesigner profitieren ihrerseits vom Schnellzugang zum passenden E-Stop über eine Bühne die acht Merkmale visuell inszeniert, wie beispielsweise Schaltleistung oder Witterungs-beständigkeit.
            </p>
            <p>
	            Dieses Schaufenster ermöglicht es auch, das anerkannte Know-how von EAO für das Design und die Veredelung seiner Produkte hervorzuheben und die E-Commerce-Plattform in ein Markenerlebnis zu verwandeln.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="project__section project__section--padding-2x eao-ps-video">
      <media-video
        v-bind:url="this.mediasPath+'sc/eao_sc_03.mp4'"
        v-bind:poster="this.mediasPath+'sc/eao_sc_03.jpg'"
        v-bind:autoplay="true"
        v-bind:isvideo="true"
        v-bind:id="'video-eao1'"
        ref="video-eao1"
        class="eao-ps-video__el observed"
      >
      </media-video>
    </section>

    <section class="project__section project__section--padding-2x project__cols project__cols--reversed eao-pc">
      <div class="project__col-right eao-pc__left">
        <div class="project__pick">
          <h2 class="project__pick-title">
            Produktkonfiguration
          </h2>
          <div class="project__pick-desc eao-ps__desc">
            <p>
              Da die meisten Produkte aus mehreren austauschbaren Komponenten bestehen, sind sie auf verschiedenste Arten konfigurierbar.
            </p>
            <p>
              Während Power-User alle verschiedenen Funktionen über die Seitenleiste einstellen können, wird weniger technisch versierten Benutzern eine visuellere Konfiguration für die Hauptfunktionen angeboten.
            </p>
          </div>
        </div>
      </div>

      <div class="project__col-left eao-pc__right">
        <media-video
          v-bind:url="this.mediasPath+'sc/eao_sc_01.mp4'"
          v-bind:poster="this.mediasPath+'sc/eao_sc_01.jpg'"
          v-bind:autoplay="true"
          v-bind:isvideo="true"
          v-bind:id="'video-eao2'"
          ref="video-eao2"
          class="observed"
        >
        </media-video>
      </div>
    </section>

    <section class="project__section project__section--padding-2x project__cols eao-ev">
      <div class="project__col-left eao-ev__left">
        <div class="project__pick">
          <h2 class="project__pick-title">
            Experience Views
          </h2>
          <div class="project__pick-desc eao-ps__desc">
            <p>
              Da die meisten Produkte aus mehreren austauschbaren Komponenten bestehen, sind sie auf verschiedenste Arten konfigurierbar.
            </p>
            <p>
              Während Power-User alle verschiedenen Funktionen über die Seitenleiste einstellen können, wird weniger technisch versierten Benutzern eine visuellere Konfiguration für die Hauptfunktionen angeboten.
            </p>
          </div>
        </div>
        <deco-image
          v-bind:url="mediasPath+'deco_background_hd.jpg'"
          v-bind:hdRatio="1"
          v-bind:autoLoad="false"
          v-on:loaded="loadNextImage"
          ref="bgDeco2"
          class="deco-bg deco-bg--2"
        >
        </deco-image>
      </div>

      <div class="project__col-right eao-ev__right">
        <media-video
          v-bind:url="this.mediasPath+'sc/eao_sc_02.mp4'"
          v-bind:poster="this.mediasPath+'sc/eao_sc_02.jpg'"
          v-bind:autoplay="true"
          v-bind:isvideo="true"
          v-bind:id="'video-eao3'"
          ref="video-eao3"
          class="eao-ev__video observed"
        >
        </media-video>
      </div>
    </section>

    <section class="project__section project__section--padding-2x eao-film">
      <div class="project__pick">
        <h2 class="project__pick-title eao-film__title">
          Erklärfilm
        </h2>
      </div>
      <div
        class="eao-film__video"
      >
        <media-video
          v-bind:url="this.mediasPath+'erklaerfilm/eao_erklaer_film.mp4'"
          v-bind:poster="this.mediasPath+'erklaerfilm/eao_erklaer_film.jpg'"
          v-bind:autoplay="false"
          v-bind:muted="false"
          v-bind:isvideo="true"
          v-bind:id="'eao-film'"
          ref="eao-film"
          class="eao-film__video-el observed"
        >
        </media-video>
      </div>
    </section>

    <section class="project__section project__section--padding-2x project__section--colored eao-fd">
      <h2 class="project__pick-title eao-fd__title">
        Finales Design
      </h2>
      <div class="eao-fd__screen-01">
        <media-image
          v-bind:url="this.mediasPath+'designs/eao_d_01_1.jpg'"
          v-bind:title="'Finales Design'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="eaofd11"
        >
        </media-image>

        <media-image
          v-bind:url="this.mediasPath+'designs/eao_d_01_2.jpg'"
          v-bind:title="'Finales Design'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="eaofd12"
        >
        </media-image>

        <media-image
          v-bind:url="this.mediasPath+'designs/eao_d_01_3.jpg'"
          v-bind:title="'Finales Design'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="eaofd13"
        >
        </media-image>
      </div>

      <div class="project__cols eao-fd__small-screens">
        <div class="project__col-left">
          <media-image
            v-bind:url="this.mediasPath+'designs/eao_d_02.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="2"
            v-bind:zoomable="true"
            v-bind:centered="false"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="eaofd2"
            class="eao-fd__screen eao-fd__screen--outline eao-fd__screen-02"
          >
          </media-image>
        </div>
        <div class="project__col-right">
          <media-image
            v-bind:url="this.mediasPath+'designs/eao_d_03.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="2"
            v-bind:zoomable="true"
            v-bind:centered="false"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="eaofd3"
            class="eao-fd__screen eao-fd__screen-03"
          >
          </media-image>
        </div>
        <div class="project__col-left">
          <media-image
            v-bind:url="this.mediasPath+'designs/eao_d_04.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="2"
            v-bind:zoomable="true"
            v-bind:centered="false"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="eaofd4"
            class="eao-fd__screen eao-fd__screen-04"
          >
          </media-image>
        </div>
        <div class="project__col-right">
          <media-image
            v-bind:url="this.mediasPath+'designs/eao_d_05.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:zoomable="true"
            v-bind:centered="false"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="eaofd5"
            class="eao-fd__screen eao-fd__screen--outline eao-fd__screen-05"
          >
          </media-image>
        </div>
      </div>
    </section>

    <section class="project__section project__section--padding-2x project__section--colored eao-rd">

      <deco-image
        v-bind:url="this.rdDecoDatas.url"
        v-bind:hdRatio="this.rdDecoDatas.hd"
        v-bind:autoLoad="false"
        v-on:loaded="this.loadNextImage"
        ref="eaorddeco"
        class="eao-rd__deco"
      >
      </deco-image>

      <h2 class="project__pick-title eao-rd__title">
        Responsive Design
      </h2>
      <div class="project__mobile-thumbs eao-rd__thumbs">
        <div class="project__mobile-thumb project__mobile-thumb--01">
          <media-image
            v-bind:url="this.mediasPath+'designs/eao_m_01.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="eaord1"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--middle">
          <media-image
            v-bind:url="this.mediasPath+'designs/eao_m_02.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="eaord2"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--right">
          <media-image
            v-bind:url="this.mediasPath+'designs/eao_m_03.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="eaord3"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/eao_m_04.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="eaord4"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--middle project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/eao_m_05.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="eaord5"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--right project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/eao_m_06.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="eaord6"
          >
          </media-image>
        </div>
      </div>
    </section>

    <div class="eao-cta-container">
      <a href="https://digikey.eao.com/" target="_blank" class="cta cta--small eao-cta">Projekt online anschauen</a><br>
      <a href="https://www.eyekon.ch/projekte/eao-3d-konfigurator" target="_blank" class="text-link eao-doku">Ausführliche Dokumentation (eyekon.ch)</a>
    </div>

    <div class="project__credits">
      <h2 class="project__credits-title">
        Akkreditiv
      </h2>
      <div class="project__credits-desc">
        <p>
          UX &amp; Wireframing, Erklärfilm – Marco Lüthi<br>
          3D Renderings – Giacomo Pedemonte &amp; Deny Fousek
        </p>
      </div>
    </div>

  </project>
</template>

<script>
  import Vue from "vue";
  import Project from '../components/project-detail.vue';
  import projectsMixins from '../mixins/projects';
  import DecoImage from '../components/deco-image.vue';
  import MediaImage from '../components/media-image.vue';
  import MediaVideo from '../components/media-video.vue';

  export default Vue.extend({
    components: {
      'project': Project,
      'deco-image': DecoImage,
      'media-image': MediaImage,
      'media-video': MediaVideo
    },
    mixins: [projectsMixins],
    data: function () {
      return {
        mediasPath: 'https://files.daviddarx.com/works/static/projects/eao/',
        currentProductStage: 1,
        productStageSwitchInterval: undefined,
        productStageSwitchIntervalDuration: 7000
      }
    },
    computed: {
      stopIntroDatas: function () {
        const windowW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let datas = {};

        if (windowW >= 1280) {
          datas.url = this.mediasPath+'intro_hd.png';
          datas.hd = 1;
        } else {
          datas.url = this.mediasPath+'intro.png';
          datas.hd = 2;
        }
        return datas;
      },
      rdDecoDatas: function () {
        const windowW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let datas = {};

        if (windowW >= 1280) {
          datas.url = this.mediasPath+'deco_hd.png';
          datas.hd = 1;
        } else {
          datas.url = this.mediasPath+'deco.png';
          datas.hd = 2;
        }
        return datas;
      }
    },
    mounted () {
      this.mount();
      this.startProductStageSwitch();
    },
    beforeDestroy () {
      this.destroy();
      this.stopProductStageSwitch();
    },
    methods: {
      startProductStageSwitch: function () {
        this.productStageSwitchInterval = setInterval(this.switchProductStage, this.productStageSwitchIntervalDuration);
      },
      stopProductStageSwitch: function () {
        clearInterval(this.productStageSwitchInterval);
        this.productStageSwitchInterval = undefined;
      },
      switchProductStage: function () {
        this.currentProductStage = (this.currentProductStage == 1) ? 2 : 1;
      }
    }
  });
</script>



<style lang="scss">
  @import '../scss/assets.scss';

  .eao {
    --c-title: #e72128;
    --c-grey: #ebebeb;
    --c-grey-dark: #2f2f2f;
    --s-col-vid: 65%;
    --s-col-desc: 35%;
    --s-col-desc-padding: calc(var(--s-gutter) * 0.75);

    .project__meta-title,
    .project__title,
    .project__pick-title {
      color: var(--c-title);
    }
  }

  .deco-bg {
    position: absolute;
    z-index: -1;

    &--1 {
      --s-translate-x: 35%;
      --s-translate-y: -45%;

      width: 75%;
      right: 0;
      top: 0;

      @include viewport('mobile-l') {
        width: 100%;
      }

      @include viewport('mobile-l') {
        width: 120%;
      }
    }

    &--2 {
      width: 230%;
      bottom: 0;
      transform: translate(-60%, 75%);

      @include viewport('desktop-xl') {
        transform: translate(-60%, 70%);
      }

      @include viewport('desktop') {
        width: 200%;
        transform: translate(-65%, 80%);
      }

      @include viewport('tablet') {
        width: 230%;
        transform: translate(-65%, 90%);
      }

      @include viewport('tablet-s') {
        display: none;
      }
    }
  }

  .eao-intro {
    padding-bottom: calc(var(--s-gutter) * 0.5);

    &__img {
      position: absolute;
      z-index: 10;
      width: 190%;
      margin-left: -78%;
      margin-top: -14%;

      @include viewport('tablet-s') {
        position: relative;
        width: 120%;
        margin-left: 50%;
        margin-top: 0;
        transform: translateX(-50%);
      }
    }
  }

  .eao-desc {
    position: relative;
    z-index: 10;
  }

  .eao-ps {
    &__left {
      position: relative;
    }

    &__right {
      position: relative;
      padding-right: calc(var(--s-gutter) * 2);
      z-index: 2;

      @include viewport('desktop') {
        padding-right: 0;
      }
    }

    &__desc {
      p:last-child {
        margin-bottom: 0;
      }
    }

    &__step {
      --d-fade: 1s;
      --d-fade-in-delay: 1.5s;

      opacity: 1;
      transition-property: opacity, visibility;
      transition-timing-function: linear, linear;
      transition-duration: var(--d-fade), 0s;
      transition-delay: var(--d-fade-in-delay), 0s;

      @include viewport('tablet-s') {
        height: 30vw;
      }

      @include viewport('mobile') {
        height: 35vw;
      }

      &--hidden {
        opacity: 0;
        visibility: hidden;
        transition-delay: 0s, var(--d-fade);
      }
    }

    &__img {
      position: absolute;
      width: 150%;
      right: 0;
      z-index: -1;

      @include viewport('desktop') {
        width: 125%;
      }

      @include viewport('tablet-s') {
        top: 0;
        width: 100%;
      }

      @include viewport('mobile') {
        top: 0;
        width: 130%;
      }

      &--1 {
        transform: translate(20%, -25%);

        @include viewport('tablet-s') {
          transform: translate(20%, -20%);
        }
      }

      &--2 {
        transform: translate(calc(var(--s-gutter) * 2), -20%);
      }
    }

    &__overlay {
      --s-decal-y: 20%;
      --d-fade: 0.5s;
      --d-fade-in-delay: 2.5s;

      position: absolute;
      width: 80%;
      right: 0;
      top: 55%;
      opacity: 1;
      transform: translateY(0);
      transition-property: transform, opacity;
      transition-timing-function: var(--e-out), linear;
      transition-duration: var(--d-fade), var(--d-fade);
      transition-delay: var(--d-fade-in-delay), var(--d-fade-in-delay);

      @include viewport('tablet-s') {
        width: 70%;
        right: 20%;
        top: 40%;
      }

      @include viewport('mobile') {
        width: 80%;
        right: 10%;
      }

      .eao-ps__step--hidden & {
        opacity: 0;
        transform: translateY(var(--s-decal-y));
        transition-timing-function: var(--e-in), linear;
        transition-delay: 0s, 0s;
      }
    }
  }

  .eao-ps-video {
    padding-top: 0;

    @include viewport('mobile-s') {
      padding-top: 0;
    }
  }

  .eao-pc {
    padding-top: var(--s-gutter);

    &__left {
      flex-basis: var(--s-col-desc);
      padding-left: var(--s-col-desc-padding);

      @include viewport('tablet-s') {
        padding-left: 0;
        padding-bottom: var(--s-gutter);
      }
    }

    &__right {
      flex-basis: var(--s-col-vid);
    }
  }

  .eao-ev {
    padding-top: 0;

    @include viewport('tablet-s') {
      padding-top: var(--s-gutter);
      padding-bottom: calc(var(--s-gutter) * 2);
    }

    &__left {
      flex-basis: var(--s-col-desc);
      padding-right: var(--s-col-desc-padding);

      @include viewport('tablet-s') {
        padding-right: 0;
        padding-bottom: var(--s-gutter);
      }
    }

    &__right {
      flex-basis: var(--s-col-vid);
    }

    &__video {
      border: 1px solid rgba(255, 255, 255, 0.15);
      padding-bottom: 1px;
    }
  }

  .eao-film {
    padding-top: var(--s-gutter);
    padding-bottom: 0;

    @include viewport('tablet-s') {
      padding-top: 0;
    }

    &__title {
      text-align: center;
      padding-bottom: calc(var(--s-gutter) * 1.75);

      @include viewport('tablet-s') {
        padding-top: 0;
        padding-bottom: var(--s-gutter);
      }
    }

    &__video {
      position: relative;
      padding-bottom: calc(var(--s-gutter) * 2);

      &::after {
        --s-margin: calc(var(--s-gutter) * -2);

        content: "";
        position: absolute;
        top: calc(50% - var(--s-gutter));
        bottom: 0;
        left: var(--s-margin);
        right: var(--s-margin);
        background-color: var(--c-grey);
        z-index: -1;
      }
    }

    &__video-el {
      border: 1px solid rgba(255, 255, 255, 0.15);
      margin: 0 auto;
      max-width: 1920px;
    }
  }

  .eao-fd {
    --c-background: var(--c-grey);

    padding-top: var(--s-gutter);
    padding-bottom: calc(var(--s-gutter) * 6);

    @include viewport('tablet-s') {
      padding-top: 0;
      padding-bottom: calc(var(--s-gutter) * 4);
    }

    &__title {
      text-align: center;
      margin-bottom: calc(var(--s-gutter) * 1.6);

      @include viewport('tablet') {
        padding-top: calc(var(--s-gutter) * 0.25);
      }

      @include viewport('tablet-s') {
        padding-top: 0;
        margin-bottom: var(--s-gutter);
      }
    }

    &__screen--outline {
      --outline-final: 1px solid rgba(0, 0, 0, 0.15);
    }

    &__screen-01 {
      max-width: 1280px;
      margin: 0 auto;
      outline: 1px solid rgba(0, 0, 0, 0.15);
    }

    &__screen-02,
    &__screen-03 {
      margin-bottom: calc(var(--s-gutter-col) * 2);

      @include viewport('tablet') {
        margin-bottom: 0;
      }
    }

    &__screen-03,
    &__screen-05 {
      transform: translateY(calc(var(--s-gutter) * 2));

      @include viewport('tablet') {
        transform: translateY(0);
      }
    }

    &__small-screens {
      margin-top: calc(var(--s-gutter) * 2);

      @include viewport('tablet') {
        display: block;

        & > div {
          padding: 0;
          margin-top: var(--s-gutter);
        }
      }
    }
  }

  .eao-rd {
    --c-background: var(--c-grey-dark);

    position: relative;
    color: white;
    text-align: center;
    padding-top: calc(var(--s-gutter) * 4);
    padding-bottom: calc(var(--s-gutter) * 4);

    @include viewport('tablet-s') {
      padding-top: calc(var(--s-gutter) * 3);
    }

    &::after {
      content: "";
      position: absolute;
      width: 100vw;
      height: 100vh;
      left: 0;
      bottom: 0;
      background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
    }

    &__deco {
      position: absolute;
      width: 65%;
      left: 50%;
      top: 0;
      transform: translate(-50%, -35%);

      @include viewport('tablet-s') {
        width: 85%;
      }
    }

    &__title {
      margin-bottom: calc(var(--s-gutter) * 0.75);

      @include viewport('tablet-s') {
        margin-top: var(--s-gutter);
      }

      @include viewport('mobile-s') {
        margin-top: calc(var(--s-gutter) * 3);
      }
    }

    &__thumbs {
      --s-mobile: 375px;
    }

    .project__mobile-thumb {
      --box-shadow: var(--shadow-01);

      position: relative;
      z-index: 101;
    }

    .media-image {
      --outline-final: 1px solid rgba(255, 255, 255, 0.2);
    }
  }

  .eao-cta-container {
    margin-top: calc(var(--s-gutter) * 2);
    text-align: center;
  }

  .eao-cta {
    --c-bg: #d30d14;
  }

  .eao-doku {
    font-size: var(--s-text-small);
    margin-top: 2em;
  }
</style>

