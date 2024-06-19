<template>
    <div class="admin">
      <h1>Добавить новость</h1>
      <form @submit.prevent="createNews">
        <div class="form-group">
          <label for="title">Название</label>
          <input type="text" v-model="title" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="content">Контент</label>
          <textarea v-model="content" class="form-control" rows="5" required></textarea>
        </div>
        <div class="form-group">
          <label for="imageUrl">Фото URL</label>
          <input type="text" v-model="imageUrl" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Добавить новость</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'AddNews',
    data() {
      return {
        title: '',
        content: '',
        imageUrl: ''
      };
    },
    methods: {
      async createNews() {
        try {
          await axios.post('http://localhost:3000/news', {
            title: this.title,
            content: this.content,
            imageUrl: this.imageUrl // Добавляем imageUrl в тело запроса
          }, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          });
          alert('News created successfully');
          this.title = '';
          this.content = '';
          this.imageUrl = ''; // Очищаем поле для URL изображения после успешной загрузки
        } catch (error) {
          alert('Error creating news');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .admin {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    font-size: 2.5em;
    text-align: center;
    margin-bottom: 30px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    font-weight: bold;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .btn-primary {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 1.2em;
    cursor: pointer;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
  }
  
  .btn-primary:active {
    background-color: #0056b3;
  }
  </style>
  