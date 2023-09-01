import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import PostsList from './pages/Index.vue';
import SinglePost from './components/SinglePost.vue';
// import VueRouter from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutUs,
        },
        {
            path: '/index',
            name: 'index',
            component: PostsList,
        },
        {
            path: '/single-post',
            name: 'singlepost',
            component: SinglePost,
        },
    ]
}
)

export { router };