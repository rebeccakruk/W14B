<template>
    <div>
        <div class="playerOptions">
            <img @click="rockMove()" class="activeChoice"
                src="https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-16.jpg" />
            <img @click="paperMove()" class="activeChoice"
                src="https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-13.jpg" />
            <img @click="scissorsMove()" class="activeChoice"
                src="https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-15.jpg" />

        </div>
    </div>
</template>

<script>
export default {
    name: "UserSelection",
    methods: {
        rockMove() {
            this.$emit('selection', 'rock')
        },
        paperMove() {
            this.$emit(`selection`, 'paper')
        },
        scissorsMove() {
            this.$emit(`selection`, `scissors`)
        }
    },
}
</script>

<style scoped>
img {
    height: 20vh;
}
</style>