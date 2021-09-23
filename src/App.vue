<template>
  <div id="app">
    <Form :post="post" @savePost ="savePost"/>
    <Posts />
    <hr>
    <p>
      hej {{ post.userName }} du har klickat {{ clicked }} ggr <button @click="count">knapp</button>
      senaste som skrev hette {{testnamn}}
    </p>
    <h2 v-if="clicked > 5">sluta klicka nu</h2>
    <h1 v-if="clicked > 10">men för bövelen</h1>
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import Posts from "./components/Posts.vue";
import { getData, postData } from "./components/getAndPost";
let posts;


//hur ska jag göra en object-array och pusha in senaste posten? det ska nog va i savePost-funktionen
//när sidan hämtas ska alla poster hämtas och loopas och skrivas ut

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
      postData("http://localhost:3000/posts", formData)
      localStorage.setItem("name", e.target.name.value); //från Janneövning
    },
    getPosts(){getData("http://localhost:3000/posts", (data)=>{posts=data; console.log(posts)})}
    
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
