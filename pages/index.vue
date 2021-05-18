<template>
  <div class="">
    <button @click="show = !show">show?</button>

    <transition name="leftenter">
      <div v-if="show" id="hello" class="container">
        <h1 class="title">Welcome</h1>
        <h3 class="text-2xl">
          My name is Jose Cabrera <br />
          I'm a Software Developer.
        </h3>
        <button>Get to know me</button>
      </div>
    </transition>
    <section id="aboutme" class="experience">
      <h1>About me</h1>
      <button>Ver resumen Ingles</button>
      <button>Ver resumen Español</button>
    </section>
    <section class="experience">
      <h1>Projects o Experiencia</h1>
      <h2>Projecto 1</h2>
      <h2>Projecto 2</h2>
      <h2>Projecto 3</h2>
    </section>
    <section class="experience">
      My experience so far<a href="https://github.com/JoseCabreraJC">
        <img
          class="h-28"
          src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
          alt="GitHub link"
        />
      </a>
      it isn't much <br />
      but its honest work.
      <img
        src="https://memegenerator.net/img/instances/73476779.jpg"
        alt="please help me"
        title="please help me"
      />
    </section>
    <section class="contact">
      <h1 class="text-3xl leading-loose">Contact</h1>
      <button class="px-5 py-2 border rounded hover:bg-green-400">
        Contact Me!
        <a href="mailto:josem.cabrera259@gmail.com"></a>
      </button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    this.show = true
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.experience {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.contact {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.leftenter-enter-active,
.leftenter-leave-active {
  transition: opacity 0.5s ease;
}

.leftenter-enter-from,
.leftenter-leave-to {
  opacity: 0;
}
</style>
