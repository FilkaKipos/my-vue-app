// store/modules/coaches.js

import axios from 'axios';

export default {
  namespaced: true,
  actions: {
    async createCoach(_, coachData) {
      try {
        await axios.post('http://localhost:3000/coaches', coachData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        alert('Тренер успешно добавлен');
      } catch (error) {
        console.error('Ошибка при добавлении тренера:', error);
        alert('Ошибка при добавлении тренера');
        throw error;
      }
    }
  }
};
