<template>
  <div class="container">
    <h1>All aerobics</h1>
    <table class="table table-striped">
      <tr>
        <th>Name Of Exercise</th>
        <th>Number Of Repetitions</th>
      </tr>
      <tr v-for="element in anaerobics" v-bind:key="element.id">
        <td>{{ element.name }}</td>
        <td>{{ element.numberOfRepetitions }}</td>
      </tr>
    </table>
  </div>

</template>

<script>
import AnaerobicsService from "@/services/AnaerobicsService";

export default {
  name: "AnaerobicsList",
  data() {
    return {
      anaerobics: []
    }
  },
  methods: {
    getAnaerobics() {
      AnaerobicsService.getAnaerobics().then((response) => {
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