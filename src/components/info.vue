
<template>
  <div
    class="info"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div class="content-page">
      <h1 class="visually-hidden"> David Darx – Digital Design &amp; Art Direction</h1>
      <p class="content-page__lead animate-in">
        {{this.info.lead}}
      </p>

      <div class="content-page__content animate-in animate-in__s1">
        <h2 class="content-page__subtitle">
          Erfahrung
        </h2>
        <div class="content-page__list-container">
          <div
            class="content-page__list"
            v-for="experience in info.experience"
            v-bind:key="experience.agency + experience.title"
          >
            <h3 class="content-page__title small-title font-compensated">
              {{experience.agency}} <span class="separe separe--spaced">–</span> {{experience.title}}
            </h3>
            <p>
              {{experience.date1}}<span v-if="experience.date2">&nbsp;</span><span class="separe" v-if="experience.date2">–</span><span v-if="experience.date2"> {{experience.date2}}</span>, {{experience.place}}
            </p>
          </div>
        </div>

        <h2 class="content-page__subtitle">
          Expertise
        </h2>

        <div class="content-page__list-container">
          <div
            class="content-page__list"
            v-for="expertise in info.expertise"
            v-bind:key="expertise.title"
          >
            <h3 class="content-page__title small-title font-compensated">
              {{expertise.title}}
            </h3>
            <p v-html="expertise.desc">
            </p>
          </div>
        </div>

        <h2 class="content-page__subtitle">
          Ausbildung
        </h2>

        <div class="content-page__list-container">
          <div
            class="content-page__list"
            v-for="education in info.education"
            v-bind:key="education.title"
          >
            <h3 class="content-page__title small-title font-compensated">
              {{education.title}}
            </h3>
            <p>
              {{education.desc}}<br>
              {{education.date1}} <span class="separe">–</span> {{education.date2}}, {{education .place}}
            </p>
          </div>
        </div>

        <h2 class="content-page__subtitle">
          Kunden
        </h2>
        <p>
          <span
            v-for="(client, index) in info.clients"
            v-bind:key="client"
          >
            {{client}} <span class="separe separe--spaced " v-if="index < info.clients.length-1">-</span>
          </span>
        </p>
      </div>

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
        info: info,
        isDisplayed : false
      }
    },
    mounted () {
      setTimeout(this.displayInfo, 100);
    },
    methods: {
      displayInfo: function() {
        this.isDisplayed = true;
      }
    }
  });
</script>

