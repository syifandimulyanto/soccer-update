<template>
  <div class="card timeline-card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          :src="timeline.image"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              :src="timeline.league.image"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="is-4 timeline-title">{{ timeline.title }}</p>
          <p class="subtitle is-6">{{ timeline.league.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['timeline'],
  data() {
    return {
      timeline: this.$props.timeline
    }
  }
}
</script>

<style>
.timeline-card {
  border-radius: 10px;
}
.timeline-title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 12px;
  color: #35495e;
  letter-spacing: 1px;
}
.media-content {
  min-height: 75px;
}
</style>
