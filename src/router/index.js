import Vue from 'vue';
import VueRouter from 'vue-router';
import Catalog from '../components/pages/Catalog.vue';
import Delivery from '../components/pages/Delivery.vue';
import Payment from '../components/pages/Payment.vue';
import Contacts from '../components/pages/Contacts.vue';
import AboutUs from '../components/pages/AboutUs.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Catalog',
        component: Catalog,
    },
    {
        path: '/delivery',
        name: 'Delivery',
        component: Delivery,
    },{
        path: '/payment',
        name: 'Payment',
        component: Payment,
    },{
        path: '/contacts',
        name: 'Contacts',
        component: Contacts,
    }, {
        path: '/about-us',
        name: 'AboutUs',
        component: AboutUs,
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;