<template>
  <section id="news" class="container">
    <h2>Новости</h2>
    <div class="row">
      <div class="col-md-12 mb-4" v-for="news in newsList" :key="news.title">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ news.title }}</h5>
            <div v-if="news.imageUrl" class="text-center mb-3">
              <img :src="news.imageUrl" class="img-fluid" :alt="news.title">
            </div>
            <p class="card-text">{{ news.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'NewsList',
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.fetchNews();
  },
  methods: {
    async fetchNews() {
      try {
        const response = await axios.get('http://localhost:3000/news');
        this.newsList = response.data.map(news => ({
          title: news.title,
          description: news.content,
          imageUrl: news.imageUrl
        }));
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }
  }
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-body {
  padding: 20px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-text {
  margin-bottom: 15px;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 1rem;
  border-radius: 4px;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-primary:active {
  background-color: #0056b3;
}
</style>
