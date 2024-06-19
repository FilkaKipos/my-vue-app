<template>
  <div>
    <ImageCarousel />
    <NewsList :newsList="newsList" />
  </div>
</template>

<script>
import ImageCarousel from '../components/ImageCarousel.vue';
import NewsList from '../components/NewsList.vue';
import axios from 'axios';

export default {
  name: 'HomePage',
  components: {
    ImageCarousel,
    NewsList
  },
  data() {
    return {
      newsList: [] // Добавляем переменную для хранения списка новостей
    };
  },
  created() {
    this.fetchNews(); // Вызываем метод для загрузки новостей
  },
  methods: {
    async fetchNews() {
      try {
        const response = await axios.get('http://localhost:3000/news');
        this.newsList = response.data;
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Ваши стили */
</style>
