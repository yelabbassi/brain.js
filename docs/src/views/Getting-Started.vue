<template>
  <div>
    <h2 class="title is-3">
      Getting Started
    </h2>
    <h3 class="subtitle is-4">There are multiple ways to use this library: </h3>

    <!-- NPM -->
    <h2 class="subtitle is-4">NPM</h2>
    <div class="content"><a href="https://nodei.co/npm/brain.js/">
      <img src="https://nodei.co/npm/brain.js.png?downloads=true&downloadRank=true">
    </a>
      <br>
      If you are using package manager in your project, use the folowing snippet to install <strong>Brain.js</strong>:

      <br>
      <code>npm install brain.js --save</code>
      <br>
      and then require in your code by:
      <br>
      <code>const brain = require('brain.js')</code>
    </div>

    <!-- CDN -->
    <h2 class="subtitle is-4">CDN</h2>
    <div class="content">
      Just add this script tag in your webpage and <strong>brain</strong> will be available as global object:
      <br>
      <code>
        &lt;script type=&quot;text/javascript&quot; src=&quot;//unpkg.com/brain.js/dist/brain.min.js&quot;&gt;&lt;/script&gt;
      </code>
    </div>

    <!-- Download -->
    <h2 class="subtitle is-4">Download</h2>
    <div class="content">
      You can manually download and inlcude scirpt file in your project:
      <br>
      <a
        class="button is-primary"
        href="//unpkg.com/brain.js/dist/brain.min.js">Download Now</a>
    </div>

    <h2 class="title is-3">
      Ready to start?
    </h2>
    <div class="content">
      <a
        class="button is-dark"
        href="//github.com/BrainJS/brain.js#brainjs">Continue to Documentation</a>
      <br>
      Or
      <br>
      <router-link
        to="/examples"
        title="Examples"
        class="button is-dark">
        View Live Examples
      </router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
