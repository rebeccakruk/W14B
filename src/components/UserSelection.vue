<template>
    <div>
        <div class="playerOptions">
            <button @click="rockMove()"
                src="https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-16.jpg"></button>
            <button @click="paperMove()"
                src="https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-13.jpg"></button>
            <button @click="scissorsMove()"
                src="https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-15.jpg"></button>
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

</style>