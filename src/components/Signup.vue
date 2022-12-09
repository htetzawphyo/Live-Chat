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
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/config';

export default {
    setup() {
        let name = ref("")
        let email = ref("");
        let password = ref("");
        let error = ref(null);

        let submitData = async() => {
            try{
                let res = await createUserWithEmailAndPassword(auth, email.value, password.value )
                if(!res){
                    throw new Error("Could not create account!");
                }
                await updateProfile(res.user, { displayName: name.value })
            } catch(err) {
                error.value = err.message;
            }
        }

        return { name, email, password, submitData, error}
    }
}
</script>

<style>

</style>