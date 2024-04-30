<template>
  <button :style="style" :class="defaultAndNewClass">
    {{ text }}
  </button>
</template>

<script lang="ts">
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      default: "text-white",
    },
    textSize: {
      type: String,
      default: "text-base",
    },
    textWeight: {
      type: String,
      default: "font-normal",
    },
    fontFamily: {
      type: String,
      default: "font-serif",
    },
    buttonColor: {
      type: String,
      default: "bg-pink-300",
    },
    borderRadius: {
      type: String,
      default: "rounded-lg",
    },
    buttonDisplay: {
      type: String,
      default: "block",
    },
    style: {
      type: () => ({}),
    },
    className: {
      type: String,
    },
  },
  computed: {
    defaultAndNewClass() {
      return `${this.textColor} ${this.textSize} ${this.textWeight} ${this.buttonDisplay} ${this.borderRadius} ${this.buttonColor} ${this.fontFamily} ${this.className}`;
    },
  },
};
</script>

<style></style>
