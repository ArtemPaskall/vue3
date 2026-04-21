<template>
  <button class="add-button" type="button" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "my-button",
  emits: ["click"],
}
</script>

<style lang="scss">
.add-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid green;
  border-radius: 4px;
  padding: 10px;
  color: green;
  font-weight: 700;
  transition: all 0.3s;
  cursor: pointer;
  min-width: 120px;
  max-width: 120px;

  &:hover {
    background-color: green;
    color: white;
  }
}
</style>
