<template>
  <!-- <input type="text" class="form-control rounded-0 shadow-none" @keypress.enter="handleSubmit" v-model="message"> -->
  <textarea class="form-control rounded-0 shadow-none" @keypress.enter="handleSubmit" v-model="message"></textarea>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '@/composables/getUser';
import { serverTimestamp } from 'firebase/firestore';

export default {
    setup() {
        let message = ref("");
        let { user } = getUser();
        let handleSubmit = () => {
            let chat = {
                msg: message.value,
                user: user.value.displayName,
                created_at: serverTimestamp()
            }
            console.log(chat);
            message.value = "";
        }

        return { message, handleSubmit }
    }
}
</script>

<style>

</style>