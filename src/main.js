import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/js/jquery.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/css/animate.css'
import './assets/css/animate.min.css'

import directives from './plugins/directives.js';
import './assets/css/style.css'


const app = createApp(App)


// Register global directive
app.directive('aos', directives.aos);
app.directive('owl-carousel', directives.owlCarousel);

app.use(router)

app.mount('#app')
