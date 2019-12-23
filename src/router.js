import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    const position = {};

    position.x = 0;
    position.y = 0;

    if (to.name == 'projects' && window.scrollPosition && from.name.split('project').length!=1) {
      position.y = window.scrollPosition;
    }

    return position;
  }
}

const router = new VueRouter({
  routes,
  scrollBehavior,
  mode: 'history',
  base: '/',
  linkActiveClass: 'is-current',
});

export default router;
