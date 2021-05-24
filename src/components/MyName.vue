<template>
  <div id="container">
    <h1>Hi! My Name is Jose Cabrera</h1>
    <h2>and i'm the <span> Software Developer </span></h2>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
      default: "",
    },
  },
  setup: () => {
    const count = ref(0);
    return { count };
  },
});
</script>

<style scoped>
#container {
  height: 90vh;
  border-style: solid;
  border-color: red;
  border-width: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
span {
  font-weight: bolder;
}

h1,
h2 {
  border-style: solid;
  border-color: red;
  border-width: 2px;
}
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
