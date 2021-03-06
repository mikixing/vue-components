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
    }, {
        path: '/test',
        name: 'test',
        meta: {
            title: 'vue组件库',
            requiresAuth: false,
            isSaveScroll: false,
        },
        component: () => import(/* webpackChunkName: "test" */ '../views/test/index.vue'),
    },
    {
        path: '/matte',
        name: 'matte',
        meta: {
            title: 'vue组件库',
            requiresAuth: false,
            isSaveScroll: false,
        },
        component: () => import(/* webpackChunkName: "matte" */ '../views/matte/index.vue'),
    },
    {
        path: '/message',
        name: 'message',
        meta: {
            title: 'vue组件库',
            requiresAuth: false,
            isSaveScroll: false,
        },
        component: () => import(/* webpackChunkName: "message" */ '../views/message/index.vue'),
    },
    {
        path: '/messageBox',
        name: 'messageBox',
        meta: {
            title: 'vue组件库',
            requiresAuth: false,
            isSaveScroll: false,
        },
        component: () => import(/* webpackChunkName: "messageBox" */ '../views/messageBox/index.vue'),
    },
    {
        path: '/loading',
        name: 'loading',
        meta: {
            title: 'vue组件库',
            requiresAuth: false,
            isSaveScroll: false,
        },
        component: () => import(/* webpackChunkName: "loading" */ '../views/loading/index.vue'),
    },
    {
        path: '/calendar',
        name: 'calendar',
        meta: {
            title: 'vue组件库',
            requiresAuth: false,
            isSaveScroll: false,
        },
        component: () => import(/* webpackChunkName: "calendar" */ '../views/calendar/index.vue'),
    },
    {
        path: '/tree',
        name: 'tree',
        meta: {
            title: 'vue组件库',
            requiresAuth: false,
            isSaveScroll: false,
        },
        component: () => import(/* webpackChunkName: "tree" */ '../views/tree/index.vue'),
    },
    {
        path: '/area',
        name: 'area',
        meta: {
            title: 'vue组件库',
            requiresAuth: false,
            isSaveScroll: false,
        },
        component: () => import(/* webpackChunkName: "area" */ '../views/area/index.vue'),
    },
    {
        path: '/container',
        name: 'container',
        meta: {
            title: 'vue组件库',
            requiresAuth: false,
            isSaveScroll: false,
        },
        component: () => import(/* webpackChunkName: "container" */ '../views/container/index.vue'),
    },
    {
        path: '/',
        redirect: '/home',
        meta: {}, // TODO: haha
    },]
})