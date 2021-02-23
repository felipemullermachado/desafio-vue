import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import firebase from 'firebase';

Vue.use(VueResource);
Vue.use(VueRouter);

var config = {
    apiKey: "AIzaSyBkFZPVs3g-VKU49Yo9VKiJn_j6KxHfWL4",
    authDomain: "desafio-vue-auth.firebaseapp.com",
    projectId: "desafio-vue-auth",
    storageBucket: "desafio-vue-auth.appspot.com",
    messagingSenderId: "699613245677",
    appId: "1:699613245677:web:06bb7354e33f3ee0595ce4",
    measurementId: "G-X5JB982MCH"
}
firebase.initializeApp(config);
firebase.analytics();

const router = new VueRouter({ 
  routes: routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
