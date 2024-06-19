<template>
  <div class="contact-page container">
    <h2>Контакты</h2>
    <div class="contact-section">
      <h3>Телефоны:</h3>
      <ul>
        <li>
          <strong>Сиринов Валерий Алексеевич:</strong> +7-919-495-66-01
        </li>
        <li>
          <strong>Кульбеда Виктор Степанович:</strong> +7-902-641-29-52
        </li>
        <li>
          <strong>Безукладников Егор:</strong> +7-912-887-44-77
        </li>
      </ul>
    </div>
    <div class="contact-section">
      <h3>Электронная почта:</h3>
      <ul>
        <li>
          <strong>Сиринов В.А.:</strong> <a href="mailto:sir4949@mail.ru">sir4949@mail.ru</a>
        </li>
        <li>
          <strong>Кульбеда В.С.:</strong> <a href="mailto:tskduet@mail.ru">tskduet@mail.ru</a>
        </li>
        <li>
          <strong>Безукладников Е.:</strong> <a href="mailto:dueteam@mail.ru">dueteam@mail.ru</a>
        </li>
      </ul>
    </div>
    <div class="contact-section">
      <h3>Для сотрудничества юридических лиц:</h3>
      <p>+7-912-887-44-77 - Безукладников Егор</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage'
};
</script>

<style scoped>
.contact-page {
  margin-top: 20px;
}

.contact-section {
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 20px;
}

h3 {
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
