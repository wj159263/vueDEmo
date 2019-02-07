// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import { Header,Swipe, SwipeItem, Button, Toast, Navbar, TabItem} from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../static/mui/css/mui.min.css'
import '../static/mui/css/icons-extra.css'

Vue.config.productionTip = false

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
import { TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

//一般是时间过滤器，这个测试用。NewList用到
Vue.filter("clickCounts",(counts)=>{
  return (counts+"").split('.')[0];
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
