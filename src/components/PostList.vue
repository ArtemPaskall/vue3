<template>
  <div v-if="posts.length > 0">
    <h3 class="post-header">Post List</h3>
    <post-item
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @deleteItem="$emit('remove', $event)"
    ></post-item>
  </div>
  <div
    v-else
    class="no-posts"
  >
    No posts
  </div>
</template>

<script lang="ts">
import { PropType } from "vue"
import { Post } from "../../types.ts"
import PostItem from "./PostItem.vue"

export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array as PropType<Post[]>,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.post-header {
  font-weight: 700;
  font-size: 20px;
  margin-top: 30px;
}
.no-posts {
  font-weight: 700;
  font-size: 20px;
  margin-top: 30px;
  color: red;
}
</style>
