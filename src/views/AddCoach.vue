<template>
  <div class="admin">
    <h1>Добавить тренера</h1>
    <form @submit.prevent="createCoach">
      <div class="form-group">
        <label for="name">ФИО</label>
        <input type="text" v-model="name" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="photoUrl">Ссылка на фото</label>
        <input type="text" v-model="photoUrl" class="form-control">
      </div>
      <div class="form-group">
        <label for="vkLink">Ссылка на ВКонтакте</label>
        <input type="text" v-model="vkLink" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Добавить тренера</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddCoach',
  data() {
    return {
      name: '',
      photoUrl: '',
      vkLink: ''
    };
  },
  methods: {
    async createCoach() {
      try {
        await this.$store.dispatch('coaches/createCoach', {
          name: this.name,
          photoUrl: this.photoUrl,
          vkLink: this.vkLink
        });
        this.name = '';
        this.photoUrl = '';
        this.vkLink = '';
      } catch (error) {
        console.error('Ошибка при добавлении тренера:', error);
        alert('Ошибка при добавлении тренера');
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
  