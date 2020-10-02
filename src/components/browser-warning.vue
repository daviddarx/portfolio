
<template>
  <div
    class="browser-warning is-inverted"
    v-if="this.isWarningDisplayed"
  >
    <logo
      class="browser-warning__logo"
    ></logo>

    <div class="browser-warning__infos">
      <h2 class="browser-warning__title">
        Bitte! 😳 <br>
        Verwenden Sie einen modernen Browser... 😇 <br>
      </h2>

      <p class="browser-warning__desc">
        Laden Sie zum Beispiel
        <a href="https://www.google.com/chrome/" target="_blank" class="text-link">Google Chrome</a>
        oder
        <a href="https://www.mozilla.org/firefox/" target="_blank" class="text-link">Mozilla Firefox</a>
        herunter und besuchen Sie diese Seite erneut, um meine Website zu sehen.
      </p>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import Logo from './logo.vue';
  import browser from 'browser-detect';

  export default Vue.extend({
    components: {
      'logo': Logo
    },
    data() {
      return {
        isWarningDisplayed: false
      }
    },
    mounted () {
      //https://github.com/KennethanCeyer/browser-detect
      //if not working, try https://dev.to/dailydevtips1/vanilla-javascript-browser-detection-43j4

      const b = browser();

      if (b.name == 'ie' & b.versionNumber <= 11 ) {
        this.isWarningDisplayed = true;
      }
      if (b.name == 'edge' & b.versionNumber < 20 ) {
        this.isWarningDisplayed = true;
      } 
    }
  });
</script>
