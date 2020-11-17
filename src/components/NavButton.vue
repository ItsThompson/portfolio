<template>
    <span id="openBtn" v-on:click="open">&#9776; Menu</span>
</template>

<script>
export default {
    name: "NavButton",
    methods: {
        open: function() {
            document.getElementById("nav").style.width = "100%";
            document.getElementById("openBtn").style.display = "none";
        },
    },
};
</script>

<style scoped>
#openBtn {
    font-size: 30px;
    cursor: pointer;
    display: block;
    position: fixed;
    top: 20px;
    left: 30px;
    z-index: 99;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: var(--bg-primary);
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 4px;
}
</style>
