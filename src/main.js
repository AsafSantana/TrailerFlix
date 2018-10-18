import Vue from 'vue'


import VueResource from 'vue-resource'
Vue.use(VueResource);

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import App from './App.vue'
import Login from './componentes/Login'
import Cadastro from './componentes/Cadastro'





const routes = [
  { path: '/', component: Login },
  { path: '/Cadastro', component: Cadastro },
  { path: '/App', component: App },

];

const router = new VueRouter({
  routes
});



const app = new Vue({
  router
}).$mount('#app')

