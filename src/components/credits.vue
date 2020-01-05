
<template>
  <div class="credits">
    <p class="credits__text">
      Copyright © {{this.year}} - Frontend von David Darx
    </p>
  </div>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    data() {
      return {
        year: 2020
      }
    },
    mounted () {
      this.year = new Date().getFullYear();
    },
    methods: {
    }
  });
</script>
