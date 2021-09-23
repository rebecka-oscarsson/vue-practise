<template>
  <form @submit="savePost">
    <input type="text" placeholder="name" id="name" v-model="post.userName" />

    <input
      type="text"
      placeholder="comment"
      id="comment"
      v-model="post.comment"
    />
    <button type="submit">skicka gästboksinlägg</button>
  </form>
</template>

<script>

export default {
  name: "Form",
  props: { post: { type: Object } },
  methods: {savePost(e){console.log("skickat från form-komponent"); this.$emit("savePost", e)}}
};
</script>

<style>
</style>