import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/home',
        name: 'home',
        meta: {
            title: 'vue组件库',
            requiresAuth: false,
            isSaveScroll: false,
        },
        component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
    }, {
        path: '/upload',
        name: 'upload',
        meta: {
            title: 'vue组件库',
            requiresAuth: false,
            isSaveScroll: false,
        },
        component: () => import(/* webpackChunkName: "upload" */ '../views/upload/index.vue'),
    },
    {
        path: '/',
        redirect: '/home',
        meta: {}, // TODO: haha
    },]
})