
<template>
  <project
    v-if="this.isMounted"
  >
    <deco-image
      v-bind:url="this.mediasPath+'cloud.png'"
      class="deco-cloud deco-cloud--1"
    >
    </deco-image>

    <deco-image
      v-bind:url="this.mediasPath+'cloud.png'"
      class="deco-cloud deco-cloud--2"
    >
    </deco-image>

    <div class="project__cols project__intro">
      <div class="project__col-left">
        <deco-image
        v-if="this.isMounted"
        v-bind:url="this.boxHeaderDatas.url"
        v-bind:hdRatio="this.boxHeaderDatas.hd"
        class="box-header"
      >
      </deco-image>
      </div>
      <div class="project__col-right">
        <p class="project__lead">
          Im Jahr 2017 führte Swisscom sein cloud-basiertes Hochsicher-heitsportal ein, zum Austausch vertraulicher Informationen.
        </p>
        <div class="project__desc">
          <p>
            Die SwissTrustRoom-Lösung wurde für Vorstandsmitglieder, Führungs&shy;kräfte oder Projektmanager entwickelt und bietet ein optimales Management vertraulicher Gruppenaufgaben und strategischer Projekte.
          </p>
          <p>
            Eyekon wurde beauftragt, eine Micro-Site zu entwickeln, um das Produkt und seine verschiedenen Vorteile zu präsentieren.
          </p>
        </div>
      </div>
    </div>

    <section class="project__section project__section--padding-2x project__section--colored project__cols section-bw">
      <div class="project__col-left">
        <div class="pick-bw">
          <h2 class="project__pick-title">
            Konzept &amp; Bildwelt
          </h2>
          <p class="project__pick-desc">
            SwissTrustRoom ist sicher. Um Sicherheit als Kernbotschaft zu vermitteln, haben wir nach den ersten Untersuchungen eine Analogie mit einem Safe für die Bildwelt und das Funktionieren des One-Pagers bevorzugt.
          </p>
        </div>
      </div>

      <div class="project__col-right">
      </div>

      <div class="project__col-left project__col-left--inverted thumbs-bw-01">
        <media-image
          v-bind:url="this.mediasPath+'designs/st_l&f_01.jpg'"
          v-bind:title="'Look&Feel Untersuchung'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:centered="false"
          ref="image-bw-01"
          class="project__thumb"
        >
        </media-image>
        <media-image
          v-bind:url="this.mediasPath+'designs/st_l&f_02.jpg'"
          v-bind:title="'Look&Feel Untersuchung'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:centered="false"
          ref="image-bw-02"
          class="project__thumb"
        >
        </media-image>
      </div>

      <div class="project__col-right project__col-right--inverted thumbs-bw-02">
        <media-image
          v-bind:url="this.mediasPath+'designs/st_l&f_03.jpg'"
          v-bind:title="'Look&Feel Untersuchung'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:centered="false"
          ref="image-bw-03"
          class="project__thumb"
        >
        </media-image>
        <media-image
          v-bind:url="this.mediasPath+'designs/st_l&f_04.jpg'"
          v-bind:title="'Look&Feel Untersuchung'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:centered="false"
          ref="image-bw-04"
          class="project__thumb"
        >
        </media-image>
        <deco-image
          v-bind:url="this.mediasPath+'cloud.png'"
          class="deco-cloud deco-cloud--3"
        >
        </deco-image>
      </div>
    </section>

    <section class="project__section project__section--padding-2x project__cols project__cols--reversed section-lf">
      <div class="project__col-left">
        <div class="pick-lf">
          <h2 class="project__pick-title">
            Look &amp; Feel
          </h2>
          <p class="project__pick-desc">
            Da ein Safe weder modern noch digital wirkt, wurde eine abstraktere und grafischere Variante entwickelt, um das Produkt als sicheren Raum in der Cloud zu präsentieren, in dem eine starke Identifizierung nötig ist.
          </p>
        </div>
      </div>
      <div class="project__col-right">
        <deco-image
          v-bind:url="this.boxLFDatas.url"
          v-bind:hdRatio="this.boxLFDatas.hd"
          class="box-lf"
        >
        </deco-image>
      </div>
      <div class="project__col-full">
        <deco-image
          v-bind:url="this.mediasPath+'switches.png'"
          v-bind:hdRatio="2"
          class="switches-lf"
        >
        </deco-image>
      </div>
    </section>

    <section class="project__section project__section--padding-4x project__section--colored section-sc">
      <div class="pick-sc aliased project__cols is-selection-normal">
        <h2 class="project__pick-title project__col-left">
          One-Pager Animation
        </h2>
        <p class="project__pick-desc project__col-right pick-sc__desc">
          Um die Erfahrung zu beleben und einen Überraschungs&shy;effekt hinzu&shy;zufügen, wurde die Analogie zum Safe für den Rahmen der Webseite verwendet und animiert, während der Benutzer die Seite scrollt.
        </p>
      </div>
      <media-video
        v-bind:url="this.mediasPath+'designs/st_4.mp4'"
        v-bind:autoplay="false"
        ref="video-sc"
        class="video-sc"
      >
      </media-video>
    </section>

    <section class="project__section project__section--padding-2x section-fd">
      <h2 class="project__pick-title title-fd">
        Finales Design
      </h2>
      <media-image
        v-bind:url="this.mediasPath+'designs/st_desktop_01.jpg'"
        v-bind:title="'Finales Design'"
        v-bind:hdRatio="2"
        v-bind:zoomable="true"
        ref="image-fd-01"
      >
      </media-image>
      <media-image
        v-bind:url="this.mediasPath+'designs/st_desktop_02.jpg'"
        v-bind:title="'Finales Design'"
        v-bind:hdRatio="2"
        v-bind:zoomable="true"
        ref="image-fd-02"
      >
      </media-image>
      <media-image
        v-bind:url="this.mediasPath+'designs/st_desktop_03.jpg'"
        v-bind:title="'Finales Design'"
        v-bind:hdRatio="2"
        v-bind:zoomable="true"
        ref="image-fd-03"
      >
      </media-image>
      <media-image
        v-bind:url="this.mediasPath+'designs/st_desktop_04.jpg'"
        v-bind:title="'Finales Design'"
        v-bind:hdRatio="2"
        v-bind:zoomable="true"
        ref="image-fd-04"
      >
      </media-image>
    </section>

    <section class="project__section project__section--padding-2x section-rd">
      <h2 class="project__pick-title title-rd">
        Responsive Design
      </h2>
      <div class="thumbs-rd project__mobile-thumbs">
        <div class="project__mobile-thumb project__mobile-thumb--01">
          <media-image
            v-bind:url="this.mediasPath+'designs/st_mobile_01.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="320"
            ref="image-rd-01"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--02">
          <media-image
            v-bind:url="this.mediasPath+'designs/st_mobile_02.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="320"
            ref="image-rd-02"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--03">
          <media-image
            v-bind:url="this.mediasPath+'designs/st_mobile_03.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="320"
            ref="image-rd-03"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--04">
          <media-image
            v-bind:url="this.mediasPath+'designs/st_mobile_04.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="320"
            ref="image-rd-04"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--05">
          <media-image
            v-bind:url="this.mediasPath+'designs/st_mobile_05.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="320"
            ref="image-rd-05"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--06">
          <media-image
            v-bind:url="this.mediasPath+'designs/st_mobile_06.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="320"
            ref="image-rd-06"
          >
          </media-image>
        </div>
      </div>
    </section>

  </project>
</template>

<script>
  import Vue from "vue";
  import Project from '../components/project-detail.vue';
  import DecoImage from '../components/deco-image.vue';
  import MediaImage from '../components/media-image.vue';
  import MediaVideo from '../components/media-video.vue';
  import projectsMixins from '../mixins/projects';

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
        mediasPath: "/projects/st/"
      }
    },
    computed: {
      boxHeaderDatas: function () {
        const windowW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let datas = {};

        if (windowW >= 1280) {
          datas.url = this.mediasPath+'cube_01_hd.png';
          datas.hd = 1;
        } else {
          datas.url = this.mediasPath+'cube_01.png';
          datas.hd = 2;
        }

        return datas;
      },
      boxLFDatas: function () {
        const windowW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let datas = {};

        if (windowW >= 1280) {
          datas.url = this.mediasPath+'cube_02_hd.png';
          datas.hd = 1;
        } else {
          datas.url = this.mediasPath+'cube_02.png';
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

  .deco-cloud {
    --opacity: 0.5;

    position: absolute;
    animation: cloud 10s ease-in-out infinite alternate;

    &--1 {
      --s-decal-x: 10%;

      width: 75%;
      top: calc(var(--s-gutter) * -3);
      left: -35%;

      @include viewport('tablet-s') {
        top: calc(var(--s-gutter) * -6);
      }
    }

    &--2 {
      --s-decal-x: 3%;

      width: 100%;
      top: calc(var(--s-gutter) * -5);
      left: 35%;

      @include viewport('tablet-s') {
        top: calc(var(--s-gutter) * -8);
      }
    }

    &--3 {
      --s-decal-x: -5%;

      width: 200%;
      bottom: -20%;
      left: 0%;
    }
  }

  @keyframes cloud {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(var(--s-decal-x));
    }
  }

  .box-header {
    position: absolute;
    width: 190%;
    margin-left: -45%;
    margin-top: calc(var(--s-gutter) * 1.1);

    @include viewport('tablet-s') {
      position: relative;
      width: 150%;
      margin-left: 0;
      margin-top: 3%;
      margin-bottom: 3%;
      transform: translateX(-16%);
    }

    @include viewport('mobile') {
      width: 250%;
      margin-bottom: 1%;
      transform: translateX(-30.25%);
    }
  }

  .section-bw {
    --s-bg-margin-bottom: calc(var(--s-gutter) * 2);

    padding-bottom: 0;
  }

  .pick-bw {
    padding-right: var(--s-gutter);
    padding-bottom: calc(var(--s-gutter) * 0.5);

    @include viewport('desktop') {
      padding-bottom: calc(var(--s-gutter) * 0.15);
    }

    @include viewport('tablet-s') {
      padding-right: 0;
    }
  }

  .thumbs-bw-01,
  .thumbs-bw-02 {
    .project__thumb {
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    }
  }

  .thumbs-bw-01 {
    order: 3;

    .project__thumb {
      transform: translateY(calc(-100% - var(--s-gutter-col) * 2));

      @include viewport('tablet') {
        transform: translateY(calc(-65% - var(--s-gutter-col) * 2));
      }

      @include viewport('tablet-s') {
        transform: none;
      }
    }
  }

  .thumbs-bw-02 {
    order: 2;
  }

  .section-lf {
    --c-background: transparent;
  }

  .pick-lf {
    margin-bottom: 102%;

    @include viewport('tablet-s') {
      margin-bottom: 0;
      margin-top: var(--s-gutter);
    }
  }

  .box-lf {
    position: absolute;
    width: 130vw;
    margin-left: -70%;
    margin-top: 20%;

    @include viewport('desktop') {
      margin-top: 30%;
    }

    @include viewport('tablet') {
      margin-top: 40%;
    }

    @include viewport('tablet-s') {
      position: relative;
      width: 180%;
      margin-left: 0;
      margin-top: 8%;
      transform: translateX(-16%);
    }

    @include viewport('tablet-s') {
      width: 300%;
      margin-top: 8%;
      transform: translateX(-24.75%);
    }
  }

  .switches-lf {
    width: 100%;
    max-width: 1116px;
    position: relative;
    margin: 0 auto;
    margin-top: calc(var(--s-gutter) * 0.5);

    @include viewport('desktop') {
      margin-top: calc(var(--s-gutter) * 1);
    }

    @include viewport('tablet') {
      margin-top: calc(var(--s-gutter) * 1.5);
    }

    @include viewport('tablet-s') {
      margin-top: calc(var(--s-gutter) * 0.5);
    }
  }

  .section-sc {
    --c-background: white;

    padding-bottom: 0;
    padding-top: calc(var(--s-gutter) * 2);

    @include viewport('tablet-s') {
      padding-top: var(--s-gutter);
    }
  }

  .pick-sc {
    color: black;
    max-width: 1440px;
    margin: 0 auto;

    @include viewport('tablet-s') {
      display: block;
    }

    &__desc {
      text-indent: 0;
      padding-top: 0;
      margin-top: -0.4em;
      margin-bottom: calc(var(--s-gutter) * 1);

      @include viewport('tablet-s') {
        padding-top: 1em;
        margin-top: 0;

        @include text-indent();
      }
    }
  }

  .video-sc {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      z-index: 0;
      width: 100vw;
      height: 50%;
      background-color: var(--project-color);
      bottom: 0;
      left: calc(var(--s-padding) * -1);
    }

    video {
      position: relative;
      z-index: 1;
      box-shadow: 0 0 35px rgba(0, 0, 0, 0.15);
    }
  }

  .section-fd {
    text-align: center;
    margin-top: calc(var(--s-gutter) * 0.8);
    padding-bottom: 0;
  }

  .title-fd {
    margin-bottom: calc(var(--s-gutter) * 1.15);
  }

  .section-rd {
    text-align: center;
    margin-top: calc(var(--s-gutter) * 0.8);
  }

  .title-rd {
    margin-bottom: calc(var(--s-gutter) * 0.75);
  }
</style>

