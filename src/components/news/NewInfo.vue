<template>
    <div>
      <div v-if="loading"><h2>loading...</h2></div>
      <div v-if="errorMsg"><h2>{{errorMsg}}</h2></div>
      <div v-else class="item">
        <div class="item-main">
          <div class="item-info"><img :src="item.avatar_url" width="200px" height="200px"></div>
          <div class="item-info"><ul><li>name : {{item.login}}</li><li>评分 : {{item.score}}</li></ul></div>
        </div>
        <div><a class="item-git" :href="item.html_url">github地址:{{item.html_url}} </a></div>

        <comment-box :id="'synchronize11'"></comment-box>

        <br><br>
        <div class="followers">

          <div v-if="followers.length">
            <h4>Ta的订阅者</h4>
            <div v-for="(follower,index) in followers" :key="index" style="z-index: 3">
              <img :src="follower.img" width="120px"><span>{{follower.login}}</span>
            </div>
          </div>

          <div v-if="floading">
            <h4>loading...</h4>
          </div>

        </div>
      </div>

    </div>
</template>

<script>
  import axios from 'axios'
  import comment from '../subcomponent/comment'
  import { Toast } from 'mint-ui';
    export default {
      data(){
        return {item:{},loading:true,floading:true,errorMsg:null,followers:[]}
      },
      created(){
        this.getItem();
      },
      methods:{

        getItem(){
          var url = 'https://api.github.com/search/users?q='+this.$route.params.login;
          axios.get(url).then((result)=> {
            if (result){
              this.item = result.data.items[0];
              this.loading = false;
              this.getItemFollowers();
            }
          }).catch(error=>{
            this.loading=false;
            this.errorMsg = error.message;
            Toast({
              message: '加载失败',
              position: 'middle',
              duration: 1000
            });
          })
        },
        getItemFollowers(){
          var followers_url= this.item.followers_url;
          if(followers_url){
            var followersList=[];
            axios.get(followers_url).then((result)=> {
              if (result){
                let followers = result.data;
                followers.forEach(follower=>{
                  var fimg = follower.avatar_url;
                  var flogin = follower.login;
                  followersList.push({img:fimg,login:flogin});
                });
                this.followers = followersList;
                this.floading=false;
              }
            })
          }
        }
      },
      components:{
        'comment-box' : comment
      }

    }
</script>

<style>
.item{

  position: relative;
  overflow: hidden;
}
.item-info{
  float: left;
}
.item-info li{
  margin-left: -30px;
}
  .item-main{
    height: 200px;
    width: 100%;
  }
  a.item-git{
    margin-top: 15px;
    margin-left: -195px;
  }
</style>
