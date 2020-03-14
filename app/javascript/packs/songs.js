import Vue from 'vue/dist/vue.esm'
import TurbolinksAdapter from 'vue-turbolinks';

Vue.use(TurbolinksAdapter);

import App from '../vue/songs/app.vue'

Vue.component('app', App)


if(document.querySelector('[data-behavior="vue"]') && songs_data) {
  const app = new Vue({
    el: '[data-behavior="vue"]',
    data() {
      return {
        songs: songs_data,
        filter: "",
        pageSize: 8,
        currentPage: 1
      }
    },
    computed: {
      filtered_songs() {
        if(this.filter){
          return this.songs.filter((s) => 
            s.title.includes(this.filter) || s.artist.includes(this.filter)
          )
        } else {
          return this.songs
        }
      },
      songs_by_page() {
        return this.filtered_songs.filter((row, index) => {
          let start = (this.currentPage-1)*this.pageSize;
          let end = this.currentPage*this.pageSize;
          if(index >= start && index < end) return true;
        });
      },
      start() {
        return (this.currentPage-1)*this.pageSize
      },
      end() {
        return this.currentPage*this.pageSize
      }
    },
    methods: {
      url(song) {
        return `songs/${song.id}`
      },
      nextPage() {
        if((this.currentPage*this.pageSize) < this.filtered_songs.length) this.currentPage++;
      },
      prevPage() {
        if(this.currentPage > 1) this.currentPage--;
      }
    }
  })
}



