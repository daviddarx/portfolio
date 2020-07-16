
<template>
  <div
    class="transition-background"
  >
    <logo
      class="transition-logo"
      v-bind:class="{'is-displayed': this.isLogoDisplayed}"
    ></logo>

    <div
      class="transition-title"
      v-bind:class="{'is-displayed': this.isTitleDisplayed}"
    >
      {{titleValue}}
    </div>

    <transition
      name="transition-wave-in"
      v-on:after-enter="waveInAfterEnter"
    >
      <div
        class="transition-background__el-in"
        v-if="this.isWaveInDisplayed"
      >
      </div>
    </transition>
     <transition
      name="transition-wave-out"
      v-on:after-enter="waveOutAfterEnter"
    >
      <div
        class="transition-background__el-out"
        v-if="this.isWaveOutDisplayed"
      >
      </div>
    </transition>
  </div>
</template>

<script>
  import Vue from "vue";
  import Logo from './logo.vue';

  export default Vue.extend({
    components: {
      'logo': Logo
    },
    data() {
      return {
        isWaveInDisplayed: false,
        isWaveOutDisplayed: false,
        isLogoDisplayed: false,
        isTitleDisplayed: false,
        titleValue: '',
        nextFunction: undefined
      }
    },
    mounted () {
      this.$router.beforeEach(this.beforeEach);
    },
    methods: {
      beforeEach: function (to, from, next) {
        this.titleValue = to.meta.transitionTitle;
        this.isLogoDisplayed = true;
        this.isTitleDisplayed = true;
        this.isWaveInDisplayed = true;
        this.nextFunction = next;
      },
      waveInAfterEnter: function() {
        this.isWaveInDisplayed = false;
        this.nextFunction();
        this.isWaveOutDisplayed = true;
        this.isLogoDisplayed = false;
        this.isTitleDisplayed = false;
      },
      waveOutAfterEnter: function() {
        this.isWaveOutDisplayed = false;
      }
    }
  });
</script>
