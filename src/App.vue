<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/home">首页</router-link> 
      <router-link to="/news">主题日报</router-link> 
      <router-link to="/Game">关于</router-link>
      <div class="nav-rail">
        <span class="nav-moving"></span>
      </div>
    </nav>
    <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
      <router-view></router-view> 
    </transition>  
  </div>




</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
      /*get:function(){
          var that = this;
          this.$http.get('http://192.168.1.142:8090/Cadre/Index').then(function(res){
            //alert(res.data.Name);
            that.msg = res.data.ID + '-' +res.data.Name;            
              
          },function(res){
              alert(res.status);
          });
      }*/
      
    }
}



</script>

<style  lang="less">
html{
      font-size: 62.5%;
}
html, body, ul, li, ol, dl, dd, dt, p, h1, h2, h3, h4, h5, h6, form, fieldset, legend,img,input，nav,section,article,footer,dd,dl,dt,a{ margin:0; padding:0; box-sizing:border-box;}
body{color:#000;background-color:#fff;-webkit-user-select:none;-webkit-text-size-adjust:none;width: 100%;height: 100%;}
input,textarea{ border:0 none; outline-style:none; }
button{outline:0}
h1, h2, h3, h4, h5, h6{ font-size:1.6rem; font-weight:normal; }
i,em{ font-style:normal; }
fieldset,img{ border:0 none; }
img{ display:block; max-width: 100%; }
ul, ol { list-style:none; }
select, input, textarea { font-size:1.4rem; margin:0; }
textarea { resize:none; }
input[type=button], input[type=submit], input[type=file], button {  -webkit-appearance: none; }

.clearfix:after { content:"."; display:block; height:0; visibility:hidden; clear:both; }
.clearfix { zoom:1; }


a {text-decoration:none; }
a:hover{
   
    text-decoration:none;
}
a:focus{
    outline:none;
    text-decoration:none;
} 

.content{
  padding-top: 7rem;
}

.nav{
  position: fixed;
  height: 6rem;
  width: 100%;
  background-color: #252e39;
  top: 0;
  left: 0;
  z-index: 2;
  font-size: 1.5rem;
  
  a{
    color: #fff;
    display: inline-block;
    height: 6rem;
    line-height: 6rem;
    text-align: center;
    min-width: 8rem;
    cursor: pointer;
  }   
}
.nav-rail{
  position: absolute;
  height: 4px;
  width: 100%;
  bottom: 1rem;
  background-color: #182128;
  .nav-moving{
    position: absolute;
    background-color: #4cfffe;
    height: 8px;
    width: 8px;
    border-radius: 8px;
    -webkit-transition-property: width,-webkit-transform;
    transition-property: width,-webkit-transform;
    transition-property: transform,width;
    transition-property: transform,width,-webkit-transform;
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    margin-top: -1px;
    &:hover{
      width: 50px; 
    }
  }

}

</style>
