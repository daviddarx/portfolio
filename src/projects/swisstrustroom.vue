
<template>
  <project
    v-if="this.isMounted"
  >
    <deco-image
      v-bind:url="this.mediasPath+this.decoImages[0].url"
      v-bind:hdRatio="this.decoImages[0].hdRatio"
      class="deco-cloud deco-cloud--1"
    >
    </deco-image>

    <deco-image
      v-bind:url="this.mediasPath+this.decoImages[0].url"
      v-bind:hdRatio="this.decoImages[0].hdRatio"
      class="deco-cloud deco-cloud--2"
    >
    </deco-image>

    <div class="project__cols intro">
      <div class="project__col-left">
        <deco-image
        v-bind:url="this.mediasPath+this.decoImages[1].url"
        v-bind:hdRatio="this.decoImages[1].hdRatio"
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

    <section class="project__section project__cols section-bw">
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
          v-bind:url="this.mediasPath+this.mediaImages[0].url"
          v-bind:title="this.mediaImages[0].title"
          v-bind:hdRatio="this.mediaImages[0].hdRatio"
          v-bind:zoomable="this.mediaImages[0].zoomable"
          v-bind:zoomableGutter="this.mediaImages[0].zoomableGutter"
          ref="image-bw-01"
          class="project__thumb"
        >
        </media-image>
        <media-image
          v-bind:url="this.mediasPath+this.mediaImages[1].url"
          v-bind:title="this.mediaImages[1].title"
          v-bind:hdRatio="this.mediaImages[1].hdRatio"
          v-bind:zoomable="this.mediaImages[1].zoomable"
          v-bind:zoomableGutter="this.mediaImages[1].zoomableGutter"
          ref="image-bw-02"
          class="project__thumb"
        >
        </media-image>
      </div>

      <div class="project__col-right project__col-right--inverted thumbs-bw-02">
        <media-image
          v-bind:url="this.mediasPath+this.mediaImages[2].url"
          v-bind:title="this.mediaImages[2].title"
          v-bind:hdRatio="this.mediaImages[2].hdRatio"
          v-bind:zoomable="this.mediaImages[2].zoomable"
          v-bind:zoomableGutter="this.mediaImages[2].zoomableGutter"
          ref="image-bw-03"
          class="project__thumb"
        >
        </media-image>
        <media-image
          v-bind:url="this.mediasPath+this.mediaImages[3].url"
          v-bind:title="this.mediaImages[3].title"
          v-bind:hdRatio="this.mediaImages[3].hdRatio"
          v-bind:zoomable="this.mediaImages[3].zoomable"
          v-bind:zoomableGutter="this.mediaImages[3].zoomableGutter"
          ref="image-bw-04"
          class="project__thumb"
        >
        </media-image>
        <deco-image
          v-bind:url="this.mediasPath+this.decoImages[0].url"
          v-bind:hdRatio="this.decoImages[0].hdRatio"
          class="deco-cloud deco-cloud--3"
        >
        </deco-image>
      </div>
    </section>

    <section class="project__section project__cols project__cols--reversed section-lf">
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
          v-bind:url="this.mediasPath+this.decoImages[2].url"
          v-bind:hdRatio="this.decoImages[2].hdRatio"
          class="box-lf"
        >
        </deco-image>
      </div>
      <div class="project__col-full">
        <deco-image
          v-bind:url="this.mediasPath+this.decoImages[3].url"
          v-bind:hdRatio="this.decoImages[3].hdRatio"
          class="switches-lf"
        >
        </deco-image>
      </div>
    </section>


    <section class="project__section section-sc">
        <div class="pick-sc aliased project__cols">
          <h2 class="project__pick-title project__col-left">
            One-Pager Animation
          </h2>
          <p class="project__pick-desc project__col-right pick-sc__desc">
            Um die Erfahrung zu beleben und einen Überraschungseffekt hinzu&shy;zufügen, wurde die Analogie zum Safe für den Rahmen der Webseite verwendet und animiert, während der Benutzer die Seite scrollt.
          </p>
        </div>
        <media-video
          v-bind:url="this.mediasPath+this.mediaVideos[0].url"
          v-bind:autoplay="this.mediaVideos[0].autoplay"
          ref="video-sc"
          class="video-sc"
        >
        </media-video>
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
        mediasPath: "/projects/st/",
        decoImages: [
          {
            url:"cloud.png",
            hdRatio: undefined,
          },
          {
            url:"cube_01.png",
            hdRatio: 2,
          },
          {
            url:"cube_02.png",
            hdRatio: 2,
          },
          {
            url:"switches.png",
            hdRatio: 2,
          }
        ],
        mediaImages: [
          {
            title: "Look&Feel Untersuchung",
            url: "designs/st_l&f_01.jpg",
            hdRatio: 2,
            zoomable: true,
            zoomableGutter: true
          },
          {
            title: "Look&Feel Untersuchung",
            url: "designs/st_l&f_02.jpg",
            hdRatio: 2,
            zoomable: true,
            zoomableGutter: true
          },
          {
            title: "Look&Feel Untersuchung",
            url: "designs/st_l&f_03.jpg",
            hdRatio: 2,
            zoomable: true,
            zoomableGutter: true
          },
          {
            title: "Look&Feel Untersuchung",
            url: "designs/st_l&f_04.jpg",
            hdRatio: 2,
            zoomable: true,
            zoomableGutter: true
          }
        ],
        mediaVideos: [
          {
            url: "designs/st_4.mp4",
            autoplay: false,
          }
        ]
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
  .deco-cloud {
    --opacity: 0.5;

    position: absolute;
    animation: cloud 10s ease-in-out infinite alternate;

    &--1 {
      --s-decal-x: 10%;

      width: 75%;
      top: calc(var(--s-gutter) * -3);
      left: -35%;
    }

    &--2 {
      --s-decal-x: 3%;

      width: 100%;
      top: calc(var(--s-gutter) * -5);
      left: 35%;
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
    max-width: 1218px;
    margin-left: -59%;
    margin-top: calc(var(--s-gutter) * 1.1);
  }

  .intro {
    padding-bottom: calc(var(--s-gutter) * 4.5);
  }

  .section-bw {
    --s-bg-margin-bottom: calc(var(--s-gutter) * 2);

    padding-bottom: 0;
  }

  .pick-bw {
    padding-right: var(--s-gutter);
    padding-bottom: calc(var(--s-gutter) * 1.25);
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
    }
  }

  .thumbs-bw-02 {
    order: 2;
  }

  .section-lf {
    --c-background: transparent;

    // margin-top: calc(var(--s-gutter) * 1);
  }

  .pick-lf {
    padding-left: var(--s-gutter);
    margin-bottom: calc(var(--s-gutter) * 10);
  }

  .box-lf {
    position: absolute;
    width: 130vw;
    max-width: 1728px;
    margin-left: -64%;
    margin-top: calc(var(--s-gutter) * 1.5);
  }

  .switches-lf {
    width: 100%;
    max-width: 1116px;
    position: relative;
    margin: 0 auto;
  }

  .section-sc {
    --c-background: white;

    padding-bottom: 0;
  }

  .pick-sc {
    color: black;

    &__desc {
      text-indent: 0;
      padding-top: 0;
      margin-top: -0.4em;
      margin-bottom: calc(var(--s-gutter) * 1);
    }
  }

  .video-sc {
    position: relative;
    outline: 1px solid rgba(0, 0, 0, 0.2);

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
    }
  }
</style>

