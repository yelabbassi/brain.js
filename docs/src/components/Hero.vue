<template>
  <section class="hero is-medium is-primary">
    <div class="hero-body">
      <div class="container">
        <article class="media">
          <figure class="media-left">
            <p class="image is-128x128">
              <img
                src="@/assets/logo.svg"
                alt="brain.js logo"
                class="bordered">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <span class="title is-1">Brain.js</span>
                <br>
                <span class="subtitle is-2">Neural networks in JavaScript</span>
                <br>
                for Browser and Node.js
              </p>
              <a
                href="//github.com/BrainJS/brain.js"
                class="button is-small is-dark"
                title="Github Repository">
                Github
              </a>
              &nbsp;
              <router-link
                to="/getting-started"
                class="button is-small is-dark"
                title="Installation & Quick Start">
                Getting Started
              </router-link>

            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="sass">
</style>
