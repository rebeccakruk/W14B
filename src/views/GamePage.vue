<template>
    <div>
        <h2>Let's Play!</h2>
        <h3>Select an image and press 'Go'!</h3>
        <div class="userScore">
            <h3>YOUR SCORE</h3>
            <h2>{{ userScore }}</h2>
        </div>
        <div class="computerScore">
            <h3>COMPUTER SCORE</h3>
            <h2>{{ computerScore }}</h2>
        </div>

        <h1 class="winner" v-if="winner">{{ winner }}</h1>
        <div class="user">
            <UserSelection v-on:selection="playerMove($event)" v-bind:move="userSelection" />
            <h2>Your selection is</h2>
            <h1>{{ userSelection }}</h1>
            <div class="computer">
                <ComputerSelection v-on:selection="computerMove($event)" v-bind:move="computerRandom" />
            </div>

        </div>
    </div>
</template>

<script>

import UserSelection from '@/components/UserSelection.vue'
import ComputerSelection from '@/components/ComputerSelection.vue'
export default {
    name: "GamePage",
    components: {
        UserSelection,
        ComputerSelection
    },
    data() {
        return {
            userSelection: "",
            computerRandom: "",
            userScore: 0,
            computerScore: 0,
            winner: "",
        };
    },
    methods: {
        computerMove(move) {
            this.computerRandom = move;

        },
        playerMove(move) {
            this.userSelection = move;

        },
        gameRules() {
            let { userSelection, computerRandom } = this;

            if (userSelection === computerRandom) {
                this.winner = "Tie game!"
            } else if (
                (userSelection === "scissors" && computerRandom === " paper") ||
                (userSelection === "paper" && computerRandom === "rock") ||
                (userSelection === "rock" && computerRandom === "scissors")
            ) {
                this.userScore++;
                this.winner = "You won!";
            } else if (computerRandom == "") {
                alert("Please press 'Go' to keep playing")
            } else {
                this.computerRandom++;
                this.winner = "You lost :( Please try again.)"
            }
        },
        mounted() {
            this.$root.$on(`selection`, this.computerMove);
            this.$root.$on('selection', this.playerMove);
        },
    },
}
</script>

<style scoped>
.activeChoice {
    border: black 3px solid;
}
</style>