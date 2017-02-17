<template>
    <div id="news" class="content">
 <!--        <div>
          <mt-button type="danger" @click="get()">danger</mt-button>
          <input type="button" value="按钮" @click="get()"> 
          <p>接口测试：  {{msg}}</p>
        </div> -->
        <div>
            <p v-show="dbNews.length<1" :class={red:a}>暂无留言</p>
            <div class="db-news page-infinite-wrapper" v-cloak>
             
                <ul
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10">
                    <li v-for="val in dbNews" class="page-infinite-listitem">
                        <div class="clearfix">
                            <div class="db-lf">
                                <h3>{{ val.title }}</h3>
                                <p>{{ val.ga_prefix }}</p>
                            </div>
                            <img class="pic" :src="val.images[0]" />
                        </div>
                        <div class="clearfix" style="margin-top:10px;">
                            <span class="fl"> {{val.id}} </span>
                            <span class="fr"> {{val.type}}</span>
                        </div>
                    </li>
                </ul>
                <p v-show="loading" class="page-infinite-loading">
                    <mt-spinner type="fading-circle"></mt-spinner>
                    加载中...
                </p>
            </div>
        </div>
    </div>   
</template>




<script>
import Vue from 'vue'
    export default{
        name:'home',
        data(){
            this.get();
            return{
                msg: 'Welcome to Your Vue.js App',
                param:{page:1, rows: 8,},
                dbNews:[
                    // {
                    //     "images": [
                    //         "http://pic3.zhimg.com/3f62a4380520fd5fffa664f101513dfe.jpg"
                    //     ],
                    //     "type": 0,
                    //     "id": 9218738,
                    //     "ga_prefix": "021622",
                    //     "title": "小事 · 岁月不饶羊"
                    // }
                ],
                
                loading: false,
                allLoaded: false,
                wrapperHeight: 0,
                a:true
            }

        },
        methods:{
            loadMore() {
                this.loading = true;
                this.param.page++;
                this.get();
                this.loading = false;
            },
            get:function(){
                var that = this;
                this.$http.post('http://123.182.227.53:7101/search/common/lighttriw/select?token=web_chenchuxin_qingliangji',that.param).then(function(res){
           
                    that.msg = res.data.stories;    

                    that.dbNews =that.dbNews||[].concat(res.data.stories);   


                  
                },function(res){
                  alert(res.status);
                });
            }
        }

    }
</script>



<style lang="less" scoped>
// 相当于load
[v-cloak]{
    display: none;
}
.clearfix{
    overflow:hidden;
}
.fl{
    float: left;
}
.fr{
    float: right;
}
.red{
    color:red;
}
 #news{
    width: 1000px;
    margin:0 auto;      
 }   
.top-col{   
    ul{
        overflow:hidden;       
    }
    li{
        float: left;
        width:48%;
        height: 40px; 
        line-height: 40px;
        text-align: center;  
        background: #f6f6f6;
        margin-bottom: 10px;     
        &:nth-child(2n+1){
            float: right;
        }
    }
}
.db-news{
    li{
        padding-bottom: 20px;
        border-bottom: 1px solid #ddd; 
        overflow:hidden;
    }
    .db-lf{
        float: left;
        width: 100%;
        box-sizing: border-box;
        padding-right: 220px;
        h3{
            font-size: 20px;
            overflow:hidden;
            white-space:nowrap;
            text-overflow:ellipsis;
        }  
    }
    .pic{
        float: left;
        margin-left: -200px;
    }

}



</style>