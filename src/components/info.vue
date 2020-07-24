
<template>
  <div
    class="info"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div class="content-page">
      <h2
        class="content-page__page-title font-compensated animate-in hidable-title"
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
          class="info__introduction hiding-title"
          v-html="this.info.introduction"
        >
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
                class="info__step-additional"
              >
                {{experience.additional}}
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
            <p v-html="expertise.desc">
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
                class="info__step-additional"
              >
                {{education.additional}}
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
        pageTitle: "Info"
      }
    },
    mounted () {
      setTimeout(this.displayInfo, 100);
      this.initTitlesObserver(this.pageTitle);
    },
    beforeDestroy () {
      this.$refs.gif.destroy();
      this.destroyTitlesObserver();
    },
    methods: {
      displayInfo: function() {
        this.isDisplayed = true;
      }
    }
  });
</script>

