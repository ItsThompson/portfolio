<template>
    <div class="intro">
        <h1>{{ test }}</h1>
        <video :src="require('../assets/' + video)" v-bind:alt="video"></video>
        <!-- <video src="../assets/RetroLoop.mp4"></video> -->
    </div>
</template>

<script>
export default {
    name: "ScrollVideo",
    props: {
        test: String,
        video: String,
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro {
    height: 100vh;
}

.intro video {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.intro h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 80px;
    color: white;
}
</style>
