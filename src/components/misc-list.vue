
<template>
  <div
    class="misc-list miscs-grid__item"
    v-bind:class="{ 'is-displayed' : this.isReady }"
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
        <canvas
          class="misc-list__img-canvas"
          ref="canvas"
        >
        </canvas>
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
  export default {
    name: 'misc-list',
    props: {
      route: String,
      imgURL: String,
      date: String,
      title: String,
      id: Number
    },
    data: function () {
      return {
        isReady: false
      }
    },
    mounted () {
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
      },
      setReady: function () {
        this.isReady = true;
      }
    }
  }
</script>
