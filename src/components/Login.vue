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
      <button type="submit" class="btn btn-outline-success rounded-0">Login</button>
    </form>
  </template>
  
  <script>
  import { ref } from '@vue/reactivity';
  
  export default {
      setup() {
          let email = ref("");
          let password = ref("");
  
          let login = () => {
              console.log(email.value, password.value)
          }
  
          return {email, password, login}
      }
  }
  </script>
  
  <style>
  
  </style>