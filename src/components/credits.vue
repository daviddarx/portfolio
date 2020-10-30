
<template>
  <div class="credits">
    <span class="credits__text">
      Design &amp; Code – David Darx<br>
      Copy &amp; Lektorat – Cérdric Knapp<br>
      Foto- &amp; Videoaufnahmen – Silvio Strickler<br>
      ©{{this.year}}
    </span>
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
