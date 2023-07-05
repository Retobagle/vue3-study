// 不再引入Vue构造函数，引入的是名为createApp的工厂函数,可以直接用，不用new
import { createApp } from 'vue'
import App from './App.vue'

//创建应用实例对象——app(类似于之前Vue2中的vm，但app比vm更“轻”)并且挂载
createApp(App).mount('#app')
