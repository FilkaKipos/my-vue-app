<template>
    <div class="card mb-3">
      <img :src="coach.photoUrl" class="card-img-top" :alt="coach.name">
      <div class="card-body">
        <h5 class="card-title">{{ coach.name }}</h5>
        <p class="card-text"><a :href="coach.vkLink" target="_blank">{{ coach.vkLink }}</a></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CoachCard',
    props: {
      coach: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
  width: 300px;
  }
  
  .card-img-top {
    width: 230px;
    margin: 0 auto; 
    object-fit: cover;
    max-height:300px ;
  }
  </style>
  