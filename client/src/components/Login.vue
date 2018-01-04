<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title='Login'>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
            ></v-text-field>
          <br>
        <div id="error" v-html="error">
        </div>
        <v-btn class="cyan" dark @click="Login" type="submit" name="button">Login</v-btn>
      </div>
      </panel>
    </v-flex>
  </v-layout column>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  components: {
    Panel
  },
  methods: {
    async Login () {
      try {
        console.log('sent the info', this.email, this.password)
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
#error{
  color:red;
}
</style>
