
<template>
  <nav class="navigation">
    <h2 class="visually-hidden">Navigation</h2>
    <a href="#">
      Projects
    </a>
    <a href="#">
      About
    </a>
    <a href="#">
      Random
    </a>
    <a href="#">
      Contact
    </a>
  </nav>
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
