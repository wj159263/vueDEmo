<template>
  <div id="app" class="app-container">
    <!--顶部区域-->
    <mt-header fixed title="固定在顶部"></mt-header>
    <!--中间的路由视图-->
   <transition><router-view></router-view></transition>


    <!--顶部功能组-->
    <nav class="mui-bar mui-bar-tab">

      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>

      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>

      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>

      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">查找</span>
      </router-link>

    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .app-container {
    padding-top: 40px;
    padding-bottom: 50px;
    overflow-x: hidden; /*页面切换*/
    background-color: white;
  }
  .v-enter{ /*页面切换*/
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to{ /*页面切换*/
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }
  .v-enter-active,.v-leave-active{ /*页面切换*/
    transition: all 0.5s ease;

  }
  /*.mui-active {
    background-color: rgba(0,0,0,0.6);
  }*/
</style>
