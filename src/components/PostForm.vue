<template>
  <form
    class="createPost-form"
    @submit.prevent
  >
    <h2 class="form-header">Create post</h2>
    <my-input
      v-model="post.title"
      placeholder="title"
    />
    <my-input
      v-model="post.body"
      placeholder="body"
    />
    <my-button
      class="add-button"
      @click="createPost"
    >
      Add
    </my-button>
  </form>
</template>

<script lang="ts">
export default {
  emits: ["create"],
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    }
  },
  methods: {
    createPost() {
      const newPost = {
        ...this.post,
        id: Date.now(),
      }
      this.$emit("create", newPost)

      this.post.title = ""
      this.post.body = ""
    },
  },
}
</script>

<style lang="scss">
.createPost-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.form-header {
  font-weight: 700;
  font-size: 18px;
}
</style>
