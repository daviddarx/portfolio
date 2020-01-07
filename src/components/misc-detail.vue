
<template>
  <div
    class="misc is-selection-inverted is-inverted"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div class="misc__close-button close-button close-button--black animate-in animate-in__s3">
      <router-link
        class="close-button__link"
        to="/misc"
      ></router-link>
    </div>

    <div class="misc__container">
      <div class="misc__header">
        <h1 class="misc__title animate-in">
          {{this.infos.title}}
        </h1>
        <p class="misc__date animate-in animate-in__s1">
          {{this.infos.date}}
        </p>
        <p
          class="misc__lead animate-in animate-in__s3"
          v-html="infos.lead"
        >
        </p>
      </div>

      <div class="misc__content">
      </div>
    </div>
    <pagination
      class="misc__pagination"
      :route-prev="this.routePrev"
      :route-next="this.routeNext"
      :title-prev="this.titlePrev"
      :title-next="this.titleNext"
      :subtitle-prev="this.subtitlePrev"
      :subtitle-next="this.subtitleNext"
      :is-black="true"
    >
    </pagination>
  </div>
</template>

<script>
  import * as misc from '../../content/misc.json';
  import Pagination from './pagination.vue';

  export default {
    name: 'misc',
    components: {
      'pagination': Pagination
    },
    data: function () {
      return {
        misc: misc,
        currentUid: '',
        indexCurrent: 0,
        indexPrev: 0,
        indexNext: 0,
        routePrev: '/',
        routeNext: '/',
        titlePrev: '',
        titleNext: '',
        isDisplayed : false,
        infos: '',
        subtitlePrev: 'Voriges',
        subtitleNext: 'Nächstes'
      }
    },
    mounted () {
      this.currentUid = this.$router.currentRoute.path.split('/').pop();

      this.indexCurrent = misc.collection.findIndex(item => item.uid === this.currentUid);
      this.indexPrev = (this.indexCurrent - 1 >= 0) ? this.indexCurrent - 1 : misc.collection.length - 1;
      this.indexNext = (this.indexCurrent + 1 < misc.collection.length) ? this.indexCurrent + 1 : 0;

      this.routePrev = misc.routesPath + misc.collection[this.indexPrev].uid;
      this.routeNext = misc.routesPath + misc.collection[this.indexNext].uid;

      this.titlePrev = misc.collection[this.indexPrev].title;
      this.titleNext = misc.collection[this.indexNext].title;

      this.infos = misc.collection[this.indexCurrent];

      console.log(this.infos.title);

      requestAnimationFrame(this.displayProject);
    },
    methods: {
      displayProject: function() {
        this.isDisplayed = true;
      }
    }
  }
</script>
