<template>
  <input
    :value="modelValue"
    @input="updateInput"
    class="input"
    type="text"
  />
</template>

<script lang="ts">
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event: Event) {
      const target = event.target as HTMLInputElement
      this.$emit("update:modelValue", target.value)
    },
  },
}
</script>

<style>
.input {
  padding: 10px;
  border: 1px solid green;
  max-width: 300px;
  border-radius: 4px;
  outline: none;
}
</style>
