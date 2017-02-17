
import Home from './components/Home.vue'
import News from './components/News.vue'
import Game from './components/Game.vue'
// import Aaa from './components/child/Aaa.vue'

export default{
    routes:[
        {path:'/home', component:Home},
        {
            path:'/news', 
            component:News,
            // children:[
            //     {
            //         path:'/child',
            //         components:{Aaa}
            //     }
            // ]
        },
        {path:'/game', component:Game},
        {path:'*', redirect:'/home'}
    ]
}













