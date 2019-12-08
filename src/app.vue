
<template>
  <div>
    Je suis une app vue {{test2}} {{test1}}
  </div>
</template>

<script>

  import Vue from "vue";

  export default Vue.extend({
    components: {
    },
    data() {
      return {
        test2: "test 2"
      }
    },
    computed: {
      test1: function() {
        return 'test 1';
      },
    },
    mounted () {
      this.init();
    },
    methods: {
      init: function () {
        console.log("test");
      }
    }
  });
</script>
