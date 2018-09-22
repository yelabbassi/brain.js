<template>
  <div>
    <h2 class="title is-3">About Brain.js</h2>
    <div class="content">
      <p class="">Brain.js is a library of Neural Networks written in JavaScript. Brain.js is super simple to use. You do not need to know Neural Networks in details to work with this.</p>
    </div>

    <br>
    <br>
    <div class="custom-tags has-text-centered">
      <span
        v-for="feature in $store.state.features"
        :key="feature.title"
        class="tag is-dark is-medium">{{ feature.title }}</span>
    </div>

    <br>
    <br>
    <br>
    <!-- <h2 class="title is-3">Highlights</h2>
    <hr> -->
    <div class="container">
      <div class="highlight-list">
        <article
          v-for="highlight in $store.state.highlights"
          :key="highlight.title"
          class="message is-primary">
          <!-- <div class="message-header">
            <p><strong>{{ highlight.title }}</strong></p>
          </div> -->
          <div class="message-body">
            <strong>
              {{ highlight.title }}:
            </strong>
            <br>
            {{ highlight.description }}
            <br><br>
            <a
              v-show="highlight.link"
              :href="highlight.link">Details</a>
          </div>
        </article>
      </div>
    </div>

    <br>
    <br>
    <br>
    <div
      class="content has-text-centered">
      <span class="title is-3">Modular</span>
      <p>Brain.js implmentation is highly modular to easily allow extendability. Extend as you want! </p>

      <div
        id="svg-logo-animation-container"
        ref="svg-logo-animation-container">

        <p
          id="svg-logo-animation"
          ref="svg-logo-animation"
          class="label is-primary">Oalalalla</p>
      </div>

    </div>

    <br>
    <br>
    <hr>
    <br>
    <div class="columns">
      <div class="column">
        <h2 class="title is-3">
          Ready to start?
        </h2>
        <div class="content">
          <p>Read
            <a href="http://github.com/BrainJS/brain.js#brainjs">Documentation</a>
            or view <router-link
              to="/examples"
              title="Examples"
              class="">
              Live Examples
            </router-link>
          </p>
          <router-link
            to="/getting-started"
            class="button is-primary is-large"
            title="Installation & Quick Start">
            Get Started Now
          </router-link>
        </div>
      </div>

      <div class="column">
        <h2 class="title is-3">
          Support
        </h2>
        <div class="content">
          <p>Support this project by becoming a Sponsor or Backer. </p>
          <router-link
            to="//opencollective.com/brainjs#sponsor"
            title="Sponsor"
            class="button is-primary is-large">
            Become a Sponsor
          </router-link>
        </div>
      </div>

      <div class="column">
        <h2 class="title is-3">
          Be a Part of Brain.js
        </h2>
        <div class="content">
          <p>Contrinutions are always welcome!</p>
          <a
            href="//github.com/BrainJS/brain.js/blob/master/CONTRIBUTING.md"
            class="button is-primary is-large"
            title="Github Repository"
            target="_blank">
            Contribute
          </a>
        </div>
      </div>
    </div>

    <br>
    <hr>
    <br>

    <div class="content has-text-centered">
      <h2 class="title is-3">Sponsors/ Backers</h2>
      <p>Thank you to all our Sponsors and Backers! 🙏</p>
      <p>
        <a
          href="https://opencollective.com/brainjs/sponsor/0/website"
          target="_blank"><img src="https://opencollective.com/brainjs/sponsor/0/avatar.svg"></a>
        <a
          href="https://opencollective.com/brainjs/sponsor/1/website"
          target="_blank"><img src="https://opencollective.com/brainjs/sponsor/1/avatar.svg"></a>
        <a
          href="https://opencollective.com/brainjs/sponsor/2/website"
          target="_blank"><img src="https://opencollective.com/brainjs/sponsor/2/avatar.svg"></a>
        <a
          href="https://opencollective.com/brainjs/sponsor/3/website"
          target="_blank"><img src="https://opencollective.com/brainjs/sponsor/3/avatar.svg"></a>
        <a
          href="https://opencollective.com/brainjs/sponsor/4/website"
          target="_blank"><img src="https://opencollective.com/brainjs/sponsor/4/avatar.svg"></a>
        <a
          href="https://opencollective.com/brainjs/sponsor/5/website"
          target="_blank"><img src="https://opencollective.com/brainjs/sponsor/5/avatar.svg"></a>
        <a
          href="https://opencollective.com/brainjs/sponsor/6/website"
          target="_blank"><img src="https://opencollective.com/brainjs/sponsor/6/avatar.svg"></a>
        <a
          href="https://opencollective.com/brainjs/sponsor/7/website"
          target="_blank"><img src="https://opencollective.com/brainjs/sponsor/7/avatar.svg"></a>
        <a
          href="https://opencollective.com/brainjs/sponsor/8/website"
          target="_blank"><img src="https://opencollective.com/brainjs/sponsor/8/avatar.svg"></a>
        <a
          href="https://opencollective.com/brainjs/sponsor/9/website"
          target="_blank"><img src="https://opencollective.com/brainjs/sponsor/9/avatar.svg"></a>

        <br>
        <a
          href="https://opencollective.com/brainjs#backers"
          target="_blank"><img src="https://opencollective.com/brainjs/backers.svg?width=890"></a>
      </p>
    </div>

    <br>
    <hr>
    <br>

    <div class="content has-text-centered">
      <h2 class="title is-3">Contributors</h2>
      <p>This project exists thanks to all the people who contribute.<br><br>
      <a href="graphs/contributors"><img src="https://opencollective.com/brainjs/contributors.svg?width=890&button=false" ></a></p>
    </div>

    <br>

  </div>
</template>

<script>
export default {
  components: {},

  mounted() {},
}
</script>

<style lang="sass">
.custom-tags
  .tag
    margin-right: 0.5em
    margin-bottom: 0.5em

.highlight-list
  .message
    display: inline-block
    width: 45%
    &:nth-child(2n)
      margin-left: 5%
    .message-body
      background-color: #fff

@media only screen and (max-width: 1023px)
  .highlight-list
    .message
      width: 100%
      margin-left: 0!important

</style>
