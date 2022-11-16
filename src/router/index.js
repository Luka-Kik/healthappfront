import {createRouter, createWebHistory} from 'vue-router'

import AerobicsView from "@/views/AerobicsView";
import DietView from "@/views/NutritionView";
import ResistanceTrainingView from "@/views/ResistanceTrainingView";

const routes = [
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
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
