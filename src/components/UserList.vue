<template>

  <p>Current user: </p>
  <button v-on:click="isVisible= !isVisible">Select User</button>

  <div v-if="isVisible">
    <li>
      <ul v-for="user in userList" v-bind:key="user.id">
        {{ user.firstname }} {{ user.lastname }}
      </ul>
    </li>

    <div>
      <button v-on:click="userFormVisible = !userFormVisible">Add User</button>
      <AddUser v-if="userFormVisible"></AddUser>
    </div>
  </div>

</template>

<script>

import UserService from "@/services/UserService";
import AddUser from "@/components/AddUser";

export default {
  name: "UserList",
  components: {AddUser},
  data() {
    return {
      userList: [],
      isVisible: false,
      userFormVisible: false
    }
  },
  methods: {
    getUsers() {
      UserService.getUsers().then((response) => {
            this.userList = response.data;
          }
      )
    },
  },
  created() {
    this.getUsers();
  }
}
</script>

<style scoped>

</style>