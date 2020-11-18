<template>
    <div class="projects">
        <Nav/>
        <NavButton/>
        <main>
            <h1 class="header">Projects</h1>
            <div class="container">
                <Card
                    header="thought"
                    content="A MEAN stack for people to share their thoughts. "
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
                <Card
                    header="blue dragon app"
                    content="Working with Blue Dragon, We are building a mobile app to help at-risk women."
                    url="https://github.com/ItsThompson/Blue-Dragon-Assist-App"
                />
                <Card
                    header="portfolio website"
                    content="A portfolio made with vue.js"
                    url="https://github.com/ItsThompson/portfolio"
                />
            </div>
        </main>
    </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import NavButton from "@/components/NavButton.vue";
import Card from "@/components/Card.vue";

export default {
    name: "Home",
    components: {
        Nav,
        NavButton,
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

.header {
    text-align: center;
    padding-bottom: 3rem;
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
