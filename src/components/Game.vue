<template>
    <div id="game">
        
        <my-component></my-component>
        <div id="example-2">
           <button @click="a = !a">Toggle show</button>
          <transition name="bounce">
            <p v-if="a">Look at me!</p>
          </transition>
        </div>    
        <div>
          <button @click="b = !b">
            Toggle render
          </button>
          <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
            <p v-if="b">hello</p>
        </transition>
</div>
    </div>   
</template>




<script>

    import Vue from 'vue'
    Vue.component('my-component', {
      template: '<div>A custom component!</div>'
    })
    export default{
        name:'game',
        data(){
            return{
                show:true,
                a:true,
                b:true,
                news:[
                    'LOL01',
                    'LOL02',
                    'LOL03',
                    'LOL04'
                ]
            }
        },
        methods:{

        }
    }
</script>


<style>

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
#example-1 .slide-fade-enter-active {
  transition: all .3s ease;
}
#example-1 .slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
#example-1 .slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}



#example-2 .bounce-enter-active {
  animation: bounce-in .5s;
}
#example-2 .bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>