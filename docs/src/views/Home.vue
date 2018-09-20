<template>
  <div>
    <h2 class="title is-3">About <strong>Brain.js</strong></h2>
    <div class="content">
      <p>ss</p>
    </div>

    <hr>

    <h2 class="title is-3">Neural Network Types</h2>
    <div class="network-list">
      <ul>
        <li
          v-for="network in $store.state.networks"
          :key="network.title"
          class="">
          <div>
            <h1 class="title">
              {{ network.title }}
            </h1>
            <h2 class="subtitle">
              {{ network.description }}
              <a :href="network.link">info</a>
            </h2>
          </div>
      </li></section></ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="sass">
</style>
