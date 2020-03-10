<template>
  <div id="app">
    <div v-for="(chord, c) in chords" :key=c>
      <input type="text" v-model="chords[c].section">
      <br>
      <div v-for="(line, index) in chords[c].chords" :key=index>
        <div v-for="(chord, i) in chords[c].chords[index]" :key=i>
          <input type="text" v-model="line[i]">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chords: Array
  }
}
</script>

<style scoped>

</style>
