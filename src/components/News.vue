<template>
    <div id="news">
        <h3>
            我是新闻
        </h3>

        <childs></childs>
    </div>
    
    
</template>




<script>

import Childs from './child/Childs.vue'

//全局组件
//import Vue from 'vue'
//Vue.component('childs',Childs)


export default {
    name: 'news',
    data(){
        return {
          
        }
    },
    methods: {
     
       
    },
    components:{
        'childs':Childs
    }
}



</script>