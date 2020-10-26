import Vue from 'vue/dist/vue.esm'
import TurbolinksAdapter from 'vue-turbolinks';

Vue.use(TurbolinksAdapter);

const setlists = {
  init() {

    if(document.querySelector('[data-behavior="vue"]') && document.querySelector('[data-component="setlists"]')) {
      const app = new Vue({
        el: '[data-behavior="vue"]',
        data() {
          return {
            setlists: setlists_data,
            filter: "",
            pageSize: 8,
            currentPage: 1
          }
        },
        computed: {
          filtered_setlists() {
            if(this.filter){
              return this.setlists.filter((s) => 
                s.name.includes(this.filter)
              )
            } else {
              return this.setlists
            }
          },
          setlists_by_page() {
            return this.filtered_setlists.filter((row, index) => {
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
          url(setlist) {
            return `setlists/${setlist.id}`
          },
          nextPage() {
            if((this.currentPage*this.pageSize) < this.filtered_setlists.length) this.currentPage++;
          },
          prevPage() {
            if(this.currentPage > 1) this.currentPage--;
          }
        }
      })
    }

  }
}

export default setlists



