import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Contact from '../views/Contact.vue'
// import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About
  // },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/Contact.vue')
  },
  {
    path: '/basic',
    name: 'Basic',
    component: () => import(/* webpackChunkName: "basic" */ '../views/Basic.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: () => import(/* webpackChunkName: "databinding" */ '../views/DataBinding.vue')
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: () => import(/* webpackChunkName: "databindinghtml" */ '../views/DataBindingHtml.vue')
  },
  {
    path: '/databindingexample',
    name: 'DataBindingExample',
    component: () => import(/* webpackChunkName: "databindingexample" */ '../views/DataBindingExample.vue')
  },
  {
    path: '/databindingattribute',
    name: 'DataBindingAttribute',
    component: () => import(/* webpackChunkName: "databindingattribute" */ '../views/DataBindingAttribute.vue')
  },
  {
    path: '/DataBindingclass',
    name: 'DataBindingClass',
    component: () => import(/* webpackChunkName: "DataBindingclass" */ '../views/DataBindingClass.vue')
  },
  {
    path: '/DataBindinginlinestyle',
    name: 'DataBindingInlineStyle',
    component: () => import(/* webpackChunkName: "DataBindinginlinestyle" */ '../views/DataBindingInlineStyle.vue')
  },
  {
    path: '/Listrendering',
    name: 'ListRendering',
    component: () => import(/* webpackChunkName: "Listrendering" */ '../views/ListRendering.vue')
  },
  {
    path: '/Renderingexample',
    name: 'RenderingExample',
    component: () => import(/* webpackChunkName: "Renderingexample" */ '../views/RenderingExample.vue')
  },
  {
    path: '/Eventexample',
    name: 'EventExample',
    component: () => import(/* webpackChunkName: "Eventexample" */ '../views/EventExample.vue')
  },
  {
    path: '/Computedexample',
    name: 'ComputedExample',
    component: () => import(/* webpackChunkName: "Computedexample" */ '../views/ComputedExample.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
