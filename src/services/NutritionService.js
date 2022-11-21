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

    addMeal(name, calories) {
        return axios.post(NUTRITION_URL, {
                "mealName": name,
                "numberOfCalories": calories
            },
            {
                auth: {
                    username: 'lukamail',
                    password: 'luka'
                }
            });
    }

    deleteMeal(index) {
        axios.delete(NUTRITION_URL + "/" + index, {
                auth: {
                    username: 'lukamail',
                    password: 'luka'
                }
            }
        )
            .then((response) => {
                console.log("SVE OK -->" + response)
            }).catch((error) => {
            console.log("NE DELA -->" + error);
        })
    }


}

export default new NutritionService();