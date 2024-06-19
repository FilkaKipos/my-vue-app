<template>
  <div class="admin-panel container">
    <h2>Административная панель</h2>
    <div class="button-container">
      <button class="btn btn-primary" @click="navigateTo('/addnews')">Новая новость</button>
      <button class="btn btn-primary" @click="navigateTo('/addcoach')">Новый тренер</button>
      <button class="btn btn-primary" @click="navigateTo('/addvideo')">Новое выступление</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminPanel',
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
.admin-panel {
  margin-top: 20px;
  text-align: center;
}

.button-container {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

button {
  width: 200px;
  padding: 10px;
  font-size: 16px;
}
</style>
