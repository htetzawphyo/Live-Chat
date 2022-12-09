<template>
    <form @submit.prevent="login">
      <h2 class="mb-3 text-center fw-bold text-secondary">Login</h2>
      <div class="mb-3">
          <small class="fw-bold text-secondary">EMAIL</small>
          <input type="email" class="form-control rounded-0 shadow-none" placeholder="Email" v-model="email">
      </div>
      <div class="mb-3">
          <small class="fw-bold text-secondary">PASSWORD</small>
          <input type="password" class="form-control rounded-0 shadow-none" placeholder="Password" v-model="password">
      </div>
      <div class="alert alert-danger rounded-0" role="alert" v-if="error">
        {{error}}
      </div>
      <button type="submit" class="btn btn-outline-success rounded-0">Login</button>
    </form>
  </template>
  
  <script>
import { ref } from '@vue/reactivity';
import useSignin from '../composables/useSignin';
  
  export default {
      setup() {
          let email = ref("");
          let password = ref("");
  
          let { error, loginAcc } = useSignin();
          let login = async() => {
            let res = await loginAcc(email.value, password.value);
            if(res){
                console.log(res.user);
            }
          }
  
          return {email, password, login, error}
      }
  }
  </script>
  
  <style>
  
  </style>