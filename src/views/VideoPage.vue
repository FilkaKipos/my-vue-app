<template>
  <div class="otst">
  <div class="video-page container">
    <h2>Видео выступлений</h2>
    <div class="row">
      <div class="col mb-4" v-for="video in videos" :key="video._id">
        <div class="card h-100">
          <iframe
            :src="getEmbedUrl(video.videoUrl)"
            class="card-img-top"
            :title="video.title"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div class="card-body">
            <h5 class="card-title">{{ video.title }}</h5>
            <p class="card-text">{{ video.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'VideoPage',
  computed: {
    ...mapState('videos', ['videos'])
  },
  created() {
    this.fetchVideos();
  },
  methods: {
    ...mapActions('videos', ['fetchVideos']),
    getEmbedUrl(videoUrl) {
      if (!videoUrl) return '';
      const embedBaseUrl = 'https://www.youtube.com/embed/';
      const videoId = videoUrl.split('/embed/')[1];
      return `${embedBaseUrl}${videoId}`;
    }
  }
};
</script>

<style scoped>
.card {
  text-align: center; /* Центрируем содержимое карточки по центру */
}

.card-img-top {
  width: 100%;
  height: 315px;
  margin: auto;
}
</style>
