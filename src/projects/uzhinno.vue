
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
          2018 eingeführt, der UZH Innovation Hub ist die Drehscheibe für Innovation und Unternehmertum an der Universität Zürich.
        </p>
        <div class="project__desc uzh-intro__desc">
          <p>
            Er beschleunigt als Katalysator die Weiterentwicklung von neuen Erfindungen und Ideen und stärkt den Transfer von innovativer Forschung und Lehre in Wirtschaft und Gesellschaft.
          </p>
          <p>
	          Eyekon wurde beauftragt, ein Key-Visual und eine interatkive Präsentation zu kreieren, in der die Ziele des Kompetenzzentrums und die verfügbaren Mittel aufgeführt sind, um Studierende und Forschende unter anderem bei der Gründung von Start-Ups zu unterstützen.
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
              Um den Hub als Innovationsbeschleuniger zu darstellen, wurde  eine abstrakte und minimalistische Bildsprache bevorzugt, die nach Metaphern arbeitet.
            </p>
            <p>
              Das Key-Visual soll in 3D (three.js) animiert sein und sich ständig weiter entwickeln, während der Benutzer die Folien der Präsentation durchsucht. Damit wirkt die Präsentation innovativ, interkativ und lebending.
            </p>
            <p>
              Während der Recherche-Phase wurden verschiedenen Konzepten und Darstellungen experimentiert, um den verschiedenen Elementen der Story attraktiv darzustellen.
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
          <h2 class="project__pick-title">
            Finales Prototyp
          </h2>
          <div class="project__pick-desc">
            <p>
              Sobald das finale Key-Visual mit dem Kunden definiert wurde, haben wir einen interaktiven Prototyp erstellt, der alle Phasen umfasst, in denen die Geschichte des Hubs und der Zweck seiner vier Aktionsfelder erzählt werden können.
            </p>
            <p>
              Die Hauptidee besteht darin, eine Zusammenfassung von Forschung und Innovation (schwarze Punkte) zu darstellen, die durch eine Struktur aus vier Einheiten (farbige Punkte) unterstützt wird, die dazu beitragen, Ergebnisse und Fortschritte nach außen zu übertragen, in die Gesellschaft und in die Wirtschaft.
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
        <a href="https://files.daviddarx.com/works/addons/uzh-inno/prototype/" target="_blank" class="cta cta--small">Prototyp online schauen</a>
      </div>
    </section>

    <section class="project__section project__section--padding-none uzh-story">
      <div class="project__col-right uzh-story__desc is-selection-normal">
        <div class="project__pick">
          <h2 class="project__pick-title">
            Storyboarding
          </h2>
          <div class="project__pick-desc">
            <p>
              Auf dieser Basis haben wir bei der Erstellung des Storyboards mit dem UZH-Team zusammengearbeitet, um Schritt für Schritt die Funktionen und Ziele des Hubs unter dem Leitsatz "Let’s bring Innovation to Life" zu veranschaulichen.
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
          v-bind:url="this.mediasPath+'fp/uzh_fp.mp4'"
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
              Die Präsentation wurde schließlich auf der Homepage des Innovation Hub platziert, und das Key-Visual wurde für den Skin der Website verwendet.
            </p>
            <div class="uzh-ctx__links">
              <a href="https://www.innovation.uzh.ch/" target="_blank" class="cta cta--small uzh-ctx__cta">Projekt online schauen</a>
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
  }

  .uzh-intro {
    position: relative;

    &__left {
      perspective: 15vw;
      top: 0;
      bottom: 0;
    }

    &__img {
      position: absolute;
      z-index: 10;
      width: 117%;
      transform: rotateX(11deg) rotateY(4deg) rotateZ(12deg) translate(-16%, 12%);
      animation: uzh-intro-anime 10s ease-in-out both infinite;

      @include viewport('desktop') {
        // width: 150%;
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
      transform: rotateX(13deg) rotateY(6deg) rotateZ(10deg) translate(-18%, 15%);
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

    &__desc {
      @include aliased();

      margin-left: 50%;

      p:last-child {
        margin-bottom: 0;
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
    }

    &__desc {
      margin-left: 50%;
      padding-right: calc(var(--s-gutter) * 2);

      p:last-child {
        margin-bottom: 0;
      }
    }

    &__screens {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: calc(var(--s-gutter-col) * 2);
      margin-top: calc(var(--s-gutter) * 1.25);
    }

    &__screen {
      &:nth-child(-n+4) {
        transform: translateX(calc(var(--s-gutter) * 2));
      }

      &:nth-child(n+9):nth-child(-n+13) {
        transform: translateX(calc(var(--s-gutter) * -2));
      }
    }
  }

  .uzh-fp {
    padding-bottom: calc(var(--s-gutter) * 4);

    &__title {
      text-align: center;
      padding-top: calc(var(--s-gutter) * 1);
      padding-bottom: calc(var(--s-gutter) * 1.75);

      @include viewport('tablet-s') {
        padding-top: 0;
        padding-bottom: var(--s-gutter);
      }
    }
  }

  .uzh-ctx {
    &__video {
      padding: 0;
      transform: translate(-1px, calc(var(--s-gutter) * -2));
    }

    &__desc {
      order: 2;
      padding: calc(var(--s-gutter) * 2);
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

