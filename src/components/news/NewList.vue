<template>
    <div>
      <ul class="mui-table-view mui-table-view-chevron">
        <li v-for="(item,index) in newList" :key="index" class="mui-table-view-cell mui-media">
          <router-link :to="'/home/newinfo/'+item.login" class="mui-navigate-right">
            <img class="mui-media-object mui-pull-left" :src="item.avatar_url">
            <div class="mui-media-body">
              {{item.login}}
              <p class="mui-ellipsis"><span>{{item.id}}</span> <span>点击 : {{item.score | clickCounts}} 次</span></p>
            </div>
          </router-link>
        </li>

      </ul>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
    data(){
      return {newList:[]}
    },
      created(){
        this.getNewList();
      },
      methods:{
        getNewList(){
          axios.get("https://api.github.com/search/users?q=girl").then((response)=>{
            this.newList = response.data.items;
          })
        }
      }
    }
</script>

<style>
  .mui-ellipsis {
    font-size: 12px;
    color: #007aff;
    display: flex;
    justify-content: space-between;
  }
  .mui-navigate-right:after{
    margin-top: 8px;
  }

</style>
