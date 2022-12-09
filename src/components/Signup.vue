<template>
  <form @submit.prevent="submitData">
    <h2 class="mb-3 text-center fw-bold text-secondary">Sign Up</h2>
    <div class="mb-3">
        <small class="fw-bold text-secondary">NAME</small>
        <input type="text" class="form-control rounded-0 shadow-none" placeholder="Name" v-model="name">
    </div>
    <div class="mb-3">
        <small class="fw-bold text-secondary">EMAIL</small>
        <input type="email" class="form-control rounded-0 shadow-none" placeholder="Email" v-model="email">
    </div>
    <div class="mb-3">
        <small class="fw-bold text-secondary">PASSWORD</small>
        <input type="password" class="form-control rounded-0 shadow-none" placeholder="Password" v-model="password">
    </div>
    <button type="submit" class="btn btn-outline-success rounded-0">Submit</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity';
import useSignUp from '../composables/useSignUp'

export default {
    setup() {
        let name = ref("")
        let email = ref("");
        let password = ref("");

        let {error, createAccount} = useSignUp();
        let submitData = async() => {
            await createAccount(name.value, email.value, password.value);
            //  ====== > WITH RESPONSE < ======
            // let res = await createAccount(name.value, email.value, password.value);
            // console.log(res.user)
        }

        return { name, email, password, submitData, error}
    }
}
</script>

<style>

</style>