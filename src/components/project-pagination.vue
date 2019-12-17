
<template>
  <div
    class="pagination"
  >
    <router-link
      class="pagination__link"
      v-bind:to="routePrev"
    >
      <span class="pagination__subtitle">
        Voriges Projekt
      </span>
      <span class="pagination__title">
        {{ titlePrev }}
      </span>
    </router-link><!--
    --><router-link
      class="pagination__link"
      v-bind:to="routeNext"
    >
      <span class="pagination__subtitle">
        Nächstes Projekt
      </span>
      <span class="pagination__title">
        {{ titleNext }}
      </span>
    </router-link>
  </div>
</template>

<script>
  import * as projects from '../../content/projects.json';

  export default {
    name: 'project-pagination',
    props: {
      routePrev: String,
      routeNext: String,
      titlePrev: String,
      titleNext: String
    },
  }
</script>
