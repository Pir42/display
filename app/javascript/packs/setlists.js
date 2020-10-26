import Vue from 'vue/dist/vue.esm'
import TurbolinksAdapter from 'vue-turbolinks';

Vue.use(TurbolinksAdapter);

import Table from "../vue/Table"

Vue.component('table-display', Table)

const setlists = {
  init() {

    if(document.querySelector('[data-behavior="vue"]') && document.querySelector('[data-component="setlists"]')) {

      const app = new Vue({
        el: '[data-behavior="vue"]',
        data() {
          return {
            setlists: setlists_data
          }
        },

        methods: {
          url(setlist) {
            return `setlists/${setlist.id}`
          },
          filter(setlist, search) {
            return setlist.name.includes(search)
          }
        }
      })

    }

  }
}

export default setlists



