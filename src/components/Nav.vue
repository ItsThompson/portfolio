<template>
    <nav class="nav-custom" id="nav">
        <a class="closebtn" v-on:click="close"
            >&times;</a
        >
        <div class="nav-content">
            <a href="/">~/</a>
            <a href="/Projects">~/Projects</a>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Nav",
    methods: {
        close: function() {
            document.getElementById("nav").style.width = "0%";
            document.getElementById("openBtn").style.display = "block";
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-custom {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.9);
    overflow-x: hidden;
    transition: 0.5s;
}

.nav-content {
    position: relative;
    top: 25%;
    width: 100%;
    text-align: center;
    margin-top: 30px;
}

.nav-custom a {
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

.nav-custom a:hover,
.nav-custom a:focus {
    color: #f1f1f1;
}

.nav-custom .closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
}
</style>
