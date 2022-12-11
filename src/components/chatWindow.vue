<template>
  <div class="overflow-auto chat-window mb-3">
    <div class="messages " >
        <div v-for="message in formattedMsg" :key="message.id" class="mb-3">
            <span class="created_at text-muted">{{ message.created_at }}</span>
            <span class="fw-bold fs-6">{{ message.user }}</span> &nbsp;
            <span>{{ message.msg }}</span>
        </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import getMessages from '../composables/getMessages';
import { formatDistanceToNow } from 'date-fns';

export default {
    setup() {
        
        let {messages} = getMessages();

        let formattedMsg = computed( () => {
            return messages.value.map( msg => {
                let formatTime = formatDistanceToNow(msg.created_at.toDate())
                return {...msg, created_at: formatTime}
            })
        })

        return { formattedMsg }
    }
}
</script>

<style scoped>
    .chat-window {
        height: 320px;
    }
    .created_at {
        display: block;
        font-size: .8em;
    }
</style>