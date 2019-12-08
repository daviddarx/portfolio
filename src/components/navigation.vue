
<template>
  <navigation class="navigation">
    <h2>Navigation<h2>
      <ul>
        <li>Projects</li>
        <li>About</li>
        <li>Random</li>
      </ul>
  </navigation>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    data() {
      return {
      }
    },
    mounted () {
      this.init();
    },
    methods: {
      init: function () {
      }
    }
  });
</script>
