<template>
  <section :id="id">
    <h1>Contactame</h1>
    <ul>
      <li>Linkedin</li>
      <li>Github</li>
      <li>link a cv</li>
    </ul>
  </section>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "Contact",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    return { count };
  },
});
</script>

<style scoped>
section {
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
