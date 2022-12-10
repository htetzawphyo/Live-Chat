<template>
    <nav class="navBar" v-if="user">
        <div>
            <small>{{user.displayName}}</small>
        </div>
        <div>
            <button class="btn btn-outline-danger btn-sm rounded-0" @click="logOut">logout</button>
        </div>
    </nav> 
</template>

<script>
import logout from '../composables/logout';
import getUser from '../composables/getUser';

export default {
    setup() {
        // Logout 
        let { error, logOutUser } = logout();
        let logOut = async() => {
            await logOutUser();
        }

        // Get User
        let { user } = getUser();
        return { logOut, error, user }
    }
}
</script>

<style scoped>
    .navBar {
        width: 100%;
        font-size: 1.5em;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>