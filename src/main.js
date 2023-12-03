import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'


//import 'vuesalize/dist/vuesalize.css'
//import Vuesalize from 'vuesalize'



import './assets/style.css'

//createApp(App).use(Vuesalize).mount('#app')
createApp(App).use(createPinia()).mount('#app')
