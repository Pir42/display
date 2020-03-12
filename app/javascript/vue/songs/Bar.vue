<template>
  <div id="bar">
    <div class="chord__container">
      <div v-for="(chord, i) in bar" :key=i class="chord__item">
        <input type="text" v-model="bar[i]">
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
      new_chord: ""
    }
  },
  methods: {
    chord_change() {
      if(this.new_chord != "") {
        this.bar.push(this.new_chord)
        this.new_chord = ""
      }
    }
  }
}
</script>

<style lang="scss">
  .chord__container {
    margin: 12px 0;
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