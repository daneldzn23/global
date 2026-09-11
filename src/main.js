import { createApp } from 'vue'
import App from './App.vue'
import reveal from './composables/reveal'
import shuffleNumber from './composables/shuffleNumber'
import './css/main.css'

createApp(App)
  .directive('reveal', reveal)
  .directive('shuffle-number', shuffleNumber)
  .mount('#app')
