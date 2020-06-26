
<template>
  <project
    v-if="this.isMounted"
    class="ar"
  >
    <deco-image
      v-bind:url="this.mediasPath+'stars_bg_hd.jpg'"
      class="deco-stars deco-stars--1"
    >
    </deco-image>

    <deco-image
      v-bind:url="this.mediasPath+'stars_bg_hd.jpg'"
      class="deco-stars deco-stars--2"
    >
    </deco-image>

    <div class="project__cols project__intro intro-ar">
      <div class="project__col-left">
        <deco-image
          v-if="this.isMounted"
          v-bind:url="this.bookIntroDatas.url"
          v-bind:hdRatio="this.bookIntroDatas.hd"
          class="book-intro"
        >
        </deco-image>
      </div>
      <div class="project__col-right">
        <p class="project__lead">
          Die ETH-Bibliothek verfügt über eine Sammlung von mehr als 75.000 Bände an Monografien und Zeitschriften, die zwischen dem 15. und 19. Jahrhundert veröffentlicht wurden.
        </p>
        <div class="project__desc">
          <p>
            Inhaltlicher Kern dieser Sammlung bilden Werke mit astronomischem und mathematischem Inhalt.
          </p>
          <p>
            Eyekon wurde beauftragt, eine Web App zu konzipieren, die der wissenschaftsinteressierten Öffentlichkeit einige dieser seltenen Perlen auf einfache und interaktive Weise präsentiert.
          </p>
        </div>
      </div>
    </div>

    <section class="project__section project__section--padding-2x project__cols section-ow">
      <div class="project__col-left col-ow--l">
        <div class="project__pick">
          <h2 class="project__pick-title">
            Historische Astronomie interaktiv erleben
          </h2>
          <div class="project__pick-desc">
            <p>
              Haben Sie sich auch schon gefragt, wie Forscher früher Himmelsereignisse beobachteten und dokumentierten?
            </p>
            <p>
              AstroRara zeigt, wie in alten und seltenen Drucken dargestellte Abbildungen und Instrumente ursprünglich zur Nutzung gedacht waren.
            </p>
            <p>
	            Mittels touch-interaktiver Animation erhalten die digitalen Illustrationen eine neue Dimension, und dadurch einen Mehrwert gegenüber den physischen Originalen.
            </p>
          </div>
        </div>
      </div>

      <div class="project__col-right col-ow--r">
        <media-video
          v-bind:url="this.mediasPath+'scenes_overview.mp4'"
          v-bind:autoplay="true"
          v-bind:isvideo="true"
          v-bind:id="'video-ow'"
          ref="video-ow"
          class="video-ow observed"
        >
        </media-video>
      </div>
    </section>

    <section class="project__section project__section--padding-2x project__cols section-ctx">
      <div class="project__col-left project__col-left--inverted col-ctx--l">
        <div class="project__pick">
          <h2 class="project__pick-title">
            Kontextualisierung
          </h2>
          <div class="project__pick-desc">
            <p>
              Dazu liefern ergänzende Texte zu Autoren und Werken zusätzliche Hintergrundinformationen, auch verfügbar zum Anhören als Audio-File. So hat der User die Möglichkeit, mehr über die Werke zu erfahren, während er/sie bedient.
            </p>
            <p>
              AstroRara bietet auch gleichzeitig Zugriff auf die Originalveröffentlichungen auf der <a href="https://www.e-rara.ch/" target="_blank" class="text-link">e-rara Plattform</a> der ETH.
            </p>
          </div>
        </div>
      </div>

      <div class="project__col-right project__col-right--inverted col-ctx--r">
        <deco-image
          v-bind:url="this.mediasPath+'stars_bg_hd.jpg'"
          class="deco-stars deco-stars--3"
        >
        </deco-image>
        <deco-image
          v-if="this.isMounted"
          v-bind:url="this.contextImageDatas.url"
          v-bind:hdRatio="this.contextImageDatas.hd"
          class="image-ctx"
        >
        </deco-image>
      </div>
    </section>

    <section class="project__section project__section--padding-2x section-logos">
      <div class="project__pick">
        <h2 class="project__pick-title">
          Logo entwürfe
        </h2>
      </div>
      <div class="project__cols project__cols--third logos-ar">
        <div class="project__col-third">
          <deco-image
            v-bind:url="this.mediasPath+'designs/logo_01.jpg'"
            v-bind:hdRatio="2"
            class="logo-ar"
          >
        </div>
        <div class="project__col-third">
          <deco-image
            v-bind:url="this.mediasPath+'designs/logo_02.jpg'"
            v-bind:hdRatio="2"
            class="logo-ar"
          >
        </div>
        <div class="project__col-third">
          <deco-image
            v-bind:url="this.mediasPath+'designs/logo_03.jpg'"
            v-bind:hdRatio="2"
            class="logo-ar"
          >
        </div>
      </div>
    </section>

    <section class="project__section project__section--padding-2x section-balls">
      <div class="pick-balls">
        <h2 class="project__pick-title pick-balls__title">
          Übersicht
        </h2>
        <div class="project__pick-desc pick-balls__desc">
          <p>
            Um Werke in sehr unterschiedlichen Formaten homogen präsentieren zu können, wurden die verschiedenen Illustrationen in Kugeln eingekapselt, als Erinnerung an Planeten und Perlen.
          </p>
        </div>
      </div>
      <deco-image
        v-bind:url="this.ballsDatas.url"
        v-bind:hdRatio="this.ballsDatas.hd"
        class="balls"
      >
    </section>

    <section class="project__section section-fd-ar">
      <h2 class="project__pick-title title-fd-ar">
        Finales Design
      </h2>
      <div class="project__mobile-thumbs thumbs-fd-ar">
        <div class="project__mobile-thumb">
          <media-image
            v-bind:url="this.mediasPath+'designs/ar_01.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            ref="image-fd-01"
          >
          </media-image>
          <p class="fd-ar-desc">
            <span class="fd-ar-number">01</span>
            Splash Screen
          </p>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--middle">
          <media-image
            v-bind:url="this.mediasPath+'designs/ar_02.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            ref="image-fd-01"
          >
          </media-image>
          <p class="fd-ar-desc">
            <span class="fd-ar-number">02</span>
            Einführung
          </p>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--right">
          <media-image
            v-bind:url="this.mediasPath+'designs/ar_03.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            ref="image-fd-01"
          >
          </media-image>
          <p class="fd-ar-desc">
            <span class="fd-ar-number">03</span>
            Übersicht
          </p>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/ar_04.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            ref="image-fd-01"
          >
          </media-image>
          <p class="fd-ar-desc">
            <span class="fd-ar-number">04</span>
            Interaktionsansicht
          </p>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--middle project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/ar_05.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            ref="image-fd-01"
          >
          </media-image>
          <p class="fd-ar-desc">
            <span class="fd-ar-number">05</span>
            Interaktion
          </p>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--right project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/ar_06.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            ref="image-fd-01"
          >
          </media-image>
          <p class="fd-ar-desc">
            <span class="fd-ar-number">06</span>
            Interaktion
          </p>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--line-3">
          <media-image
            v-bind:url="this.mediasPath+'designs/ar_07.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            ref="image-fd-01"
          >
          </media-image>
          <p class="fd-ar-desc">
            <span class="fd-ar-number">07</span>
            Zoomansicht
          </p>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--middle project__mobile-thumb--line-3">
          <media-image
            v-bind:url="this.mediasPath+'designs/ar_08.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            ref="image-fd-01"
          >
          </media-image>
          <p class="fd-ar-desc">
            <span class="fd-ar-number">08</span>
            Informationen Overlay
          </p>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--right project__mobile-thumb--line-3">
          <media-image
            v-bind:url="this.mediasPath+'designs/ar_09.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            ref="image-fd-01"
          >
          </media-image>
          <p class="fd-ar-desc">
            <span class="fd-ar-number">09</span>
            Navigation Overlay
          </p>
        </div>
      </div>
      <deco-image
        v-bind:url="this.mediasPath+'stars_bg_hd.jpg'"
        class="deco-stars deco-stars--4"
      >
      </deco-image>
      <deco-image
        v-bind:url="this.mediasPath+'stars_bg_hd.jpg'"
        class="deco-stars deco-stars--5"
      >
      </deco-image>
      <deco-image
        v-bind:url="this.mediasPath+'stars_bg_hd.jpg'"
        class="deco-stars deco-stars--6"
      >
      </deco-image>
    </section>
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
        mediasPath: "/projects/ar/"
      }
    },
    computed: {
      bookIntroDatas: function () {
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
      contextImageDatas: function () {
        const windowW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let datas = {};

        if (windowW >= 1441) {
          datas.url = this.mediasPath+'informations_hd.png';
          datas.hd = 1;
        } else {
          datas.url = this.mediasPath+'informations.png';
          datas.hd = 2;
        }

        return datas;
      },
      ballsDatas: function () {
        const windowW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let datas = {};

        if (windowW >= 1441) {
          datas.url = this.mediasPath+'balls_hd.jpg';
          datas.hd = 1;
        } else {
          datas.url = this.mediasPath+'balls.jpg';
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

  .project__header {
    position: relative;
    z-index: 100;
  }

  .ar {
    --c-title: #759bde;

    .project__meta-title,
    .project__title,
    .project__pick-title {
      color: var(--c-title);
    }
  }

  .deco-stars {
    --s-decal-x: 0;
    --s-rotate: 0deg;
    --s-scale: 1;

    position: absolute;
    transform: scaleX(var(--s-scale)) rotate(var(--s-rotate));
    animation: stars 10s ease-in-out infinite alternate;

    &--1 {
      --s-decal-x: -4%;
      --s-rotate: 30deg;
      --s-scale: 1;

      width: 100%;
      top: calc(var(--s-gutter) * -5);
      left: -40%;
    }

    &--2 {
      --s-decal-x: -2%;
      --s-rotate: 30deg;
      --s-scale: -1;

      width: 100%;
      top: calc(var(--s-gutter) * -12);
      left: 65%;
    }

    &--3 {
      --s-decal-x: -2%;
      --s-rotate: 16deg;
      --s-scale: 1;

      width: 175%;
      top: calc(var(--s-gutter) * -5);
      left: -65%;
      z-index: -1;
    }

    &--4,
    &--5,
    &--6 {
      --s-decal-x: -3%;
      --s-rotate: -16deg;
      --s-scale: 1;
      --opacity: 0.5;

      width: 100%;
      top: 0;
      left: 0;
      z-index: -10;
    }

    &--5 {
      --s-rotate: 16deg;

      top: 35%;
    }

    &--6 {
      top: auto;
      bottom: 0;
    }
  }

  @keyframes stars {
    from {
      transform: translate(0, 0) scaleX(var(--s-scale)) rotate(var(--s-rotate));
    }

    to {
      transform: translate(var(--s-decal-x), var(--s-decal-x)) scaleX(var(--s-scale)) rotate(var(--s-rotate));
    }
  }

  .intro-ar {
    padding-bottom: calc(var(--s-gutter) * 3);
  }

  .book-intro {
    position: absolute;
    width: 115%;
    margin-left: -25%;
    margin-top: calc(var(--s-gutter) * -0.15);
    transform: rotate(-6deg);
  }

  .col-ow--l {
    flex-basis: 39%;
  }

  .col-ow--r {
    flex-basis: 61%;
  }

  .section-ow {
    margin-top: calc(var(--s-gutter) * 0.75);
  }

  .video-ow {
    position: absolute;
    width: 120%;
    transform: rotate(-6deg) translate(7%, -25%);
  }

  .section-ctx {
    margin-top: calc(var(--s-gutter) * 2);
  }

  .col-ctx--l {
    order: 2;
    flex-basis: 39%;
  }

  .col-ctx--r {
    order: 1;
    flex-basis: 61%;
  }

  .image-ctx {
    position: absolute;
    width: 120%;
    transform: translate(-20%, -28%);
  }

  .section-logos {
    padding-bottom: calc(var(--s-padding) * 0.5);
  }

  .logos-ar {
    margin-top: 1em;
  }

  .logo-ar {
    width: 100%;
  }

  .section-balls {
    margin-top: calc(var(--s-gutter) * 0.25);
    padding-bottom: calc(var(--s-padding) * 0.75);
  }

  .pick-balls {
    display: flex;
    justify-content: space-between;
    width: 60%;

    &__title {
      padding-right: 4em;
    }

    &__desc {
      padding-top: 0;
      margin-top: -0.2em;
      margin-bottom: calc(var(--s-gutter) * 0.5);
    }
  }

  .balls {
    position: relative;
    z-index: -1;
    margin-left: calc(var(--s-padding) * -1);
    margin-top: calc(var(--s-gutter) * -2.5);
  }

  .section-fd-ar {
    text-align: center;
    margin-bottom: calc(var(--s-gutter) * 1);
  }

  .title-fd-ar {
    margin-bottom: calc(var(--s-gutter) * 0.75);
  }

  .thumbs-fd-ar {
    --s-gutter-col-mid: calc(var(--s-gutter-col) * 2);
    --s-mobile: 375px;

    .project__mobile-thumb--line-2 {
      --s-margin-top: calc(var(--s-gutter-col-mid) * 4);
    }

    .project__mobile-thumb--line-3 {
      --s-margin-top: calc(var(--s-gutter-col-mid) * 4);
    }
  }

  .fd-ar-desc {
    font-size: var(--s-text-small);
    text-align: center;
    padding-top: 1.5em;
  }

  .fd-ar-number {
    @include title;
    @include label-small;

    position: absolute;
    left: var(--s-gutter-col-mid);
    color: var(--c-title);
    margin-top: 0.4em;
  }
  </style>

