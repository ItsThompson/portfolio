<template>
    <a class="card-custom" :href="url" target="_blank">
        <h3 class="header">{{ header }}</h3>
        <v-clamp autoresize :max-lines="2" class="small">
            {{ content }}
        </v-clamp>
        <div class="go-corner">
            <div class="go-arrow">
                →
            </div>
        </div>
    </a>
</template>

<script>
import VClamp from 'vue-clamp';

export default {
    name: "Card",
    components: {
        VClamp
    },
    props: {
        header: String,
        content: String,
        url: String,
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
    color: var(--text-secondary);
    font-size: 1.5rem;
}

.card-custom {
    transition: all 0.3s ease-out;
    width: 16rem;
    height: 10rem;
}

.small {
    color: var(--text-primary);
    font-size: 1rem;
}

.go-corner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 32px;
    height: 32px;
    overflow: hidden;
    top: 0;
    right: 0;
    background-color: var(--bg-primary);
    border-radius: 0 4px 0 32px;
}
.go-arrow {
    margin-top: -4px;
    margin-right: -4px;
    color: white;
}

.card-custom {
    display: block;
    position: relative;
    max-width: 262px;
    background-color: var(--bg-secondary);
    border-radius: 4px;
    padding: 32px 24px;
    margin: 12px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
}
.card-custom:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: var(--bg-primary);
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.25s ease-out;
}
.card-custom:hover:before {
    transform: scale(21);
}

.card-custom:hover p {
    transition: all 0.3s ease-out;
    color: rgba(255, 255, 255, 0.8);
}

.card-custom:hover h3 {
    transition: all 0.3s ease-out;
    color: rgba(255, 255, 255, 1);
}
</style>
