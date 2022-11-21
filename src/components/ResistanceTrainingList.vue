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

    <div class="list-group">
      <label for="inputName">Name <input id="inputName" v-model="name"></label>
      <label for="inputCalories">Muscle Group <input id="inputCalories" v-model="group"></label>
      <label for="inputCalories">Repetitions <input id="inputCalories" v-model="repetitions"></label>
      <button v-if="group.length !== 0 && name !== 0 && repetitions !== 0"
              v-on:click="addTraining(name, group, repetitions)">ADD
      </button>
    </div>

    <button v-on:click="deleteTraining">DELETE</button>


  </div>

</template>

<script>

import ResistanceTrainingService from "@/services/ResistanceTrainingService";

export default {
  name: "ResistanceTrainingList",
  data() {
    return {
      anaerobics: [],
      name: "",
      group: "",
      repetitions: "",
      lastId: Number
    }
  },
  methods: {

    getAnaerobics() {
      ResistanceTrainingService.getTrainings().then((response) => {
            this.anaerobics = response.data;
          }
      )
    },

    addTraining(name, group, repetitions) {
      ResistanceTrainingService.addATraining(name, group, repetitions).then((response) => {
            console.log("STATUS CODE --> " + response.status)
            this.getAnaerobics()
          }
      ).catch((error) => {
        console.log("ERROR --> " + error)
      })
    },

    deleteTraining() {
      let index = this.lastId((this.anaerobics.at(-1)).id)

      ResistanceTrainingService.deleteTraining(index);
      this.anaerobics.pop();
    }


  },
  created() {
    this.getAnaerobics();
  }
}

</script>

<style scoped>

</style>