<template>
  <div class="container-fluid mt-3">
    <div class="row d-flex justify-content-center">
      <div class="col-md-8 col-sm-12">
        <div class="card">
          <div class="card-body">
            <Navbar></Navbar>
            <hr>
            <NewChatForm></NewChatForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewChatForm from '../components/NewChatForm'
import { watch } from '@vue/runtime-core'
import Navbar from '../components/Navbar'
import getUser from '../composables/getUser';
import { useRouter } from 'vue-router';

export default {
  components: {
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