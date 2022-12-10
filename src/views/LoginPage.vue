<template>
    <div>
        <h2>User Login</h2>
        <div class="container">
            <label for="uname">Username </label>
            <input type="text" placeholder="Enter Username" name="uname" required>

            <label for="psw">Password </label>
            <input type="password" placeholder="Enter Password" name="psw" required>

            <button type="submit">Login</button>

        </div>
    </div>
</template>

<script>
// import cookies from 'vue-cookies';
// import AxiosComp from '@/components/AxiosComp.vue'
export default {
    name: "LoginPage"
}
</script>

<style scoped>

</style>