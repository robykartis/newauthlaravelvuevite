import './bootstrap';
import { createApp } from 'vue'
import router from './router/router.js'

import app from './layouts/App.vue'

createApp(app).use(router).mount("#app")