<template>
  <div class="head-text" data-aos="zoom-in">
    <div class="container">
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner" style="margin-bottom: 20px; border-radius: 15px;">
          <div class="carousel-item active">
            <img src="http://dueteam.org/images/header1.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="http://dueteam.org/images/header3.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="http://dueteam.org/images/header2.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <h1 style="font-size: 2.2em; color: #ffffff;"><strong>Танцевально-спортивный клуб "Дуэт"</strong></h1>
<p style="font-size: 1em; font-weight: 600; color: #ffffff; margin-bottom: 3vh;">ФЕДЕРАЦИЯ ТАНЦЕВАЛЬНОГО СПОРТА ПЕРМСКОГО КРАЯ</p>
<button type="button" class="btn btn-primary" style="--bs-btn-bg: #ffffff; --bs-btn-border-color: #ffffff; --bs-btn-hover-bg: #ffffff;">
  <a href="/contact" style="color: red; text-decoration: none;"><strong>Контакты</strong></a>
</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCarousel'
};
</script>

<style scoped>

</style>
