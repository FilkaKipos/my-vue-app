import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import AdminPage from '../views/AdminPage.vue';
import AddCoach from '../views/AddCoach.vue';
import CoachCard from '../views/CoachCard.vue';
import VideoPage from '@/views/VideoPage.vue';
import AddNews from '@/views/AddNews.vue';
import ContactPage from '@/views/ContactPage.vue';
import AddVideo from '@/views/AddVideo.vue';
import store from '../../project-root/store';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/admin', name: 'AdminPage', component: AdminPage, meta: { requiresAuth: true } },
  { path: '/coach', name: 'CoachCard', component: CoachCard },
  { path: '/addcoach', name: 'AddCoach', component: AddCoach, meta: { requiresAuth: true } },
  { path: '/addnews', name: 'AddNews', component: AddNews, meta: { requiresAuth: true } },
  { path: '/addvideo', name: 'AddVideo', component: AddVideo, meta: { requiresAuth: true } },
  { path: '/videos', name: 'Videos', component: VideoPage },
  { path: '/contact', name: 'Contact', component: ContactPage }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = !!store.state.auth.token; // Убедитесь, что правильно обращаетесь к модулю auth и его состоянию

  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});


export default router;
