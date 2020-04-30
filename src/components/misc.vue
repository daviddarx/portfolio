
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
      <p class="content-page__lead animate-in animate-in__s1">
        {{misc.lead}}
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

  import {AdjustmentFilter} from '@pixi/filter-adjustment';
  import * as PIXI from 'pixi.js';

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
        miscItemsToLoad: [],
        miscItemsToLoadNext: undefined,
        pixi: {
          sprites: [],
          settings: {
            saturation: 0,
            contrast: 2,
            brightness: 2
          }
        },
        pageTitle: "Kunterbunt"
      }
    },
    created () {
      this.misc.collection.forEach(misc => {
        misc.route = this.misc.routesPath + misc.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ').join('-').split('.').join('').toLowerCase();
      });
    },
    mounted () {
      this.initPixi();
      this.setupMounting();

      this.$refs.miscItem.forEach((item, i) => {
        this.miscItemsToLoad.push(item);
      });
      this.miscItemsToLoad[0].launchLoading();
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
      next();
    },
    methods: {
      setupMounting: function() {
        this.isMounted = true;

        window.addEventListener('resize', this.resize);
        this.resize();

        setTimeout(this.displayMisc, 100);

        if (window.contentPageSavedHeight) {
          this.$refs.contentPage.style.minHeight = window.contentPageSavedHeight + 'px';
        }

        this.initTitlesObserver(this.pageTitle);
      },
      displayMisc: function() {
        this.isDisplayed = true;
      },
      initPixi: function() {
        this.pixi.app = new PIXI.Application({
          width: 1,
          height: 1,
          antialias: true,
          resolution: window.devicePixelRatio
        });
        this.pixi.app.renderer.autoResize = true;
        this.pixi.app.stop();

        this.pixi.filter = new AdjustmentFilter();
        this.pixi.filter.saturation = this.pixi.settings.saturation;
        this.pixi.filter.contrast = this.pixi.settings.contrast;
        this.pixi.filter.brightness = this.pixi.settings.brightness;
      },
      setPixiImage: function (miscItem) {
        const sprite = new PIXI.Sprite(PIXI.Loader.shared.resources[miscItem.imgURL].texture);
              sprite.filters = [this.pixi.filter];

        this.pixi.sprites[miscItem.id] = sprite;

        this.drawPixiImage(miscItem);

        miscItem.cloneCanvas(this.pixi.app.view);
        miscItem.setReady();

        this.loadNext();
      },
      drawPixiImage: function (miscItem) {
        const imgSize = miscItem.getImageDimensions();

        this.pixi.sprite = this.pixi.sprites[miscItem.id];
        this.pixi.app.stage.addChild(this.pixi.sprite);

        this.pixi.app.renderer.resize(imgSize.width, imgSize.height);
        this.pixi.sprite.width = imgSize.width;
        this.pixi.sprite.height = imgSize.height;

        this.renderPixi();
        this.pixi.app.stage.removeChild(this.pixi.sprite);
      },
      renderPixi: function() {
        this.pixi.app.renderer.render( this.pixi.app.stage);
      },
      loadCompleteListener: function (miscItem) {
        if (PIXI.Loader.shared.resources[miscItem.imgURL] == undefined) {
          PIXI.Loader.shared.add(miscItem.imgURL).load(() => {
            this.setPixiImage(miscItem);
          });
        } else {
          this.setPixiImage(miscItem);
        }

        console.log("load completed");

        this.miscItemsToLoad.shift();

        if (this.miscItemsToLoad.length > 0) {
          this.miscItemsToLoadNext = this.miscItemsToLoad[0];
        } else {
          this.miscItemsToLoadNext = undefined;
          console.log("loading finished");
        }
      },
      loadNext: function () {
        if (this.miscItemsToLoadNext) {
          this.miscItemsToLoadNext.launchLoading();
        }
      },
      resize: function () {
        this.$refs.miscItem.forEach(miscItem => {
          const thumbHeight = Math.round(miscItem.$el.offsetWidth * parseInt(miscItem.$el.getAttribute("thumbH")) / parseInt(miscItem.$el.getAttribute("thumbW")));
          miscItem.$el.style.setProperty('--s-image-height', thumbHeight + 'px');

          if (this.pixi.sprites[miscItem.id]){
            this.drawPixiImage(miscItem);
            miscItem.cloneCanvas(this.pixi.app.view);
          }
        });
      }
    }
  });
</script>

