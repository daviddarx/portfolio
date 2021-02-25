
<template>
  <div
    class="home"
    ref="home"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div class="content-page">

      <h1
        class="home__title animate-in"
        v-bind:class="{ 'is-hidden': this.isTitleHidden }"
      >
        <span class="home__title-name font-compensated" ref="titleName">David Darx</span>
        <span class="home__title-detail" ref="titleDetail">Digital Design &amp; Art Direction</span>
      </h1>

      <router-link
        to="/projects"
        class="home__stage animate-in animate-in__s2"
        ref="stage"
      >
        <div class="home__stage-overlay">
          <span class="home__stage-title">
            Projekte
          </span>
          <div class="home__stage-arrow arrow"></div>
        </div>
        <media-gif
            class="home__gif"
            v-bind:title="gifTitle"
            v-bind:path="gifPath"
            v-bind:images="gifImages"
            ref="gif"
          >
          </media-gif>
      </router-link>

    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import MediaGif from './media-gif.vue';

  export default Vue.extend({
    components: {
      'media-gif': MediaGif
    },
    data() {
      return {
        isDisplayed : false,
        isTitleHidden: false,
        titleHideRatioToVH: 0.6,
        windowW: 0,
        windowH: 0,
        stageW: 0,
        stageH: 0,
        stageRatio: 0,
        gifW: 0,
        gifH: 0,
        gifX: 0,
        gifY: 0,
        mobileStep: 768,
        gifRatio: 1280/1080,
        gifTitle: "Projekte",
        gifPath: "https://files.daviddarx.com/works/static/home/",
        gifImages: [
          "01.1.jpg",
          "01.2.jpg",
          "02.1.jpg",
          "02.2.jpg",
          "03.1.jpg",
          "03.2.jpg",
          "04.1.jpg",
          "04.2.jpg",
          "05.1.jpg",
          "05.2.jpg",
          "06.1.jpg",
          "06.2.jpg",
          "07.1.jpg",
          "07.2.jpg",
          "08.1.jpg",
          "08.2.jpg",
          "09.1.jpg",
          "09.2.jpg",
          "10.1.jpg",
          "10.2.jpg",
          "10.3.jpg"
        ]
      }
    },
    mounted () {
      setTimeout(this.display, 100);

      window.addEventListener('resize', this.resizeListener);
      this.resizeListener();
    },

    methods: {
      display: function () {
        if (this.$parent.isLoaded == true) {
          this.isDisplayed = true;
        }
      },
      resizeListener: function () {
        this.windowW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        this.windowH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        this.stageW = this.$refs.stage.$el.offsetWidth;
        this.stageH = this.$refs.stage.$el.offsetHeight;
        this.stageRatio = this.stageW / this.stageH;

        if (this.stageRatio > this.gifRatio) {
          this.gifW = this.stageW;
          this.gifH = this.gifW / this.gifRatio;
          this.gifX = 0;
          this.gifY = (this.gifH - this.stageH) * -0.5;
        } else {
          this.gifH = this.stageH;
          this.gifW = this.gifH * this.gifRatio;
          this.gifY = 0;
          this.gifX = (this.gifW - this.stageW) * -0.5;
        }

        this.$refs.gif.$el.style.setProperty('--w', this.gifW + "px");
        this.$refs.gif.$el.style.setProperty('--h', this.gifH + "px");
        this.$refs.gif.$el.style.setProperty('--x', this.gifX + "px");
        this.$refs.gif.$el.style.setProperty('--y', this.gifY + "px");

        if (this.windowW <= this.mobileStep) {
          if (this.$refs.titleName.offsetWidth + this.$refs.titleDetail.offsetWidth > this.windowH * this.titleHideRatioToVH) {
            this.isTitleHidden = true;
          } else {
            this.isTitleHidden = false;
          }
        } else {
          this.isTitleHidden = false;
        }
      }
    }
  });
</script>

