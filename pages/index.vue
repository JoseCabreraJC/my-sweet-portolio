<template>
  <div class="">
    <div class="container">
      <h1 class="title">Welcome</h1>
      <h3 class="text-2xl">
        My name is Jose Cabrera and i'm a Software Developer.
      </h3>
    </div>
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
        Contact Me
        <address>
          E-Mail :
          <a href="josem.cabrera259@gmail.com">josem.cabrera259@gmail.com</a>
        </address>
      </button>
    </section>
  </div>
</template>

<script>
export default {}
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
</style>
