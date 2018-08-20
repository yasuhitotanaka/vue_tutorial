import './scss/shitaji.min.css';
import './scss/style.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
