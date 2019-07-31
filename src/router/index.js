import  Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)
export default new VueRouter({
    //所有路由
    routes:[
        {
           path:'/msite',
           component:Msite,
           meta:{
               ShowFooter:true
           }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                ShowFooter:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                ShowFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                ShowFooter:true
            }
        },
        {
            path:'/profile/login',
            component:Login
        },
        {
            path:'/',
            redirect:'/msite'
        }

    ],
    linkActiveClass:'on'
})