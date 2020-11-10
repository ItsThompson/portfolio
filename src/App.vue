<template>
    <div id="app">
        <router-view />
    </div>
</template>


<script>
export default {
    head: {
        link: [
            {
                rel:"stylesheet",
                href:"https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap"
            },
        ],
    },
};
</script>
<style>
:root {
    font-size: 16px;
    font-family: "Ubuntu Mono", monospace;
    /* Material Theme Palenight High Contrast */
    --text-primary: #7f84a1;
    --text-secondary: #5d91a6;
    --bg-primary: #292d3e;
    --bg-secondary: #1b1e2b;
    --transition-speed: 600ms;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    color: black;
    background-color: #fff;
    margin: 0;
    padding: 0;
}

body::-webkit-scrollbar {
    width: 0.5rem;
}

body::-webkit-scrollbar-track {
    background-color: #292d3e;
}

body::-webkit-scrollbar-thumb {
    background-color: #80cbc4;
}
</style>