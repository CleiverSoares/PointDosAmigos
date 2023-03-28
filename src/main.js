import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js"
import "@fortawesome/fontawesome-free/css/all.css";
import { library } from '@fortawesome/fontawesome-svg-core'

import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App).use(router).mount('#app')