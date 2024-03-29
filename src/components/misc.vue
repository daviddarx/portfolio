
<template>
  <div
    class="miscs"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div
      class="content-page"
      ref="contentPage"
    >
      <h2
        class="content-page__page-title font-compensated animate-in hidable-title"
        v-bind:class="{ 'is-hidden': this.isTitleHidden, 'is-below': this.isTitleBelow, 'is-jumping': this.isTitleJumping }"
      >
        <span class="content-page__page-title__el">
          Kunterbunt
        </span>
      </h2>
      <p
        class="content-page__lead animate-in animate-in__s1"
        v-html="misc.lead"
      >
      </p>
      <div
        class="content-page__3-4 miscs__container miscs-grid animate-in animate-in__s2 hiding-title"
      >
        <misc-list
          v-for="(miscItem, index) in misc.collection"
          v-bind:key="miscItem.title"
          v-bind:route="misc.routesPath + miscItem.uid"
          v-bind:imgURL="misc.mediasPath+miscItem.thumb"
          v-bind:date="miscItem.date"
          v-bind:title="miscItem.title"
          v-bind:id="index"
          v-bind:thumbW="miscItem.thumbDimensions[0]"
          v-bind:thumbH="miscItem.thumbDimensions[1]"
          v-on:loaded="loadCompleteListener"
          ref="miscItem"
        >
        </misc-list>
      </div>
      <credits></credits>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import MiscList from './misc-list.vue';
  import Credits from './credits.vue';
  import * as misc from '../../content/misc.json';
  import dash from '../mixins/dash';
  import contentPageTitle from '../mixins/content-page-title';

  export default Vue.extend({
    name: "misc-keep",
    components: {
      'misc-list': MiscList,
      'credits': Credits
    },
    mixins: [dash, contentPageTitle],
    data() {
      return {
        misc: misc,
        isDisplayed : false,
        isMounted: false,
        isLoading: false,
        miscItemsToLoad: [],
        miscItemsToLoadStartNumber: 4,
        miscItemsToLoadNext: undefined,
        miscItemsToObserve: undefined,
        miscsObserver: undefined,
        miscsObserverRootMargin: '0px 0px 0px 0px',
        firstResized: false,
        pageTitle: "Kunterbunt"
      }
    },
    created () {
      this.misc.collection.forEach(misc => {
        misc.route = this.misc.routesPath + misc.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ').join('-').split('.').join('').toLowerCase();
      });
    },
    mounted () {
      this.launchFirstLoads();

      this.setupMounting();
    },
    activated () {
      if (this.isMounted == false) {
        this.setupMounting();
      }
    },
    beforeRouteLeave (to, from, next) {
      window.removeEventListener('resize', this.resize);
      window.contentPageSavedHeight = this.$refs.contentPage.clientHeight;
      this.isMounted = false;
      this.isDisplayed = false;
      this.destroyTitlesObserver();
      this.destroyMiscsObserver();
      next();
    },
    methods: {
      launchFirstLoads: function () {
        this.$refs.miscItem.forEach((item, i) => {
          item.$el.setAttribute('loadID', i);
          if (i < this.miscItemsToLoadStartNumber) {
            this.miscItemsToLoad.push(item);
            item.$el.setAttribute('observed', 'false');
          }
        });
        this.miscItemsToLoadNext = this.miscItemsToLoad[0];
        this.loadNext();
      },
      setupMounting: function() {
        this.isMounted = true;

        this.firstResized = false;
        window.addEventListener('resize', this.resize);
        this.resize();

        this.initTitlesObserver(this.pageTitle);
        this.initMiscsObserver();

        if (window.contentPageSavedHeight) {
          this.$refs.contentPage.style.minHeight = window.contentPageSavedHeight + 'px';
        }

        setTimeout(this.display, 100);
      },
      display: function() {
        if (this.$parent.isLoaded == true) {
          this.isDisplayed = true;
        }
      },
      loadCompleteListener: function (miscItem) {
        miscItem.setReady();
        miscItem.resize();

        this.loadNext();

        this.miscItemsToLoad.shift();

        if (this.miscItemsToLoad.length > 0) {
          this.miscItemsToLoadNext = this.miscItemsToLoad[0];
        } else {
          this.miscItemsToLoadNext = undefined;
          this.isLoading = false;
        }
      },
      loadNext: function () {
        if (this.miscItemsToLoadNext) {
          this.miscItemsToLoadNext.launchLoading();
          this.isLoading = true;
        }
      },
      calculateMiscsRootMargin () {
        const margin = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        this.miscsObserverRootMargin = `0px 0px ${margin}px 0px`;
      },
      initMiscsObserver: function () {
        if (!!window.IntersectionObserver) {
          this.miscItemsToObserve = [];
          this.$refs.miscItem.forEach((item) => {
            if (item.$el.getAttribute('observed') != 'false') {
              this.miscItemsToObserve.push(item);
            }
          });

          if (this.miscItemsToObserve.length > 0) {
            this.calculateMiscsRootMargin();

            this.miscsObserver = new IntersectionObserver(this.miscsIntersectionListener, {
              rootMargin: this.miscsObserverRootMargin
            });

            this.miscItemsToObserve.forEach((item) => {
              this.miscsObserver.observe(item.$el);
            });
          }
        }
      },
      destroyMiscsObserver () {
        if (!!window.IntersectionObserver && this.miscsObserver) {
          this.miscItemsToObserve.forEach((item) => {
            this.miscsObserver.unobserve(item.$el);
          });
          this.miscsObserver.disconnect();
          this.miscsObserver = undefined;
        }
      },
      miscsIntersectionListener (entries, observer) {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            const miscItem = this.$refs.miscItem[parseInt(entry.target.getAttribute('loadID'))];
            this.miscItemsToLoad.push(miscItem);

            if (this.isLoading == false) {
              this.miscItemsToLoadNext = miscItem;
              this.loadNext();
            }

            entry.target.setAttribute('observed', 'false');
            this.miscsObserver.unobserve(entry.target);
          }
        });
      },
      resize: function () {
        if (this.firstResized == true && this.miscsObserver) {
          this.destroyMiscsObserver();
          this.initMiscsObserver();
        }

        if (this.firstResized == true) {
          this.$refs.contentPage.style.minHeight = '0px';
          requestAnimationFrame(() => {
            window.contentPageSavedHeight = this.$refs.contentPage.clientHeight;
            this.$refs.contentPage.style.minHeight = window.contentPageSavedHeight + 'px';
          });
        }

        this.$refs.miscItem.forEach(miscItem => {
          const thumbHeight = Math.round(miscItem.$el.offsetWidth * parseInt(miscItem.$el.getAttribute("thumbH")) / parseInt(miscItem.$el.getAttribute("thumbW")));
          miscItem.$el.style.setProperty('--s-image-height', thumbHeight + 'px');
          miscItem.resize();
        });

        this.firstResized = true;
      }
    }
  });
</script>

