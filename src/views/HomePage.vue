<template>
  <body class="HomePage">
    <ImageCarousel />
    <NewsList :newsList="newsList" />
  </body>
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
.HomePage {
    font-family: "Comfortaa", sans-serif;
    margin: 0;
    padding: 0;
    background-image: url('../assets/background.svg');
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
    background-attachment: fixed;
}
</style>
