import { createApp } from 'vue'
import App from './App.vue'
// import { AOS } from 'aos';
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
// import './assets/main.css'

createApp(App).mount('#app')
