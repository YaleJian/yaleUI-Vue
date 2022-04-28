import {createRouter, createWebHistory} from 'vue-router'
import Test from '../views/Test.vue'
import Home from "../views/home.vue";
// 2. 定义一些路由
const routes = [
    {path: '/', component: Home},
    {path: '/test', component: Test},
]

// 3. 创建路由实例并传递 `routes` 配置
export const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, //
})