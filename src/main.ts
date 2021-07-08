import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import initMakeUp from '@/plugins/makeUp'
import '@/styles/index.less'
createApp(App).use(initMakeUp).use(store).use(router).mount('#app')
