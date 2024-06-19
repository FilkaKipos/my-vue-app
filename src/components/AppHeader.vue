<template>
  <header id="navbar">
    <div class="nav-container">
      <a href="/" class="logo">
        <img src="@/assets/logo.svg" alt="Логотип" />
      </a>
      <ul class="nav justify-content-end" style="--bs-nav-link-color: #0;">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/#news"><strong>Новости</strong></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/coach"><strong>Тренеры</strong></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/videos"><strong>Наши номера</strong></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact"><strong>Контакты</strong></a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
};
</script>

<style scoped>
#navbar {
  background-color: #ff0000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav {
  margin: 0;
}

.logo img {
  width: auto;
  height: auto;
  margin-left: 20px;
}
</style>
