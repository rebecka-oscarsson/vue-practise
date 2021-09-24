<template>
  <div id="app">
    <Form :post="post" @savePost ="savePost"/>
    <Posts />
    <hr>
    <p>
      hej {{ post.userName }} du har klickat {{ clicked }} ggr <button @click="count">knapp</button>
      förra gången du skrev hette du {{testnamn}}
    </p>
    <h2 v-if="clicked > 5">sluta klicka nu</h2>
    <h1 v-if="clicked > 10">men för bövelen</h1>
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import Posts from "./components/Posts.vue";
import { postData } from "./components/getAndPost";

export default {
  name: "App",
  data() {
    return {
      post: {},
      clicked: 0,
      testnamn: localStorage.getItem("name")
    };
  },
  components: { Form, Posts },
  methods: {
    count() {
      this.clicked++;
    },
    //den här metoden skickas vidare till posts
    savePost(e) {
      let formData = {name: e.target.name.value, date: new Date().toLocaleString(), comment: e.target.comment.value}
      this.post = formData
      postData("https://json-server-reb.herokuapp.com/posts", formData)
      localStorage.setItem("name", e.target.name.value); //från Janneövning
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
