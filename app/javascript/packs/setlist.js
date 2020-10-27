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
        computed: {
          setlist_duration() {
            let total_duration = this.setlist_songs.map(s => s.duration ? s.duration : 0).reduce((sum, s) => sum + s)

            let hours = Math.floor(total_duration / 3600);
            total_duration = total_duration - hours * 3600;
            let minutes = Math.floor(total_duration / 60);
            let seconds = total_duration - minutes * 60;

            if(hours > 0) {
              return `${hours.toString().padStart(2, 0)}'${minutes.toString().padStart(2, 0)}'${seconds.toString().padStart(2, 0)}`
            } else {
              return `${minutes.toString().padStart(2, 0)}'${seconds.toString().padStart(2, 0)}`
            }
          }
        },
        methods: {
          onAdd: function() {
            this.resizeContainer()
          },
          deleteSong(index) {
            this.setlist_songs.splice(index, 1)
            this.$nextTick(() => {
              this.resizeContainer()
            })
          },
          resizeContainer(add=true) {
            let current_height = document.querySelector(".setlist__dragzone .list-group").clientHeight
            document.querySelector(".setlist__dragzone").style.height = current_height + 55 + "px"
          }
        },
        mounted() {
          this.resizeContainer()
        }
      })
    }
  }
}

export default setlist;

