<template>
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <a
        class="navbar-item"
        href="/">
        <img
          src="@/assets/logo.svg"
          alt="Brain.js logo"
          width="28"
          height="28"
          class="bordered">
        &nbsp; Brain.js
      </a>
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
          class="navbar-item">
          <i class="material-icons">flight_takeoff</i>
          &nbsp;Getting Started
        </router-link>
        <router-link
          to="/examples"
          class="navbar-item">
          <i class="material-icons">collections</i>
          &nbsp;Examples
        </router-link>
        <router-link
          to="/documentation"
          class="navbar-item">
          <i class="material-icons">list</i>
          &nbsp;Documentation
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a
                class="bd-tw-button button is-dark"
                target="_blank"
                href="//github.com/BrainJS/brain.js">
                <i class="material-icons">star</i>
              </a>
            </p>
            <p class="control">
              <a
                class="bd-tw-button button is-dark"
                target="_blank"
                href="//twitter.com/intent/tweet?text=Brain.js: Neural networks in JavaScript&amp;hashtags=brain.js,neuralNetworks,javascript,node">
                <i class="material-icons">share</i>
              </a>
            </p>
            <p class="control">
              <a
                class="button is-dark"
                target="_blank"
                href="//unpkg.com/brain.js/dist/brain.min.js">
                <i class="material-icons">get_app</i>
              </a>
            </p>
            <p class="control">
              <a
                class="button is-light"
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
