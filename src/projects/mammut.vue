
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
        <div class="project__desc eao-desc">
          <p>
            Das Hauptziel war es, die Produkte von Mammut attraktiv zu präsentieren und zum Direktverkauf anzubieten, während die umfangreichen Inhalte der Athleten und der Community sinnvoll  integriert wurden.
          </p>
        </div>
      </div>
    </div>

    <section class="project__section project__section--padding-2x mam-adv">
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
            <div class="project__pick-desc eao-ps__desc">
              <p>
                Der User konnte diese Frage ganz oben auf der Startseite antworten und die Website stellte dann verwandte Produkte und Artikel dar, die auf den fünf wichtigsten Outdoor-Sportaktivitäten basieren.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mam-adv__screen mam-adv__screen--01">
        <media-image
          v-bind:url="this.mediasPath+'designs/mammut_d_02.jpg'"
          v-bind:title="'Finales Design'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="mamfd1"
        >
        </media-image>
      </div>

      <div class="mam-adv__screen mam-adv__screen--02">
        <p class="mam-adv__legend">
          Standardmäßig wurden handverlesene Inhalte aus allen Kategorien angezeigt:
        </p>
        <media-image
          v-bind:url="this.mediasPath+'designs/mammut_d_01_1.jpg'"
          v-bind:title="'Finales Design'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="mamfd21"
        >
        </media-image>
        <media-image
          v-bind:url="this.mediasPath+'designs/mammut_d_01_2.jpg'"
          v-bind:title="'Finales Design'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="mamfd22"
        >
        </media-image>
      </div>

      <div class="mam-adv__screen mam-adv__screen--03">
        <p class="mam-adv__legend">
          Um eine große Anzahl von Produktkategorien und Werbeaktionen zu verwalten, die in der Navigation angezeigt werden sollen, wurde eine Off-Canvas-Lösung gewählt:
        </p>
        <media-image
          v-bind:url="this.mediasPath+'designs/mammut_d_03.jpg'"
          v-bind:title="'Finales Design'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="mamfd3"
        >
        </media-image>
      </div>

      <div class="project__cols mam-adv__small-screens">
        <div class="project__col-left">
          <media-image
            v-bind:url="this.mediasPath+'designs/mammut_d_04.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="2"
            v-bind:zoomable="true"
            v-bind:centered="false"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="mamfd4"
            class="mam-adv__screen mam-adv__screen--04"
          >
          </media-image>
          <p class="mam-adv__legend mam-adv__legend--bottom">
            Full-Screen Suche mit Live-Empfehlungen
          </p>
        </div>
        <div class="project__col-right">
          <media-image
            v-bind:url="this.mediasPath+'designs/mammut_d_05.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="2"
            v-bind:zoomable="true"
            v-bind:centered="false"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="mamfd5"
            class="mam-adv__screen mam-adv__screen--05"
          >
          </media-image>
          <p class="mam-adv__legend mam-adv__legend--bottom">
            Warenkorb
          </p>
        </div>
      </div>

      <div class="mam-adv__screen mam-adv__screen--06">
        <media-image
          v-bind:url="this.mediasPath+'designs/mammut_d_06_1.jpg'"
          v-bind:title="'Finales Design'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="mamfd61"
        >
        </media-image>
        <media-image
          v-bind:url="this.mediasPath+'designs/mammut_d_06_2.jpg'"
          v-bind:title="'Finales Design'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="mamfd62"
        >
        </media-image>
      </div>

      <div class="mam-adv__screen mam-adv__screen--07">
        <media-image
          v-bind:url="this.mediasPath+'designs/mammut_d_07.jpg'"
          v-bind:title="'Finales Design'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="mamfd7"
        >
        </media-image>
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
          datas.url = this.mediasPath+'deco_01_hd.png';
          datas.hd = 1;
        } else {
          datas.url = this.mediasPath+'deco_01.png';
          datas.hd = 2;
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

    .project__meta-title,
    .project__title,
    .project__pick-title {
      color: var(--c-title);
    }

    .media-image {
      --outline-final: 1px solid rgba(255, 255, 255, 0.1);
    }
  }

  .mam-deco-bg {
    position: absolute;

    &--1 {
      --s-translateYAnimateIn: 0;

      z-index: 200;
      width: 65%;
      right: 0;
      top: 0;
    }
  }

  .mam-intro {
    padding-bottom: calc(var(--s-gutter) * 1.5);

    &__img {
      position: absolute;
      z-index: -100;
      width: 140%;
      transform: translate(-30%, -35%);
    }
  }

  .mam-adv {
    &__left {
      flex-basis: 50%;
      box-sizing: border-box;
      padding-right: calc(var(--s-gutter) * 2);
    }

    &__right {
      flex-basis: 50%;
      position: relative;
    }

    &__deco {
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: calc(var(--s-gutter) * -2);
      height: 500px;
      background-size: cover;
      background-position: center top;

      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 75%;
        left: 0;
        bottom: 0;
        background: linear-gradient(0deg, rgba(34, 34, 34, 1) 0%, rgba(34, 34, 34, 0) 100%);
      }
    }

    &__screen {
      margin-top: calc(var(--s-gutter) * 2);

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
          background: linear-gradient(0deg, rgba(34, 34, 34, 1) 0%, rgba(34, 34, 34, 0) 100%);
        }
      }

      &--05 {
        margin-top: calc(var(--s-gutter) * 3);
      }
    }

    &__legend {
      font-size: var(--s-text-small);
      width: 35%;
      margin-bottom: 2em;

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
    padding-top: var(--s-gutter);
    text-align: center;

    &__title {
      @include anti-aliased();

      margin-bottom: calc(var(--s-gutter) * 0.75);

      @include viewport('mobile-s') {
        margin-top: var(--s-gutter);
      }
    }

    .project__mobile-thumb {
      --box-shadow: none;

      position: relative;
      z-index: 101;
    }
  }

</style>
