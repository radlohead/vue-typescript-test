<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <h1>App: {{ hi }}</h1>
    <div>test: {{ this.test }}</div>
    <div>count {{ this.count }}</div>
    <div>title: {{ this.title }}</div>
    <div>getTitle: {{ this.getTitle }}</div>
    <button v-on:click="AcCount">async count click</button>
  </div>
</template>

<script lang="ts">
import { mapActions, mapState, mapGetters } from "vuex";
import store from "./store";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      hi: "hi!"
    };
  },
  methods: {
    ...mapActions(["AcCount"])
  },
  computed: {
    ...mapState(["test", "count", "title"]),
    ...mapGetters(["getTitle"])
  },
  mounted() {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
