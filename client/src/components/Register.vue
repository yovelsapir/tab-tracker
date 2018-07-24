<template>
  <div>
    <h1>Register</h1>

    <input type='email' v-model="email" name='email' placeholder='email' />

    <input type='password' v-model="password" name='email' placeholder='password' />

    <br>

    <button @click="register">Register</button>

  </div>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async register() {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>