<template>
  <v-toolbar fixed class="primary" dark>
    <v-toolbar-title class="mr-4">
        <router-link flat dark to="/root" class="white--text">
            Tab Tracker
        </router-link>
    </v-toolbar-title>

    <!-- <v-toolbar-items>
      <v-btn flat dark>
          Browse
      </v-btn>
    </v-toolbar-items> -->

    <v-spacer></v-spacer>

    <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
       <v-btn router to='/login' flat dark class="transfom-none">
        Login
      </v-btn>
      
      <v-btn router to='/register' flat dark class="transfom-none">
        Sign Up
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items v-if="$store.state.isUserLoggedIn">
      <v-btn router to='/register' flat dark class="transfom-none">
        Logout
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
  export default {

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>