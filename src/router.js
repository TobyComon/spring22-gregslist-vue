import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  // NOTE make sure to set up your routing and make sure the page is created when you use router-links, or else things will break badly
  {
    path: '/cars',
    name: 'CarsPage',
    component: loadPage('CarsPage')
  },
  // NOTE the :id is going to make it so that the url as the id of the car we are going to so that we can access it when we need it
  {
    path: '/cars/:id',
    name: 'CarDetailsPage',
    component: loadPage('CarDetailsPage')
  },
  {
    path: '/houses',
    name: 'HousesPage',
    component: loadPage('HousesPage')
  },
  {
    path: '/houses/:id',
    name: 'HouseDetailsPage',
    component: loadPage('HouseDetailsPage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
