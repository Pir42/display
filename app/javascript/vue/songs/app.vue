<template>
  <div id="app">
    <section-chord v-for="(section, c) in chords" :key=c :section="section" class="section" v-on:section_change="filter_sections"/>
    <input type="text" v-model="new_section" v-on:change="section_change" class="section__guess" placeholder="Refrain">
  </div>
</template>

<script>

import Section from "./Section";

export default {
  props: {
    chords: Array
  },
  components: {
    'section-chord': Section
  },
  data() {
    return {
      new_section: ""
    }
  },
  methods: {
    section_change() {
      if(this.new_section != "") {
        this.chords.push({
          title: this.new_section,
          chords: [
            []
          ]
        })
        this.new_section = "";
      }
    },
    filter_sections() {
      this.$emit('section_change')
    }
  }
}
</script>

<style scoped lang="scss">
  .section {
    margin-bottom: 30px;
  }

  .section__guess {
    background-color: #F2F2F2;
    &::placeholder {
      color:  white;
      font-weight: bold;
    }
  }
</style>
