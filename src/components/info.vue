
<template>
  <div class="info">
    <div class="content-page">
      <h1 class="visually-hidden"> David Darx – Digital Design &amp; Art Direction</h1>
      <p class="content-page__lead">
        {{this.info.lead}}
      </p>

      <h2 class="content-page__subtitle">
        Erfahrung
      </h2>

      <div
        class="content-page__list"
        v-for="experience in info.experience"
        v-bind:key="experience.title"
      >
        <h3 class="content-page__title">
          {{experience.agency}} <span class="separe separe--spaced">–</span> {{experience.title}}
        </h3>
        <p>
          {{experience.date1}} <span class="separe">–</span> {{experience.date2}}, {{experience.place}}
        </p>
      </div>

      <h2 class="content-page__subtitle">
        Expertise
      </h2>

      <h2 class="content-page__subtitle">
        Ausbildung
      </h2>

      <h2 class="content-page__subtitle">
        Kunden
      </h2>

      <credits></credits>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import Credits from './credits.vue';
  import * as info from '../../content/info.json';

  export default Vue.extend({
    components: {
      'credits': Credits
    },
    data() {
      return {
        info: info
      }
    },
    mounted () {
    },
    methods: {
    }
  });
</script>

