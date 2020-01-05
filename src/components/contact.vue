
<template>
  <div class="contact">
    <div class="content-page">
      <p class="content-page__lead">
        <b>David Darx</b><br>
        Pflanzschulstrasse 35<br>
        8004 Zürich<br>
        CH <span class="separe">–</span> Schweiz<br><br>

        078 805 89 63<br>
        <a href="mailto:hoi@daviddarx.com" target="_blank" class="text-link">hoi@daviddarx.com</a><br><br>
        <a href="https://www.linkedin.com/in/daviddarx" target="_blank" class="text-link">www.linkedin.com/in/daviddarx</a>
      </p>
      <credits></credits>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import Credits from './credits.vue';

  export default Vue.extend({
    components: {
      'credits': Credits
    },
    data() {
      return {
      }
    },
    mounted () {
    },
    methods: {
    }
  });
</script>

