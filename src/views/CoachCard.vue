<template>
  <div class="otst">
  <div class="container">
    <h1 class="my-4">Наши тренеры</h1>
    <div class="row">
      <div v-for="coach in coaches" :key="coach._id" class="col-md-4">
        <CoachCard :coach="coach" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import CoachCard from '@/components/CoachCard.vue';

export default {
  name: 'CoachePage',
  components: {
    CoachCard
  },
  data() {
    return {
      coaches: []
    };
  },
  created() {
    this.fetchCoaches();
  },
  methods: {
    async fetchCoaches() {
      try {
        const response = await axios.get('http://localhost:3000/coaches');
        this.coaches = response.data;
      } catch (error) {
        console.error('Error fetching coaches:', error);
      }
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
