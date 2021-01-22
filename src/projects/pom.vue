
<template>
  <project
    v-if="this.isMounted"
    class="pom"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <template
      v-slot:preheader
      v-bind:mediasPath="mediasPath"
      v-bind:loadNextImage="loadNextImage"
    >
       <deco-image
        v-bind:url="mediasPath+'deco_01.jpg'"
        v-bind:autoLoad="false"
        v-on:loaded="loadNextImage"
        ref="imageDeco1"
        class="pom-deco pom-deco--1"
      >
      </deco-image>

      <div class="pom-background"></div>
    </template>

    <div class="project__cols project__intro pom-intro">
      <div
        class="project__col-left pom-intro__left"
        ref="introLeft"
      >
        <deco-image
          v-bind:url="this.introDatas.url"
          v-bind:hdRatio="this.introDatas.hd"
          v-bind:autoLoad="false"
          v-on:loaded="this.introImageLoaded"
          ref="imageIntro"
          class="pom-intro__image"
        >
        </deco-image>
      </div>
      <div class="project__col-right pom-intro__right">
        <p class="project__lead">
          Als erfolgreiche Immobilien-Beratungsfirma steht pom+ an vorderster Front, wenn es darum geht, weitsichtige Ideen, mutige Visionen und brachliegende Potenziale in nachhaltige Strategien und Projekte zu transformieren.
        </p>
        <div class="project__desc">
          <p>
            Nach mehr als 20 Jahren Tätigkeit beauftragte pom+ Eyekon, seine Positionierung gemeinsam zu überdenken und einen neuen Marktauftritt zu schaffen.
          </p>
          <p>
            Unsere Mission war es, die Leidenschaft für Innovation von pom+ spürbar zu machen und gleichzeitig glaubwürdig Kompetenz und Umsetzungs-Stärke zu vermittel.
          </p>
        </div>
      </div>
    </div>

    <section class="project__section project__section--padding-none project__section--colored pom-logos">
      <div class="pom-logos__desc">
        <div class="project__pick">
          <h2 class="project__pick-title pom-logos__title">
            Logo Recherche
          </h2>
          <div class="project__pick-desc">
            <p>
              In der ersten Phase des Projekts und nach der ersten typografischen Recherche haben wir verschiedene Möglichkeiten untersucht, um das pom+ Logo zu aktualisieren.
            </p>
            <p>
              Es wurden verschiedene Möglichkeiten zur Darstellung des Pluszeichens getestet, und eine Änderung des Firmennamens in "pomplus" wurde lange in Betracht gezogen.
            </p>
            <p>
	            Um eine bereits etablierte Marke zu erkennen, wurde jedoch beschlossen, auf einer Konstruktion zu bleiben, die der bestehenden ähnlich ist, und dabei eine modernere, stärkere Typografie und lebendigere Farben zu verwenden.
            </p>
          </div>
        </div>
      </div>

      <div class="pom-logos__container">
        <div class="pom-logos__logo">
          <span class="pom-logos__caption">Das ursprüngliche Logo</span>
          <media-image
            v-bind:url="this.mediasPath+'logo/pom_logo_01.svg'"
            v-bind:title="'Logo Recherche'"
            v-bind:hdRatio="2"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="logo1"
          >
          </media-image>
        </div>
        <div class="pom-logos__logo">
          <media-image
            v-bind:url="this.mediasPath+'logo/pom_logo_02.svg'"
            v-bind:title="'Logo Recherche'"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="logo2"
          >
          </media-image>
        </div>
        <div class="pom-logos__logo">
          <media-image
            v-bind:url="this.mediasPath+'logo/pom_logo_03.svg'"
            v-bind:title="'Logo Recherche'"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="logo3"
          >
          </media-image>
        </div>
        <div class="pom-logos__logo">
          <media-image
            v-bind:url="this.mediasPath+'logo/pom_logo_04.svg'"
            v-bind:title="'Logo Recherche'"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="logo4"
          >
          </media-image>
        </div>
        <div class="pom-logos__logo">
          <media-image
            v-bind:url="this.mediasPath+'logo/pom_logo_05.svg'"
            v-bind:title="'Logo Recherche'"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="logo5"
          >
          </media-image>
        </div>
        <div class="pom-logos__logo">
          <span class="pom-logos__caption">Das finale Logo</span>
          <media-image
            v-bind:url="this.mediasPath+'logo/pom_logo_06.svg'"
            v-bind:title="'Logo Recherche'"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="logo6"
          >
          </media-image>
        </div>
      </div>
    </section>

    <section class="project__section project__section--padding-none project__section--colored pom-lf">
      <div class="pom-lf__desc">
        <div class="project__pick">
          <h2 class="project__pick-title pom-lf__title">
            Look&amp;Feel Recherche
          </h2>
          <div class="project__pick-desc">
            <p>
              Mit verschiedenen Moodboards haben wir einige mögliche Wege erkundet, bevor wir Schritt für Schritt das neue Look &amp; Feel von pom + definiert haben: frisch und luftig, modern und kontrastreich.
            </p>
            <p>
              Dünne Schlagschatten und diffuse Räumlichkeit verleihen dem überwiegend weißen Raum Volumen, während eine starke Schrift und ein Hauch von Grün-Türkis für Kontraste und Akzente sorgen.
            </p>
          </div>
        </div>
      </div>

      <div class="pom-lf__container">
        <div class="pom-lf__board pom-lf__board--alt pom-lf__board--alt-02">
          <media-image
            v-bind:url="this.mediasPath+'lf/lf_alt_02.jpg'"
            v-bind:title="'Look & Feel Recherche'"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="lf3"
          >
          </media-image>
        </div>
        <div class="pom-lf__board pom-lf__board--alt pom-lf__board--alt-01">
          <media-image
            v-bind:url="this.mediasPath+'lf/lf_alt_01.jpg'"
            v-bind:title="'Look & Feel Recherche'"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="lf2"
          >
          </media-image>
        </div>
        <div class="pom-lf__board">
          <media-image
            v-bind:url="this.mediasPath+'lf/lf.jpg'"
            v-bind:hdRatio="2"
            v-bind:title="'Look & Feel Recherche'"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="lf1"
          >
          </media-image>
        </div>
      </div>
    </section>

    <section class="project__section project__section--padding-none pom-claims">
      <div class="pom-claims__intro">
        <div class="pom-claims__bg"></div>

        <deco-image
          v-bind:url="mediasPath+'deco_02.jpg'"
          v-bind:autoLoad="false"
          v-on:loaded="loadNextImage"
          ref="imageDeco2"
          class="pom-deco pom-deco--2 pom-claims__deco"
        >
        </deco-image>

        <div class="pom-claims__descs">
          <div class="pom-claims__desc">
            <div class="project__pick">
              <h2 class="project__pick-title">
                Positionierung
              </h2>
              <div class="project__pick-desc">
                <p>
                  Immobilen-Beratung ist ein sehr abstraktes Tätigkeitsgebiet. Unsere Aufgabe für pom+ bestand darin, zusammen mit dem Führungsteam den Kern ihrer Tätigkeit herauszuschälen und dann mit einfachen Worten und prägnanten Bildern die Grundlage zu einem innovativen und zukunftsorientierten neuen Marktauftritt zu schaffen.
                </p>
              </div>
            </div>
          </div>

          <div class="pom-claims__desc">
            <div class="project__pick">
              <h2 class="project__pick-title">
                Making Real
              </h2>
              <div class="project__pick-desc">
                <p>
                  Entstanden ist dabei ein Set aus sechs Claims für die sechs Tätigkeitsfelder sowie eine Bildwelt, die die Claims in virtuelle 3D Landschaften aus Architektur-Zitaten und baulichen Fragmenten projiziert.
                </p>
                <p>
                  Die Animationen wurden in 3D räumlich gestaltet und ergeben einen sehr flexiblen Pool an bewegten und statischen Bildern, die zusammen mit den Claims vielseitig einsetzbar sind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pom-claims__video-container">
        <media-video
          v-bind:url="this.mediasPath+'/claims/pom_claims.mp4'"
          v-bind:poster="this.mediasPath+'/claims/pom_claims.jpg'"
          v-bind:autoplay="true"
          v-bind:isvideo="true"
          v-bind:id="'pom-video'"
          ref="pom-video"
          class="pom_claims__video observed"
        >
        </media-video>
      </div>

      <div class="pom-claims__claims">
        <div class="pom-claims__claim">
          <media-image
            v-bind:url="this.mediasPath+'claims/pom_claim_01.jpg'"
            v-bind:hdRatio="2"
            v-bind:title="'Making Real Claims'"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="claim1"
          >
          </media-image>
        </div>
        <div class="pom-claims__claim">
          <media-image
            v-bind:url="this.mediasPath+'claims/pom_claim_02.jpg'"
            v-bind:hdRatio="2"
            v-bind:title="'Making Real Claims'"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="claim2"
          >
          </media-image>
        </div>
        <div class="pom-claims__claim">
          <media-image
            v-bind:url="this.mediasPath+'claims/pom_claim_03.jpg'"
            v-bind:hdRatio="2"
            v-bind:title="'Making Real Claims'"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="claim3"
          >
          </media-image>
        </div>
        <div class="pom-claims__claim">
          <media-image
            v-bind:url="this.mediasPath+'claims/pom_claim_04.jpg'"
            v-bind:hdRatio="2"
            v-bind:title="'Making Real Claims'"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="claim4"
          >
          </media-image>
        </div>
        <div class="pom-claims__claim">
          <media-image
            v-bind:url="this.mediasPath+'claims/pom_claim_05.jpg'"
            v-bind:hdRatio="2"
            v-bind:title="'Making Real Claims'"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="claim5"
          >
          </media-image>
        </div>
        <div class="pom-claims__claim">
          <media-image
            v-bind:url="this.mediasPath+'claims/pom_claim_06.jpg'"
            v-bind:hdRatio="2"
            v-bind:title="'Making Real Claims'"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="claim6"
          >
          </media-image>
        </div>
      </div>
    </section>

    <section class="project__section project__section--padding-2x pom-final-de">
      <h2 class="project__pick-title pom-final-de__title">
        Finales Design
      </h2>
      <div class="pom-final-de__screen pom-final-de__screen-01">
        <media-image
          v-bind:url="this.mediasPath+'designs/pom_d_01_1.jpg'"
          v-bind:title="'Finales Design'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="pomfinalde11"
        >
        </media-image>

        <media-image
          v-bind:url="this.mediasPath+'designs/pom_d_01_2.jpg'"
          v-bind:title="'Finales Design'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="pomfinalde12"
        >
        </media-image>

        <media-image
          v-bind:url="this.mediasPath+'designs/pom_d_01_3.jpg'"
          v-bind:title="'Finales Design'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="pomfinalde13"
        >
        </media-image>

        <media-image
          v-bind:url="this.mediasPath+'designs/pom_d_01_4.jpg'"
          v-bind:title="'Finales Design'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="pomfinalde14"
        >
        </media-image>
      </div>

      <div class="project__cols pom-final-de__small-screens">
        <div class="project__col-left">
          <media-image
            v-bind:url="this.mediasPath+'designs/pom_d_02.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="2"
            v-bind:zoomable="true"
            v-bind:centered="false"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="pomfinalde2"
            class="pom-final-de__screen pom-final-de__screen-02"
          >
          </media-image>
        </div>
        <div class="project__col-right">
          <media-image
            v-bind:url="this.mediasPath+'designs/pom_d_03.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="2"
            v-bind:zoomable="true"
            v-bind:centered="false"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="pomfinalde3"
            class="pom-final-de__screen pom-final-de__screen-03"
          >
          </media-image>
        </div>
        <div class="project__col-left">
          <media-image
            v-bind:url="this.mediasPath+'designs/pom_d_04.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="2"
            v-bind:zoomable="true"
            v-bind:centered="false"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="pomfinalde4"
            class="pom-final-de__screen pom-final-de__screen-04"
          >
          </media-image>
        </div>
        <div class="project__col-right">
          <media-image
            v-bind:url="this.mediasPath+'designs/pom_d_05.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:zoomable="true"
            v-bind:centered="false"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="pomfinalde5"
            class="pom-final-de__screen pom-final-de__screen-05"
          >
          </media-image>
        </div>
      </div>
    </section>

    <section class="project__section project__section--padding-2x project__section--colored pom-rd">

      <deco-image
        v-bind:url="mediasPath+'deco_01.jpg'"
        v-bind:autoLoad="false"
        v-on:loaded="loadNextImage"
        ref="imageDeco3"
        class="pom-deco pom-deco--3"
      >
      </deco-image>

      <h2 class="project__pick-title pom-rd__title">
        Responsive Design
      </h2>
      <div class="project__mobile-thumbs">
        <div class="project__mobile-thumb project__mobile-thumb--01">
          <media-image
            v-bind:url="this.mediasPath+'designs/pom_m_01.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="pomrd1"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--middle">
          <media-image
            v-bind:url="this.mediasPath+'designs/pom_m_02.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="pomrd2"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--right">
          <media-image
            v-bind:url="this.mediasPath+'designs/pom_m_03.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="pomrd3"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/pom_m_04.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="pomrd4"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--middle project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/pom_m_05.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="pomrd5"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--right project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/pom_m_06.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="pomrd6"
          >
          </media-image>
        </div>
      </div>
    </section>

    <div class="pom-cta-container">
      <a href="https://www.pom.ch/" target="_blank" class="cta cta--small pom-cta">Projekt online anschauen</a>
    </div>

    <div class="project__credits">
      <h2 class="project__credits-title">
        Akkreditiv
      </h2>
      <div class="project__credits-desc">
        <p>
          Konzept &amp; Claims – Thomas Wirth<br>
          Konzept &amp; Wireframing  – Alexandre Robert<br>
          3D Renderings &amp; Animationen –  Giacomo Pedemonte
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
        mediasPath: "https://files.daviddarx.com/works/static/projects/pom/",
        isIntroImageLoaded: false,
      }
    },
    computed: {
      introDatas: function () {
        const windowW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let datas = {};

        if (windowW >= 1440) {
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
      setTimeout(() => {
        this.customResize();
      }, 200);
    },
    beforeDestroy () {
      this.destroy();
    },
    methods: {
      introImageLoaded: function () {
        this.isIntroImageLoaded = true;
        this.customResize();
        this.loadNextImage();
      },
      customResize: function () {
        if(this.isIntroImageLoaded) {
          const introLeftWidth = this.$refs.introLeft.offsetWidth;
          const introImage = this.$refs.imageIntro.$el.querySelector('img');
          const introImageWidth = introImage.offsetWidth;
          const introImageTranslate = (introImageWidth - introLeftWidth) * -1;
          this.$refs.imageIntro.$el.style.setProperty('--s-translate', introImageTranslate+'px');
          introImage.style.animationName = "none";
          setTimeout(() => {
            introImage.style.animationName = "pom-intro-animation";
          }, 10);
        }
      }
    }
  });
</script>

<style lang="scss">
  @import '../scss/assets.scss';

  .pom {
    --c-1: #13d96b;
    --c-2: #47e7d7;
    --s-col-wide: calc(50vw + var(--s-gutter));
    --c-grey: #363636;
    --gradient: linear-gradient(45deg, var(--c-1), var(--c-2));
    --shadow-01: 0 0 var(--s-gutter) rgba(0, 0, 0, 0.2);

    @include viewport('tablet-s') {
      --s-col-wide: 100%;
    }

    .project__close-button {
      background-color: var(--c-2);
    }

    .pagination {
      position: relative;
      z-index: 200;
    }
  }

  .pom-deco {
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100vw;
    mix-blend-mode: multiply;

    &--3 {
      transform: scaleX(-1);
    }
  }

  .pom-background {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: var(--gradient);
  }

  .pom-intro {
    position: relative;

    &__left {
      top: 0;
      bottom: 0;
      left: calc(var(--s-gutter) * -1);
      padding: 0;

      @include viewport('tablet-s') {
        left: auto;
        margin-left: 0;
        margin-bottom: var(--s-gutter);
      }
    }

    &__right {
      position: relative;
      margin-top: -0.3em;
      padding-bottom: calc(var(--s-gutter) * 2 - 0.4em);

      p:last-child {
        margin-bottom: 0;
      }

      @include viewport('tablet-s') {
        padding-bottom: var(--s-gutter);
      }
    }

    &__image {
      --s-translate: -100px;

      position: relative;
      height: 100%;
      overflow: hidden;

      img {
        position: absolute;
        height: 100%;
        width: auto;
        animation: pom-intro-animation 20s ease-in-out infinite alternate;

        @include viewport('tablet-s') {
          position: relative;
          height: auto;
          width: 100%;
          animation: none;
        }
      }
    }
  }

  @keyframes pom-intro-animation {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(var(--s-translate));
    }
  }

  .pom-logos {
    @include anti-aliased();

    --c-background: var(--c-grey);
    --padding-left: calc(var(--s-gutter) * 2);

    color: white;
    display: flex;
    padding-top: 0;
    padding-bottom: 0;

    @include viewport('tablet-s') {
      display: block;
    }

    @include viewport('mobile-l') {
      margin-top: var(--s-gutter);
    }

    &__title {
      color: var(--c-1);
    }

    &__desc {
      box-sizing: border-box;
      width: calc(50% - var(--s-gutter) * 1);
      padding: calc(var(--s-gutter) * 2);
      padding-left: var(--padding-left);
      padding-top: calc(var(--s-gutter) * 2 - 0.5em);

      @include viewport('tablet') {
        padding: calc(var(--s-gutter) * 1.5);
      }

      @include viewport('tablet-s') {
        width: 100%;
        padding: var(--s-gutter);
      }
    }

    &__container {
      width: var(--s-col-wide);
      display: flex;
      flex-wrap: wrap;

      @include viewport('tablet-s') {
        width: 100%;
        box-sizing: border-box;
        padding: var(--s-gutter);
        padding-top: 0;
      }
    }

    &__caption {
      position: absolute;
      z-index: 200;
      color: black;
      font-size: var(--s-text-small);
      padding: 1em;
      padding-top: 0.8em;
      opacity: 0.65;
    }

    &__logo {
      position: relative;
      width: 50%;
      box-sizing: border-box;
      margin-bottom: 1px;
      background-color: white;

      @include viewport('mobile') {
        width: 100%;
      }

      &:first-child {
        background-color: #e5e5e5;
      }

      &:nth-child(2n) {
        &::after {
          content: "";
          position: absolute;
          width: 1px;
          height: 100%;
          top: 0;
          left: 0;
          background-color: var(--c-background);
        }
      }

      .media-image {
        height: 100%;
        display: flex;

        @include viewport('tablet-s') {
          height: auto;
          display: block;
        }
      }
    }
  }

  .pom-lf {
    @include anti-aliased();

    --c-background: var(--c-grey);

    color: white;
    display: flex;
    padding-top: 0;
    padding-bottom: 0;

    @include viewport('tablet-s') {
      display: block;
      padding-bottom: calc(var(--s-gutter) * 0.5);
    }

    &__title {
      color: var(--c-1);
    }

    &__desc {
      order: 2;
      box-sizing: border-box;
      width: var(--s-col-wide);
      padding: calc(var(--s-gutter) * 2);
      padding-top: calc(var(--s-gutter) * 2 - 0.5em);
      padding-left: calc(var(--s-gutter) * 2 + 1%);

      @include viewport('tablet') {
        padding: calc(var(--s-gutter) * 1.5);
        padding-left: calc(var(--s-gutter) * 1.5 + 1%);
      }

      @include viewport('tablet-s') {
        width: 100%;
        padding: var(--s-gutter);
      }
    }

    &__container {
      --s-width: calc(50% - var(--s-gutter) * 1);

      order: 1;
      position: relative;
      width: var(--s-width);
      min-height: 35vw;

      @include viewport('tablet-s') {
        width: 100%;
        box-sizing: border-box;
        padding: var(--s-gutter);
        padding-top: 0;
      }
    }

    &__board {
      --s-translate: 2%;
      --s-translate-f: var(--s-translate);
      --opacity: 0.1;

      position: absolute;
      z-index: 102;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

      @include viewport('tablet-s') {
        --s-translate: 1%;

        position: relative;
      }

      &--alt {
        transform: translate(var(--s-translate-f), var(--s-translate-f));

        @include viewport('tablet-s') {
          position: absolute;
          width: calc(100vw - var(--s-gutter) * 2);
        }

        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: black;
          opacity: var(--opacity);
        }

        &-02 {
          --s-translate-f: calc(var(--s-translate) * 2);

          &::after {
            opacity: calc(var(--opacity) * 2);
          }
        }
      }
    }
  }

  .pom-claims {
    position: relative;

    &__intro {
      position: relative;
    }

    &__bg {
      position: absolute;
      z-index: 99;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: var(--gradient);
    }

    &__descs {
      position: relative;
      z-index: 100;
      display: flex;
      padding: calc(var(--s-gutter) * 2);
      padding-bottom: calc(var(--s-gutter) * 1.25);
      padding-top: 30vw;

      @include viewport('desktop') {
        padding-top: 25vw;
      }

      @include viewport('tablet-s') {
        padding: var(--s-gutter);
        padding-top: 20vw;
      }

      @include viewport('mobile-l') {
        display: block;
      }
    }

    &__desc {
      --s-padding: calc(var(--s-gutter) * 0.5);

      width: 50%;
      box-sizing: border-box;
      padding-right: var(--s-padding);

      @include viewport('mobile-l') {
        width: 100%;
        padding: 0;
      }

      &:last-child {
        padding-right: 0;
        padding-left: var(--s-padding);

        @include viewport('mobile-l') {
          padding: 0;
          padding-top: calc(var(--s-gutter) * 0.5);
        }
      }
    }

    &__video-container {
      position: relative;
      overflow: hidden;
      height: 50vw;
      max-height: calc(1920px * 0.5);
      background-color: #eee;
    }

    &__claims {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      max-width: 1440px;
      margin: 0 auto;
      margin-top: calc(var(--s-gutter) * -2);
      padding: calc(var(--s-gutter) * 2);
      padding-top: 0;
      padding-bottom: 0;

      @include viewport('tablet-s') {
        padding: var(--s-gutter);
        padding-top: 0;
        padding-bottom: var(--s-gutter);
        margin-top: calc(var(--s-gutter) * -1);
      }
    }

    &__claim {
      width: 33.333%;
      box-sizing: border-box;
      padding-right: 1px;
      padding-bottom: 1px;
      box-shadow: var(--shadow-01);

      @include viewport('mobile-l') {
        width: 50%;
      }

      @include viewport('mobile') {
        width: 100%;
      }
    }
  }

  .pom-final-de {
    margin-top: var(--s-gutter);
    margin-bottom: calc(var(--s-gutter) * 2);

    @include viewport('desktop') {
      margin-top: 0;
    }

    @include viewport('tablet') {
      margin-bottom: 0;
    }

    @include viewport('tablet-s') {
      margin-bottom: var(--s-gutter);
    }

    &__title {
      text-align: center;
      margin-bottom: calc(var(--s-gutter) * 1.15);
    }

    &__screen {
      box-shadow: var(--shadow-01);
    }

    &__screen-01 {
      max-width: 1440px;
      margin: 0 auto;
    }

    &__screen-02,
    &__screen-03 {
      margin-bottom: calc(var(--s-gutter-col) * 2);

      @include viewport('tablet') {
        margin-bottom: 0;
      }
    }

    &__screen-03,
    &__screen-05 {
      transform: translateY(calc(var(--s-gutter) * 2));

      @include viewport('tablet') {
        transform: translateY(0);
      }
    }

    &__small-screens {
      margin-top: calc(var(--s-gutter) * 2);

      @include viewport('tablet') {
        display: block;

        & > div {
          padding: 0;
          margin-top: var(--s-gutter);
        }
      }
    }
  }

  .pom-rd {
    @include anti-aliased();

    --c-background: var(--c-grey);

    color: white;
    text-align: center;
    padding-bottom: calc(var(--s-gutter) * 4);

    &__title {
      margin-bottom: calc(var(--s-gutter) * 0.75);

      @include viewport('tablet-s') {
        margin-top: var(--s-gutter);
      }
    }

    .project__mobile-thumb {
      --box-shadow: var(--shadow-01);

      position: relative;
      z-index: 101;
    }

    .media-image {
      --outline-final: 1px solid rgba(255, 255, 255, 0.2);
    }
  }

  .pom-cta-container {
    margin-top: calc(var(--s-gutter) * 2);
    text-align: center;
  }

</style>
