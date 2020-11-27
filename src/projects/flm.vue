
<template>
  <project
    v-if="this.isMounted"
    class="flm"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >

    <svg viewBox="0 0 1440 862" xmlns="http://www.w3.org/2000/svg" class="deco-lines deco-lines--01">
      <g stroke="#3D7AC3" fill="none" fill-rule="evenodd">
          <path vector-effect="non-scaling-stroke" d="M2079.274-556.747L1118.019 287.1-234.422 880.709M2180.527-80.39L1168.322 523.76-225.274 923.747"/>
      </g>
    </svg>

    <div class="project__cols project__intro intro-flm">
      <div class="project__col-left intro-flm__left">
        <deco-image
          v-bind:url="this.lm1Datas.url"
          v-bind:hdRatio="this.lm1Datas.hd"
          v-bind:backgroundImage="true"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="imageDeco1"
          class="deco-lm-01"
        >
        </deco-image>
      </div>
      <div class="project__col-right intro-flm__right">
        <p class="project__lead">
          In 2019 hat sich die "Gesellschaft Landesmuseum Zürich" in "Freunde Landesmuseum Zürich" (FLM) umbenannt und damit einen neuen Look bekommen, zwischen Tradition und Modernität.
        </p>
        <div class="project__desc">
          <p>
            Die FLM unterstützen das Landes­museum Zürich. Sie ermöglichen den Erwerb von Museumsobjekten und fördern den kulturellen Auftrag des Museums: Sammeln, Erhalten und Ausstellen.
          </p>
          <p>
            Eyekon begleitete den Verein während dieses Prozesses und war verantwortlich für die Schaffung einer neuen Identität und einer Mikro-Site, auf der der Verein, seine Ziele und Erfolge vorgestellt wurden, um neue Mitglieder zu gewinnen.
          </p>
        </div>
      </div>
    </div>

    <section class="project__section project__section--padding-none logo-re">
      <div
        class="logo-re__deco"
        ref="logoredeco"
      >
        <deco-image
          v-bind:url="this.lm2Datas.url"
          v-bind:hdRatio="this.lm2Datas.hd"
          v-bind:backgroundImage="true"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="imageDeco2"
          class="deco-lm-02"
        >
        </deco-image>
      </div>
      <div
        class="logo-re__desc"
        ref="logoredesc"
      >
        <div class="project__pick">
          <h2 class="project__pick-title">
            Logo Recherche
          </h2>
          <div class="project__pick-desc">
            <p>
              Die neue Identität sollte idealerweise etwas mit dem Landesmuseum selbst zu tun haben.
            </p>
            <p>
              Die ikonische Architektur des 2016 renovierten Museums war der erste Ausgangspunkt für die visuelle Recherche des neuen FLM Logos.
            </p>
            <p>
	            Die Perspektiven und geometrischen Formen des Museums wurden auf realistische oder abstrakte Weise abgelehnt, um ein eigenes Icon zu erstellen.
            </p>
          </div>
        </div>
      </div>

      <div class="logo-re__logos">
        <div class="logo-re__logo">
          <media-image
            v-bind:url="this.mediasPath+'logo/re_logo_01.jpg'"
            v-bind:title="'Logo Recherche'"
            v-bind:hdRatio="2"
            v-bind:autoLoad="false"
            v-on:loaded="this.firstLogoLoaded"
            ref="logore1"
          >
          </media-image>
        </div>
        <div class="logo-re__logo">
          <media-image
            v-bind:url="this.mediasPath+'logo/re_logo_02.jpg'"
            v-bind:title="'Logo Recherche'"
            v-bind:hdRatio="2"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="logore2"
          >
          </media-image>
        </div>
        <div class="logo-re__logo">
          <media-image
            v-bind:url="this.mediasPath+'logo/re_logo_03.jpg'"
            v-bind:title="'Logo Recherche'"
            v-bind:hdRatio="2"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="logore3"
          >
          </media-image>
        </div>
        <div class="logo-re__logo">
          <media-image
            v-bind:url="this.mediasPath+'logo/re_logo_04.jpg'"
            v-bind:title="'Logo Recherche'"
            v-bind:hdRatio="2"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="logore4"
          >
          </media-image>
        </div>
        <div class="logo-re__logo">
          <media-image
            v-bind:url="this.mediasPath+'logo/re_logo_05.jpg'"
            v-bind:title="'Logo Recherche'"
            v-bind:hdRatio="2"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="logore5"
          >
          </media-image>
        </div>
        <div class="logo-re__logo">
          <media-image
            v-bind:url="this.mediasPath+'logo/re_logo_06.jpg'"
            v-bind:title="'Logo Recherche'"
            v-bind:hdRatio="2"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="logore6"
          >
          </media-image>
        </div>
        <div class="logo-re__logo">
          <media-image
            v-bind:url="this.mediasPath+'logo/re_logo_07.jpg'"
            v-bind:title="'Logo Recherche'"
            v-bind:hdRatio="2"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="logore7"
          >
          </media-image>
        </div>
        <svg viewBox="0 0 1440 1067" xmlns="http://www.w3.org/2000/svg" class="deco-lines deco-lines--02">
          <path vector-effect="non-scaling-stroke" d="M-28 0l778.381 498.97L1485 357.772l-101.652 267.205L618.666 978-28 746.507" stroke="#3D7AC3" fill="none" fill-rule="evenodd"/>
        </svg>
      </div>
    </section>

    <section class="project__section project__section--padding-2x project__section--colored is-selection-inverted lf-re">
      <div class="project__cols">
        <div class="project__col-left"></div>
        <div class="project__col-right">
          <div class="project__pick">
            <h2 class="project__pick-title lf-re__title">
              Look &amp; Feel Entwürfe
            </h2>
            <div class="project__pick-desc lf-re__desc">
              <p>
                Parallel dazu wurden früh Skizzen von Look &amp; Feel für die verschiedenen Identitäten erstellt, um dem Kunden zu Beginn des Projekts einen Überblick über die verschiedenen Positionierungsmöglichkeiten zu geben.
              </p>
              <p>
                Zwischen Tradition, Historie und Modernität, wo fühlen sich die Freunde des Landesmuseum am Besten zu Hause?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="project__cols project__cols--third lf-re__mockups">
        <div class="project__col-third">
          <media-image
            v-bind:url="this.mediasPath+'designs/flm_lf_01.jpg'"
            v-bind:title="'Look & Feel Entwurf'"
            v-bind:hdRatio="2"
            v-bind:zoomable="true"
            v-bind:centered="false"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="lfre1"
          >
          </media-image>
        </div>
        <div class="project__col-third">
          <media-image
            v-bind:url="this.mediasPath+'designs/flm_lf_02.jpg'"
            v-bind:title="'Look & Feel Entwurf'"
            v-bind:hdRatio="2"
            v-bind:zoomable="true"
            v-bind:centered="false"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="lfre2"
          >
          </media-image>
        </div>
        <div class="project__col-third">
          <media-image
            v-bind:url="this.mediasPath+'designs/flm_lf_03.jpg'"
            v-bind:title="'Look & Feel Entwurf'"
            v-bind:hdRatio="2"
            v-bind:zoomable="true"
            v-bind:centered="false"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="lfre3"
          >
          </media-image>
        </div>
      </div>
    </section>

    <section class="project__section project__section--padding-none final-id">
      <div class="project__cols final-id__logo-cols">
        <div class="project__col-left final-id__logo-col-left">
          <div class="project__pick">
            <h2 class="project__pick-title">
              Finale Identität
            </h2>
            <div class="project__pick-desc">
              <p>
                Um eine reifere Zielgruppe besser zu erreichen, haben wir uns für einen nüchterneren und raffinierteren Ansatz entschieden, der nur ein typografisches Logo enthält.
              </p>
              <p>
                Basierend auf einer moderneren Schrift, die Verwandschaft zum Landesmuseum wird durch den identischen typografischen Aufbau geschafft.
              </p>
            </div>
          </div>
        </div>
        <div class="project__col-right final-id__logo-col-right">
          <div class="final-id__logo">
            <media-image
              v-bind:url="this.mediasPath+'logo/logo_final_01_1.jpg'"
              v-bind:title="'Finale Identität'"
              v-bind:hdRatio="2"
              v-bind:autoLoad="false"
              v-on:loaded="this.loadNextImage"
              ref="finalidlogo11"
            >
            </media-image>
          </div>
          <div class="final-id__logo">
            <media-image
              v-bind:url="this.mediasPath+'logo/logo_final_02_1.jpg'"
              v-bind:title="'Finale Identität'"
              v-bind:hdRatio="2"
              v-bind:autoLoad="false"
              v-on:loaded="this.loadNextImage"
              ref="finalidlogo21"
            >
            </media-image>
          </div>
          <div class="final-id__logo">
            <media-image
              v-bind:url="this.mediasPath+'logo/logo_final_01_2.jpg'"
              v-bind:title="'Finale Identität'"
              v-bind:hdRatio="2"
              v-bind:autoLoad="false"
              v-on:loaded="this.loadNextImage"
              ref="finalidlogo12"
            >
            </media-image>
          </div>
          <div class="final-id__logo">
            <media-image
              v-bind:url="this.mediasPath+'logo/logo_final_02_2.jpg'"
              v-bind:title="'Finale Identität'"
              v-bind:hdRatio="2"
              v-bind:autoLoad="false"
              v-on:loaded="this.loadNextImage"
              ref="finalidlogo22"
            >
            </media-image>
          </div>
        </div>
      </div>
      <div class="project__cols project__cols--reversed final-id__lf-cols">
        <div class="project__col-left final-id__lf-col-left">
          <div class="project__pick">
            <div class="project__pick-desc">
              <p>
                Das renovierte Museum spielt mit Kontrasten und kombiniert verschiedenste Architekturstile, zwischen Mittelalter und Modernität.
              </p>
              <p>
                Um an diese Kontraste zu erinnern, behält die Identität des FLM die historische und traditionellere Schriftart des Museums, die American Typewriter.
              </p>
              <p>
                Das Ganze wird ergänzt mit geometrische Linien, die an den modernsten Teil des Gebäudes erinnern.
              </p>
            </div>
          </div>
        </div>
        <div class="project__col-left final-id__lf-col-right">
          <media-image
            v-bind:url="this.lfFinalData.url"
            v-bind:title="'Finales Look & Feel'"
            v-bind:hdRatio="this.lfFinalData.hd"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="finalidlf"
            class="final-id__lf"
          >
          </media-image>
        </div>
      </div>
    </section>

    <section class="project__section project__section--padding-2x flm-final-de">
      <svg viewBox="0 0 1440 808" xmlns="http://www.w3.org/2000/svg" class="deco-lines deco-lines--03">
        <g stroke="#3D7AC3" fill="none" fill-rule="evenodd">
          <path vector-effect="non-scaling-stroke" d="M-561 750.19l839.533-242.16L1131.39 773 2001 147M-561 710L776.81 164.786 2002-70"/>
        </g>
      </svg>

      <h2 class="project__pick-title flm-final-de__title">
        Finales Design
      </h2>
      <div class="flm-final-de__screen-01">
        <media-image
          v-bind:url="this.mediasPath+'designs/flm_d_01_1.jpg'"
          v-bind:title="'Finales Design'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="flmfinalde11"
        >
        </media-image>
        <media-image
          v-bind:url="this.mediasPath+'designs/flm_d_01_2.jpg'"
          v-bind:title="'Finales Design'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="flmfinalde12"
        >
        </media-image>
        <media-image
          v-bind:url="this.mediasPath+'designs/flm_d_01_3.jpg'"
          v-bind:title="'Finales Design'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="flmfinalde13"
        >
        </media-image>
      </div>
      <div class="project__cols flm-final-de__small-screens">
        <div class="project__col-left">
          <media-image
            v-bind:url="this.mediasPath+'designs/flm_d_02.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="2"
            v-bind:zoomable="true"
            v-bind:centered="false"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="flmfinalde2"
            class="flm-final-de__screen-02"
          >
          </media-image>
        </div>
        <div class="project__col-right">
          <media-image
            v-bind:url="this.mediasPath+'designs/flm_d_03.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="2"
            v-bind:zoomable="true"
            v-bind:centered="false"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="flmfinalde3"
            class="flm-final-de__screen-03"
          >
          </media-image>
        </div>
      </div>
    </section>

    <section class="project__section project__section--padding-2x flm-rd">
      <svg viewBox="0 0 1440 1766" xmlns="http://www.w3.org/2000/svg" class="deco-lines deco-lines--04">
        <g stroke="#3D7AC3" fill="none" fill-rule="evenodd">
          <path vector-effect="non-scaling-stroke" d="M-561 244L655.734 1407.891 2001 1947M-561 147.654L680.895 605 2001-274"/>
        </g>
      </svg>
      <h2 class="project__pick-title flm-rd__title">
        Responsive Design
      </h2>
      <div class="project__mobile-thumbs">
        <div class="project__mobile-thumb project__mobile-thumb--01">
          <media-image
            v-bind:url="this.mediasPath+'designs/flm_m_01.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="flmrd1"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--middle">
          <media-image
            v-bind:url="this.mediasPath+'designs/flm_m_02.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="flmrd2"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--right">
          <media-image
            v-bind:url="this.mediasPath+'designs/flm_m_03.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="flmrd3"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/flm_m_04.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="flmrd4"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--middle project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/flm_m_05.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="flmrd5"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--right project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/flm_m_06.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="320"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="flmrd6"
          >
          </media-image>
        </div>
      </div>
    </section>

    <div class="flm-cta-container">
      <a href="https://www.freunde-landesmuseum.ch/" target="_blank" class="cta cta--small flm-cta">Projekt online anschauen</a>
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
        mediasPath: "https://files.daviddarx.com/works/static/projects/flm/"
      }
    },
    computed: {
      lm1Datas: function () {
        const windowW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let datas = {};

        if (windowW >= 1440) {
          datas.url = this.mediasPath+'lm_01_hd.jpg';
          datas.hd = 1;
        } else {
          datas.url = this.mediasPath+'lm_01.jpg';
          datas.hd = 2;
        }

        return datas;
      },
      lm2Datas: function () {
        const windowW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let datas = {};

        if (windowW >= 1440) {
          datas.url = this.mediasPath+'lm_02_hd.jpg';
          datas.hd = 1;
        } else {
          datas.url = this.mediasPath+'lm_02.jpg';
          datas.hd = 2;
        }

        return datas;
      },
      lfFinalData: function () {
        const windowW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let datas = {};

        if (windowW >= 1920) {
          datas.url = this.mediasPath+'designs/flm_lf_final_hd.jpg';
          datas.hd = 1;
        } else {
          datas.url = this.mediasPath+'designs/flm_lf_final.jpg';
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
      firstLogoLoaded: function () {
        this.customResize();
        this.loadNextImage();
      },
      customResize: function () {
        const logoReDecoHeight = this.$refs.logoredesc.offsetHeight + this.$refs.logore1.$el.offsetHeight;
        this.$refs.logoredeco.style.setProperty('--height', logoReDecoHeight + "px");;
      }
    }
  });
</script>




<style lang="scss">
  @import '../scss/assets.scss';

  .flm {
    --c-title: #3d7ac3;
    --c-box-shadow: rgba(10, 33, 61, 0.1);
    --s-box-shadow: 80px;
    --s-col-wide: calc(50vw + var(--s-gutter));

    @include viewport('tablet-s') {
      --s-col-wide: 100%;
    }

    .project__meta-title,
    .project__title,
    .project__pick-title {
      color: var(--c-title);
    }
  }

  @mixin flm-logo {
    position: relative;
    flex-basis: 50%;
    padding: 1px;
    box-sizing: border-box;

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 1px;
      right: 1px;
      top: 1px;
      bottom: 1px;
    }

    &::before {
      z-index: 0;
      background-color: white;
    }

    &::after {
      z-index: -1;
      box-shadow: 0 0 var(--s-box-shadow) var(--c-box-shadow);
    }
  }

  @mixin flm-mockup {
    --outline-final: 1px solid white;

    box-shadow: 0 0 var(--s-box-shadow) var(--c-box-shadow);
  }

  .deco-lines {
    position: absolute;
    pointer-events: none;
    width: 100vw;
    z-index: -100;

    &--01 {
      transform: translate(calc(var(--s-gutter) * -1), -90%);
      z-index: 100;

      @include viewport('tablet-s') {
        transform: translate(calc(var(--s-gutter) * -1), -10%);
      }
    }

    &--02 {
      transform: translate(calc(var(--s-gutter) * -2), -7%);

      @include viewport('tablet-s') {
        transform: translate(calc(var(--s-gutter) * -1), 10%);
      }

      @include viewport('mobile-l') {
        transform: translate(calc(var(--s-gutter) * -1), -90%);
      }
    }

    &--03 {
      transform: translate(calc(var(--s-gutter) * -2), -30%);
    }

    &--04 {
      left: 0;
      transform: translate(0, -20%);
    }
  }

  .intro-flm {
    position: relative;

    &__left {
      top: 0;
      bottom: 0;
      left: calc(var(--s-gutter) * -1);
      padding: 0;

      @include viewport('tablet-s') {
        height: 50vw;
        left: 0;
        margin-left: calc(var(--s-gutter) * -1);
        margin-bottom: var(--s-gutter);
      }
    }

    &__right {
      padding-bottom: calc(var(--s-gutter) * 2);
      position: relative;
      margin-top: -0.3em;

      @include viewport('tablet-s') {
        padding-bottom: var(--s-gutter);
      }
    }
  }

  .deco-lm-01 {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: top center;

    @include viewport('tablet-s') {
      background-position: 10% 10%;
    }
  }

  .deco-lm-02 {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
  }

  .logo-re {
    --height: 0;
    --padding-left: calc(var(--s-gutter) * 2);

    position: relative;
    padding-top: 0;
    padding-bottom: 0;

    &__deco {
      position: absolute;
      width: var(--s-col-wide);
      height: calc(var(--height) + var(--s-gutter) * 2);
      right: 0;

      @include viewport('tablet-s') {
        position: relative;
        height: 50vw;
        width: calc(100% + var(--s-gutter));
        margin-left: var(--s-gutter);
      }
    }

    &__desc {
      box-sizing: border-box;
      width: calc(50% - var(--s-gutter) * 1);
      padding-top: calc(var(--s-gutter) * 3);
      padding-left: var(--padding-left);
      padding-right: calc(var(--s-gutter) * 2);
      padding-bottom: calc(var(--s-gutter) * 0.75);

      @include viewport('tablet') {
        padding-right: var(--s-gutter);
      }

      @include viewport('tablet-s') {
        width: 100%;
        padding-top: var(--s-gutter);
        padding-left: var(--s-gutter);
        padding-right: var(--s-gutter);
      }
    }

    &__logos {
      position: relative;
      z-index: 1;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: var(--s-col-wide);
      margin-left: calc(var(--padding-left) - 1px);

      @include viewport('tablet-s') {
        width: 100%;
        box-sizing: border-box;
        margin-left: 0;
        padding-left: var(--s-gutter);
        padding-right: var(--s-gutter);
      }

      @include viewport('mobile-l') {
        display: block;
      }
    }

    &__logo {
      @include flm-logo();
    }
  }

  .lf-re {
    --c-background: rgba(0, 0, 0, 0.8);

    position: relative;
    margin-top: calc(var(--s-gutter) * -1.75);
    padding-bottom: 0;

    @include viewport('tablet-s') {
      width: 100%;
      margin-top: var(--s-gutter);
      padding-bottom: var(--s-gutter);
    }

    &::after {
      content: "";
      pointer-events: none;
      position: absolute;
      width: 100%;
      height: 13vw;
      margin-left: calc(var(--s-gutter) * -2);
      bottom: 0;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);

      @include viewport('tablet-s') {
        display: none;
      }
    }

    &__title {
      --c-title: #4993ed;

      padding-top: calc(var(--s-gutter) * 0.5);

      @include viewport('tablet-s') {
        padding-top: 0;
      }
    }

    &__desc {
      @include anti-aliased();

      color: white;
      padding-bottom: calc(var(--s-gutter));

      @include viewport('tablet-s') {
        padding-bottom: 0;
      }
    }

    img {
      filter: blur(0);

      @include viewport('tablet-s') {
        filter: none;
      }
    }

    .project__col-third {
      @include viewport('tablet-s') {
        margin-top: var(--s-gutter);
      }
    }
  }

  .final-id {
    margin-top: calc(var(--s-gutter) * 2);

    @include viewport('tablet-s') {
      margin-top: var(--s-gutter);
      padding-left: var(--s-gutter);
      padding-right: var(--s-gutter);
    }

    &__logo-cols {
      flex-wrap: nowrap;
      align-items: flex-start;
    }

    &__logo-col-left {
      flex-shrink: 1;
      padding: calc(var(--s-gutter) * 2);
      padding-top: 0;

      @include viewport('tablet') {
        padding-right: var(--s-gutter);
      }

      @include viewport('tablet-s') {
        padding: 0;
        padding-bottom: calc(var(--s-gutter) * 0.5);
      }
    }

    &__logo-col-right {
      flex-basis: var(--s-col-wide);
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      margin-right: -1px;

      @include viewport('mobile-l') {
        display: block;
      }
    }

    &__logo {
      @include flm-logo();
    }

    &__lf-cols {
      flex-wrap: nowrap;
      margin-top: calc(var(--s-gutter) * -1);

      @include viewport('tablet') {
        margin-top: calc(var(--s-gutter) * -1.5);
      }

      @include viewport('tablet-s') {
        margin-top: 0;
      }
    }

    &__lf-col-left {
      flex-shrink: 1;
      padding: calc(var(--s-gutter) * 2);
      padding-top: calc(var(--s-gutter) * 2.65);

      @include viewport('vertical') {
        padding-top: calc(var(--s-gutter) * 2);
      }

      @include viewport('tablet') {
        padding-left: var(--s-gutter);
        padding-top: var(--s-gutter);
      }

      @include viewport('tablet-s') {
        padding: 0;
        padding-top: calc(var(--s-gutter) * 0.5);
        padding-bottom: calc(var(--s-gutter) * 0.5);
      }
    }

    &__lf-col-right {
      flex-basis: var(--s-col-wide);
      padding: 0;
    }

    &__lf {
      @include flm-mockup();
    }
  }

  .flm-final-de {
    margin-top: var(--s-gutter);
    padding-bottom: 0;

    @include viewport('desktop') {
      margin-top: 0;
    }

    &__title {
      text-align: center;
      margin-bottom: calc(var(--s-gutter) * 1.15);

      @include viewport('tablet-s') {
        margin-top: var(--s-gutter);
      }
    }

    &__screen-01 {
      @include flm-mockup();

      outline: 1px solid white;
      max-width: 1280px;
      margin: 0 auto;
    }

    &__screen-02,
    &__screen-03 {
      @include flm-mockup();

      outline: 1px solid white;
    }

    &__screen-03 {
      margin-top: calc(var(--s-gutter) * 2);

      @include viewport('tablet') {
        margin-top: var(--s-gutter);
      }
    }

    &__small-screens {
      margin-top: calc(var(--s-gutter) * 2);

      @include viewport('tablet') {
        display: block;
        margin-top: var(--s-gutter);

        & > div {
          padding: 0;
        }
      }
    }
  }

  .flm-rd {
    text-align: center;
    margin-top: calc(var(--s-gutter) * 0.8);

    .project__mobile-thumb {
      --box-shadow: 0 0 var(--s-box-shadow) var(--c-box-shadow);
    }

    .media-image {
      --outline-final: 1px solid white;
    }
  }

  .flm-rd__title {
    margin-bottom: calc(var(--s-gutter) * 0.75);
  }

  .flm-cta-container {
    margin-top: calc(var(--s-gutter) * 2.5);
    text-align: center;
  }

  .flm-cta {
    @include flm-mockup();

    --c-bg: var(--c-title);

    @include hover() {
      &:hover {
        color: black;
      }
    }
  }

</style>
