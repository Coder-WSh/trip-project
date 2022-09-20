import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import("@/views/home/index.vue"),
            meta: {
                hideTabbar: true
            }
        },
        {
            path: '/favor',
            component: () => import("@/views/favor/index.vue"),
            meta: {
                hideTabbar: true
            }
        },
        {
            path: '/order',
            component: () => import("@/views/order/index.vue"),
            meta: {
                hideTabbar: true
            }
        },
        {
            path: '/message',
            component: () => import("@/views/message/index.vue"),
            meta: {
                hideTabbar: true
            }
        }, {
            path: '/city',
            component: () => import("@/views/city/city_location.vue"),
        },
        { //用动态路由来复用
            path: '/homeDetail/:id',
            component: () => import("@/views/detail/homeDetail.vue"),
        },
    ]
})

export default router