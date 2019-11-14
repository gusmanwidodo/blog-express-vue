import Vue from 'vue';
import Router from 'vue-router';
import VueMeta from 'vue-meta';

import routes from './routes';

Vue.use(Router);
Vue.use(VueMeta);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: routes.pages.home, component: () => import('./client/pages/Home.vue') },
      { path: routes.pages.about, component: () => import('./client/pages/About.vue') },
    ],
  });
}
