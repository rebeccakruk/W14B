<template>
    <div>
        <div class="computer">
            <button @click="randomSelection()">Go!</button>
            <h2>Computer Selection</h2>
            <h3>{{ picker.title }}</h3>
        </div>
        <img :src="picker.img" />
    </div>
</template>

<script>

// import cookies from 'vue-cookies'
export default {
    name: "ComputerSelection",
    data() {
        return {
            compMove: [
                {

                    title: "rock",
                    img: "https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-16.jpg"
                },
                {

                    title: "paper",
                    img: "https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-13.jpg"
                },
                {

                    title: "scissors",
                    img: "https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-15.jpg"
                },
            ],
            picker: ""
        }
    },
    methods: {
        randomSelection() {
            let picker = Math.floor(Math.random() * this.compMove.length);
            this.picker = this.compMove[picker];
            let selection = this.picker.title;
            console.log(selection);
            this.$emit(`selection`, this.picker.title)
        },
    }
}


</script>

<style scoped>
img {
    height: 20vh;
}
</style>