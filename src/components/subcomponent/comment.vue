<template>
    <div>
      <h3>发表评论:</h3>
      <textarea placeholder="发表你的评论.." maxlength="200" v-model="content"></textarea>
      <mt-button type="primary" size="large" @click="pushComment">发表</mt-button>
      <ul>
        <li v-for="(comment,index) in comments">
          {{comment.name}} 说 ： {{comment.ccontent}}
        </li>
      </ul>
      <!--未实现，应该写个方法请求第二页(page+1)的数据，然后comments.concat(data)上去-->
      <mt-button type="danger" size="large" plain>加载更多</mt-button>

    </div>
</template>

<script>
  import { Toast } from 'mint-ui';
    export default {
      data(){
        return {content:null,comments:[]}
      },
      props:['id'],//接收NewInfo传来的值
      methods:{
        pushComment(){
          var {content} = this;
          if(content) {
            this.comments.push({name: this.id, ccontent: content})
            this.content = ""
          }else {
            Toast({
              message: '这么懒，嘛都没说也发表 !',
              position: 'middle',
              duration: 3000
            });
          }
        }
      },
      created(){
        this.comments=[{name:"lisi",ccontent:'yes,it is just what they say!!'},
          {name:"zhangsan",ccontent:'is that matter??'}
        ]
      }
    }
</script>

<style>
 textarea {
   font-size: 16px;
   height: 85px;
   margin: 0;
 }
</style>
