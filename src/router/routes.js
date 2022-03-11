import Home from '../components/Home.vue';
import Order from '../components/Order.vue';
import History from '../components/History.vue';
import NotFound from '../components/NotFound.vue'

export default [
    { path: '/:pathMatch(.*)*', component: NotFound, name: 'NotFound', },
    { path: '/', component: Home, name: 'Home'},
    { path: '/order', component: Order, name: 'Order' },
    { path: '/history', component: History, name: 'History' },
]