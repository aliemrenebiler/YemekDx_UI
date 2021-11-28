import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Welcome from '../components/pages/welcome/Welcome.vue'
import Support from '../components/pages/welcome/Support.vue'

import RegisterType from '../components/pages/register/RegType.vue'
import UserReg from '../components/pages/register/UserReg.vue'
import UserRegFail from '../components/pages/register/UserRegFail.vue'
import UserRegSuccess from '../components/pages/register/UserRegSuccess.vue'

import LoginType from '../components/pages/login/LoginType.vue'
import UserLogin from '../components/pages/login/UserLogin.vue'
import RestrLogin from '../components/pages/login/RestrLogin.vue'
import LoginFail from '../components/pages/login/LoginFail.vue'
import ForgotPassword from '../components/pages/login/ForgotPassword.vue'
import TokenSent from '../components/pages/login/TokenSent.vue'

import Home from '../components/pages/home/Home.vue'
import Categories from '../components/pages/restaurants/Categories.vue'
import AllRestrs from '../components/pages/restaurants/AllRestrs.vue'
import Cart from '../components/pages/cart/Cart.vue'
import Reviews from '../components/pages/reviews/Reviews.vue'
import OneReview from '../components/pages/reviews/OneReview.vue'

const router = new VueRouter ({
    mode: 'history',
    routes: [
      // Entrance Pages
      { path: '', component: Welcome },
      { path: '/welcome', component: Welcome },
      { path: '/support', component: Support },

      { path: '/register-type', component: RegisterType },
      { path: '/user-register', component: UserReg },
      { path: '/ur-fail', component: UserRegFail},
      { path: '/ur-success', component: UserRegSuccess},

      { path: '/login-type', component: LoginType },
      { path: '/user-login', component: UserLogin },
      { path: '/restaurant-login', component: RestrLogin },
      { path: '/login-fail', component: LoginFail },
      { path: '/forgot-password', component: ForgotPassword },
      { path: '/token-sent', component: TokenSent },

      { path: '/home', component: Home },
      { path: '/restaurants', component: Categories },
      { path: '/all-restaurants', component: AllRestrs },
      { path: '/cart', component: Cart },
      { path: '/reviews', component: Reviews },
      { path: '/one-review', component: OneReview },
    ]
})

export default router