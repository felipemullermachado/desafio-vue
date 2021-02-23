import Login from './components/Login.vue';
import Logado from './components/Logado.vue';

export const routes = [
    { path: '', name: 'login', component: Login},
    { path: '/logado', name: 'logado', component: Logado}
];

