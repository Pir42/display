<template>
  <div>
    <template v-for="(list, li) in lists">

        <template v-for="(item, i) in list.items">
            <pin 
                v-bind:key="li.toString() + i.toString()" 
                :text="item[list.textprop]" 
                :icon="list.icon" 
                :color="list.color" 
                v-bind:reactive="list.reactive" 
                v-bind:margins="list.margins"
                v-on:pin-clicked="pinClick"
            />
        </template>

        <hr v-if="separate && li != lists.length-1">

    </template>
  </div>
</template>

<script>
import Vue from 'vue/dist/vue.esm'

import Pin from "./Pin"

Vue.component("pin", "Pin")

export default {
    props: {
        lists: Array,
        separate: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        pinClick(e) {
            this.$children.forEach((child) => {
                if(child.$options.name == "pin" && child != e) {
                    child.isActive = false
                }
            })
            e.isActive = !e.isActive
        }
    }
}
</script>

<style lang="scss">
    hr {
        margin: 20px auto;
        height: 2px;
        border: none;
        width: 40%;
        background-color: var(--light-grey);
    }
</style>