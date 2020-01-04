
<template>
  <div class="contact">
    <div class="content-temp">
      Kontakt
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

