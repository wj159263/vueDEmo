import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '../components/tabbar/HomeContainer'
import MemberContainer from '../components/tabbar/MemberContainer'
import ShopcarContainer from '../components/tabbar/ShopcarContainer'
import SearchContainer from '../components/tabbar/SearchContainer'
import NewList from '../components/news/NewList'
import NewInfo from '../components/news/NewInfo'
import PhotosList from '../components/photos/PhotosList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: HomeContainer
    },
    {
      path: '/member',
      component: MemberContainer
    },
    {
      path: '/shopcar',
      component: ShopcarContainer
    },
    {
      path: '/search',
      component: SearchContainer
    },
    {
      path:'/home/newlist',
      component:NewList
    },
    {
      path:'/home/newinfo/:login',
      component:NewInfo
    },
    {
      path:"/home/photoslist",
      component:PhotosList
    }
  ],
  linkActiveClass:'mui-active' //覆盖路由选中模块的css
})
