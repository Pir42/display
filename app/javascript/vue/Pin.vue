<template>
  <div v-bind:class="[{ active: isActive }, { hover: isHovered }, 'pin']" :style="pinStyle" @click="onClick" @mouseover="onHover" @mouseleave="onLeave">
    <span :class="iconName" :style="iconStyle"></span>
    <p :style="textStyle">{{ text }}</p>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
            isHovered: false,
            borderSize: 2,
        }
    },
    props: {
        text: String,
        color: String,
        icon: String,
        reactive: Boolean,
        size: {
            type: String,
            default: "regular"
        },
        margins: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        iconStyle() {
            let style = "";
            switch(this.size) {
                case "medium":
                    style = "font-size: 22px;"
            }
            style += `color: var(--${this.color})`
            return style
        },
        iconName() {
            return `icon-${this.icon}`
        },
        textStyle() {
            let style;
            switch(this.size) {
                case "medium":
                    style = "font-family: 'Montserrat'; font-size: 16px; font-weight: bold; margin: 12px 0;"
                    break;
            }
            return style
        },
        border() {
            return `${this.borderSize}px solid ${this.activeColor};`
        },
        marginStyle() {
            return this.margins ? "10px 0;" : "0;"
        },
        pinStyle() {
            return `
            border: ${this.border};
            margin: ${this.marginStyle}
            `
        },
        activeColor() {
            return this.isActive ? `var(--${this.color})` : "transparent"
        }
    },
    methods: {
        onClick() {
            if(this.reactive) {
                this.$emit('pin-clicked', this)
            }
        },

        onHover() {
            if(this.reactive) {
                this.isHovered = true
            }
        },

        onLeave() {
            if(this.reactive) {
                this.isHovered = false
            }
        }
    }
}
</script>

<style lang="scss">
  .pin {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background-color: var(--light-grey);
    border-radius: 8px;
    transition: all .2s ease-in-out;
    &.hover, &.active {
        cursor: pointer;
        box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    }
    p {
      margin: 10px 0;
    }
    [class^="icon"] {
      margin: 0 10px;
      color: var(--grey);
    }

    .actions {
      margin-left: auto;
      margin-right: 10px;
      &[class^="icon"]:hover {
        cursor: pointer;
      }
    }
  }
</style>