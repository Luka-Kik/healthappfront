<template>

  <div class="home">
    <img alt="Food" src="../assets/peka.jpg">
    <DietList/>
  </div>

</template>

<script>
import DietList from "@/components/NutritionList";

export default {
  name: 'DietView',
  components: {
    DietList
  }
}

</script>
