
<template>
  <div
    class="contact"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div class="content-page">
      <div class="content-page__lead">
        <p class="animate-in">
          <b class="font-compensated small-title">David Darx</b>
          Pflanzschulstrasse 35<br>
          8004 Zürich<br>
          CH <span class="separe">–</span> Schweiz
        </p>
        <p class="animate-in animate-in__s1">
          078 805 89 63<br>
          <a href="mailto:hoi@daviddarx.com" target="_blank" class="text-link">hoi@daviddarx.com</a>
        </p>
        <p class="animate-in animate-in__s2">
          <a href="https://www.linkedin.com/in/daviddarx" target="_blank" class="text-link">Linkedin</a>
        </p>
      </div>
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
        isDisplayed : false
      }
    },
    mounted () {
      setTimeout(this.displayContact, 100);
    },
    methods: {
      displayContact: function() {
        this.isDisplayed = true;
      }
    }
  });
</script>

