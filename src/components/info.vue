
<template>
  <div
    class="info"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div class="content-page">
      <h2
        class="content-page__page-title font-compensated animate-in hidable-title info__title"
        v-bind:class="{ 'is-hidden': this.isTitleHidden, 'is-below': this.isTitleBelow, 'is-jumping': this.isTitleJumping }"
      >
        <span class="content-page__page-title__el">
          {{this.pageTitle}}
        </span>
      </h2>
      <p
        class="content-page__lead animate-in animate-in__s1"
        v-html="this.info.lead"
      >
      </p>

      <div class="content-page__content animate-in animate-in__s2">
        <div
          class="info__image content-page__3-4 hiding-title"
        >
          <media-gif
            class="info__image-el"
            v-bind:title="info.gifTitle"
            v-bind:path="info.gifPath"
            v-bind:images="info.gifImages"
            ref="gif"
          >
          </media-gif>
        </div>

        <div
          class="info__introduction"
          v-html="this.info.introduction"
          ref="intro"
        >
        </div>

        <div class="info__cv">
          <a href="https://files.daviddarx.com/works/static/info/david_darx_cv_2021.pdf" target="_blank" class="cta cta--small">CV herunterladen</a>
        </div>

        <h2
          class="content-page__subtitle content-page__3-4 hiding-title"
          titleReplace="Erfahrung"
        >
          Erfahrung
        </h2>

        <div class="content-page__list-container">
          <div
            class="content-page__list info__steps-listing"
            v-for="experience in info.experience"
            v-bind:key="experience.agency + experience.title"
          >
            <div class="info__step-infos">
              <h3 class="content-page__title small-title font-compensated info__step-title">
                {{experience.title}}
              </h3>
              <span>{{experience.agency}} <span class="dash dash--spaced">–</span> {{experience.place}}</span>
              <span
                v-if="experience.additional"
                v-html="experience.additional"
                class="info__step-additional"
              >
              </span>
            </div>
            <div class="info__step-date">
              {{experience.date1}}<span v-if="experience.date2">&nbsp;</span><span class="dash dash--spaced" v-if="experience.date2">–</span><span v-if="experience.date2"> {{experience.date2}}</span>
            </div>
          </div>
        </div>

        <h2
          class="content-page__subtitle content-page__3-4 hiding-title"
          titleReplace="Expertise"
        >
          Expertise
        </h2>

        <div class="content-page__list-container info__expertise">
          <div
            class="content-page__list"
            v-for="expertise in info.expertise"
            v-bind:key="expertise.title"
          >
            <h3 class="content-page__title small-title font-compensated">
              {{expertise.title}}
            </h3>
            <p
              class="info__expertise-text"
              v-html="expertise.desc">
            </p>
          </div>
        </div>

        <h2
          class="content-page__subtitle content-page__3-4 hiding-title"
          titleReplace="Ausbildung"
        >
          Ausbildung
        </h2>

        <div class="content-page__list-container">
          <div
            class="content-page__list info__steps-listing"
            v-for="education in info.education"
            v-bind:key="education.title"
          >
            <div class="info__step-infos">
              <h3 class="content-page__title small-title font-compensated info__step-title">
                {{education.title}}
              </h3>
              <span>{{education.school}} <span class="dash dash--spaced">–</span> {{education.place}}</span>
              <span
                v-if="education.additional"
                v-html="education.additional"
                class="info__step-additional"
              >
              </span>
            </div>
            <div class="info__step-date">
              {{education.date1}}<span v-if="education.date2">&nbsp;</span><span class="dash dash--spaced" v-if="education.date2">–</span><span v-if="education.date2"> {{education.date2}}</span>
            </div>
          </div>
        </div>

        <h2
          class="content-page__subtitle content-page__3-4 hiding-title"
          titleReplace="Kundenauszug"
        >
          Kundenauszug
        </h2>
        <p>
          <span
            v-for="(client, index) in info.clients"
            v-bind:key="client"
          >
            {{client}}<span v-if="index < info.clients.length-1"><br></span>
          </span>
        </p>
      </div>

      <credits></credits>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import MediaGif from './media-gif.vue';
  import Credits from './credits.vue';
  import * as info from '../../content/info.json';
  import contentPageTitle from '../mixins/content-page-title';

  export default Vue.extend({
    components: {
      'media-gif': MediaGif,
      'credits': Credits
    },
    mixins: [contentPageTitle],
    data() {
      return {
        info: info,
        isDisplayed : false,
        pageTitle: "Info",
        introLinks: undefined
      }
    },
    mounted () {
      setTimeout(this.display, 100);
      this.initTitlesObserver(this.pageTitle);
      this.initIntroLinks();
    },
    beforeDestroy () {
      this.$refs.gif.destroy();
      this.destroyTitlesObserver();
      this.reinitIntroLinks();
    },
    methods: {
      display: function() {
        if (this.$parent.isLoaded == true) {
          this.isDisplayed = true;
        }
      },
      initIntroLinks: function () {
        this.introLinks = this.$refs.intro.querySelectorAll('a');

        this.introLinks.forEach(link => {
          link.addEventListener("click", this.introLinksClickListener);
        });
      },
      introLinksClickListener: function (e) {
        e.preventDefault()
        this.$router.push(e.target.getAttribute("href"))
      },
      reinitIntroLinks: function () {
        this.introLinks.forEach(link => {
          link.removeEventListener("click", this.introLinksClickListener);
        });
      }
    }
  });
</script>

