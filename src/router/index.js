import Vue from 'vue'
import VueRouter from 'vue-router'
import CartPage from '../views/CartPage.vue'
import ProductDetailPage from '../views/ProductDetailPage.vue'
import ProductsPage from '../views/ProductsPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'
import Login from '../views/Login.vue' 
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage,
  }, {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetailPage,
  }, {
      path: '/cart',
      name: 'Cart',
      component: CartPage,
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
},{
  path: '/register',
  name: 'Register',
  component: Register,
},{
      path: '/',
      redirect: '/products', 
      // this  code will redirect user to localhost:8081 and will not display any errors

  }, {
    path: '*',
    component: NotFoundPage,

  }
] 

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
