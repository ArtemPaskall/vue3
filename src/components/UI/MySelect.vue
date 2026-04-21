<template>
  <select
    class="select"
    :value="modelValue"
    @change="changeOption"
  >
    <option
      disabled
      value=""
    >
      Choose an option
    </option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script lang="ts">
import { PropType } from "vue"
import { Option } from "../../../types"

export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array as PropType<Option[]>,
      default: () => [],
    },
  },
  methods: {
    changeOption(event: Event) {
      this.$emit("update:modelValue", (event.target as HTMLSelectElement).value)
    },
  },
}
</script>

<style lang="scss"></style>
