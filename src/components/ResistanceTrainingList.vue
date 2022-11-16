<template>

  <div class="container">

    <h1>Weights exercises</h1>

    <table class="table table-striped">
      <tr>
        <th>Name Of Exercise</th>
        <th>Group</th>
        <th>Number Of Repetitions</th>
        <th>Date Of Training</th>
      </tr>

      <tr v-for="element in anaerobics" v-bind:key="element.id">
        <td>{{ element.name }}</td>
        <td>{{ element.muscleGroup }}</td>
        <td>{{ element.numberOfRepetitions }}</td>
        <td>{{ element.createdAt }}</td>
      </tr>

    </table>
  </div>

</template>

<script>

import ResistanceTrainingService from "@/services/ResistanceTrainingService";

export default {
  name: "ResistanceTrainingList",
  data() {
    return {
      anaerobics: []
    }
  },
  methods: {
    getAnaerobics() {
      ResistanceTrainingService.getAnaerobics().then((response) => {
            this.anaerobics = response.data;
          }
      )
    }
  },
  created() {
    this.getAnaerobics();
  }
}

</script>

<style scoped>

</style>