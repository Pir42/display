<template>
  <div id="bar">
    <div class="chord__container">
      <div v-for="(chord, i) in the_bar" :key=i class="chord__item">
        <input type="text" v-model="the_bar[i]" @change="bar_change">
      </div>
      <div class="chord__item">
        <input type="text" v-model="new_chord" placeholder="E" class="chord__guess" @change="chord_change">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bar: Array
  },
  data() {
    return {
      the_bar: this.bar,
      new_chord: ""
    }
  },
  methods: {
    bar_change() {
      this.the_bar = this.the_bar.filter((c) => c != "")
    },
    chord_change() {
      if(this.new_chord != "") {
        this.the_bar.push(this.new_chord)
        this.new_chord = ""
      }
    }
  }
}
</script>

<style lang="scss">
  .chord__container {
    margin: 10px 0;
    display: block;
    .chord__item {
      display: inline-block;
      margin-right: 10px;
      max-width: 50px;
      input {
        text-align: center;
        max-width: calc(100% - 30px);
      }
    }
  }

  .chord__guess {
    background-color: #F2F2F2;
    &::placeholder {
      color:  white;
      font-weight: bold;
    }
  }
</style>