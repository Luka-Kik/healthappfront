<template>
  <div class="container" id="app">

    <div class="generalData">
      <p>User: </p>
      <p>Week: </p>
      <p>Weight:</p>
    </div>

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

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul {
  padding: 30px;
}

li {
  font-weight: bold;
  color: #2c3e50;
}

li.router-link-exact-active {
  color: #42b983;
}

.generalData {
  padding: 1rem;
  background-color: #33e08f;
  border: 2px solid white;
}
</style>
