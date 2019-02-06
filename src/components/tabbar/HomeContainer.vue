<template>
    <div>
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in swipeData" :key="item.url">
          <a :href="item.url"><img :src="item.img" height="100%" width="100%"></a>
        </mt-swipe-item>
      </mt-swipe>
      <div class="mui-content">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu5.png">
            <div class="mui-media-body">新闻资讯</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu6.png">
            <div class="mui-media-body">图片分享</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu3.png">
            <div class="mui-media-body">商品购买</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu1.png">
            <div class="mui-media-body">留言反馈</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu2.png">
            <div class="mui-media-body">视频专区</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu4.png">
            <div class="mui-media-body">联系我们</div></a></li>
        </ul>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
    data(){
      return{swipeData:[]}
    },
      methods:{
        getSwipeImage(){
          axios.get('https://api.github.com/search/users?q=girl').then(response=>{
            var img1 = response.data.items[10].avatar_url;
            var img2 = response.data.items[11].avatar_url;
            var img3 = response.data.items[4].avatar_url;

            this.swipeData=[{url:'#',img:img1},{url:'#',img:img2},{url:'#',img:img3}]
          }).catch(error=>{
            alert(error);
          });
        }
      },

      created(){
        this.getSwipeImage()
      }
    }
</script>

<style>
.mint-swipe {
  height: 200px;
}
.mui-grid-view.mui-grid-9{
  background-color: #ffffff;
  border: none;
}
.mui-content li img{
  width: 60px;
  height: 60px;
}
</style>
