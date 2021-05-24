<template>
  <Nav />
  <MyName id="home" />
  <AboutMe id="aboutme" />
  <Projects id="projects" />
  <Contact id="contact" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyName from "./components/MyName.vue";
import Contact from "./components/Contact.vue";
import Nav from "./components/Nav.vue";
import Projects from "./components/Projects.vue";
import AboutMe from "./components/AboutMe.vue";

export default defineComponent({
  name: "App",
  components: {
    MyName,
    Nav,
    Contact,
    Projects,
    AboutMe,
  },
});
</script>
git branch -m vite3-vue3 vite-vue3 git fetch origin git branch -u
origin/vite-vue3 vite-vue3
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}
html {
  scroll-behavior: smooth;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
