<template>
  <div :className="defaultClassName" :style="style">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "Card",
  props: {
    boxShadow: { type: String, default: "shadow-xl" },
    borderRadius: { type: String, default: "rounded-2" },
    padding: { type: String, default: "p-4" },
    className: { type: String },
    style: {
      type: () => ({}),
    },
  },
  computed: {
    defaultClassName() {
      return `${this.padding} ${this.boxShadow} ${this.borderRadius} ${this.className} `;
    },
  },
};
</script>

<style></style>
