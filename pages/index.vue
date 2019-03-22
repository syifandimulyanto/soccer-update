<template>
  <div>
    <section class="section is-medium is-primary has-text-centered is-long">
      <div class="container">
        <div class="columns is-multiline is-mobile card-content">
          <div
            v-for="(timeline, index) in timelines"
            :key="index"
            class="column is-12-mobile is-half-tablet is-one-third-desktop"
          >
            <card :timeline="timeline" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Card from '~/components/Card.vue'

export default {
  components: {
    Logo,
    Card
  },
  fetch({ store }) {
    store.dispatch('getTimelines')
  },
  computed: {
    timelines() {
      return this.$store.state.timelines.data
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.card-content {
  width: 100%;
}
</style>
