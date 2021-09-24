<template>
  <ul>
    <li v-for="post in posts" :key="post.id">{{post.name}} skrev: <i> {{post.comment}} </i></li>
  </ul>
</template>

<script>
import { getData } from "./getAndPost";
export default {
  name: "Posts",
  data() {return {posts: [], post: {}}},
  created() {getData("https://json-server-reb.herokuapp.com/posts", (data)=>{this.posts = data})},
  methods: {getPosts(e){console.log("hämtar i posts-komponent"); this.$emit("getPosts", e)}}
};
</script>

<style>
</style>