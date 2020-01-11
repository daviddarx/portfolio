
<template>
  <div
    class="miscs"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div class="content-page">
      <p class="content-page__lead animate-in">
        {{misc.lead}}
      </p>

      <div class="miscs__container animate-in animate-in__s1">
        <div
          class="misc-list"
          v-for="miscItem in misc.collection"
          v-bind:key="miscItem.title"
        >
          <router-link
            v-bind:to="misc.routesPath + miscItem.uid"
            class="misc-list__link"
          >
            <img
              class="misc-list__img"
              v-bind:src="misc.mediasPath+miscItem.thumb"
            >
              <h2 class="misc-list__title">
                {{miscItem.title}}
              </h2>
          </router-link>
        </div>
      </div>
      <credits></credits>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import Credits from './credits.vue';
  import * as misc from '../../content/misc.json';

  export default Vue.extend({
    components: {
      'credits': Credits
    },
    data() {
      return {
        misc: misc,
        isDisplayed : false
      }
    },
    created () {
      this.misc.collection.forEach(misc => {
        misc.route = this.misc.routesPath + misc.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ').join('-').split('.').join('').toLowerCase();
      });
    },
    mounted () {
      setTimeout(this.displayMisc, 100);
    },
    methods: {
      displayMisc: function() {
        this.isDisplayed = true;
      }
    }
  });
</script>

