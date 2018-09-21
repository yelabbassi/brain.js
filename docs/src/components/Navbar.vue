<template>
  <nav class="navbar is-fixed-top is-dark">
    <div class="navbar-brand">
      <router-link
        to="/"
        class="navbar-item">
        <img
          src="@/assets/logo.svg"
          alt="Brain.js logo"
          width="28"
          height="28"
          class="bordered">
        &nbsp; Brain.js
      </router-link>
      <div
        class="navbar-burger burger"
        data-target="navbarExampleTransparentExample">
        <span/>
        <span/>
        <span/>
      </div>
    </div>

    <div
      id="navbarExampleTransparentExample"
      class="navbar-menu">
      <div class="navbar-start">
        <router-link
          to="/getting-started"
          class="navbar-item"
          title="Installation & Quick Start">
          <i class="material-icons">flight_takeoff</i>
          &nbsp;Getting Started
        </router-link>
        <router-link
          to="/examples"
          class="navbar-item"
          title="View Examples">
          <i class="material-icons">collections</i>
          &nbsp;Examples
        </router-link>
        <a
          href="//github.com/BrainJS/brain.js#brainjs"
          class="navbar-item"
          title="View Documentation"
          target="_blank">
          <i class="material-icons">list</i>
          &nbsp;Documentation
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a
                class="bd-tw-button button is-dark"
                target="_blank"
                href="//github.com/BrainJS/brain.js"
                title="Github Repository">
                <i class="material-icons">star</i>
              </a>
            </p>
            <p class="control">
              <a
                class="bd-tw-button button is-dark"
                target="_blank"
                title="Tweet about Brain.js"
                href="//twitter.com/intent/tweet?text=Brain.js: Neural networks in JavaScript&amp;hashtags=brain.js,neuralNetworks,javascript,node">
                <i class="material-icons">share</i>
              </a>
            </p>
            <p class="control">
              <a
                class="button is-dark"
                target="_blank"
                title="Download the script"
                href="//unpkg.com/brain.js/dist/brain.min.js">
                <i class="material-icons">get_app</i>
              </a>
            </p>
            <p class="control">
              <a
                class="button is-light is-highlighted"
                title="Be a Sponsor or Backer to this project"
                href="//opencollective.com/brainjs">
                <i class="material-icons">attach_money</i>
                <span>&nbsp; Support</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="sass">

</style>
