<template>
  <section
    :class="{'is-medium': $route.name === 'home'}"
    class="hero is-primary">
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
              <div class="field is-grouped">
                <p class="control">
                  <router-link
                    to="/getting-started"
                    class="button is-dark"
                    title="Installation & Quick Start">
                    Getting Started
                  </router-link>
                </p>
                <p class="control">
                  <a
                    href="//github.com/BrainJS/brain.js"
                    class="button is-dark"
                    title="Github Repository"
                    target="_blank">
                    Github
                  </a>
                </p>
              </div>

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
