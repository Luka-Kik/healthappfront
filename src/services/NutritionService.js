import axios from 'axios'

const NUTRITION_URL = "http://localhost:8080/meals"

class NutritionService {
    getMeals() {
        return axios.get(NUTRITION_URL, {
            auth: {
                username: 'lukamail',
                password: 'luka'
            }
        });
    }
}

export default new NutritionService();