
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
        <video
          muted
          autoplay
          playsinline
          loop
          preload="auto"
          poster = "https://files.daviddarx.com/works/static/home/home.jpg"
          class="home__video"
          ref="video"
        >
          <source
            src = "https://files.daviddarx.com/works/static/home/home.mp4"
            type = "video/mp4"
          >
        <video>

      </router-link>

    </div>
  </div>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
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
        videoW: 0,
        videoH: 0,
        videoX: 0,
        videoY: 0,
        mobileStep: 768,
        videoRatio: 1280/1080,
        mediasPath: 'https://files.daviddarx.com/works/static/home/'
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

        if (this.stageRatio > this.videoRatio) {
          this.videoW = this.stageW;
          this.videoH = this.videoW / this.videoRatio;
          this.videoX = 0;
          this.videoY = (this.videoH - this.stageH) * -0.5;
        } else {
          this.videoH = this.stageH;
          this.videoW = this.videoH * this.videoRatio;
          this.videoY = 0;
          this.videoX = (this.videoW - this.stageW) * -0.5;
        }

        this.$refs.video.style.setProperty('--w', this.videoW + "px");
        this.$refs.video.style.setProperty('--h', this.videoH + "px");
        this.$refs.video.style.setProperty('--x', this.videoX + "px");
        this.$refs.video.style.setProperty('--y', this.videoY + "px");

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

