<template>

  <div class="container">

    <h1>All aerobics</h1>

    <table class="table table-striped">

      <tr>
        <th>Name Of Exercise</th>
        <th>Duration</th>
        <th>Exercise done</th>
      </tr>

      <tr v-for="element in aerobics" v-bind:key="element.id">
        <td>{{ element.name }}</td>
        <td>{{ element.duration }}</td>
        <td>{{ element.createdAt }}</td>
      </tr>

    </table>

  </div>

</template>

<script>

import AerobicsService from "@/services/AerobicsService";

export default {
  name: "AerobicsList",
  data() {
    return {
      aerobics: []
    }
  },
  methods: {
    getAerobics() {
      AerobicsService.getAerobics().then((response) => {
            this.aerobics = response.data;
          }
      )
    }
  },
  created() {
    this.getAerobics();
  }
}
</script>

<style scoped>

</style>