<template>
  <div
    class="dialog"
    v-if="show"
    @click="hideDialog"
  >
    <div
      @click.stop
      class="dialog-content"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "my-dialog",
  emits: ["update:show"],
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false)
    },
  },
}
</script>

<style lang="scss">
.dialog {
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
}
.dialog-content {
  margin: auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  min-height: 200px;
  min-width: 200px;
}
</style>
