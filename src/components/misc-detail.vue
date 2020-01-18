
<template>
  <div
    class="misc is-selection-inverted is-inverted"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div class="misc__close-button close-button close-button--black animate-in animate-in__s3">
      <router-link
        class="close-button__link"
        to="/misc"
      ></router-link>
    </div>

    <div class="misc__container">
      <div class="misc__header">
        <h1
          class="misc__title small-title font-compensated animate-in"
          v-html="this.infos.title+getDashSpaced()+replaceDashesSpaced(this.infos.date)"
        >
        </h1>
        <p
          class="misc__lead animate-in animate-in__s1 no-margin"
          v-if="infos.lead"
          v-html="replaceDashesSpaced(infos.lead)"
        >
        </p>
        <p
          class="misc__links animate-in animate-in__s2 margin-top"
          v-if="infos.links"
        >
          <a
            class="misc__link text-link"
            v-for="link in infos.links"
            v-bind:key="link.url"
            v-bind:href="link.url"
            target="_blank"
          >
            {{link.title}}
          </a>
        </p>
      </div>
      <div
        class="misc__medias animate-in animate-in__s6"
        v-if="infos.medias"
      >
        <div
          class="misc__media"
          v-for="(media, i) in infos.medias"
          v-bind:key="media.url"
        >
          <img
            v-if="media.type=='image'"
            v-bind:src="misc.mediasPath+media.url"
            v-bind:alt="infos.title"
            class="misc__img"
            v-bind:class="{'scroll-animate-in' : i!=0}"
            v-observe-visibility="{
              callback: visibilityChanged,
              intersection: {
                rootMargin: rootMargin,
              },
            }"
          >
          <video
            v-else-if="media.type=='video'"
            muted
            autoplay
            loop
            class="misc__video video"
            v-bind:class="{'scroll-animate-in' : i!=0}"
            v-observe-visibility="{
              callback: visibilityChanged,
              intersection: {
                rootMargin: rootMargin,
              },
            }"
            ref="video"
          >
            <source
              v-bind:src="misc.mediasPath+media.url"
              type="video/mp4"
            >
          </video>
        </div>
      </div>
    </div>
    <pagination
      class="misc__pagination"
      :route-prev="this.routePrev"
      :route-next="this.routeNext"
      :title-prev="this.titlePrev"
      :title-next="this.titleNext"
      :subtitle-prev="this.subtitlePrev"
      :subtitle-next="this.subtitleNext"
      :is-black="true"
    >
    </pagination>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueObserveVisibility from 'vue-observe-visibility';
  import * as misc from '../../content/misc.json';
  import Pagination from './pagination.vue';
  import dash from '../mixins/dash';

  Vue.use(VueObserveVisibility);

  export default {
    name: 'misc',
    components: {
      'pagination': Pagination
    },
    mixins: [dash],
    data: function () {
      return {
        misc: misc,
        currentUid: '',
        indexCurrent: 0,
        indexPrev: 0,
        indexNext: 0,
        routePrev: '/',
        routeNext: '/',
        titlePrev: '',
        titleNext: '',
        isDisplayed : false,
        infos: '',
        subtitlePrev: 'Voriges',
        subtitleNext: 'Nächstes',
        rootMargin: '0%' // -20vh css transform considered
      }
    },
    mounted () {
      this.currentUid = this.$route.params.id;

      this.indexCurrent = misc.collection.findIndex(item => item.uid === this.currentUid);
      this.indexPrev = (this.indexCurrent - 1 >= 0) ? this.indexCurrent - 1 : misc.collection.length - 1;
      this.indexNext = (this.indexCurrent + 1 < misc.collection.length) ? this.indexCurrent + 1 : 0;

      this.routePrev = misc.routesPath + misc.collection[this.indexPrev].uid;
      this.routeNext = misc.routesPath + misc.collection[this.indexNext].uid;

      this.titlePrev = misc.collection[this.indexPrev].title;
      this.titleNext = misc.collection[this.indexNext].title;

      this.infos = misc.collection[this.indexCurrent];

      setTimeout(this.displayMisc, 100);
    },
    methods: {
      displayMisc: function() {
        this.isDisplayed = true;
        this.setScrollAnimatedIn();
      },
      setScrollAnimatedIn: function() {
        if (!!window.IntersectionObserver) {
          if (this.$refs.video) {
            this.$refs.video.forEach(item => {
              item.removeAttribute('autoplay');
            });
          }
        } else {
          if (this.$refs.video) {
            const scrollAnimatedElements = document.querySelectorAll('.scroll-animate-in');
            if (scrollAnimatedElements.length !=0) {
              scrollAnimatedElements.forEach(item => {
                item.classList.add('is-displayed');
              });
            }
          }
        }
      },
      visibilityChanged (isVisible, entry) {
        if (isVisible == true && entry.boundingClientRect.width != 0) {
          if (entry.target.classList.contains('scroll-animate-in')) {
            entry.target.classList.add('is-displayed');
          }
          if (entry.target.classList.contains('video')) {
            entry.target.play();
          }
        } else if (isVisible == false) {
          if (entry.target.classList.contains('video')) {
            entry.target.pause();
          }
        }
      }
    }
  }
</script>
