
<template>
  <div
    class="info"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div class="content-page">
      <h2
        class="content-page__page-title font-compensated animate-in"
        v-bind:class="{ 'is-hidden': this.isTitleHidden }"
      >
        <span class="content-page__page-title__el">
          Info
        </span>
      </h2>
      <p class="content-page__lead animate-in animate-in__s1">
        {{this.info.lead}}
      </p>

      <div class="content-page__content animate-in animate-in__s2">
        <div
          class="info__img content-page__3-4"
          v-observe-visibility="{
            callback: intersectionObserver,
            intersection: {
              rootMargin: rootMargin,
            },
          }"
        >
        </div>

        <h2
          class="content-page__subtitle content-page__3-4"
          v-observe-visibility="{
            callback: intersectionObserver,
            intersection: {
              rootMargin: rootMargin,
            },
          }"
        >
          Erfahrung
        </h2>
        <div class="content-page__list-container">
          <div
            class="content-page__list"
            v-for="experience in info.experience"
            v-bind:key="experience.agency + experience.title"
          >
            <h3 class="content-page__title small-title font-compensated">
              {{experience.agency}} <span class="dash dash--spaced dash--title">–</span> {{experience.title}}
            </h3>
            <p>
              {{experience.date1}}<span v-if="experience.date2">&nbsp;</span><span class="dash" v-if="experience.date2">–</span><span v-if="experience.date2"> {{experience.date2}}</span>, {{experience.place}}
            </p>
          </div>
        </div>

        <h2
          class="content-page__subtitle content-page__3-4"
          v-observe-visibility="{
            callback: intersectionObserver,
            intersection: {
              rootMargin: rootMargin,
            },
          }"
        >
          Expertise
        </h2>

        <div class="content-page__list-container">
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
          class="content-page__subtitle content-page__3-4"
          v-observe-visibility="{
            callback: intersectionObserver,
            intersection: {
              rootMargin: rootMargin,
            },
          }"
        >
          Ausbildung
        </h2>

        <div class="content-page__list-container">
          <div
            class="content-page__list"
            v-for="education in info.education"
            v-bind:key="education.title"
          >
            <h3 class="content-page__title small-title font-compensated">
              {{education.title}}
            </h3>
            <p>
              {{education.desc}}<br>
              {{education.date1}} <span class="dash">–</span> {{education.date2}}, {{education .place}}
            </p>
          </div>
        </div>

        <h2
          class="content-page__subtitle content-page__3-4"
          v-observe-visibility="{
            callback: intersectionObserver,
            intersection: {
              rootMargin: rootMargin,
            },
          }"
        >
          Kunden
        </h2>
        <p>
          <span
            v-for="(client, index) in info.clients"
            v-bind:key="client"
          >
            {{client}} <span class="dash dash--spaced " v-if="index < info.clients.length-1">-</span>
          </span>
        </p>
      </div>

      <credits></credits>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import Credits from './credits.vue';
  import * as info from '../../content/info.json';
  import contentPageTitle from '../mixins/content-page-title';

  export default Vue.extend({
    components: {
      'credits': Credits
    },
    mixins: [contentPageTitle],
    data() {
      return {
        info: info,
        isDisplayed : false
      }
    },
    mounted () {
      setTimeout(this.displayInfo, 100);
    },
    methods: {
      displayInfo: function() {
        this.isDisplayed = true;
      }
    }
  });
</script>

