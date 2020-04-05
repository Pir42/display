<template>
  <div id="panel">
    <h4>Chants</h4>
    <div class="search">
      <input type="text" v-model="filter" placeholder="Recherche par titre/artiste" class="search__input">
    </div>
    <hr>
    <div class="songs__container">
      <slot name="songs-container" v-bind:filtered_songs="filtered_songs"></slot>
    </div>
  </div>
</template>

<script>

export default {
  props: ['songs'],
  data() {
    return {
      filter: ""
    }
  },
  computed: {
    filtered_songs() {
      if(this.filter) {
        return this.songs.filter((s) => s.title.includes(this.filter) || s.artist.includes(this.filter))
      } else {
        return this.songs
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  #panel {
    width: 85%;
    margin: auto;
  }
  .search {
    margin: 20px auto;
  }
  hr {
    width: 50px;
    border: none;
    border-top: 1px solid #828282;
  }
  .songs__container {
    margin: auto;
    div {
      margin: 15px 0;
    }
  }
</style>