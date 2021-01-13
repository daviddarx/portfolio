
<template>
  <project
    v-if="this.isMounted"
    class="compona"
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
        ref="componaDeco"
        class="compona-deco animate-in"
      >
      </deco-image>

      <div class="compona-background"></div>
    </template>

    <div class="project__cols project__intro compona-intro">
      <div class="project__col-left">
        <deco-image
          v-if="this.isMounted"
          v-bind:url="this.introDatas.url"
          v-bind:hdRatio="this.introDatas.hd"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="componaIntro"
          class="compona-intro__img"
        >
        </deco-image>
      </div>
      <div class="project__col-right">
        <p class="project__lead">
          Compona ist ein Distributor für elektronische Komponenten, der seit 40 Jahren Kataloge mit mehr als 1'000 Seiten und 40’000 Produkte druckte.
        </p>
        <div class="project__desc eao-desc">
          <p>
            Zwar existierte bereits ein Web-Katalog, dieser wusste aber aufgrund unzureichender Übersicht und langer Ladezeiten nicht vollends zu überzeugen – weshalb die meisten Kunden weiterhin auf den Print-Wälzer zurückgriffen.
          </p>
          <p>
	          2018 beschlossen sie, ihre Vertriebskanäle vollständig digital zu gestalten. Eyekon und <a href="https://www.intelliact.ch" target="_blank" class="text-link">Intelliact</a> wurden für das Relaunch des Online-Katalog und Webshop beauftragt, um durch bessere Usability und Performance die Print-Version vergessen zu lassen.
          </p>
        </div>
      </div>
    </div>

    <section class="project__section project__section--padding-none compona-pick-1">
      <div class="compona-pick-1__desc">
        <div class="project__pick">
          <h2 class="project__pick-title">
            Live Suche &amp; fortschrittene Filterung
          </h2>
          <div class="project__pick-desc">
            <p>
              Durchgesetzt hat sich ein dynamisches Konzept, das dem User erlaubt, über verschiedene Wege zum Produkt zu gelangen. Eine Direktsuche richtet sich an Kunden, die mit der technischen Materie bereits vertraut sind und konkrete Vorstellungen haben. Sie lässt sowohl eine Volltextsuche als auch die Suche nach Tags zu.
            </p>
            <p>
              Für unerfahrenere Kunden setzen wir auf einen Filter mit innovativer Baumstruktur, die es erlaubt, über Drop-Downs vom gewünschten Hersteller bis zum spezifischen Produkt zu gelangen.
            </p>
          </div>
        </div>
      </div>
      <div class="compona-pick-1__video">
        <media-video
          v-bind:url="this.mediasPath+'videos/compona_screencast_suche_filter.mp4'"
          v-bind:poster="this.mediasPath+'videos/compona_screencast_suche_filter.jpg'"
          v-bind:autoplay="true"
          v-bind:isvideo="true"
          v-bind:id="'compona-pick-1'"
          ref="compona-pick-1"
          class="compona-pick-1__video-el observed"
        >
        </media-video>
      </div>
    </section>

    <section class="project__section project__section--padding-none compona-pick-2">
      <div class="compona-pick-2__desc">
        <div class="project__pick">
          <h2 class="project__pick-title">
            Personaliserte Darstellung &amp; intelligente Datenverknüpfung
          </h2>
          <div class="project__pick-desc">
            <p>
              Die Ergebnisse werden in einer Liste dargestellt, die sich dem Wunsch des Kunden anpassen lässt, indem er beliebig Spalten mit Zusatzinformationen verschiebt, hinzugefügt oder löscht.
            </p>
            <p>
	            Noch weiter steigern wir die Usability mit einer Beratungsfunktion: zu jedem Suchergebnis schlägt der Shop passende Werkzeuge, Komplementär- oder Substitutionsgüter vor.
            </p>
          </div>
        </div>
      </div>
      <div
        class="compona-pick-2__video"
      >
        <media-video
          v-bind:url="this.mediasPath+'videos/compona_screencast_columns_related.mp4'"
          v-bind:poster="this.mediasPath+'videos/compona_screencast_columns_related.jpg'"
          v-bind:autoplay="true"
          v-bind:isvideo="true"
          v-bind:id="'compona-pick-2'"
          ref="compona-pick-2"
          class="compona-pick-2__video-el observed"
        >
        </media-video>
      </div>
    </section>

    <section class="project__section project__section--padding-2x compona-film">
      <div class="project__pick">
        <h2 class="project__pick-title compona-film__title">
          Erklärfilm
        </h2>
      </div>
      <div
        class="compona-film__video"
      >
        <media-video
          v-bind:url="this.mediasPath+'videos/compona_erklaerfilm.mp4'"
          v-bind:poster="this.mediasPath+'videos/compona_erklaerfilm.jpg'"
          v-bind:autoplay="false"
          v-bind:muted="false"
          v-bind:isvideo="true"
          v-bind:id="'compona-film'"
          ref="compona-film"
          class="compona-film__video-el observed"
        >
        </media-video>
      </div>
    </section>

    <section class="project__section project__section--padding-2x project__section--colored compona-fd">
      <h2 class="project__pick-title compona-fd__title">
        Finales Design
      </h2>

      <media-image
        v-bind:url="this.mediasPath+'designs/compona_d_01.jpg'"
        v-bind:title="'Finales Design'"
        v-bind:hdRatio="2"
        v-bind:zoomable="true"
        v-bind:autoLoad="false"
        v-on:loaded="this.loadNextImage"
        class="compona-fd__screen compona-fd__screen--01"
        ref="componaD1"
      >
      </media-image>

      <media-image
        v-bind:url="this.mediasPath+'designs/compona_d_02.jpg'"
        v-bind:title="'Finales Design'"
        v-bind:hdRatio="2"
        v-bind:zoomable="true"
        v-bind:autoLoad="false"
        v-on:loaded="this.loadNextImage"
        class="compona-fd__screen compona-fd__screen--02"
        ref="componaD2"
      >
      </media-image>

      <div class="compona-fd__screen compona-fd__screen--03">
        <media-image
          v-bind:url="this.mediasPath+'designs/compona_d_03_1.jpg'"
          v-bind:title="'Finales Design'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          class="compona-fd__screen--03-1"
          ref="componaD31"
        >
        </media-image>
        <media-image
          v-bind:url="this.mediasPath+'designs/compona_d_03_2.jpg'"
          v-bind:title="'Finales Design'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          class="compona-fd__screen--03-2"
          ref="componaD32"
        >
        </media-image>
      </div>

      <media-image
        v-bind:url="this.mediasPath+'designs/compona_d_04.jpg'"
        v-bind:title="'Finales Design'"
        v-bind:hdRatio="2"
        v-bind:zoomable="true"
        v-bind:autoLoad="false"
        v-on:loaded="this.loadNextImage"
        class="compona-fd__screen compona-fd__screen--04"
        ref="componaD4"
      >
      </media-image>

      <div class="project__cols compona-fd__small-screens">
        <div class="project__col-left">
          <media-image
            v-bind:url="this.mediasPath+'designs/compona_d_05.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="2"
            v-bind:zoomable="true"
            v-bind:centered="false"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="componaD5"
            class="compona-fd__screen compona-fd__screen--05"
          >
          </media-image>
        </div>
        <div class="project__col-right">
          <media-image
            v-bind:url="this.mediasPath+'designs/compona_d_06.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="2"
            v-bind:zoomable="true"
            v-bind:centered="false"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="componaD6"
            class="compona-fd__screen compona-fd__screen--06"
          >
          </media-image>
        </div>
        <div class="project__col-left">
          <media-image
            v-bind:url="this.mediasPath+'designs/compona_d_07.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="2"
            v-bind:zoomable="true"
            v-bind:centered="false"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="componaD7"
            class="compona-fd__screen compona-fd__screen--07"
          >
          </media-image>
        </div>
        <div class="project__col-right">
          <media-image
            v-bind:url="this.mediasPath+'designs/compona_d_08.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:zoomable="true"
            v-bind:centered="false"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="componaD8"
            class="compona-fd__screen compona-fd__screen--08"
          >
          </media-image>
        </div>
      </div>
    </section>

    <section class="project__section project__section--colored project__section--padding-2x compona-rd">
      <h2 class="project__pick-title compona-rd__title">
        Responsive Design
      </h2>
      <div class="project__mobile-thumbs">
        <div class="project__mobile-thumb project__mobile-thumb--01">
          <media-image
            v-bind:url="this.mediasPath+'designs/compona_m_01.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="componaRd1"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--middle">
          <media-image
            v-bind:url="this.mediasPath+'designs/compona_m_02.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="componaRd2"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--right">
          <media-image
            v-bind:url="this.mediasPath+'designs/compona_m_03.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="componaRd3"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/compona_m_04.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="componaRd4"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--middle project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/compona_m_05.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="componaRd5"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--right project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/compona_m_06.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="componaRd6"
          >
          </media-image>
        </div>
      </div>
    </section>

    <div class="compona-cta-container">
      <a href="https://www.compona.com.com/" target="_blank" class="cta cta--small">Projekt online anschauen</a><br>
    </div>

    <div class="project__credits">
      <h2 class="project__credits-title">
        Akkreditiv
      </h2>
      <div class="project__credits-desc">
        <p>
          UX &amp; Wireframing, Erklärfilm  –  Marco Lüthi
        </p>
      </div>
    </div>

    <div class="project__credits compona-awards">
      <h2 class="project__credits-title">
        Awards
      </h2>
      <div class="project__credits-desc">
        <p>
          BOSW 2019 – Mater Kandidat, Gold Technology, Silber Digital Commerce, Bronze Innovation<br>
          dcom 2019 – Digital Commerce Award, 5. Rang
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
        mediasPath: "https://files.daviddarx.com/works/static/projects/compona/",
      }
    },
    computed: {
      introDatas: function () {
        const windowW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let datas = {};

        if (windowW >= 1440 || window.devicePixelRatio > 1) {
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

  .compona {
    --w-deco: 60vw;
    --shadow-01: 0 0 var(--s-gutter) rgba(0, 0, 0, 0.2);
    --c-grey: #e5e8ef;
    --c-grey-dark: #262626;
  }

  .compona-deco {
    position: absolute;
    z-index: 101;
    top: 0;
    right: 0;
    width: var(--w-deco);
    max-width: 2216px;
    mix-blend-mode: multiply;
  }

  .compona-background {
    --h-bg: max(var(--w-deco), 100vh);

    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100vw;
    height: var(--h-bg);
    background-color: var(--project-color);

    &::after {
      content: "";
      position: absolute;
      z-index: 100;
      top: 0;
      left: 0;
      width: 100vw;
      height: var(--h-bg);
      background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
    }
  }

  .compona-intro {
    &__img {
      position: absolute;
      z-index: 10;
      width: 130%;
      margin-left: -32%;
      margin-top: -3%;
    }
  }

  .compona-pick-1 {
    display: flex;
    margin-top: calc(var(--s-gutter) * 2);

    @include viewport('tablet-s') {
      display: block;
    }

    &__desc {
      position: relative;
      flex-basis: 50%;
      box-sizing: border-box;
      padding: calc(var(--s-gutter) * 2);
      padding-top: 0;
    }

    &__video {
      flex-basis: 50%;
    }
  }

  .compona-pick-2 {
    display: flex;

    @include viewport('tablet-s') {
      display: block;
    }

    &__desc {
      position: relative;
      flex-basis: 50%;
      order: 2;
      box-sizing: border-box;
      padding: calc(var(--s-gutter) * 2);
    }

    &__video {
      flex-basis: 50%;
      order: 1;
    }
  }

  .compona-film {
    padding-bottom: 0;

    &__title {
      text-align: center;
      padding-top: calc(var(--s-gutter) * 0.25);
      padding-bottom: calc(var(--s-gutter) * 1.75);
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
  }

  .compona-fd {
    --c-background: var(--c-grey);

    padding-top: 0;

    &__title {
      text-align: center;
      padding-top: calc(var(--s-gutter) * 0.75);
      padding-bottom: calc(var(--s-gutter) * 1.75);
      color: black;
    }

    &__screen {
      --outline-final: 2px solid #d7dbe6;

      margin-top: calc(var(--s-gutter) * 2);

      &--01 {
        margin-top: 0;
      }

      &--03 {
        outline: var(--outline-final);
      }

      &--03-1,
      &--03-2 {
        --outline-final: none;
      }

      &--05,
      &--06 {
        margin-top: 0;
      }

      &--07,
      &--08 {
        margin-top: calc(var(--s-gutter-col) * 2);
      }

      &--06,
      &--08 {
        transform: translateY(calc(var(--s-gutter) * 2));

        @include viewport('tablet') {
          transform: translateY(0);
        }
      }
    }

    &__small-screens {
      margin-top: calc(var(--s-gutter) * 2);
      padding-bottom: calc(var(--s-gutter) * 2);

      @include viewport('tablet') {
        display: block;

        & > div {
          padding: 0;
          margin-top: var(--s-gutter);
        }
      }

      @include viewport('tablet-s') {
        margin-top: var(--s-gutter);
      }
    }
  }

  .compona-rd {
    --c-background: var(--c-grey-dark);

    text-align: center;
    padding-bottom: calc(var(--s-gutter) * 4);

    @include viewport('tablet-s') {
      padding-top: calc(var(--s-gutter) * 2);
    }

    &__title {
      @include anti-aliased();

      margin-bottom: calc(var(--s-gutter) * 0.75);
    }

    .project__mobile-thumb {
      --box-shadow: none;
    }
  }

  .compona-cta-container {
    margin-top: calc(var(--s-gutter) * 2);
    text-align: center;
  }

  .compona-awards {
    padding-top: calc(var(--s-gutter) * 0.5);
  }
</style>
