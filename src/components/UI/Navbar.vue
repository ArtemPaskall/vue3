<template>
  <div class="navbar">
    <router-link to="/">Main Page</router-link>
    <div class="navbar__inner">
      <router-link to="/posts">Posts</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "my-navbar",
}
</script>
<style lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(121, 137, 131);
  padding: 30px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;

  & a {
    transition: all 0.3s;
  }

  & a:hover {
    color: rgb(196, 196, 196);
  }

  &__inner {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
  }
}
</style>
