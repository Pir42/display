import Vue from 'vue/dist/vue.esm'
import TurbolinksAdapter from 'vue-turbolinks';

Vue.use(TurbolinksAdapter);

import Pin from "../vue/Pin"
import PinList from "../vue/PinList"

Vue.component('pin', Pin)
Vue.component('pin-list', PinList)

const broadcast = {
  init() {

    if(document.querySelector('[data-behavior="vue"]') && document.querySelector('[data-component="broadcast"]')) {

      const app = new Vue({
        el: '[data-behavior="vue"]',
        data() {
            return {
                screenName: "",
                filter: "",
                setlists: setlists_data,
                songs: songs_data,
                selected_item: null,
            }
        },
        computed: {
            aliasSongs() {
                this.songs.forEach((s) => { s.alias = `${s.title} - ${s.artist}`})
                return this.songs
            },
            filtered_setlists() {
                if(this.filter != "") {
                    return this.setlists.filter((setlist) => setlist.name.toLowerCase().startsWith(this.filter.toLowerCase()))
                } else {
                    return this.setlists
                }
            },
            filtered_songs() {
                if(this.filter != "") {
                    return this.aliasSongs.filter((song) => song.title.toLowerCase().startsWith(this.filter.toLowerCase()) || song.artist.toLowerCase().startsWith(this.filter.toLowerCase()))
                } else {
                    return this.aliasSongs
                }
            },
            setlists_list() {
                return {
                    items: this.limit(this.filtered_setlists, 3),
                    textprop: "name",
                    color: "purple",
                    icon: "player-list",
                    reactive: true,
                    margins: true
                }
            },
            songs_list() {
                return {
                    items: this.limit(this.filtered_songs, 5),
                    textprop: "alias",
                    color: "pink",
                    icon: "music-note",
                    reactive: true,
                    margins: true
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
        },
      })

    }

  }
}

export default broadcast