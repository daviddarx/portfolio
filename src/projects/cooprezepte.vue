
<template>
  <project
    v-if="this.isMounted"
    class="cooprz"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div class="project__cols project__intro cooprz-intro">
      <div class="project__col-left">
        <deco-image
          v-if="this.isMounted"
          v-bind:url="this.introDatas.url"
          v-bind:hdRatio="this.introDatas.hd"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="imageIntro"
          class="cooprz-intro__img"
        >
        </deco-image>
      </div>
      <div class="project__col-right">
        <p class="project__lead">
          Coop beauftragte Unic mit der Erstellung ihrer ersten Rezeptplattform, dem Vorfahren des aktuellen Foodby.
        </p>
        <div class="project__desc">
          <p>
            Die Plattform war mehr als nur eine Rezeptliste. Sie bot bereits erweiterte Funktionen, mit denen Benutzer beispielsweise ihre eigenen Kochbücher erstellen, ihre Rezepte mit Anmerkungen versehen oder ihre Einkaufslisten erstellen und bearbeiten können.
          </p>
        </div>
      </div>
    </div>

    <section class="project__section project__section--padding-2x project__section--colored cooprz-fd">
      <h2 class="project__pick-title cooprz-fd__title">
        Finales Design
      </h2>
      <div class="cooprz-fd__screen cooprz-fd__screen--01">
        <div class="cooprz-fd__screen-container">
          <media-image
            v-bind:url="this.mediasPath+'designs/cooprz_d_01_1.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="1"
            v-bind:zoomable="true"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="cooprz11"
          >
          </media-image>
          <media-image
            v-bind:url="this.mediasPath+'designs/cooprz_d_01_2.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="1"
            v-bind:zoomable="true"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="cooprz12"
          >
          </media-image>
        </div>
      </div>

      <div class="project__cols cooprz-fd__small-screens">
        <div class="project__col-left">
          <div class="cooprz-fd__screen-container">
            <media-image
              v-bind:url="this.mediasPath+'designs/cooprz_d_02.jpg'"
              v-bind:title="'Finales Design'"
              v-bind:hdRatio="1"
              v-bind:zoomable="true"
              v-bind:centered="false"
              v-bind:autoLoad="false"
              v-on:loaded="this.loadNextImage"
              ref="cooprz2"
              class="cooprz-fd__screen cooprz-fd__screen--02"
            >
            </media-image>
          </div>
          <p class="cooprz-fd__legend cooprz-fd__legend--bottom">
            Erweiterte Suche
          </p>
        </div>
        <div class="project__col-right">
          <div class="cooprz-fd__screen-container">
            <media-image
              v-bind:url="this.mediasPath+'designs/cooprz_d_03.jpg'"
              v-bind:title="'Finales Design'"
              v-bind:hdRatio="1"
              v-bind:zoomable="true"
              v-bind:centered="false"
              v-bind:autoLoad="false"
              v-on:loaded="this.loadNextImage"
              ref="cooprz3"
              class="cooprz-fd__screen cooprz-fd__screen--03"
            >
            </media-image>
          </div>
          <p class="cooprz-fd__legend cooprz-fd__legend--bottom">
            Hinzufügen zu einem Kochbuch im Kachel-Kontext
          </p>
        </div>
      </div>

      <div class="cooprz-fd__screen cooprz-fd__screen--04">
        <div class="cooprz-fd__screen-container">
          <media-image
            v-bind:url="this.mediasPath+'designs/cooprz_d_04_1.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="1"
            v-bind:zoomable="true"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="cooprz41"
          >
          </media-image>
          <media-image
            v-bind:url="this.mediasPath+'designs/cooprz_d_04_2.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="1"
            v-bind:zoomable="true"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="cooprz42"
          >
          </media-image>
        </div>
      </div>

      <div class="project__cols cooprz-fd__small-screens">
        <div class="project__col-left">
          <div class="cooprz-fd__screen-container">
            <media-image
              v-bind:url="this.mediasPath+'designs/cooprz_d_05.jpg'"
              v-bind:title="'Finales Design'"
              v-bind:hdRatio="1"
              v-bind:zoomable="true"
              v-bind:centered="false"
              v-bind:autoLoad="false"
              v-on:loaded="this.loadNextImage"
              ref="cooprz5"
              class="cooprz-fd__screen cooprz-fd__screen--05"
            >
            </media-image>
          </div>
          <p class="cooprz-fd__legend cooprz-fd__legend--bottom">
            Personalisierte Notizen zum Rezept
          </p>
        </div>
        <div class="project__col-right">
          <div class="cooprz-fd__screen-container">
            <media-image
              v-bind:url="this.mediasPath+'designs/cooprz_d_06.jpg'"
              v-bind:title="'Finales Design'"
              v-bind:hdRatio="1"
              v-bind:zoomable="true"
              v-bind:centered="false"
              v-bind:autoLoad="false"
              v-on:loaded="this.loadNextImage"
              ref="cooprz6"
              class="cooprz-fd__screen cooprz-fd__screen--06"
            >
            </media-image>
          </div>
          <p class="cooprz-fd__legend cooprz-fd__legend--bottom">
            Editierbare Einkaufsliste
          </p>
        </div>
      </div>

      <div class="cooprz-fd__screen cooprz-fd__screen--07">
        <div class="cooprz-fd__screen-container">
          <media-image
            v-bind:url="this.mediasPath+'designs/cooprz_d_07.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="1"
            v-bind:zoomable="true"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="cooprz7"
          >
          </media-image>
        </div>
      </div>
    </section>

    <section class="project__section project__section--padding-2x cooprz-rd">
      <h2 class="project__pick-title cooprz-rd__title">
        Responsive Design
      </h2>
      <div class="project__mobile-thumbs">
        <div class="project__mobile-thumb project__mobile-thumb--01">
          <media-image
            v-bind:url="this.mediasPath+'designs/cooprz_m_01.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="1"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="cooprzRd1"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--middle">
          <media-image
            v-bind:url="this.mediasPath+'designs/cooprz_m_02.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="1"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="cooprzRd2"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--right">
          <media-image
            v-bind:url="this.mediasPath+'designs/cooprz_m_03.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="1"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="cooprzRd3"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/cooprz_m_04.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="1"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="cooprzRd4"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--middle project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/cooprz_m_05.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="1"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="cooprzRd5"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--right project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/cooprz_m_06.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="1"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="cooprzRd6"
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
          Art-Direction  – Stefan Weber<br>
          UX  – David Wick
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
        mediasPath: 'https://files.daviddarx.com/works/static/projects/cooprz/',
      }
    },
    computed: {
      introDatas: function () {
        const windowW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let datas = {};

        if (windowW > 1280) {
          datas.url = this.mediasPath+'intro_hd.png';
          datas.hd = 1;
        } else {
          datas.url = this.mediasPath+'intro.png';
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

  .cooprz {
    --c-bg: #f7efe5;
    --c-shadow: 114, 63, 0;

    .close-button {
      --project-color: var(--c-bg);
    }
  }

  .cooprz-intro {
    padding-bottom: calc(var(--s-gutter) * 1.5);

    &__img {
      position: absolute;
      width: 125%;
      transform: translate(-27%, -5%);

      @include viewport('desktop') {
        width: 145%;
        transform: translate(-35%, 1%);
      }

      @include viewport('tablet') {
        width: 135%;
        transform: translate(-35%, -5%);
      }

      @include viewport('tablet-s') {
        position: relative;
        width: 100%;
        transform: translate(-2%, 0);
        margin-bottom: calc(var(--s-gutter) * 0.5);
      }

      @include viewport('mobile-l') {
        margin-top: calc(var(--s-gutter) * 0.5);
      }

      @include viewport('mobile') {
        width: 110%;
        transform: translate(-6%, 0);
        margin-top: calc(var(--s-gutter) * 0.25);
      }

      @include viewport('mobile-s') {
        width: 100%;
        transform: translate(-2%, 0);
        margin-top: calc(var(--s-gutter) * 0.25);
      }
    }
  }

  .cooprz-fd {
    --c-background: var(--c-bg);

    position: relative;
    padding-bottom: 0;

    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      width: 100%;
      height: calc(var(--s-gutter) * 2);
      left: 0;
      bottom: 0;
      background-color: (var(--project-color));
    }

    &__title {
      text-align: center;
      margin-bottom: calc(var(--s-gutter) * 1.6);

      @include viewport('tablet') {
        margin-top: 0;
        margin-bottom: calc(var(--s-gutter) * 1);
      }

      @include viewport('tablet-s') {
        padding-top: calc(var(--s-gutter) * 0.25);
      }

      @include viewport('mobile-l') {
        padding-top: calc(var(--s-gutter) * 0.75);
      }
    }

    &__screen {
      max-width: 1334px;
      margin: 0 auto;
      margin-top: calc(var(--s-gutter) * 2);

      @include viewport('tablet-s') {
        margin-top: calc(var(--s-gutter) * 1);
      }

      @include viewport('mobile-l') {
        margin-top: var(--s-gutter);
      }

      @include viewport('mobile-s') {
        margin-top: calc(var(--s-gutter) * 2);
      }

      &--01 {
        margin-top: 0;
      }

      &--04,
      &--07 {
        position: relative;

        &::after {
          content: "";
          position: absolute;
          z-index: 1;
          width: 100%;
          height: 5%;
          left: 0;
          bottom: 0;
          background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
        }
      }

      &--03,
      &--06 {
        margin-top: calc(var(--s-gutter) * 3);

        @include viewport('tablet-s') {
          margin-top: calc(var(--s-gutter) * 1);
        }
      }
    }

    &__screen-container {
      box-shadow: 0 0 25px rgba(var(--c-shadow), 0.1);
    }

    &__legend {
      @include hyphens();

      font-size: var(--s-text-small);
      margin-top: 1em;
      margin-bottom: 0;
    }
  }

  .cooprz-rd {
    position: relative;
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
      --box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05), 0 15px 10px rgba(0, 0, 0, 0.05);

      position: relative;
      z-index: 101;
    }
  }
</style>
