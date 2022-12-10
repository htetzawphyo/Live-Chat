<template>
    <nav class="navBar">
        <!-- <router-link :to="{name:'home'}" class="navItem">Home</router-link>
        <router-link :to="{name:'create'}" class="navItem">Create</router-link> -->
        <div>
            <small>DISPLAY NAME</small>
        </div>
        <div>
            <button class="btn btn-outline-danger btn-sm rounded-0" @click="logOut">logout</button>
        </div>
    </nav> 
</template>

<script>
import logout from '../composables/logout'

export default {
    setup() {
        let { error, logOutUser } = logout();
        let logOut = async() => {
            await logOutUser();
        }
        return { logOut, error }
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
    /* .navItem {
        color: rgb(65, 61, 61);
        text-decoration: none;
        margin-left: 20px;
        
    }
    .navItem:hover {
        color: indigo;
    }
    .router-link-active {
        border-bottom: 2px solid indigo;
    } */
</style>