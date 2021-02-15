
<template>
  <div
    class="frontend"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div class="content-page">
      <h2
        class="content-page__page-title font-compensated animate-in hidable-title frontend__title"
        v-bind:class="{ 'is-hidden': this.isTitleHidden, 'is-below': this.isTitleBelow, 'is-jumping': this.isTitleJumping }"
      >
        <span class="content-page__page-title__el">
          {{this.pageTitle}}
        </span>
      </h2>
      <p
        class="content-page__lead animate-in animate-in__s1"
        v-html="this.frontend.lead"
      >
      </p>

      ajouter montreux? martincramatte

      <div class="content-page__content animate-in animate-in__s2">

        <h2
          class="content-page__subtitle content-page__3-4 hiding-title"
          titleReplace="Links"
        >
          Links
        </h2>

        <div class="frontend__git">
          <a href="https://github.com/daviddarx" target="_blank" class="cta cta--small">github.com/daviddarx</a>
          <a href="https://codepen.io/daviddarx" target="_blank" class="cta cta--small">codepen.io/daviddarx</a>
        </div>

        <div class="content-page__list-container frontend__links">
          <div
            v-for="link in frontend.links"
            v-bind:key="link.title"
            class="frontend-link"
          >
            <h3 class="frontend-link__infos">
              {{link.title}}, {{link.year}}
              <span
                v-if="link.detail"
                class="frontend-link__detail"
              >
                – {{link.detail}}
              </span>
            </h3>
            <a
              v-for="url in link.urls"
              v-bind:key="url"
              v-bind:href="url"
              target="blank"
              class="text-link frontend-link__url"
            >
              {{url}}
            </a>
          </div>
        </div>
      <credits></credits>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import Credits from './credits.vue';
  import * as frontend from '../../content/frontend.json';
  import contentPageTitle from '../mixins/content-page-title';

  export default Vue.extend({
    components: {
      'credits': Credits
    },
    mixins: [contentPageTitle],
    data() {
      return {
        frontend: frontend,
        isDisplayed : false,
        pageTitle: "Frontend"
      }
    },
    mounted () {
      setTimeout(this.display, 100);
      this.initTitlesObserver(this.pageTitle);
    },
    beforeDestroy () {
      this.destroyTitlesObserver();
    },
    methods: {
      display: function() {
        if (this.$parent.isLoaded == true) {
          this.isDisplayed = true;
        }
      }
    }
  });
</script>

