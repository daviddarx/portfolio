
<template>
  <project
    v-if="this.isMounted"
    class="mammut"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <template
      v-slot:preheader
      v-bind:deco1Datas="deco1Datas"
      v-bind:loadNextImage="loadNextImage"
    >
       <deco-image
          v-bind:url="deco1Datas.url"
          v-bind:hdRatio="deco1Datas.hd"
          v-bind:autoLoad="false"
          v-on:loaded="loadNextImage"
          ref="bgDeco1"
          class="mam-deco-bg mam-deco-bg--1 animate-in animate-in__s3"
        >
        </deco-image>
    </template>

    <div class="project__cols project__intro mam-intro">
      <div class="project__col-left">
        <deco-image
          v-if="this.isMounted"
          v-bind:url="this.introDatas.url"
          v-bind:hdRatio="this.introDatas.hd"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="imageIntro"
          class="mam-intro__img"
        >
        </deco-image>
      </div>
      <div class="project__col-right">
        <p class="project__lead">
          Die berühmte Marke für Wintersportausrüstung und -bekleidung beauftragte Unic 2016 mit der vollständigen Neugestaltung ihrer Website und der Einrichtung eines integrierten Shops zur Digitalisierung des Verkaufsprozesses.
        </p>
        <div class="project__desc mam-desc">
          <p>
            Das Hauptziel war es, die Produkte von Mammut attraktiv zu präsentieren und zum Direktverkauf anzubieten, während die umfangreichen Inhalte der Athleten und der Community sinnvoll  integriert wurden.
          </p>
        </div>
      </div>
    </div>

    <section class="project__section project__section--padding-2x project__section--colored mam-adv">
      <div class="project__cols project__cols--reversed">
        <div class="project__col-right mam-adv__right">
          <deco-image
            v-if="this.isMounted"
            v-bind:url="this.mediasPath+'deco_02.jpg'"
            v-bind:hdRatio="1"
            v-bind:autoLoad="false"
            v-bind:backgroundImage="true"
            v-on:loaded="this.loadNextImage"
            ref="imageAdvDeco"
            class="mam-adv__deco"
          >
          </deco-image>
        </div>

        <div class="project__col-left mam-adv__left">
          <div class="project__pick">
            <h2 class="project__pick-title">
              Was ist dein nächstes Abenteuer mit Mammut?
            </h2>
            <div class="project__pick-desc mam-adv__desc">
              <p>
                Der User konnte diese Frage ganz oben auf der Startseite antworten und die Website stellte dann verwandte Produkte und Stories dar, die auf den fünf wichtigsten Outdoor-Sportaktivitäten basieren.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mam-adv__screen mam-adv__screen--01">
        <div class="mam-adv__screen-container">
          <media-image
            v-bind:url="this.mediasPath+'designs/mammut_d_02.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="1"
            v-bind:zoomable="true"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="mamfd1"
          >
          </media-image>
        </div>
      </div>

      <div class="mam-adv__screen mam-adv__screen--02">
        <p class="mam-adv__legend">
          Standardmäßig wurden handverlesene Inhalte aus allen Kategorien angezeigt:
        </p>
        <div class="mam-adv__screen-container">
          <media-image
            v-bind:url="this.mediasPath+'designs/mammut_d_01_1.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="1"
            v-bind:zoomable="true"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="mamfd21"
          >
          </media-image>
          <media-image
            v-bind:url="this.mediasPath+'designs/mammut_d_01_2.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="1"
            v-bind:zoomable="true"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="mamfd22"
          >
          </media-image>
        </div>
      </div>

      <div class="mam-adv__screen mam-adv__screen--03">
        <p class="mam-adv__legend">
          Um eine große Anzahl von Produktkategorien und Werbeaktionen zu verwalten, die in der Navigation angezeigt werden sollen, wurde eine Off-Canvas-Lösung gewählt:
        </p>
        <div class="mam-adv__screen-container">
          <media-image
            v-bind:url="this.mediasPath+'designs/mammut_d_03.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="1"
            v-bind:zoomable="true"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="mamfd3"
          >
          </media-image>
        </div>
      </div>

      <div class="project__cols mam-adv__small-screens">
        <div class="project__col-left">
          <div class="mam-adv__screen-container">
            <media-image
              v-bind:url="this.mediasPath+'designs/mammut_d_04.jpg'"
              v-bind:title="'Finales Design'"
              v-bind:hdRatio="1"
              v-bind:zoomable="true"
              v-bind:centered="false"
              v-bind:autoLoad="false"
              v-on:loaded="this.loadNextImage"
              ref="mamfd4"
              class="mam-adv__screen mam-adv__screen--04"
            >
            </media-image>
          </div>
          <p class="mam-adv__legend mam-adv__legend--bottom">
            Full-Screen Suche mit Live-Empfehlungen
          </p>
        </div>
        <div class="project__col-right">
          <div class="mam-adv__screen-container">
            <media-image
              v-bind:url="this.mediasPath+'designs/mammut_d_05.jpg'"
              v-bind:title="'Finales Design'"
              v-bind:hdRatio="1"
              v-bind:zoomable="true"
              v-bind:centered="false"
              v-bind:autoLoad="false"
              v-on:loaded="this.loadNextImage"
              ref="mamfd5"
              class="mam-adv__screen mam-adv__screen--05"
            >
            </media-image>
          </div>
          <p class="mam-adv__legend mam-adv__legend--bottom">
            Warenkorb
          </p>
        </div>
      </div>

      <div class="mam-adv__screen mam-adv__screen--06">
        <div class="mam-adv__screen-container">
          <media-image
            v-bind:url="this.mediasPath+'designs/mammut_d_06_1.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="1"
            v-bind:zoomable="true"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="mamfd61"
          >
          </media-image>
          <media-image
            v-bind:url="this.mediasPath+'designs/mammut_d_06_2.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="1"
            v-bind:zoomable="true"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="mamfd62"
          >
          </media-image>
        </div>
      </div>

      <div class="mam-adv__screen mam-adv__screen--07">
        <div class="mam-adv__screen-container">
          <media-image
            v-bind:url="this.mediasPath+'designs/mammut_d_07.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="1"
            v-bind:zoomable="true"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="mamfd7"
          >
          </media-image>
        </div>
      </div>
    </section>

    <section class="project__section project__section--padding-2x mam-rd">
      <h2 class="project__pick-title mam-rd__title">
        Responsive Design
      </h2>
      <div class="project__mobile-thumbs">
        <div class="project__mobile-thumb project__mobile-thumb--01">
          <media-image
            v-bind:url="this.mediasPath+'designs/mammut_m_01.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="1"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="mamrd1"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--middle">
          <media-image
            v-bind:url="this.mediasPath+'designs/mammut_m_02.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="1"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="mamrd2"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--right">
          <media-image
            v-bind:url="this.mediasPath+'designs/mammut_m_03.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="1"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="mamrd3"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/mammut_m_04.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="1"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="mamrd4"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--middle project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/mammut_m_05.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="1"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="mamrd5"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--right project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/mammut_m_06.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="1"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="mamrd6"
          >
          </media-image>
        </div>
      </div>
    </section>

    <div class="project__credits">
      <h2 class="project__credits-title">
        Akkreditiv
      </h2>
      <div class="project__credits-desc">
        <p>
          Art-Direction  – Stefan Weber
        </p>
      </div>
    </div>

    <div class="project__credits mam-awards">
      <h2 class="project__credits-title">
        Awards
      </h2>
      <div class="project__credits-desc">
        <p>
          BOSW 2017 – Gold in der Kategorie Usability<br>
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

  export default Vue.extend({
    components: {
      'project': Project,
      'deco-image': DecoImage,
      'media-image': MediaImage
    },
    mixins: [projectsMixins],
    data: function () {
      return {
        mediasPath: 'https://files.daviddarx.com/works/static/projects/mammut/',
      }
    },
    computed: {
      deco1Datas: function () {
        const windowW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let datas = {};

        if (windowW > 1440 || (windowW > 1280 && window.devicePixelRatio > 1)) {
          datas.url = this.mediasPath+'deco_01.png';
          datas.hd = 1;
        } else {
          datas.url = this.mediasPath+'deco_01.png';
          datas.hd = 1;
        }
        return datas;
      },
      introDatas: function () {
        const windowW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let datas = {};

        if (windowW > 1440 || (windowW > 1280 && window.devicePixelRatio > 1)) {
          datas.url = this.mediasPath+'intro_hd.jpg';
          datas.hd = 1;
        } else {
          datas.url = this.mediasPath+'intro.jpg';
          datas.hd = 2;
        }
        return datas;
      }
    },
    mounted () {
      this.mount();
    },
    beforeDestroy () {
      this.destroy();
    }
  });
</script>



<style lang="scss">
  @import '../scss/assets.scss';

  .mammut {
    --c-title: #ff1b34;
    --c-grey-value: 45;

    .project__meta-title,
    .project__title,
    .project__pick-title {
      color: var(--c-title);
    }

    .project__date,
    .project__agency {
      flex-basis: 14%;

      @include viewport('desktop') {
        flex-basis: 13%;
      }

      @include viewport('tablet-s') {
        flex-basis: 33%;
      }

      @include viewport('mobile-l') {
        flex-basis: 100%;
      }
    }

    .project__col-right {
      @include viewport('tablet-s') {
        position: relative;
        margin-top: -10%;
      }
    }
  }

  .mam-deco-bg {
    position: absolute;

    &--1 {
      --s-translateYAnimateIn: 0;

      z-index: 200;
      width: 50%;
      right: 0;
      top: 0;

      @include viewport('mobile-l') {
        width: 75%;
      }
    }
  }

  .mam-intro {
    padding-bottom: calc(var(--s-gutter) * 1.5);

    @include viewport('desktop') {
      padding-bottom: calc(var(--s-gutter) * 0.5);
    }

    &__img {
      position: absolute;
      z-index: -100;
      width: 140%;
      transform: translate(-30%, -33%);

      @include viewport('desktop') {
        transform: translate(-30%, -30%);
      }

      @include viewport('tablet-s') {
        position: relative;
        width: 100%;
        transform: translate(0, 0);
        margin-top: -25%;
        margin-left: -2%;
      }

      @include viewport('mobile-l') {
        margin-top: -20%;
        margin-bottom: 5%;
      }
    }
  }

  .mam-adv {
    --c-background: rgba(var(--c-grey-value), var(--c-grey-value), var(--c-grey-value), 1);

    margin-top: calc(var(--s-gutter) * 2);

    @include viewport('tablet-s') {
      margin-top: calc(var(--s-gutter) * 1.2);
      padding-bottom: calc(var(--s-gutter) * 2);
    }

    .project__pick-title,
    .project__pick-desc {
      @include anti-aliased();
    }

    .project__pick-desc {
      color: white;
    }

    &__desc {
      p:last-child {
        margin-bottom: 0;
      }
    }

    &__left {
      flex-basis: 50%;
      box-sizing: border-box;
      padding-right: calc(var(--s-gutter) * 2);

      @include viewport('tablet-s') {
        margin-top: calc(var(--s-gutter) * 0.5);
        padding-right: 0;
      }
    }

    &__right {
      flex-basis: 50%;
      position: relative;
    }

    &__deco {
      position: absolute;
      z-index: -1;
      top: 0;
      left: var(--s-gutter-col);
      right: calc(var(--s-gutter) * -2);
      height: 740px;
      margin-top: calc(var(--s-gutter) * -3);
      background-size: cover;
      background-position: center top;

      @include viewport('tablet-s') {
        position: relative;
        left: calc(var(--s-gutter) * -1);
        right: auto;
        width: 100vw;
        height: 300px;
        margin-top: 0;
      }

      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 75%;
        left: 0;
        bottom: 0;
        background: linear-gradient(0deg, rgba(var(--c-grey-value), var(--c-grey-value), var(--c-grey-value), 1) 0%, rgba(var(--c-grey-value), var(--c-grey-value), var(--c-grey-value), 0) 100%);
      }
    }

    &__screen {
      max-width: 1240px;
      margin: 0 auto;
      margin-top: calc(var(--s-gutter) * 2);

      @include viewport('tablet-s') {
        margin-top: calc(var(--s-gutter) * 1.5);
      }

      @include viewport('mobile-l') {
        margin-top: var(--s-gutter);
      }

      @include viewport('mobile-s') {
        margin-top: calc(var(--s-gutter) * 2);
      }

      &--01 {
        margin-top: var(--s-gutter);
      }

      &--02 {
        position: relative;

        &::after {
          content: "";
          position: absolute;
          z-index: 1;
          width: 100%;
          height: 5%;
          left: 0;
          bottom: 0;
          background: linear-gradient(0deg, rgba(var(--c-grey-value), var(--c-grey-value), var(--c-grey-value), 1) 0%, rgba(var(--c-grey-value), var(--c-grey-value), var(--c-grey-value), 0) 100%);
        }
      }

      &--05 {
        margin-top: calc(var(--s-gutter) * 3);
      }
    }

    &__screen-container {
      outline: 1px solid rgba(255, 255, 255, 0.1);
    }

    &__legend {
      @include hyphens();
      @include anti-aliased();

      color: white;
      font-size: var(--s-text-small);
      width: 35%;
      margin-bottom: 2em;

      @include viewport('desktop-xl') {
        width: 50%;
      }

      @include viewport('tablet') {
        width: 50%;
      }

      @include viewport('tablet-s') {
        width: 100%;
        margin-bottom: 1.2em;
      }

      &--bottom {
        width: 100%;
        margin-bottom: 0;
        margin-top: 1em;
      }
    }
  }

  .mam-rd {
    position: relative;
    color: var(--project-color);
    padding-top: calc(var(--s-gutter) * 2.5);
    text-align: center;

    @include viewport('tablet-s') {
      padding-top: calc(var(--s-gutter) * 2);
    }

    &__title {
      @include anti-aliased();

      margin-bottom: calc(var(--s-gutter) * 0.75);

      @include viewport('mobile-s') {
        margin-top: var(--s-gutter);
      }
    }

    .project__mobile-thumb {
      --box-shadow: 0 10px 30px rgba(29, 51, 74, 0.05), 0 15px 10px rgba(29, 51, 74, 0.05);

      position: relative;
      z-index: 101;
    }

    .media-image {
      --outline-final: 1px solid rgba(29, 51, 74, 0.25);
    }
  }

  .mam-awards {
    padding-top: calc(var(--s-gutter) * 0.5);
  }

</style>
