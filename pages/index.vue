<template>
  <div>
    <section class="hero is-white has-text-centered">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column">
              <h1 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Designer, Front-end Developer &amp; Mentor</h1>
              <h2 class="subtitle is-size-4-desktop">I design and code beautifully simple things, and I love what I do.</h2><img
                class="avatar"
                src="https://bulma.io/images/bulma-logo.png"
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section is-medium is-primary has-text-centered is-long">
      <div class="container">
        <div class="columns is-multiline is-mobile">
          <div
            v-for="user in users"
            :key="user.id"
            class="column is-12-mobile is-half-tablet is-one-third-desktop"
          >
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="http://lorempixel.com/400/200/"
                    alt="Placeholder image"
                  >
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      >
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">{{ user.name }}</p>
                    <p class="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from 'axios'

export default {
  components: {
    Logo
  },
  async asyncData() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )
    return { users: data }
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
</style>
