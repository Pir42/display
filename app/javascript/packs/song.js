import Vue from 'vue/dist/vue.esm'
import TurbolinksAdapter from 'vue-turbolinks';

Vue.use(TurbolinksAdapter);

import App from '../vue/songs/app.vue'

Vue.component('app', App)

document.addEventListener('turbolinks:load', () => {

  let chords = document.querySelector('[data-behavior="vue"]').getAttribute("data-chords");
  chords = JSON.parse(chords)
  const app = new Vue({
    el: '[data-behavior="vue"]',
    data() {
      return {
        chords: chords
      }
    }
  })
})