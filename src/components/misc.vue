
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
        <misc-list
          v-for="miscItem in misc.collection"
          v-bind:key="miscItem.title"
          v-bind:route="misc.routesPath + miscItem.uid"
          v-bind:imgURL="misc.mediasPath+miscItem.thumb"
          v-bind:date="miscItem.date"
          v-bind:title="miscItem.title"
          v-on:loaed="loadNextMisc"
          ref="miscItem"
        >
        </misc-list>
      </div>
      <credits></credits>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import MiscList from './misc-list.vue';
  import Credits from './credits.vue';
  import * as misc from '../../content/misc.json';
  import dash from '../mixins/dash';

  export default Vue.extend({
    components: {
      'misc-list': MiscList,
      'credits': Credits
    },
    mixins: [dash],
    data() {
      return {
        misc: misc,
        isDisplayed : false,
        miscItemLoadID: 0,
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

        this.$refs.miscItem[0].launchLoading();
      },
      loadNextMisc: function () {
        if (this.miscItemLoadID < this.$refs.miscItem.length-1) {
          this.miscItemLoadID++;
          this.$refs.miscItem[this.miscItemLoadID].launchLoading();
        }
      }
    }
  });
</script>

