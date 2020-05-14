
<template>
  <div
    class="project"
    v-bind:class="{ 'is-inverted': this.isInverted, 'is-displayed': this.isDisplayed }"
    v-bind:style="{backgroundColor: this.color}"
  >
    <div class="project__close-button close-button animate-in animate-in__s3">
      <router-link
        class="close-button__link"
        to="/projects"
      >
        <span class="close-button__icon"></span>
      </router-link>
    </div>

    <div class="project__container">
      <div class="project__header">
        <h1 class="project__title animate-in">
          {{this.title}}
        </h1>
        <p class="project__date animate-in animate-in__s1">
          {{this.year}}
        </p>
        <p class="project__type animate-in animate-in__s2">
          {{this.type}}
        </p>
        <p class="project__lead animate-in animate-in__s3">
          Vivamus aliquet, ex vitae pharetra ultrices, nulla nisi auctor dui, ut sollicitudin metus massa a orci. Vestibulum maximus tristique ultrices. Pellentesque blandit nibh dolor, quis volutpat nibh suscipit eu.
        </p>
      </div>

      <div class="project__content">
        <slot></slot>
      </div>
    </div>

    <pagination
      class="project__pagination"
      :route-prev="this.routePrev"
      :route-next="this.routeNext"
      :title-prev="this.titlePrev"
      :title-next="this.titleNext"
      :subtitle-prev="this.subtitlePrev"
      :subtitle-next="this.subtitleNext"
    >
    </pagination>
  </div>
</template>

<script>
  import * as projects from '../../content/projects.json';
  import Pagination from './pagination.vue';

  export default {
    name: 'project',
    components: {
      'pagination': Pagination
    },
    data: function () {
      return {
        currentUid: '',
        indexCurrent: 0,
        indexPrev: 0,
        indexNext: 0,
        routePrev: '/',
        routeNext: '/',
        titlePrev: '',
        titleNext: '',
        title: '',
        year: '',
        type: '',
        color: '',
        isInverted: false,
        isDisplayed: false,
        subtitlePrev: 'Voriges Projekt',
        subtitleNext: 'Nächstes Projekt'
      }
    },
    mounted () {
      this.currentUid = this.$router.currentRoute.path.split('/').pop();

      this.indexCurrent = projects.main.findIndex(item => item.uid === this.currentUid);
      this.indexPrev = (this.indexCurrent - 1 >= 0) ? this.indexCurrent - 1 : projects.main.length - 1;
      this.indexNext = (this.indexCurrent + 1 < projects.main.length) ? this.indexCurrent + 1 : 0;

      this.routePrev = projects.routesPath + projects.main[this.indexPrev].uid;
      this.routeNext = projects.routesPath + projects.main[this.indexNext].uid;

      this.titlePrev = projects.main[this.indexPrev].title;
      this.titleNext = projects.main[this.indexNext].title;

      this.title = projects.main[this.indexCurrent].title;
      this.year = projects.main[this.indexCurrent].year;
      this.type = projects.main[this.indexCurrent].type;
      this.color = projects.main[this.indexCurrent].colorCase;
      this.isInverted = projects.main[this.indexCurrent].inverted;

      requestAnimationFrame(this.displayProject);
    },
    methods: {
      displayProject: function() {
        this.isDisplayed = true;
      }
    }
  }
</script>
