<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="callLogin" class="login-form">
      <input type="text" v-model="credentials.username" placeholder="username"> <br>
      <input type="password" v-model="credentials.password" placeholder="passoword"> <br>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      credentials: {}
    }
  },
  methods: {
    async callLogin () {
      try {
        await this.$store.dispatch('postLogin', this.credentials)
        this.$router.push('/movies')
      } catch (e) {
        console.log('deu erro', e)
      }
    }
  },
  created () {
    this.$store.commit('SET_LOGOUT')
  }
}
</script>

<style lang="scss">
.login {
  display: flex;
  justify-content: space-between;

  .login-form {
    width: 300px;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8)
  }
}
</style>
