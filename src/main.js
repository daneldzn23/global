import { createApp } from 'vue'
import App from './App.vue'
import reveal from './composables/reveal'
import './css/main.css'

createApp(App)
  .directive('reveal', reveal)
  .mount('#app')
