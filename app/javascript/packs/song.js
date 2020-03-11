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
    },
    methods: {
      filter_sections() {
        this.chords.forEach((section, index) => {
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
      }
    }
  })
})