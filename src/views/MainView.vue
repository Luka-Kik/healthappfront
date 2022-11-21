<template>

  <div class="greenHeader">
    <p>Week: </p>
    <div>
      <UserList/>
      <router-view></router-view>
    </div>

  </div>

  <div>
    <ul>
      <li>
        <router-link to="/resistanceTraining">Resistance Trainings</router-link>
      </li>
      <li>
        <router-link to="/aerobics">Aerobics</router-link>
      </li>
      <li>
        <router-link to="/nutrition">Nutrition</router-link>
      </li>
    </ul>
    <router-view/>
  </div>

</template>

<script>

import UserList from "@/components/UserList";

export default {
  name: "MainView",
  components: {
    UserList
  }
}

</script>

<style scoped>

</style>