
<template>
  <div
    class="website-container"
  >
    <logo></logo>
    <custom-navigation></custom-navigation>
    <projects></projects>
    <random></random>
    <about></about>
    <contact></contact>
  </div>
</template>

<script>

  import Vue from "vue";
  import Logo from './components/logo.vue';
  import CustomNavigation from './components/navigation.vue';
  import Projects from './components/projects.vue';
  import Random from './components/random.vue';
  import About from './components/about.vue';
  import Contact from './components/contact.vue';


  export default Vue.extend({
    components: {
      'logo': Logo,
      'custom-navigation': CustomNavigation,
      'projects': Projects,
      'random': Random,
      'contact': Contact,
      'about': About
    },
    data() {
      return {
        isDark: false
      }
    },
    computed: {
    },
    mounted () {
      this.init();
    },
    methods: {
      init: function () {
        console.log("init app");
      }
    }
  });
</script>
