
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
          {{this.infos.title}} <span class="separe separe--spaced">–</span> <span class="misc__date">{{this.infos.date}}</span>
        </h1>
        <p
          class="misc__lead animate-in animate-in__s1"
          v-if="infos.lead"
          v-html="infos.lead"
        >
        </p>
        <p
          class="misc__links animate-in animate-in__s2"
          v-if="infos.links"
        >
          <a
            class="misc__link text-link"
            v-for="link in infos.links"
            v-bind:key="link.url"
            v-bind:href="link.url"
            target="_blank"
          >
            {{link.title}}
          </a>
        <p>
        <div
          class="misc__medias animate-in animate-in__s6"
          v-if="infos.medias"
        >
          <div
            class="misc__media"
            v-for="media in infos.medias"
            v-bind:key="media.url"
          >
            <img
              v-if="media.type=='image'"
              class="misc__img"
              v-bind:src="misc.mediasPath+media.url"
              v-bind:alt="infos.title"
            >
          </div>
        </div>
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
      this.currentUid = this.$route.params.id;

      this.indexCurrent = misc.collection.findIndex(item => item.uid === this.currentUid);
      this.indexPrev = (this.indexCurrent - 1 >= 0) ? this.indexCurrent - 1 : misc.collection.length - 1;
      this.indexNext = (this.indexCurrent + 1 < misc.collection.length) ? this.indexCurrent + 1 : 0;

      this.routePrev = misc.routesPath + misc.collection[this.indexPrev].uid;
      this.routeNext = misc.routesPath + misc.collection[this.indexNext].uid;

      this.titlePrev = misc.collection[this.indexPrev].title;
      this.titleNext = misc.collection[this.indexNext].title;

      this.infos = misc.collection[this.indexCurrent];

      setTimeout(this.displayMisc, 100);
    },
    methods: {
      displayMisc: function() {
        this.isDisplayed = true;
      }
    }
  }
</script>
