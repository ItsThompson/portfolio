<template>
    <div class="projects">
        <Nav />
        <main>
            <h1>Projects</h1>
            <div class="container">
                <Card
                    header="thought"
                    content="A MEAN stack social media for people to share their thoughts."
                    url="https://github.com/ItsThompson/thought"
                />
                <Card
                    header="timepulse"
                    content="CS50 final project for making timetables."
                    url="https://github.com/ItsThompson/timepulse"
                />
                <Card
                    header="dragon"
                    content="Custom discord bot using discord.js"
                    url="https://github.com/ItsThompson/dragon"
                />
            </div>
        </main>
    </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Card from "@/components/Card.vue";

export default {
    name: "Home",
    components: {
        Nav,
        Card,
    },
    head: {
        title: {
            inner: "Projects",
        },
    },
};
</script>

<style scoped>
main {
    margin-left: 5rem;
    padding: 1rem;
}

.projects h1 {
    text-align: center;
}

.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>
