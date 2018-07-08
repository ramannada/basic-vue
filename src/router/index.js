import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Customers from '@/components/customer/view/Customers.vue'
import Customer from '@/components/customer/form/Customer.vue'
import Detail from '@/components/customer/detail/Detail.vue'
import Edit from '@/components/customer/edit/Edit.vue'
import About from '@/components/about/About.vue'

Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/form',
      name: 'Customer',
      component: Customer
    },
    {
      path: '/customer/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/customer/:id/update',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
