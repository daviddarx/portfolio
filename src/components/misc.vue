
<template>
  <div
    class="miscs"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div class="content-page">
      <p class="content-page__lead animate-in">
        {{misc.lead}}
      </p>

      <div class="content-page__3-4 miscs__container miscs-grid animate-in animate-in__s1">
        <div
          class="misc-list miscs-grid__item"
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
              <h2
                class="misc-list__info"
              >
                <span class="misc-list__date font-compensated">{{miscItem.date}}</span>
                <span class="dash dash--spaced">–</span>
                <span class="misc-list__title">{{miscItem.title}}</span>
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
  import dash from '../mixins/dash';

  export default Vue.extend({
    components: {
      'credits': Credits
    },
    mixins: [dash],
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

