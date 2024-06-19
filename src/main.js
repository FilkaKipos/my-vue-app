import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from '../project-root/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'aos/dist/aos.css';
import AOS from 'aos';

const app = createApp(App);

app.use(store);
app.use(router);
app.mount('#app');

AOS.init();
