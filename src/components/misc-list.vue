
<template>
  <div
    class="misc-list miscs-grid__item"
    v-bind:class="{ 'is-displayed' : this.isLoaded }"
  >
    <router-link
      v-bind:to="route"
      class="misc-list__link"
    >
      <div
        class="misc-list__img"
        ref="imageContainer"
      >
        <img
          class="misc-list__img-el"
          @load="imageLoaded"
          ref="image"
        >
      </div>
      <h2
        class="misc-list__info"
      >
        <span class="misc-list__date font-compensated">{{date}}</span>
        <span class="dash dash--spaced">–</span>
        <span class="misc-list__title">{{title}}</span>
      </h2>
    </router-link>
  </div>
</template>

<script>
  import * as PIXI from 'pixi.js'

  export default {
    name: 'misc-list',
    props: {
      route: String,
      imgURL: String,
      date: String,
      title: String,
    },
    data: function () {
      return {
        isLoaded: false,
        imgWidth: 0,
        imgHeight: 0,
        imgRatioHtoW: 0,
        canvas:undefined,
        pixiApp:undefined
      }
    },
    mounted () {
    },
    methods: {
      launchLoading: function () {
        this.$refs.image.setAttribute('src', this.imgURL);
      },
      imageLoaded: function () {
        this.isLoaded = true;
        this.imgWidth = this.$refs.image.naturalWidth;
        this.imgHeight = this.$refs.image.naturalHeight;
        this.imgRatioHtoW = this.imgHeight / this.imgWidth;
        this.initPixi();
        window.addEventListener('resize', this.resize);
        this.$emit('loaed');
      },
      getImageComputedDimensions: function () {
        return {
          width: this.$refs.imageContainer.clientWidth,
          height: this.$refs.imageContainer.clientWidth * this.imgRatioHtoW
        }
      },
      resize: function () {
        this.pixiApp.view.style.display = 'none';
        requestAnimationFrame(() => {
          const imgDimensions = this.getImageComputedDimensions();
          this.pixiApp.renderer.resize(imgDimensions.width, imgDimensions.height);
          this.pixiApp.view.style.display = 'block';
        });
      },
      initPixi: function () {
        const imgDimensions = this.getImageComputedDimensions();
        this.pixiApp = new PIXI.Application({width: imgDimensions.width, height: imgDimensions.height});
        this.pixiApp.renderer.autoResize = true;
        this.$refs.imageContainer.appendChild(this.pixiApp.view);
        this.pixiApp.view.classList.add('misc-list__img-canvas');
      }
    }
  }
</script>
