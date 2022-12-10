<template>
  <div class="container">
    <div class="row">
      <div class="d-flex justify-content-center my-5">
        <div class="card w-75 rounded-4">
          <div class="card-body">
            <div v-if="showLoginForm">
              <Signup @enterChatroom="enterChatroom"></Signup>
              <div class="text-center mt-3">
                <p>Already an account? 
                <span class="text-decoration-underline text-primary" @click="(showLoginForm=!showLoginForm)">Login</span>
                </p>
              </div>              
            </div>
            <div v-else>
              <Login @enterChatroom="enterChatroom"></Login>
              <div class="text-center mt-3">
                <p>Not a member? 
                <span class="text-decoration-underline text-primary" @click="(showLoginForm=!showLoginForm)">Create Account</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Login from '../components/Login'
import Signup from '../components/Signup'
import { useRouter } from 'vue-router'

export default {
  components: {
    Login, Signup 
  },

  setup() {
    let showLoginForm = ref(true);
    let router = useRouter();

    let enterChatroom = () => {
      router.push({name: 'chatroom'})
    }

    return { showLoginForm, enterChatroom }; 
  }

}
</script>

<style scoped>
  span {
    cursor: pointer;
  }
</style>