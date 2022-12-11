<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center mt-3">
      <div class="col-md-8 col-sm-12">
        <div class="card">
          <div class="card-body">
            <Navbar></Navbar>
            <hr>
            <ChatWindow></ChatWindow>
            <hr>
            <NewChatForm></NewChatForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatWindow from '../components/chatWindow'
import NewChatForm from '../components/NewChatForm'
import { watch } from '@vue/runtime-core'
import Navbar from '../components/Navbar'
import getUser from '../composables/getUser';
import { useRouter } from 'vue-router';

export default {
  components: {
    ChatWindow,
    NewChatForm, Navbar },

  setup() {
    let { user } = getUser();
    let router = useRouter();
    watch(user, () => {
      if(!user.value) {
        router.push({name: 'welcome'})
      }
    })
  }

}
</script>

<style>


</style>