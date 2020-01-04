
<template>
  <div class="credits">
    Copyright © {{this.year}} - Frontend von David Darx
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
