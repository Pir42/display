<template>
  <div id="section">
    <input type="text" class="section__title" v-model="section.title">
    <bar v-for="(bar, index) in section.chords" :key=index :bar="bar"/>
    <div class="chord__container">
      <div class="chord__item">
        <input type="text" v-model="new_bar" v-on:change="bar_change" class="chord__guess" placeholder="A" v-if="!section.chords.length || section.chords.length >= 1">
      </div>
    </div>
  </div>
</template>

<script>

import Bar from "./Bar";

export default {
  props: {
   section: Object
  },
  data() {
    return {
      new_bar: ""
    }
  },
  components: {
    'bar': Bar
  },
  methods: {
    bar_change() {
      if(this.new_bar != "") {
        this.section.chords.push([this.new_bar])
        this.new_bar = "";
      }
    }
  }
}
</script>

<style scoped>
  .section__title {
    font-weight: bold!important;
  }
</style>