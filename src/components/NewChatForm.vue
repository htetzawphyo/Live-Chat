<template>
  <textarea class="form-control rounded-0 shadow-none" placeholder="Enter Your Message" @keypress.enter="handleSubmit" v-model="message"></textarea>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '@/composables/getUser';
import { serverTimestamp } from 'firebase/firestore';
import useCollection from '@/composables/useCollection';

export default {
    setup() {
        let message = ref("");
        let { user } = getUser();
        let {error, addDocument} = useCollection('messages');

        let handleSubmit = async() => {
            let chat = {
                msg: message.value,
                user: user.value.displayName,
                created_at: serverTimestamp()
            }
            message.value = "";
            await addDocument(chat)
        }

        return { message, handleSubmit }
    }
}
</script>

<style>

</style>