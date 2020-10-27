import Vue from 'vue/dist/vue.esm'
import TurbolinksAdapter from 'vue-turbolinks';

Vue.use(TurbolinksAdapter);

import Pin from "../vue/Pin"

Vue.component('pin', Pin)

const broadcast = {
  init() {

    if(document.querySelector('[data-behavior="vue"]') && document.querySelector('[data-component="broadcast"]')) {

      const app = new Vue({
        el: '[data-behavior="vue"]',
        data() {
            return {
                filter: "",
                setlists: setlists_data,
                songs: songs_data,
                selected_item: null,
            }
        },
        computed: {
            filtered_setlists() {
                if(this.filter != "") {
                    return this.setlists.filter((setlist) => setlist.name.toLowerCase().startsWith(this.filter.toLowerCase()))
                } else {
                    return this.setlists
                }
            },
            filtered_songs() {
                if(this.filter != "") {
                    return this.songs.filter((song) => song.title.toLowerCase().startsWith(this.filter.toLowerCase()) || song.artist.toLowerCase().startsWith(this.filter.toLowerCase()))
                } else {
                    return this.songs
                }
            }
        },
        methods: {
            aliasSong(song) {
                return `${song.title} - ${song.artist}`
            },
            limit(array, limit) {
                return array.slice(0, limit)
            }
        }
      })

    }

  }
}

export default broadcast