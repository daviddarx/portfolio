
<template>
  <div
    class="misc-list miscs-grid__item"
    v-bind:class="{ 'is-displayed' : this.isLoaded }"
    @mouseover="imageMouseOver"
    @mouseleave="imageMouseOut"
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
  import * as PIXI from 'pixi.js';
  import gsap, {Power4} from 'gsap';


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
        imgHoverScale: 0.8,
        imgScale: 0,
        imgDimensions: undefined,
        canvas:undefined,
        pixiApp:undefined,
        pixiSprite: undefined,
        pixiEase: Power4
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
        PIXI.Loader.shared.add(this.imgURL).load(() => {
          this.$emit('loaded');
          this.setupImage();
        });
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
          this.imgDimensions = this.getImageComputedDimensions();
          this.pixiApp.renderer.resize(this.imgDimensions.width, this.imgDimensions.height);
          this.pixiApp.view.style.display = 'block';
          this.resizeImage();
        });
      },
      initPixi: function () {
        this.imgDimensions = this.getImageComputedDimensions();
        this.pixiApp = new PIXI.Application({
          width: this.imgDimensions.width,
          height: this.imgDimensions.height,
          backgroundColor: '0xffffff',
          antialias: true,
          resolution: window.devicePixelRatio
        });
        this.pixiApp.renderer.autoResize = true;
        this.pixiApp.stop();
        this.$refs.imageContainer.appendChild(this.pixiApp.view);
        this.pixiApp.view.classList.add('misc-list__img-canvas');
      },
      setupImage: function () {
        this.pixiSprite = new PIXI.Sprite(PIXI.Loader.shared.resources[this.imgURL].texture);
        this.pixiApp.stage.addChild(this.pixiSprite);
        this.resizeImage();
      },
      renderImage: function () {
        this.pixiApp.renderer.render( this.pixiApp.stage);
      },
      resizeImage: function () {
        this.pixiSprite.width = this.imgDimensions.width;
        this.pixiSprite.height = this.imgDimensions.height;
        this.pixiSprite.x = this.imgDimensions.width * 0.5;
        this.pixiSprite.y = this.imgDimensions.height * 0.5;
        this.pixiSprite.anchor.x = this.pixiSprite.anchor.y = 0.5;
        this.imgScale = this.pixiSprite.scale.x;
        this.renderImage();
      },
      imageMouseOver: function () {
        gsap.to(this.pixiSprite.scale, {
          duration: 0.3,
          ease:this.pixiEase.easeOut,
          x: this.imgScale * this.imgHoverScale,
          y: this.imgScale * this.imgHoverScale,
          onUpdate: this.renderImage
        });
      },
      imageMouseOut: function() {
        gsap.to(this.pixiSprite.scale, {
          duration: 0.3,
          ease:this.pixiEase.easeOut,
          x: this.imgScale,
          y: this.imgScale,
          onUpdate: this.renderImage
        });
      }
    }
  }
</script>
