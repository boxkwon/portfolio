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
  {
    path: '/Watchexample',
    name: 'WatchExample',
    component: () => import(/* webpackChunkName: "Watchexample" */ '../views/WatchExample.vue')
  },
  {
    path: '/Searchexample',
    name: 'SearchExample',
    component: () => import(/* webpackChunkName: "Searchexample" */ '../views/SearchExample.vue')
  },
  {
    path: '/Saveexample',
    name: 'SaveExample',
    component: () => import(/* webpackChunkName: "Saveexample" */ '../views/SaveExample.vue')
  },
  {
    path: '/Serverdata',
    name: 'ServerData',
    component: () => import(/* webpackChunkName: "Serverdata" */ '../views/ServerData.vue')
  },
  {
    path: '/Importexample',
    name: 'ImportExample',
    component: () => import(/* webpackChunkName: "Importexample" */ '../views/ImportExample.vue')
  },
  {
    path: '/Parentcomponentexample',
    name: 'ParentComponentExample',
    component: () => import(/* webpackChunkName: "Parentcomponentexample" */ '../views/ParentComponentExample.vue')
  },
  {
    path: '/Parentcomponentexample2',
    name: 'ParentComponentExample2',
    component: () => import(/* webpackChunkName: "Parentcomponentexample2" */ '../views/ParentComponentExample2.vue')
  },
  {
    path: '/Parentcomponentexample3',
    name: 'ParentComponentExample3',
    component: () => import(/* webpackChunkName: "Parentcomponentexample3" */ '../views/ParentComponentExample3.vue')
  },
  {
    path: '/Parentcomponentexample4',
    name: 'ParentComponentExample4',
    component: () => import(/* webpackChunkName: "Parentcomponentexample4" */ '../views/ParentComponentExample4.vue')
  },
  {
    path: '/Parentcomponentexample5',
    name: 'ParentComponentExample5',
    component: () => import(/* webpackChunkName: "Parentcomponentexample5" */ '../views/ParentComponentExample5.vue')
  },
  {
    path: '/Parentcomponentexample6',
    name: 'ParentComponentExample6',
    component: () => import(/* webpackChunkName: "Parentcomponentexample6" */ '../views/ParentComponentExample6.vue')
  },
  {
    path: '/slot',
    name: 'SlotUseModalLayout',
    component: () => import(/* webpackChunkName: "slot" */ '../views/SlotUseModalLayout.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
