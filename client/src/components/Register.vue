<template>
<div>
    <h1>Register</h1>
    <input type="email" name="email" v-model="email" placeholder="email"/>
    <br>
    <input type="password" name = "password" v-model="password" placeholder="password"/>
    <br>
    <div v-html="error" />
    <br>
    <button @click="register">Register</button>
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }

}
</script>

<style scoped>
</style>
