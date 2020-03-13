import Vue from 'vue/dist/vue.esm'
import TurbolinksAdapter from 'vue-turbolinks';

Vue.use(TurbolinksAdapter);

import App from '../vue/songs/app.vue'

Vue.component('app', App)


if(document.querySelector('[data-behavior="vue"]')) {
  let songs = document.querySelector('[data-behavior="vue"]').getAttribute("data-songs");
  songs = JSON.parse(songs)
  const app = new Vue({
    el: '[data-behavior="vue"]',
    data() {
      return {
        songs: songs,
        filter: ""
      }
    },
    computed: {
      filtered_songs() {
        if(this.filter){
          return this.songs.filter((s) => s.title.includes(this.filter) || s.artist.includes(this.filter))
        } else {
          return this.songs
        }
      }
    },
    methods: {
      url(song) {
        return `songs/${song.id}`
      }
    }
  })
}
