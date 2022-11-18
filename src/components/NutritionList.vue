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

    <button>ADD</button>

  </div>

</template>

<script>

import NutritionService from "@/services/NutritionService";

export default {
  name: "NutritionList",
  data() {
    return {
      food: []
    }
  },
  methods: {
    getFood() {
      NutritionService.getMeals().then((response) => {
            this.food = response.data;
          }
      )
    }
  },
  created() {
    this.getFood();
  }
}

</script>

<style scoped>

</style>





