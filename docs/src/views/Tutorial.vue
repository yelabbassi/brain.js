<template>
  <div>
    <h1 class="title is-3">Tutorials & Guides</h1>
    <h2 class="subtitle is-4">Some tutorials and guides to learn about Brain.js</h2>

    <div class="custom-messages">
      <div
        v-for="(tutorial, index) in $store.state.tutorials"
        :key="index"
        class="message is-light">
        <div class="message-header"><strong>{{ tutorial.title }}</strong></div>
        <div class="message-body">
          by {{ tutorial.author }}
          <br>
          <br>
          <a
            :href="tutorial.link"
            class="button is-primary"
            target="_blank">Open</a>
        </div>
      </div>
    </div>

    <h2 class="title is-4">Want to add an article? </h2>
    <p>This page is open source, go ahead and include tutorial/article related to Brain.js to this list or <a
      href="//github.com/BrainJS/brain.js/issues/new"
      target="_blank">create an issue</a> and we will add it. </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass">
.custom-messages
  .message
    display: inline-block
    width: 45%
    margin-bottom: 2.5%
    &:nth-child(2n)
      margin-left: 2.5%

@media only screen and (max-width: 1023px)
  .custom-messages
    .message
      width: 100%
      margin-left: 0!important
</style>
