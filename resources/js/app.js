import './bootstrap'
import { createApp } from 'vue'

import 'es6-promise/auto'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Index from './Index.vue'
import router from './router.js'
import { createAuth } from "vue-auth3"

import driverAuthBasic from "vue-auth3/drivers/auth/basic"
import driverHttpAxios from "vue-auth3/drivers/http/axios"

const auth = createAuth({
  plugins: {
    router,
  },
  drivers: {
    auth: driverAuthBasic,
    http: driverHttpAxios,
  },
})

// axios.defaults.baseURL = `${process.env.APP_URL}/api/`

const app = createApp(Index);

app.use(router).use(auth).use(VueAxios, axios).mount('#app')




