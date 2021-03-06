import Vue from 'vue/dist/vue.esm'
import TurbolinksAdapter from 'vue-turbolinks';

Vue.use(TurbolinksAdapter);

import App from '../vue/songs/app.vue'

Vue.component('app', App)

const song = {
  init() {

    if(document.querySelector('[data-behavior="vue"]') && document.querySelector('[data-component="song"]')) {
      const app = new Vue({
        el: '[data-behavior="vue"]',
        data() {
          return {
            chords: chords_data
          }
        },
        computed: {
          filtered_chords() {
            let filtered_chords = this.chords;
            filtered_chords.forEach((section, index) => {
              if(section.title == ""){
                this.chords.splice(index, 1)
              } else {
                section.chords.forEach((bar, i) => {
                  bar.forEach((chord, a) => {
                    if(chord == "") {
                      this.chords[index].chords[i].splice(a, 1)
                    }
                  })
                  if (bar.length == 0){
                    this.chords[index].chords.splice(i, 1)
                  }
                })
              }
            })
            return filtered_chords
          }
        }
      })
    }

  }
}

export default song
