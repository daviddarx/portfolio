
<template>
  <div
    class="pagination"
    v-bind:class="{ 'is-black': isBlack }"
  >
    <router-link
      class="pagination-link"
      v-bind:to="routePrev"
    >
      <div class="pagination-link__text-container">
        <span class="pagination-link__subtitle">
          {{ subtitlePrev }}
        </span>
        <span class="pagination-link__title font-compensated">
          {{ titlePrev }}
        </span>
        <div class="pagination-link__arrow arrow"></div>
      </div>
    </router-link><!--
    --><router-link
      class="pagination-link"
      v-bind:to="routeNext"
    >
      <div class="pagination-link__text-container">
        <span class="pagination-link__subtitle">
          {{ subtitleNext }}
        </span>
        <span class="pagination-link__title font-compensated">
          {{ titleNext }}
        </span>
        <div class="pagination-link__arrow pagination-link__arrow--next arrow"></div>
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
