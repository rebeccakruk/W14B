<template>
    <nav>
        <h2>Scoreboard!</h2>
        <router-link to="/">Log in</router-link>
        <router-link to="/game-page">Play Game!</router-link>
    </nav>
</template>

<script>
export default {
    name: "ScoreboardPage"
}
</script>

<style scoped>
a {
    margin-right: 20px;
}
</style>