<template>
    <div class="home">
        <Nav msg="Welcome to Your Vue.js App" />
        <ScrollVideo
            test="Hello World"
            video="RetroLoop.mp4"
        />
        <!-- <ScrollVideo msg="Hello World" video="@/assets/RetroLoop.mp4"/> -->
        <main>
            <section>
                <h1>https://www.youtube.com/watch?v=qGk4E9ss95s</h1>
            </section>
        </main>
        <footer>
            <span
                >Icons made by
                <a
                    href="https://www.flaticon.com/authors/freepik"
                    title="Freepik"
                    >Freepik</a
                >
                from
                <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com</a
                ></span
            >
        </footer>
    </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import ScrollVideo from "@/components/ScrollVideo.vue";

export default {
    name: "Home",
    components: {
        Nav,
        ScrollVideo,
    },
};
</script>

<style scoped>
main {
    margin-left: 5rem;
    padding: 1rem;
}

footer {
    margin-left: 5rem;
    padding: 1rem;
}

section {
    height: 100vh;
    color: black;
}

section h1 {
    padding-top: 300px;
    text-align: center;
    font-size: 80px;
}
</style>
