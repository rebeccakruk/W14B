<template>
    <div>
        <h2>Computer Selection</h2>
        <div class="computer">
            <button @click="randomSelection()">Go!</button>
        </div>
    </div>
</template>

<script>
import { ChildProcess } from 'child_process';

export default {
    name: "ComputerSelection",
    data() {
        return {
            moves: [
                {
                    id: 1,
                    title: "rock",
                    img: "https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-16.jpg"
                },
                {
                    id: 2,
                    title: "paper",
                    img: "https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-13.jpg"
                },
                {
                    id: 3,
                    title: "scissors",
                    img: "https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-15.jpg"
                },
            ],
        }
    },
    methods: {
        randomSelection() {
            this.moves = Math.floor(Math.random() * this.moves.length);
            this.move = moves[moves];
            this.$emit(`selection`, this.move);
        },
    }
}


</script>

<style scoped>

</style>