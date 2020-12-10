import { createApp, defineComponent  } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import http from "./request/http";

declare module "@vue/runtime-core" { 
    interface ComponentCustomProperties { 
      $http: any;
    }
  }
const instance = createApp(App);

instance.config.globalProperties.$http = http;
instance.use(store)
instance.use(router)
instance.mount('#app')


