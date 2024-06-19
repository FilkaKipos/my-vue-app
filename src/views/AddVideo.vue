<template>
    <div class="otst">
    <div class="add-video container">
      <h2>Добавить новое видео</h2>
      <form @submit.prevent="addVideo">
        <div class="form-group">
          <label for="title">Название</label>
          <input type="text" v-model="title" class="form-control" id="title" required>
        </div>
        <div class="form-group">
          <label for="description">Описание</label>
          <textarea v-model="description" class="form-control" id="description" rows="5" required></textarea>
        </div>
        <div class="form-group">
          <label for="videoUrl">URL видео</label>
          <input type="text" v-model="videoUrl" class="form-control" id="videoUrl" required>
        </div>
        <button type="submit" class="btn btn-primary">Добавить видео</button>
      </form>
    </div>
  </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'AddVideo',
    data() {
      return {
        title: '',
        description: '',
        videoUrl: ''
      };
    },
    methods: {
      async addVideo() {
        try {
          const response = await axios.post('http://localhost:3000/videos', {
            title: this.title,
            description: this.description,
            videoUrl: this.videoUrl.replace("watch?v=", "embed/")
          }, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          });
          if (response.status === 200) {
            alert('Видео успешно добавлено');
            this.title = '';
            this.description = '';
            this.videoUrl = '';
          } else {
            throw new Error('Failed to add video');
          }
        } catch (error) {
          console.error('Ошибка при добавлении видео:', error);
          alert('Ошибка при добавлении видео');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .add-video {
    margin-top: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
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
  