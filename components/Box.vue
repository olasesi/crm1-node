<template>
  <div :class="className" :style="style">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "Box",
  props: {
    className: { type: String },
    style: { type: () => ({}) },
  },
};
</script>

<style></style>
