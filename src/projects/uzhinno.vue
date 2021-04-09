
<template>
  <project
    v-if="this.isMounted"
    class="uzh"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <template
      v-slot:preheader
      v-bind:mediasPath="mediasPath"
      v-bind:loadNextImage="loadNextImage"
    >
       <deco-image
        v-bind:url="mediasPath+'deco.jpg'"
        v-bind:autoLoad="false"
        v-on:loaded="loadNextImage"
        ref="uzhDeco"
        class="uzh-deco animate-in animate-in__s1"
      >
      </deco-image>

      <div class="uzh-background"></div>
    </template>

    <div class="project__cols project__intro uzh-intro">
      <div class="project__col-left uzh-intro__left">
        <deco-image
          v-if="this.isMounted"
          v-bind:url="this.introDatas.url"
          v-bind:hdRatio="this.introDatas.hd"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="uzhIntro"
          class="uzh-intro__img"
        >
        </deco-image>
      </div>
      <div class="project__col-right">
        <p class="project__lead">
          Der UZH Innovation Hub ist seit 2018 Drehscheibe für Innovation und Entrepreneurship an der Universität Zürich.
        </p>
        <div class="project__desc uzh-intro__desc">
          <p>
            Er beschleunigt als Katalysator die Weiterentwicklung neuer Erfindungen und Ideen und stärkt den Transfer von innovativer Forschung und Lehre in Wirtschaft und Gesellschaft.
          </p>
          <p>
	          Eyekon wurde damit beauftragt, ein Key-Visual und eine interaktive Präsentation zu kreieren, um die Ziele des Kompetenzzentrums und die verfügbaren Mittel zu vermitteln und so Studierende und Forschende unter anderem bei der Gründung von Start-Ups zu unterstützen.
          </p>
        </div>
      </div>
    </div>

    <section class="project__section project__section--padding-2x project__section--colored project__cols uzh-re">
      <div class="project__col-left uzh-re__desc">
        <div class="project__pick uzh-re__pick">
          <h2 class="project__pick-title">
            Abstrakte Bildwelt &amp; Interaktivität
          </h2>
          <div class="project__pick-desc">
            <p>
              Um den Hub als Innovationsbeschleuniger darzustellen, wurde eine abstrakte, minimalistische Bildsprache gewählt.
            </p>
            <p>
              Das Key-Visual sollte in 3D (three.js) animiert werden und sich ständig weiterentwickeln, während der Benutzer mit der Präsentation interagiert, um einen innovativen, interaktiven und lebendigen Touch zu vermitteln.
            </p>
            <p>
              Während der Recherche-Phase wurde mit verschiedenen Konzepten experimentiert, um die verschiedenen Elementen der Story attraktiv darzustellen.
            </p>
          </div>
        </div>
      </div>
      <div class="project__col-right uzh-re__video-01">
        <media-video
          v-bind:url="this.mediasPath+'research/uzh_re_00.mp4'"
          v-bind:poster="this.mediasPath+'research/uzh_re_00.jpg'"
          v-bind:autoplay="true"
          v-bind:isvideo="true"
          v-bind:id="'uzh-re-0'"
          ref="uzh-re-0"
          class="uzh-re__video-el observed"
        >
        </media-video>
      </div>
      <div class="project__col-left uzh-re__video-02">
        <media-video
          v-bind:url="this.mediasPath+'research/uzh_re_01.mp4'"
          v-bind:poster="this.mediasPath+'research/uzh_re_01.jpg'"
          v-bind:autoplay="true"
          v-bind:isvideo="true"
          v-bind:id="'uzh-re-1'"
          ref="uzh-re-1"
          class="uzh-re__video-el observed"
        >
        </media-video>
      </div>
      <div class="project__col-right uzh-re__video-03">
        <media-video
          v-bind:url="this.mediasPath+'research/uzh_re_02.mp4'"
          v-bind:poster="this.mediasPath+'research/uzh_re_02.jpg'"
          v-bind:autoplay="true"
          v-bind:isvideo="true"
          v-bind:id="'uzh-re-2'"
          ref="uzh-re-2"
          class="uzh-re__video-el observed"
        >
        </media-video>
      </div>
    </section>

    <section class="project__section project__section--padding-2x project__section--colored project__cols uzh-proto">
      <div class="project__col-right uzh-proto__desc is-selection-normal">
        <div class="project__pick">
          <h2 class="project__pick-title uzh-proto__title">
            Finaler Prototyp
          </h2>
          <div class="project__pick-desc">
            <p>
              Mit der Abnahme des finalen Key-Visuals wurde sogleich ein interaktiver Prototyp erstellt.
            </p>
            <p>
              Die Hauptidee besteht darin, einen Kern aus Forschung und Innovation (schwarze Punkte) darzustellen und dessen Ergebnisse und Fortschritte nach aussen zu tragen, in die Gesellschaft und Wirtschaft. Die vier Farben stellen dabei die vier Aktionsfelder des Innovation Hubs dar.
            </p>
          </div>
        </div>
      </div>
      <div class="project__col-full uzh-proto__video">
        <media-video
          v-bind:url="this.mediasPath+'proto/uzh_proto.mp4'"
          v-bind:poster="this.mediasPath+'proto/uzh_proto.jpg'"
          v-bind:autoplay="true"
          v-bind:isvideo="true"
          v-bind:id="'uzh-proto'"
          ref="uzh-proto"
          class="uzh-proto__video-el observed"
        >
        </media-video>
      </div>
      <div class="uzh-proto__cta">
        <div class="uzh-proto__cta-container">
          <a href="https://files.daviddarx.com/works/addons/uzh-inno/prototype/" target="_blank" class="cta cta--small">Prototyp online anschauen</a>
        </div>
      </div>
    </section>

    <section class="project__section project__section--padding-none uzh-story">
      <div class="project__col-right uzh-story__desc is-selection-normal">
        <div class="project__pick">
          <h2 class="project__pick-title uzh-story__title">
            Storyboarding
          </h2>
          <div class="project__pick-desc">
            <p>
              Auf Basis der Visuals wurden in Zusammenarbeit mit dem UZH-Team verschiedene Storyboards ausgearbeitet, um Schritt für Schritt die Funktionen und Ziele des Hubs unter dem Leitsatz «Let’s bring Innovation to Life» zu veranschaulichen.
            </p>
          </div>
        </div>
      </div>
      <div class="project__col-full uzh-story__screens">
        <media-image
          v-bind:url="this.mediasPath+'screens/uzh_00.jpg'"
          v-bind:title="'Storyboard'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:centered="false"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="uzhscreen0"
          class="uzh-story__screen uzh-story__screen--0"
        >
        </media-image>
        <media-image
          v-bind:url="this.mediasPath+'screens/uzh_01.jpg'"
          v-bind:title="'Storyboard'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:centered="false"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="uzhscreen1"
          class="uzh-story__screen uzh-story__screen--1"
        >
        </media-image>
        <media-image
          v-bind:url="this.mediasPath+'screens/uzh_02.jpg'"
          v-bind:title="'Storyboard'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:centered="false"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="uzhscreen2"
          class="uzh-story__screen uzh-story__screen--2"
        >
        </media-image>
        <media-image
          v-bind:url="this.mediasPath+'screens/uzh_03.jpg'"
          v-bind:title="'Storyboard'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:centered="false"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="uzhscreen3"
          class="uzh-story__screen uzh-story__screen--3"
        >
        </media-image>
        <media-image
          v-bind:url="this.mediasPath+'screens/uzh_04.jpg'"
          v-bind:title="'Storyboard'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:centered="false"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="uzhscreen4"
          class="uzh-story__screen uzh-story__screen--4"
        >
        </media-image>
        <media-image
          v-bind:url="this.mediasPath+'screens/uzh_05.jpg'"
          v-bind:title="'Storyboard'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:centered="false"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="uzhscreen5"
          class="uzh-story__screen uzh-story__screen--5"
        >
        </media-image>
        <media-image
          v-bind:url="this.mediasPath+'screens/uzh_06.jpg'"
          v-bind:title="'Storyboard'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:centered="false"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="uzhscreen6"
          class="uzh-story__screen uzh-story__screen--6"
        >
        </media-image>
        <media-image
          v-bind:url="this.mediasPath+'screens/uzh_07.jpg'"
          v-bind:title="'Storyboard'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:centered="false"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="uzhscreen7"
          class="uzh-story__screen uzh-story__screen--7"
        >
        </media-image>
        <media-image
          v-bind:url="this.mediasPath+'screens/uzh_08.jpg'"
          v-bind:title="'Storyboard'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:centered="false"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="uzhscreen8"
          class="uzh-story__screen uzh-story__screen--8"
        >
        </media-image>
        <media-image
          v-bind:url="this.mediasPath+'screens/uzh_09.jpg'"
          v-bind:title="'Storyboard'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:centered="false"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="uzhscreen9"
          class="uzh-story__screen uzh-story__screen--9"
        >
        </media-image>
        <media-image
          v-bind:url="this.mediasPath+'screens/uzh_10.jpg'"
          v-bind:title="'Storyboard'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:centered="false"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="uzhscreen10"
          class="uzh-story__screen uzh-story__screen--10"
        >
        </media-image>
        <media-image
          v-bind:url="this.mediasPath+'screens/uzh_11.jpg'"
          v-bind:title="'Storyboard'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:centered="false"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="uzhscreen11"
          class="uzh-story__screen uzh-story__screen--11"
        >
        </media-image>
      </div>
    </section>

    <section class="project__section project__section--padding-2x project__section--colored uzh-fp">
      <h2 class="project__pick-title uzh-fp__title">
        Finale Präsentation
      </h2>
      <div class="uzh-fp__video">
        <media-video
          v-bind:url="this.mediasPath+'fp/uzh_fp_1060_4mbs.mp4'"
          v-bind:poster="this.mediasPath+'fp/uzh_fp.jpg'"
          v-bind:autoplay="false"
          v-bind:isvideo="true"
          v-bind:id="'uzh-fp'"
          ref="uzh-fp"
          class="uzh-fp__video-el observed"
        >
        </media-video>
      </div>
    </section>

    <section class="project__section project__section--padding-none project__cols uzh-ctx">
      <div class="project__col-left uzh-ctx__desc">
        <div class="project__pick">
          <h2 class="project__pick-title">
            Kontext
          </h2>
          <div class="project__pick-desc">
            <p>
              Die Präsentation wurde schliesslich in die Homepage des Innovation Hub integriert, und das Key-Visual wurde fürs Website-Skinning verwendet.
            </p>
            <div class="uzh-ctx__links">
              <a href="https://www.innovation.uzh.ch/" target="_blank" class="cta cta--small uzh-ctx__cta">Projekt online anschauen</a>
              <a href="https://files.daviddarx.com/works/addons/uzh-inno/" target="_blank" class="uzh-ctx__link text-link">Präsentation Standalone</a>
            </div>
          </div>
        </div>
      </div>
      <div class="project__col-right uzh-ctx__video">
        <media-video
          v-bind:url="this.mediasPath+'context/uzh_context.mp4'"
          v-bind:poster="this.mediasPath+'context/uzh_context.jpg'"
          v-bind:autoplay="true"
          v-bind:isvideo="true"
          v-bind:id="'uzh-ctx'"
          ref="uzh-ctx"
          class="uzh-ctx__video-el observed"
        >
        </media-video>
      </div>
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
        mediasPath: "https://files.daviddarx.com/works/static/projects/uzh/"
      }
    },
    computed: {
      introDatas: function () {
        const windowW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let datas = {};

        if (windowW >= 1440 || window.devicePixelRatio > 1) {
          datas.url = this.mediasPath+'montage_storyboard_hd.png';
          datas.hd = 1;
        } else {
          datas.url = this.mediasPath+'montage_storyboard.png';
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

  .uzh {
    --i1-w: 110%;
    --i1-s: 0.85;
    --i1-rx: 11deg;
    --i1-ry: 4deg;
    --i1-rz: 14deg;
    --i1-tx: -8%;
    --i1-ty: 26%;
    --i2-s: 0.9;
    --i2-rx: 10deg;
    --i2-ry: 3deg;
    --i2-rz: 14deg;
    --i2-tx: -10%;
    --i2-ty: 26%;

    @include viewport('desktop') {
      --i1-s: 0.9;
      --i2-s: 0.95;
      --i1-rx: 8deg;
      --i2-rx: 6deg;
      --i1-rz: 10deg;
      --i2-rz: 11deg;
      --i1-tx: -10%;
      --i2-tx: -12%;
      --i1-ty: 60%;
      --i2-ty: 60%;
    }

    @include viewport('tablet') {
      --i1-ty: 10%;
      --i2-ty: 15%;
    }

    @include viewport('tablet-s') {
      --i1-w: 90%;
      --i1-tx: 5%;
      --i2-tx: 7%;
      --i1-ty: 0%;
      --i2-ty: 5%;
    }
  }

  .uzh-deco {
    --w: 60vw;
    --s-translate-x: 10%;
    --s-translate-y: -5%;

    position: absolute;
    z-index: 101;
    top: 0;
    right: 0;
    width: var(--w);
    max-width: 1851px;

    @include viewport('tablet-s') {
      --w: 100vw;
      --s-translate-x: 15%;
      --s-translate-y: -10%;
    }
  }

  .uzh-intro {
    position: relative;

    &__left {
      perspective: 15vw;
      top: 0;
      bottom: 0;

      @include viewport('vertical') {
        transform: translateY(-30%);
      }

      @include viewport('tablet') {
        transform: none;
      }
    }

    &__img {
      position: absolute;
      z-index: 10;
      width: var(--i1-w);
      transform: scale(var(--i1-s)) rotateX(var(--i1-rx)) rotateY(var(--i1-ry)) rotateZ(var(--i1-rz)) translate(var(--i1-tx), var(--i1-ty));
      animation: uzh-intro-anime 10s ease-in-out both infinite;

      @include viewport('tablet-s') {
        position: relative;
        padding-bottom: 20%;
      }
    }

    &__desc {
      padding-bottom: calc(var(--s-gutter) * 1.7);

      p:last-child {
        margin-bottom: 0;
      }
    }
  }

  @keyframes uzh-intro-anime {
    50% {
      transform: scale(var(--i2-s)) rotateX(var(--i2-rx)) rotateY(var(--i2-ry)) rotateZ(var(--i2-rz)) translate(var(--i2-tx), var(--i2-ty));
    }
  }

  .uzh-re {
    --c-background: black;

    position: relative;
    padding-bottom: 0;

    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      width: 100vw;
      height: calc((50vw - var(--s-gutter) * 2 - var(--s-gutter-col)) * 0.5);
      left: 0;
      bottom: 0;
      background-color: white;
    }

    &__desc {
      position: relative;
    }

    &__pick {
      position: absolute;
      bottom: calc(var(--s-gutter) * 2 - var(--s-gutter-col) * 2);
      padding-right: calc(var(--s-gutter) * 2);

      p:last-child {
        margin-bottom: 0;
      }

      @include viewport('tablet') {
        position: relative;
        bottom: auto;
        padding-right: var(--s-gutter);
        padding-bottom: var(--s-gutter);
      }
    }

    &__video-02,
    &__video-03 {
      margin-top: calc(var(--s-gutter-col) * 2);
    }

    &__video-el {
      box-sizing: border-box;
      overflow: hidden;
      outline: 1px solid black;

      video {
        display: block;
      }
    }
  }

  .uzh-proto {
    --c-background: white;
    --s-bg-margin: calc(var(--s-gutter) * -2);

    color: black;
    padding-top: calc(var(--s-gutter) * 2.5);
    padding-bottom: 0;

    &__title {
      @include viewport('mobile-s') {
        padding-top: calc(var(--s-gutter) * 2.5);
      }
    }

    &__desc {
      @include aliased();

      margin-left: 50%;

      p:last-child {
        margin-bottom: 0;
      }

      @include viewport('tablet-s') {
        margin-left: 0;
        flex-basis: 100%;
      }
    }

    &__video {
      position: relative;
      margin-top: calc(var(--s-gutter) * 1.25);
    }

    &__video,
    &__cta {
      &::after {
        content: "";
        position: absolute;
        left: var(--s-bg-margin);
        right: var(--s-bg-margin);
        top: 50%;
        bottom: 0;
        background-color: var(--project-color);
        z-index: -1;
      }
    }

    &__video-el,
    &__cta-container {
      max-width: 1600px;
      margin: 0 auto;
    }

    &__video-el {
      box-sizing: border-box;
      overflow: hidden;
      outline: 1px solid black;

      video {
        display: block;
      }
    }

    &__cta {
      position: relative;
      width: 100%;
      z-index: 1;
      padding-top: var(--s-gutter);

      &::after {
        z-index: -20;
        top: 0;
      }
    }
  }

  .uzh-story {
    position: relative;
    margin-top: calc(var(--s-gutter) * 2);

    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      width: 100%;
      height: calc(var(--s-gutter) * 2);
      bottom: 0;
      background-color: black;

      @include viewport('tablet-s') {
        height: calc(var(--s-gutter) * 1.5);
      }

      @include viewport('mobile-l') {
        height: calc(var(--s-gutter) * 1);
      }
    }

    &__title {
      @include viewport('mobile-s') {
        padding-top: calc(var(--s-gutter) * 2.5);
      }
    }

    &__desc {
      margin-left: 50%;
      padding-right: calc(var(--s-gutter) * 2);

      p:last-child {
        margin-bottom: 0;
      }

      @include viewport('tablet-s') {
        margin-left: 0;
        flex-basis: 100%;
        padding-left: var(--s-gutter);
      }
    }

    &__screens {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: calc(var(--s-gutter-col) * 2);
      margin-top: calc(var(--s-gutter) * 1.25);

      @include viewport('mobile-l') {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }

    &__screen {
      &:nth-child(-n+4) {
        transform: translateX(calc(var(--s-gutter) * 2));

        @include viewport('mobile-l') {
          transform: none;
        }
      }

      &:nth-child(n+9):nth-child(-n+13) {
        transform: translateX(calc(var(--s-gutter) * -2));

        @include viewport('mobile-l') {
          transform: none;
        }
      }
    }
  }

  .uzh-fp {
    padding-bottom: calc(var(--s-gutter) * 4);

    @include viewport('tablet-s') {
      padding-top: calc(var(--s-gutter) * 2);
      padding-bottom: var(--s-gutter);
    }

    &__title {
      text-align: center;
      padding-top: calc(var(--s-gutter) * 1);
      padding-bottom: calc(var(--s-gutter) * 1.75);

      @include viewport('tablet-s') {
        padding-top: 0;
        padding-bottom: var(--s-gutter);
      }

      @include viewport('mobile-s') {
        padding-top: calc(var(--s-gutter) * 1.5);
      }
    }

    &__video {
      padding-bottom: var(--s-gutter);

      @include viewport('mobile-s') {
        padding-bottom: calc(var(--s-gutter) * 2);
      }
    }
  }

  .uzh-ctx {
    @include viewport('tablet-s') {
      padding: var(--s-gutter);
    }

    &__video {
      padding: 0;
      transform: translate(-1px, calc(var(--s-gutter) * -2));

      @include viewport('tablet-s') {
        transform: none;
      }
    }

    &__desc {
      order: 2;
      padding: calc(var(--s-gutter) * 2);

      @include viewport('tablet') {
        padding: calc(var(--s-gutter) * 1.5);
      }

      @include viewport('tablet-s') {
        padding: 0;
        padding-bottom: calc(var(--s-gutter) * 0.5);
      }

      @include viewport('mobile') {
        padding-bottom: calc(var(--s-gutter) * 1);
      }

      @include viewport('mobile-s') {
        padding-top: calc(var(--s-gutter) * 2);
      }
    }

    &__links {
      padding-top: 1em;
    }

    &__cta {
      margin-right: 2em;
      margin-bottom: 2.3em;
    }
  }

</style>

