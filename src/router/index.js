import Vue from "vue"
import VueRouter from "vue-router"
import Meta from 'vue-meta'
import entry from "../components/entry"
import home from "../components/home"
import signup from "../components/signup"
import success from "../components/success"
import check from "../components/check"
import checkinfo from "../components/checkinfo"
import introduction from "../components/introduction"
import detail from "../components/detail"
import nosignup from "../components/null"
import backstage from "../components/backstage"
import backstageinfo from "../components/backstageinfo"
import bbt from "../components/bbt.vue"

Vue.use(VueRouter)
Vue.use(Meta)

export default new VueRouter({
    routes: [{
            path: '/entry',
            component: entry
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/signup',
            component: signup
        },
        {
            name: 'success',
            path: '/success',
            component: success
        }, {
            path: '/check',
            component: check
        }, {
            name: 'checkinfo',
            path: '/checkinfo',
            component: checkinfo
        }, {
            path: '/introduction',
            component: introduction
        }, {
            name: 'detail',
            path: '/detail',
            component: detail
        }, {
            path: '/nosignup',
            component: nosignup
        },
        {
            path: '/backstage',
            component: backstage
        },{
            name:'backstageinfo',
            path:'/backstageinfo',
            component:backstageinfo
        },{
            path:"/bbt",
            component:bbt
        }
    ]
})