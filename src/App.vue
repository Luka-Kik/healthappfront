<template>

  <div class="container" id="app">
    <MainView/>
  </div>

</template>

<script>
import MainView from "@/views/MainView";

export default {
  components: {MainView}
}
</script>

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

.greenHeader {
  padding: 1rem;
  background-color: #33e08f;
  border: 2px solid white;
}
</style>
