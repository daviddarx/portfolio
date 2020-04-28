
<template>
  <div
    class="misc-list miscs-grid__item"
    v-bind:class="{ 'is-displayed' : this.isReady, 'is-animated-in' : this.isAnimatedIn }"
    ref="miscList"
  >
    <div class="misc-list__container">
      <router-link
        v-bind:to="route"
        class="misc-list__link"
      >
        <div
          class="misc-list__img"
          ref="imageContainer"
        >
          <preloader class="misc-list__preloader preloader--inverted"></preloader>

          <img
            class="misc-list__img-el"
            @load="imageLoaded"
            ref="image"
          >
          <canvas
            class="misc-list__img-canvas"
            ref="canvas"
          >
          </canvas>
        </div>
        <h2
          class="misc-list__info"
        >
          <span class="misc-list__date font-compensated">{{title}}</span>
          <span class="dash dash--spaced">–</span>
          <span class="misc-list__title">{{date}}</span>
        </h2>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Preloader from './preloader.vue';

  export default {
    name: 'misc-list',
    components: {
      'preloader': Preloader
    },
    props: {
      route: String,
      imgURL: String,
      date: String,
      title: String,
      id: Number
    },
    data: function () {
      return {
        isReady: false,
        isAnimatedIn: false,
        hoverScale: 0,
        hoverTranslateY: 0,
      }
    },
    mounted () {
      this.hoverScale = getComputedStyle(this.$refs.miscList).getPropertyValue('--s-scaleHover');
    },
    methods: {
      launchLoading: function () {
        this.$refs.image.setAttribute('src', this.imgURL);
      },
      imageLoaded: function () {
        this.$emit('loaded');
      },
      getImageDimensions: function () {
        return {
          width: this.$refs.image.clientWidth,
          height: this.$refs.image.clientHeight
        };
      },
      cloneCanvas: function (pixiCanvas) {
        this.$refs.canvas.width = pixiCanvas.width;
        this.$refs.canvas.height = pixiCanvas.height;
        this.$refs.canvas.getContext('2d').drawImage(pixiCanvas, 0, 0);

        this.resize();
      },
      setReady: function () {
        this.isReady = true;
        setTimeout(() => {
          this.isAnimatedIn = true;
        }, 500);
      },
      resize: function () {
        this.hoverTranslateY = this.$refs.image.clientHeight * (1-this.hoverScale) * -0.5;
        this.$refs.miscList.style.setProperty('--s-translateHover', this.hoverTranslateY + 'px');
      }
    }
  }
</script>
