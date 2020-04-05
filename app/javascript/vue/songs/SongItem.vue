<template>
  <div id="songItem">
    <span class="icon-menu-dots"></span>
    <p>{{ song.title }} - {{ song.artist }}</p>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  props: ["song"]
}
</script>

<style lang="scss">
  #songItem {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: var(--light-grey);
    border-radius: 8px;
    p {
      margin: 12px 0;
    }
    .icon-menu-dots {
      margin: 0 12px;
      color: var(--grey);
      &:hover {
        cursor: move;
      }
    }
    .actions {
      margin-left: auto;
      margin-right: 10px;
      &.icon-minus:hover {
        cursor: pointer;
      }
    }
  }
</style>