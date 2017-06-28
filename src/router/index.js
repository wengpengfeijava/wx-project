import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import MyCourse from '@/views/course/MyCourse'
import Profile from '@/views/center/Profile'
import Category from '@/views/category/Category'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/myCourse',
      name: 'MyCourse',
      component: MyCourse
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
router.beforeEach((to, from, next) => {
  // ...
  next()
})

router.afterEach(route => {
  // ...

  console.log(route)
  console.log(window.location.href)
})
export default router
