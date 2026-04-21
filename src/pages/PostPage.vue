<template>
  <div class="container">
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <header class="header">header VUE 3</header>
    <div class="buttons-wrapp">
      <my-button
        class="create-button"
        @click="dialogShow"
      >
        Create post
      </my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>

    <post-list
      :posts="sortedPost"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div
      v-else
      class="loading"
    >
      Loading...
    </div>
  </div>
</template>

<script lang="ts">
import PostList from "../components/PostList.vue"
import PostForm from "../components/PostForm.vue"
import { Post, Option } from "../../types.ts"
import MyDialog from "../components/UI/MyDialog.vue"
import MyButton from "../components/UI/MyButton.vue"
import axios from "axios"
import MySelect from "../components/UI/MySelect.vue"

export default {
  components: {
    PostList,
    PostForm,
    MyDialog,
    MyButton,
    MySelect,
  },

  data(): {
    posts: Post[]
    dialogVisible: boolean
    isPostsLoading: boolean
    selectedSort: keyof Post | ""
    sortOptions: Option[]
  } {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "By title" },
        { value: "body", name: "By text" },
      ],
    }
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    sortedPost() {
      if (!this.selectedSort) return this.posts
      const key = this.selectedSort
      return [...this.posts].sort((post1, post2) => {
        return String(post1[key]).localeCompare(String(post2[key]))
      })
    },
  },
  // watch: {
  //   selectedSort(newValue: keyof Post) {
  //     this.posts.sort((post1, post2) => {
  //       return String(post1[newValue]).localeCompare(String(post2[newValue]))
  //     })
  //   },
  // },
  methods: {
    createPost(post: Post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(id: number) {
      this.posts = this.posts.filter((post) => post.id !== id)
    },
    dialogShow() {
      this.dialogVisible = true
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true
        const fetchedPosts = await axios(
          "https://jsonplaceholder.typicode.com/posts?_limit=10",
        ).then((res) => res.data)
        this.posts = fetchedPosts
      } catch (error) {
        console.error(error)
      } finally {
        this.isPostsLoading = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 20px 40px;
}
.header {
  font-weight: 700;
  font-size: 22px;
  text-transform: uppercase;
}
.create-button {
  margin-top: 30px;
}
.loading {
  margin-top: 30px;
  font-size: 18px;
}
.buttons-wrapp {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
