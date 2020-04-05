import Vue from 'vue/dist/vue.esm'
import TurbolinksAdapter from 'vue-turbolinks';
import draggable from 'vuedraggable'

Vue.use(TurbolinksAdapter);

import Panel from '../vue/songs/Panel.vue'
import SongItem from '../vue/songs/SongItem.vue'

Vue.component('panel', Panel)
Vue.component('song-item', SongItem)

const setlist = {
  init() {
    if(document.querySelector('[data-behavior="vue"]') && document.querySelector('[data-component="setlist"]')) {
      const app = new Vue({
        el: '[data-behavior="vue"]',
        components: {
          draggable
        },
        data() {
          return {
            songs: songs_data,
            setlist_songs: setlist_songs_data
          }
        },
        methods: {
          add: function() {
    
          },
          log: function(evt) {
    
          },
          deleteSong(index) {
            this.setlist_songs.splice(index, 1)
          }
        }
      })
    }
  }
}

export default setlist;

