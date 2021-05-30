import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.mixin({
  data() {
    return {
      url: 'http://127.0.0.1:8080/ServiceApp/claims',
    }
  },
})

app.use(router).mount('#app')


