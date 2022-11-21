import {createRouter, createWebHistory} from 'vue-router'

import AerobicsView from "@/views/AerobicsView";
import DietView from "@/views/NutritionView";
import ResistanceTrainingView from "@/views/ResistanceTrainingView";
import UserList from "@/components/UserList";
import AddUser from "@/components/AddUser";
// import mainView from "@/views/MainView";


const routes = [
    // {
    //     path: '/',
    //     name: 'main',
    //     component: mainView
    // },

    {
        path: '/aerobics',
        name: 'aerobics',
        component: AerobicsView
    },
    {
        path: '/resistancetraining',
        name: 'resistanceTraining',
        component: ResistanceTrainingView
    },
    {
        path: '/nutrition',
        name: 'nutrition',
        component: DietView
    },
    {
        path: '/userlist',
        name: 'users',
        component: UserList
    },
    {
        path: '/adduser',
        name: 'adduser',
        component: AddUser
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
