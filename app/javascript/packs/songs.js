import Vue from 'vue/dist/vue.esm'
import TurbolinksAdapter from 'vue-turbolinks';

Vue.use(TurbolinksAdapter);

import Table from "../vue/Table";

Vue.component("table-display", Table)

const songs = {
  init() {

    if(document.querySelector('[data-behavior="vue"]') && document.querySelector('[data-component="songs"]')) {
      const app = new Vue({
        el: '[data-behavior="vue"]',

        data() {
          return {
            songs: songs_data,
          }
        },

        methods: {
          url(song) {
            return `songs/${song.id}`
          },
          filter(song, search) {
            return song.title.toLowerCase().startsWith(search.toLowerCase()) || song.artist.toLowerCase().startsWith(search.toLowerCase())
          }
        }
      })
    }

  }
}

export default songs



