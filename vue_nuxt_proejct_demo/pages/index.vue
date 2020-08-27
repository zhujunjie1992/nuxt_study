<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        vue_nuxt_proejct_demo
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ redirect }) {
    return redirect("/home");
  }
}
</script>

<style>

</style>
