import Vue from "vue"
import VueRouter from "vue-router"
import Meta from 'vue-meta'
import entry from "../components/entry"
import home from "../components/home"
import signup from "../components/signup"
import success from "../components/success"
import check from "../components/check"
import checkinfo from "../components/checkinfo"
import change from "../components/change"
import introduction from "../components/introduction"
import detail from "../components/detail"
import nosignup from "../components/null"

Vue.use(VueRouter)
Vue.use(Meta)

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/entry',
            component:entry
        },
        {
            path:'/home',
            component:home
        },
        {
            path:'/signup',
            component:signup
        },
        {
            path:'/success',
            component:success
        },{
            path:'/check',
            component:check
        },{
            path:'/checkinfo',
            component:checkinfo
        },{
            path:'/change',
            component:change
        },{
            path:'/introduction',
            component:introduction
        },{
            name:'detail',
            path:'/detail',
            component:detail
        },{
            path:'/nosignup',
            component:nosignup
        }
    ]
})
