
<template>
  <project
    v-if="this.isMounted"
    class="ar"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div class="project__cols project__intro intro-ar">
      <div class="project__col-left">
        <deco-image
          v-if="this.isMounted"
          v-bind:url="this.bookIntroDatas.url"
          v-bind:hdRatio="this.bookIntroDatas.hd"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="imageIntro"
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

    <deco-image
      v-bind:url="this.mediasPath+'stars_bg_hd.jpg'"
      v-bind:_="1"
      v-bind:autoLoad="false"
      v-on:loaded="this.loadNextImage"
      ref="imageDeco1"
      class="deco-stars deco-stars--1"
    >
    </deco-image>

    <deco-image
      v-bind:url="this.mediasPath+'stars_bg_hd.jpg'"
      v-bind:hdRatio="1"
      v-bind:autoLoad="false"
      v-on:loaded="this.loadNextImage"
      ref="imageDeco2"
      class="deco-stars deco-stars--2"
    >
    </deco-image>

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
          v-bind:url="this.videosPath+'ar_scenes_overview.mp4'"
          v-bind:poster="this.videosPath+'ar_scenes_overview.jpg'"
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
              AstroRara bietet auch gleichzeitig Zugriff auf die Originalveröffentlichungen auf der <a href="https://www.e-rara.ch/" target="_blank" class="text-link">e-rara</a> Plattform der ETH.
            </p>
          </div>
        </div>
      </div>

      <div class="project__col-right project__col-right--inverted col-ctx--r">
        <deco-image
          v-bind:url="this.mediasPath+'stars_bg_hd.jpg'"
          v-bind:hdRatio="1"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="imageDeco3"
          class="deco-stars deco-stars--3"
        >
        </deco-image>
        <deco-image
          v-if="this.isMounted"
          v-bind:url="this.contextImageDatas.url"
          v-bind:hdRatio="this.contextImageDatas.hd"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="imageCtx"
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
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="imageLogo1"
            class="logo-ar"
          >
        </div>
        <div class="project__col-third">
          <deco-image
            v-bind:url="this.mediasPath+'designs/logo_02.jpg'"
            v-bind:hdRatio="2"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="imageLogo2"
            class="logo-ar"
          >
        </div>
        <div class="project__col-third">
          <deco-image
            v-bind:url="this.mediasPath+'designs/logo_03.jpg'"
            v-bind:hdRatio="2"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="imageLogo3"
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
        v-bind:autoLoad="false"
        v-on:loaded="this.loadNextImage"
        ref="imageBalls"
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
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="image-fd-01"
          >
          </media-image>
          <p class="desc-fd-ar">
            <span class="number-fd-ar">01</span>
            Splash Screen
          </p>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--middle">
          <media-image
            v-bind:url="this.mediasPath+'designs/ar_02.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="image-fd-02"
          >
          </media-image>
          <p class="desc-fd-ar">
            <span class="number-fd-ar">02</span>
            Einführung
          </p>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--right">
          <media-image
            v-bind:url="this.mediasPath+'designs/ar_03.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="image-fd-03"
          >
          </media-image>
          <p class="desc-fd-ar">
            <span class="number-fd-ar">03</span>
            Übersicht
          </p>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/ar_04.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="image-fd-04"
          >
          </media-image>
          <p class="desc-fd-ar">
            <span class="number-fd-ar">04</span>
            Interaktionsansicht
          </p>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--middle project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/ar_05.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="image-fd-05"
          >
          </media-image>
          <p class="desc-fd-ar">
            <span class="number-fd-ar">05</span>
            Interaktion
          </p>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--right project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/ar_06.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="image-fd-06"
          >
          </media-image>
          <p class="desc-fd-ar">
            <span class="number-fd-ar">06</span>
            Interaktion
          </p>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--line-3">
          <media-image
            v-bind:url="this.mediasPath+'designs/ar_07.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="image-fd-07"
          >
          </media-image>
          <p class="desc-fd-ar">
            <span class="number-fd-ar">07</span>
            Zoomansicht
          </p>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--middle project__mobile-thumb--line-3">
          <media-image
            v-bind:url="this.mediasPath+'designs/ar_08.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="image-fd-08"
          >
          </media-image>
          <p class="desc-fd-ar">
            <span class="number-fd-ar">08</span>
            Informationen Overlay
          </p>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--right project__mobile-thumb--line-3">
          <media-image
            v-bind:url="this.mediasPath+'designs/ar_09.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="image-fd-09"
          >
          </media-image>
          <p class="desc-fd-ar">
            <span class="number-fd-ar">09</span>
            Navigation Overlay
          </p>
        </div>
      </div>
      <deco-image
        v-bind:url="this.mediasPath+'stars_bg_hd.jpg'"
        v-bind:hdRatio="1"
        v-bind:autoLoad="false"
        v-on:loaded="this.loadNextImage"
        ref="imageDeco4"
        class="deco-stars deco-stars--4"
      >
      </deco-image>
      <deco-image
        v-bind:url="this.mediasPath+'stars_bg_hd.jpg'"
        v-bind:hdRatio="1"
        v-bind:autoLoad="false"
        v-on:loaded="this.loadNextImage"
        ref="imageDeco5"
        class="deco-stars deco-stars--5"
      >
      </deco-image>
      <deco-image
        v-bind:url="this.mediasPath+'stars_bg_hd.jpg'"
        v-bind:hdRatio="1"
        v-bind:autoLoad="false"
        v-on:loaded="this.loadNextImage"
        ref="imageDeco6"
        class="deco-stars deco-stars--6"
      >
      </deco-image>
    </section>
    <div class="cta-container-ar">
      <a href="https://astrorara.library.ethz.ch/" target="_blank" class="cta cta--small cta-ar">Projekt online anschauen</a>
      <p class="cta-detail-ar">(Optimiert für Smartphones)</p>
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
        mediasPath: 'https://files.daviddarx.com/works/static/projects/ar/',
        videosPath: 'https://files.daviddarx.com/works/videos/'
      }
    },
    computed: {
      bookIntroDatas: function () {
        const windowW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let datas = {};

        if (windowW >= 1600) {
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

        if (windowW >= 1800) {
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
    --s-scale-x: 1;
    --s-top: 0;
    --s-left: 0;
    --s-width: 100%;

    position: absolute;
    z-index: -1;
    width: var(--s-width);
    top: var(--s-top);
    left: var(--s-left);
    transform: scaleX(var(--s-scale-x)) rotate(var(--s-rotate));
    animation: stars 10s ease-in-out infinite alternate;

    &--1 {
      --s-decal-x: -4%;
      --s-rotate: 30deg;
      --s-scale-x: 1;
      --s-top: calc(var(--s-gutter) * -5);
      --s-left: -40%;

      @include viewport('tablet-s') {
        --s-top: calc(var(--s-gutter) * 0.5);
        --s-left: -10%;
        --s-width: 120%;
      }
    }

    &--2 {
      --s-decal-x: -2%;
      --s-rotate: 30deg;
      --s-scale-x: -1;
      --s-top: calc(var(--s-gutter) * -12);
      --s-left: 65%;

      @include viewport('tablet-s') {
        --s-top: calc(var(--s-gutter) * -13);
        --s-left: 60%;
        --s-width: 110%;
      }

      @include viewport('mobile-l') {
        --s-top: calc(var(--s-gutter) * -18);
      }
    }

    &--3 {
      --s-decal-x: -2%;
      --s-rotate: 16deg;
      --s-scale-x: 1;
      --s-top: calc(var(--s-gutter) * -5);
      --s-left: -65%;
      --s-width: 175%;

      z-index: -1;

      @include viewport('desktop') {
        --s-top: calc(var(--s-gutter) * -4);
      }

      @include viewport('tablet') {
        --s-top: calc(var(--s-gutter) * -2);
      }

      @include viewport('tablet-s') {
        --s-top: 0;
        --s-left: -20%;
        --s-width: 130%;
      }
    }

    &--4,
    &--5,
    &--6 {
      --s-decal-x: -3%;
      --s-rotate: -16deg;
      --s-scale-x: 1;
      --opacity: 0.5;
      --s-top: 0;
      --s-left: 0;

      z-index: -10;

      @include viewport('tablet') {
        --s-width: 65%;
        --s-left: 17%;
      }

      @media (min-width: 1600px) {
        --s-width: 75%;
        --s-left: 17%;
      }

      @media (min-width: 1920px) {
        --s-width: 65%;
        --s-left: 20%;
      }
    }

    &--5 {
      --s-rotate: 16deg;
      --s-decal-x: 3%;
      --s-top: 35%;
    }

    &--6 {
      --s-top: auto;

      bottom: 0;
    }
  }

  @keyframes stars {
    from {
      transform: translate(0, 0) scaleX(var(--s-scale-x)) rotate(var(--s-rotate));
    }

    to {
      transform: translate(var(--s-decal-x), var(--s-decal-x)) scaleX(var(--s-scale-x)) rotate(var(--s-rotate));
    }
  }

  .intro-ar {
    padding-bottom: calc(var(--s-gutter) * 3);

    @include viewport('desktop') {
      padding-bottom: calc(var(--s-gutter) * 0.5);
    }

    @include viewport('tablet') {
      padding-bottom: 0;
    }
  }

  .book-intro {
    position: absolute;
    width: 115%;
    margin-left: -25%;
    transform: rotate(-6deg);

    @include viewport('tablet-s') {
      position: relative;
      width: 90%;
      margin: 0 auto;
      margin-top: 5%;
      margin-bottom: 7%;
    }

    @include viewport('mobile-l') {
      width: 100%;
    }
  }

  .section-ow {
    margin-top: calc(var(--s-gutter) * 0.75);
  }

  .col-ow--l {
    flex-basis: 39%;
  }

  .col-ow--r {
    flex-basis: 61%;
  }

  .video-ow {
    --s-t-left: 7%;
    --s-t-top: -25%;

    position: absolute;
    width: 120%;
    max-width: 1440px;
    transform: rotate(-6deg) translate(var(--s-t-left), var(--s-t-top));

    @media (min-width: 2000px) {
      --s-t-left: 12%;
    }

    @include viewport('desktop') {
      --s-t-top: -15%;
    }

    @include viewport('tablet') {
      --s-t-top: -5%;
    }

    @include viewport('tablet-s') {
      --s-t-left: 0;
      --s-t-top: 10%;

      position: relative;
      margin: 0 auto;
      margin-top: 5%;
      margin-bottom: 2%;
      width: 90%;
    }

    @include viewport('mobile-l') {
      width: 100%;
    }
  }

  .section-ctx {
    margin-top: calc(var(--s-gutter) * 2);

    @include viewport('desktop') {
      margin-top: calc(var(--s-gutter) * 0.75);
    }

    @include viewport('tablet') {
      margin-top: 0;
    }
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
    --s-t-left: -25%;
    --s-t-top: -28%;
    --s-width: 120%;

    position: absolute;
    width: var(--s-width);
    transform: translate(var(--s-t-left), var(--s-t-top));

    @include viewport('desktop') {
      --s-t-left: -28%;
      --s-t-top: -25%;
      --s-width: 130%;
    }

    @include viewport('tablet') {
      --s-t-left: -30%;
      --s-t-top: -20%;
      --s-width: 130%;
    }

    @include viewport('tablet-s') {
      --s-t-left: 0;
      --s-t-top: 3%;
      --s-width: 100%;

      position: relative;
      margin: 0 auto;
    }

    @include viewport('mobile') {
      --s-t-left: -3%;
      --s-width: 130%;
    }
  }

  .section-logos {
    padding-bottom: calc(var(--s-padding) * 0.5);
    margin-top: calc(var(--s-gutter) * 0.5);

    @include viewport('desktop-xl') {
      margin-top: calc(var(--s-gutter) * 2);
    }

    @include viewport('desktop') {
      margin-top: 0;
    }
  }

  .logos-ar {
    margin-top: 1em;
  }

  .logo-ar {
    width: 100%;

    @include viewport('tablet-s') {
      margin-top: calc(var(--s-gutter-col) * 2);
    }
  }

  .section-balls {
    margin-top: calc(var(--s-gutter) * 0.25);
    padding-bottom: calc(var(--s-padding) * 0.75);

    @media (min-width: 2000px) {
      width: 1920px;
      box-sizing: border-box;
      margin-left: 50%;
      transform: translateX(-50%);
    }

    @media (min-width: 2200px) {
      padding-left: 0;
    }
  }

  .pick-balls {
    display: flex;
    justify-content: space-between;
    width: 60%;

    &__title {
      padding-right: 4em;
    }

    &__desc {
      margin-top: -1em;
      margin-bottom: calc(var(--s-gutter) * 0.5);

      @include viewport('tablet-s') {
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    @media (min-width: 2200px) {
      width: 65%;
    }

    @include viewport('tablet-s') {
      display: block;
      width: 65%;
    }
  }

  .balls {
    width: 100vw;
    position: relative;
    z-index: -1;
    margin-left: calc(var(--s-padding) * -1);
    margin-top: -12%;

    @media (min-width: 2000px) {
      width: 1920px;
    }

    @media (min-width: 2200px) {
      margin-left: 0;
    }

    @include viewport('tablet-s') {
      width: 130vw;
      margin-left: calc(var(--s-padding) * -1 - 15vw);
      margin-top: -14%;
    }
  }

  .section-fd-ar {
    text-align: center;
    margin-bottom: calc(var(--s-gutter) * 1);
    margin-top: calc(var(--s-gutter) * 0.5);

    @include viewport('desktop-xl') {
      margin-top: calc(var(--s-gutter) * 1);
    }

    @include viewport('tablet') {
      margin-top: 0;
    }

    @include viewport('tablet-s') {
      margin-top: calc(var(--s-gutter) * 1);
    }
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

  .desc-fd-ar {
    font-size: var(--s-text-small);
    text-align: center;
    padding-top: 1.5em;

    @include viewport('desktop-xl') {
      font-size: calc(var(--s-text-small) * 0.75);
    }

    @include viewport('tablet-s') {
      font-size: calc(var(--s-text-small) * 0.75);
    }

    @include viewport('mobile') {
      font-size: var(--s-text-small);
      padding-top: 1em;
    }
  }

  .number-fd-ar {
    @include title;
    @include label-small;

    position: absolute;
    left: var(--s-gutter-col-mid);
    color: var(--c-title);
    margin-top: 0.4em;

    @include viewport('desktop-xl') {
      font-size: calc(var(--s-text-small) * 0.75);
    }

    @include viewport('tablet-s') {
      font-size: calc(var(--s-text-small) * 0.75);
    }

    @include viewport('mobile-l') {
      position: relative;
      left: auto;
      display: block;
    }

    @include viewport('mobile') {
      position: relative;
      display: inline-block;
      padding-right: 0.5em;
      font-size: var(--s-text-small);
    }
  }

  .cta-container-ar {
    padding-top: calc(var(--s-gutter) * 2);
    text-align: center;
  }

  .cta-ar {
    --c-bg: #5477b5;
  }

  .cta-detail-ar {
    font-size: var(--s-text-small);
    margin-top: 2em;
  }
</style>

