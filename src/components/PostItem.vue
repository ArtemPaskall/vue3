<template>
  <div class="post">
    <div>
      <div><strong>Title: </strong> {{ post.title }}</div>
      <div><strong>Body:</strong> {{ post.body }}</div>
    </div>
    <my-button @click="removeItem(post.id)">Remove</my-button>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue"
import { Post } from "../../types"

export default {
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
  methods: {
    removeItem(id: number) {
      this.$emit("deleteItem", id)
    },
  },
}
</script>

<style lang="scss">
.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
  border: 2px solid green;
}
</style>
