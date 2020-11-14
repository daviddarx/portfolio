
<template>
  <div
    class="project"
    v-bind:class="{ 'is-inverted': this.isInverted, 'is-selection-inverted': this.isInverted}"
    v-bind:style="{backgroundColor: this.color}"
  >
    <div class="project__preheader">
      <slot name="preheader"></slot>
    </div>

    <div
      class="project__close-button close-button animate-in animate-in__s3"
      ref="close"
      v-bind:class="{ 'is-transparent': this.isCloseButtonTransparent}"
    >
      <router-link
        class="close-button__link"
        to="/projects"
      >
        <span class="close-button__icon"></span>
      </router-link>
    </div>

    <div class="project__container">
      <div
        class="project__header"
        ref="header"
      >
        <h1 class="project__title animate-in animate-in__s1">
          {{this.title}}
        </h1>
        <div class="project__metas animate-in">
          <div class="project__cols project__metas-cols">
            <p class="project__meta project__date">
              <strong class="project__meta-title">Jahr </strong>
              <span class="project__meta-desc">{{this.year}}</span>
            </p>
            <p class="project__meta project__agency">
              <strong class="project__meta-title">Agentur </strong>
              <span class="project__meta-desc">{{this.agency}}</span>
            </p>
            <p class="project__meta project__type">
              <strong class="project__meta-title">Typ </strong>
              <span class="project__meta-desc">{{this.type}}</span>
            </p>
            <p class="project__meta project__skills">
              <strong class="project__meta-title">Leistungen </strong>
              <span class="project__meta-desc">{{this.skills}}</span>
            </p>
          </div>
        </div>
      </div>

      <div class="project__content animate-in animate-in__s2">
        <slot></slot>
      </div>
    </div>

    <pagination
      class="project__pagination"
      v-bind:class="{'is-black' : this.isInverted}"
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
        agency: '',
        skills: '',
        color: '',
        isInverted: false,
        subtitlePrev: 'Voriges Projekt',
        subtitleNext: 'Nächstes Projekt',
        isCloseButtonTransparent: true,
        scrollObserver: undefined,
        scrollObserverMargin: "-10%"
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
      this.agency = projects.main[this.indexCurrent].agency;
      this.skills = projects.main[this.indexCurrent].skills;
      this.type = projects.main[this.indexCurrent].type;
      this.color = projects.main[this.indexCurrent].colorCase;
      this.isInverted = projects.main[this.indexCurrent].inverted;

      document.body.style.setProperty('--project-color', this.color);

      this.setScrollObserver();
    },
    beforeDestroy () {
      this.resetScrollObserver();
    },
    methods: {
      setScrollObserver: function () {
        console.log("set observer");
        if (!!window.IntersectionObserver) {
          this.scrollObserver = new IntersectionObserver(this.intersectionListener, {
            rootMargin: this.scrollObserverMargin
          });
          this.scrollObserver.observe(this.$refs.header);
        }
      },
      resetScrollObserver: function () {
        console.log("reset observer");
        this.scrollObserver.unobserve(this.$refs.header);
        this.scrollObserver.disconnect();
      },
      intersectionListener: function (entries, observer) {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            this.isCloseButtonTransparent = true;
          } else {
            this.isCloseButtonTransparent = false;
          }
        });
      }
    }
  }
</script>
