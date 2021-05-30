import { createRouter, createWebHistory } from 'vue-router'
import Persons from '../views/Persons'
import ClaimsView from '../views/ClaimsView'
import NewClaimView from '../views/NewClaimView'
import EditClaimView from '../views/EditClaimView'

const routes = [

  {
    path: '/claims',
    name: 'ClaimsView',
    component: ClaimsView,
  },
  {
    path: '/claims/new',
    name: 'NewClaimView',
    component: NewClaimView,
  },
  {
    path: '/claims/:id',
    name: 'EditClaimView',
    component: EditClaimView,
    props: (route) => {
        const id = Number.parseInt(route.params.id);
        return { id }
    },
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
