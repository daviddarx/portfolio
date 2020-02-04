
<template>
  <div
    class="pagination"
    v-bind:class="{ 'is-black': isBlack }"
  >
    <router-link
      class="pagination__link"
      v-bind:to="routePrev"
    >
      <div class="pagination__text-container">
        <span class="pagination__subtitle">
          {{ subtitlePrev }}
        </span>
        <span class="pagination__title font-compensated">
          {{ titlePrev }}
        </span>
        <div class="pagination__arrow arrow"></div>
      </div>
    </router-link><!--
    --><router-link
      class="pagination__link"
      v-bind:to="routeNext"
    >
      <div class="pagination__text-container">
        <span class="pagination__subtitle">
          {{ subtitleNext }}
        </span>
        <span class="pagination__title font-compensated">
          {{ titleNext }}
        </span>
        <div class="pagination__arrow pagination__arrow--next arrow"></div>
      </div>
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
      titleNext: String,
      subtitlePrev: String,
      subtitleNext: String,
      isBlack: {
        type: Boolean,
        default: false
      }
    },
  }
</script>
