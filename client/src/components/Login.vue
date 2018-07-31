<template>
  <v-layout class="login-layout">
    <v-flex xs4 offset-xs4>
        <panel title="Login">
          <v-flex xs12 md12 class="mx-auto">
            <v-text-field name='email' v-model='email' type='email' placeholder="Email"></v-text-field>
          </v-flex>

          <br>
          <v-flex xs12 md12 class="mx-auto">
            <v-text-field name='password' v-model='password' type='password' placeholder="Password"></v-text-field>
          </v-flex>

          <br>

          <div class="error" v-html='error' />

          <br>
          <v-btn dark @click="login" color="primary" class="mx-auto d-block">Login</v-btn>
        </panel>
    </v-flex>
  </v-layout>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  import Panel from '@/components/Panel'
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async login() {
        try {
          this.error = ""
          const response = await AuthenticationService.login({
            email: this.email,
            password: this.password
          });

          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
        } catch (err) {
          this.error = err.response.data.error
        }
      }
    },
    components: {
      Panel
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login-layout {
    margin-top: 120px;
  }
</style>