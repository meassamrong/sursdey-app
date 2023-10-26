import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'gitart-vue-dialog/dist/style.css'
import { GDialog } from 'gitart-vue-dialog'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.component('GDialog', GDialog)
app.component('Swiper', Swiper)
app.component('SwiperSlide', SwiperSlide)
app.use(createPinia())
app.use(router)

app.mount('#app')
