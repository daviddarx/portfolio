
<template>
  <div class="misc">
    <div class="content-page">
      <p class="content-page__lead">
        Die Sammlung von den Vergessenen: Gebeinen von anderen Ären, nicht ausgewählte Varianten oder Projekte, Experimentationen, alles was nicht in den Projekten dürfte, trozten aber noch exisitieren sollte.
      </p>
      <credits></credits>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import Credits from './credits.vue';

  export default Vue.extend({
    components: {
      'credits': Credits
    },
    data() {
      return {
      }
    },
    mounted () {
    },
    methods: {
    }
  });
</script>

