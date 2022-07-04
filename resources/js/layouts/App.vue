<template>

    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="text-white" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
                <router-link class="text-white ml-2" to="/register">Register</router-link>
            </li>
            <li class="nav-item">
                <router-link class="text-white ml-2" :to="{ name: 'Dashboard' }">Dashboard</router-link>
            </li>
        </ul>


    </nav>
    <router-view></router-view>

</template>

<script>
export default {

}
</script>

<style>
</style>