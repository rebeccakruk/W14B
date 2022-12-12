<template>
    <div>
        <h2>User Login</h2>
        <div class="user">
            <label for="uname">Username </label>
            <input type="text" placeholder="Enter Username" name="uname" required>

            <label for="psw">Password </label>
            <input type="password" placeholder="Enter Password" name="psw" required>
            <button @click="getUser" type="submit">Login</button>

        </div>
        <div class="errorMessage"></div>
        <div>
            <img src="">
        </div>
        <div>
            <img class="computer" src="">
        </div>

    </div>
</template>

<script>
import cookies from 'vue-cookies';
import axios from "axios";
import router from '@/router'
export default {
    name: "LoginPage",
    methods: {
        getUser() {
            axios.request({
                url: "https://reqres.in/api/login",
                method: "POST",
                data: {
                    email: "eve.holt@reqres.in",
                    password: "cityslicka"
                },
            }).then((response) => {
                console.log(response.data.token);
                cookies.set(`sessionToken`, response.data.token);
                router.push(`/Game`);
            }).catch((error) => {
                console.log(error);
                document.querySelector(`.errorMessage`).insertAdjacentHTML(`beforebegin`, `<p>Something went wrong, please try again`);
            })
        }
    },
}

</script>

<style scoped>

</style>