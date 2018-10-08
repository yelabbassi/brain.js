<template>
  <div>
    <h1 class="title is-3">Examples</h1>
    <h2
      class="subtitle is-4">Some examples to quickly learn Brain.js</h2>
    <p>Brain.js github repository also contains some <a href="https://github.com/BrainJS/brain.js/tree/master/examples">JavaScript Examples</a> and <a href="https://github.com/BrainJS/brain.js/tree/master/examples-typescript">Typescript Examples</a>.</p>

    <br>
    <br>
    <div
      v-for="(example, index) in $store.state.examples"
      :key="index">
      <p class="title is-5">{{ example.title }}</p>
      <p class="subtitle is-6">{{ example.description }}</p>

      <bulmaAccordion>
        <BulmaAccordionItem>
          <h4 slot="title">View Exmaple</h4>
          <p slot="content">
            <iframe
              :src="example.link"
              width="100%"
              height="300"
              allowfullscreen="allowfullscreen"
              allowpaymentrequest
              frameborder="0"/>
          </p>
        </BulmaAccordionItem>
      </BulmaAccordion>
      <br>
      <br>
      <br>
    </div>


    <br>
    <br>
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

</template>

<script>
import { BulmaAccordion, BulmaAccordionItem } from 'vue-bulma-accordion'

export default {
  components: {
    BulmaAccordion,
    BulmaAccordionItem,
  },
}
</script>

<style>
</style>
