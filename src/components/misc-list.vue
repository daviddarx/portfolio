
<template>
  <div
    class="misc-list miscs-grid__item"
    v-bind:class="{ 'is-displayed' : this.isLoaded }"
  >
    <router-link
      v-bind:to="route"
      class="misc-list__link"
    >
      <img
        class="misc-list__img"
        @load="imageLoaded"
        ref="image"
      >
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
      title: String
    },
    data: function () {
      return {
        isLoaded: false,
        canvas:undefined
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
        this.$emit('loaed')
      }
    }
  }
</script>
