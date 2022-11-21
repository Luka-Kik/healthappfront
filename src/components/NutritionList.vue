<template>

  <div class="container">

    <h1>All Meals</h1>

    <table class="table table-striped">
      <tr>
        <th>Name Of Meal</th>
        <th>Number Of Calories</th>
        <th>Time eaten</th>
      </tr>

      <tr v-for="element in food" v-bind:key="element.id">
        <td>{{ element.mealName }}</td>
        <td>{{ element.numberOfCalories }}</td>
        <td>{{ element.createdAt }}</td>
      </tr>

    </table>

    <div>
      <label for="inputName">Name <input id="inputName" v-model="name"></label>
      <label for="inputCalories">Calories <input id="inputCalories" v-model="calories"></label>
      <button v-if="calories.length !== 0 && name !== 0"
              v-on:click="addMeal(name, calories)">ADD
      </button>
    </div>

    <button v-on:click="deleteMeal">DELETE</button>

  </div>

</template>

<script>

import NutritionService from "@/services/NutritionService";

export default {
  name: "NutritionList",
  data() {
    return {
      food: [],
      lastId: Number,
      name: "",
      calories: ""
    }
  },
  methods: {
    getFood() {
      NutritionService.getMeals().then((response) => {
            this.food = response.data;
          }
      )
    },

    addMeal(name, calories) {
      NutritionService.addMeal(name, calories).then((response) => {
            console.log("STATUS CODE --> " + response.status)
            this.getFood()
          }
      ).catch((error) => {
        console.log("ERROR --> " + error)
      })
    },

    deleteMeal() {
      let index = this.lastId((this.food.at(-1)).id)

      NutritionService.deleteMeal(index);
      this.food.pop();
    }

  },
  created() {
    this.getFood();
  }
}

</script>

<style scoped>

</style>





