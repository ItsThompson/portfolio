// eslint-disable-next-line no-unused-vars
<template>
    <div class="intro">
        <h1>{{ msg }}</h1>
        <video :src="require('../assets/' + video)" v-bind:alt="video"></video>
        <!-- <video src="../assets/RetroLoop.mp4"></video> -->
    </div>
</template>

<script>
export default {
    name: "ScrollVideo",
    props: {
        msg: String,
        video: String,
        script: {
            type: String,
            default: "ScrollVideo.js",
        },
    },
    mounted() {
        // let ScrollMagic = document.createElement("script");
        // ScrollMagic.setAttribute(
        //     "src",
        //     "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"
        // );
        // document.body.appendChild(ScrollMagic);
        // let GSAP = document.createElement("script");
        // GSAP.setAttribute(
        //     "src",
        //     // "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.js"
        //     "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"
        // );
        // document.body.appendChild(GSAP);
        // let TweenMax = document.createElement("script");
        // TweenMax.setAttribute(
        //     "src",
        //     "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"
        // );
        // document.body.appendChild(TweenMax);

        /* eslint-disable no-unused-vars */
        /* eslint-disable no-undef */
        const intro = document.querySelector(".intro");
        const video = intro.querySelector("video");
        const text = intro.querySelector("h1");
        //END SECTION
        const section = document.querySelector("section");
        const end = section.querySelector("h1");

        //SCROLLMAGIC
        const controller = new ScrollMagic.Controller();

        //Scenes
        // .addIndicators()
        let scene = new ScrollMagic.Scene({
            duration: 5000,
            triggerElement: intro,
            triggerHook: 0,
        })
            .setPin(intro)
            .addTo(controller);

        //Text Animation
        const textAnim = TweenMax.fromTo(
            text,
            3,
            { opacity: 1 },
            { opacity: 0 }
        );

        let scene2 = new ScrollMagic.Scene({
            duration: 1000,
            triggerElement: intro,
            triggerHook: 0,
        })
            .setTween(textAnim)
            .addTo(controller);

        //Video Animation
        let accelamount = 0.1;
        let scrollpos = 0;
        let delay = 0;

        scene.on("update", (e) => {
            scrollpos = e.scrollPos / 1000;
        });

        setInterval(() => {
            delay += (scrollpos - delay) * accelamount;
            // console.log(scrollpos, delay);

            video.currentTime = delay;
        }, 33.3);
    },
};
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
