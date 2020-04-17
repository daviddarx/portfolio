
<template>
  <div
    class="projects"
    ref="projects"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <h1 class="projects__title animate-in">
        <span class="projects__title-name font-compensated">David Darx</span>
        <span class="projects__title-detail">Digital Design &amp; Art Direction</span>
    </h1>
    <div
      class="projects__container animate-in animate-in__s1"
    >
      <div class="projects__list-container">
        <div
          v-for="year in this.years"
          v-bind:key="year"
          class="projects__year"
        >
          <h2
            class="content-page__subtitle content-page__3-4 hiding-title"
            v-bind:titleReplace="year"
          >
            {{year}}
          </h2>
          <project-list
            v-for="project in getProjectsForYear(year)"
            v-bind:key="project.title"
            v-bind:datas="project"
          >
          </project-list>
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

  delete projects.default;

  export default Vue.extend({
    components: {
      'project-list': ProjectList,
      'credits': Credits
    },
    data() {
      return {
        projects: projects,
        years: undefined,
        isDisplayed : false,
      }
    },
    mounted () {
      this.years = this.projects.main.map(project => project.year);
      this.years = this.years.filter((item, index) => this.years.indexOf(item) === index);

      setTimeout(this.displayProject, 100);
    },
    methods: {
      getProjectsForYear: function (year) {
        return this.projects.main.filter(project => project.year == year);
      },
      displayProject: function() {
        this.isDisplayed = true;
      }
    }
  });
</script>

