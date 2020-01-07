
<template>
  <div class="miscs">
    <div class="content-page">
      <p class="content-page__lead">
        {{misc.lead}}
      </p>

      <div class="miscs__container">
        <div
          class="misc-list"
          v-for="miscItem in misc.collection"
          v-bind:key="miscItem.title"
        >
          <router-link
            v-bind:to="misc.routesPath + miscItem.uid"
            class="misc-list__link"
          >
            {{miscItem.title}}
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
        misc: misc
      }
    },
    created () {
      this.misc.collection.forEach(misc => {
        misc.route = this.misc.routesPath + misc.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ').join('-').split('.').join('').toLowerCase();
      });
    },
    mounted () {
    },
    methods: {
    }
  });
</script>

