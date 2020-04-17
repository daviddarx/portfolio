
<template>
  <div
    class="projects"
    ref="projects"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div class="content-page">
      <h2
        class="content-page__page-title font-compensated animate-in hidable-title"
        v-bind:class="{ 'is-hidden': this.isTitleHidden, 'is-below': this.isTitleBelow, 'is-jumping': this.isTitleJumping }"
      >
        <span class="content-page__page-title__el">
          {{this.pageTitle}}
        </span>
      </h2>
      <p class="content-page__lead animate-in animate-in__s1 projects__lead">
        Einige handverlesenen Projekte, für die ich gerne gearbeitet habe.
      </p>
      <div class="content-page__content animate-in animate-in__s2">
        <div
          v-for="year in getYears"
          v-bind:key="year"
          class="projects__year"
        >
          <h2
            class="content-page__subtitle content-page__3-4 hiding-title projects__year-subtitle"
            v-bind:titleReplace="year"
          >
            {{year}}
          </h2>
          <div class="project-list-container">
            <project-list
              v-for="project in getProjectsForYear(year)"
              v-bind:key="project.title"
              v-bind:datas="project"
            >
            </project-list>
          </div>
        </div>
      </div>
      <credits></credits>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import ProjectList from './project-list.vue';
  import Credits from './credits.vue';
  import * as projects from '../../content/projects.json';
  import contentPageTitle from '../mixins/content-page-title';

  delete projects.default;

  export default Vue.extend({
    name: "info-keep",
    components: {
      'project-list': ProjectList,
      'credits': Credits
    },
    mixins: [contentPageTitle],
    data() {
      return {
        projects: projects,
        isDisplayed : false,
        isMounted: false,
        pageTitle: "Projekte"
      }
    },
    computed: {
      getYears: function () {
        let years = this.projects.main.map(project => project.year);
            years = years.filter((item, index) => years.indexOf(item) === index);
        return years;
      }
    },
    mounted () {
      this.setupMounting();
    },
    activated () {
      if (this.isMounted == false) {
        this.setupMounting();
      }
    },
    beforeRouteLeave (to, from, next) {
      this.isMounted = false;
      this.isDisplayed = false;
      this.destroyTitlesObserver();
      next();
    },
    methods: {
      setupMounting: function() {
        this.isMounted = true;
        setTimeout(this.displayProjects, 100);

        this.initTitlesObserver(this.pageTitle);
      },
      getProjectsForYear: function (year) {
        return this.projects.main.filter(project => project.year == year);
      },
      displayProjects: function() {
        this.isDisplayed = true;
      }
    }
  });
</script>

