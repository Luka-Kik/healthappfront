<template>

  <div class="container">

    <h1>All aerobics</h1>

    <table class="table table-striped">
      <tr>
        <th>Name Of Exercise</th>
        <th>Duration</th>
        <th>Exercise done</th>
      </tr>

      <tr v-for="(element) in aerobics" v-bind:key="element.id">
        <td>{{ element.name }}</td>
        <td>{{ element.duration }}</td>
        <td>{{ element.createdAt }}</td>
      </tr>

    </table>

    <button v-on:click="addAerobics('test', 230)">ADD</button>
    <button v-on:click="deleteAerobics">DELETE</button>

  </div>

</template>

<script>

import AerobicsService from "@/services/AerobicsService";

export default {
  name: "AerobicsList",
  data() {
    return {
      aerobics: [],
      lastId: Number
    }
  },
  methods: {
    getAerobics() {
      AerobicsService.getAerobics().then((response) => {
            this.aerobics = response.data;
          }
      )
    },

    addAerobics(/*name, duration*/) {
      // name = "test"
      //duration = 150;

      AerobicsService.addAerobics().then((response) => {
            console.log("STATUS CODE --> " + response.status)
            this.getAerobics()
          }
      ).catch((error) => {
        console.log("NE DELA" + error)
      })

    },

    deleteAerobics() {
      let index

      index = this.lastId((this.aerobics.at(-1)).id)

      AerobicsService.deleteAerobics(index);
      this.aerobics.pop();
    }
  },

  created() {
    this.getAerobics()
  }

}
</script>

<style scoped>

</style>