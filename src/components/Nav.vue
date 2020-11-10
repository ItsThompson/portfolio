<template>
    <nav class="navbar">
        <ul class="navbar-nav">
            <li class="logo">
                <a href="#" class="nav-link">
                    <span class="link-text logo-text">Thompson</span>
                    <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 451.846 451.847"
                        style="enable-background: new 0 0 451.846 451.847"
                        xml:space="preserve"
                    >
                        <g>
                            <path
                                d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
		L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
		c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"
                            />
                        </g>
                    </svg>
                </a>
            </li>

            <li class="nav-item">
                <a href="#" class="nav-link">
                    <svg
                        id="Capa_1"
                        enable-background="new 0 0 512 512"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g>
                            <path
                                d="m256 0-256 192.266v319.734h190.667v-210h130.666v210h190.667v-319.734z"
                            />
                        </g>
                    </svg>
                    <span class="link-text">~/</span>
                </a>
            </li>

            <li class="nav-item">
                <router-link to="/" class="nav-link">
                    <svg
                        id="Capa_1"
                        enable-background="new 0 0 511.945 511.945"
                        viewBox="0 0 511.945 511.945"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g>
                            <path
                                d="m346.392 165.542c-7.239-7.24-16.886-11.225-27.164-11.217-20.825.012-38.392 16.708-38.386 38.373.003 10.279 3.99 19.928 11.228 27.164 14.979 14.979 39.325 15 54.274.051 15.003-15.004 15.025-39.394.048-54.371z"
                            />
                            <path
                                d="m511.945.089-15.003.014c-107.34.102-212.507 45.281-288.567 123.971l-149.082 149.081 179.488 179.486 149.073-149.072c37.509-36.152 68.594-80.732 89.903-128.924 40.388-91.346 33.309-165.178 34.188-174.556zm-241.051 240.951c-26.685-26.688-26.678-69.999-.049-96.625 26.694-26.696 70.008-26.764 96.723-.049 26.653 26.652 26.632 70.045-.047 96.725-26.624 26.623-69.97 26.599-96.627-.051z"
                            />
                            <path
                                d="m-4.88 446.723h110.233v29.949h-110.233z"
                                transform="matrix(.707 -.707 .707 .707 -311.748 170.742)"
                            />
                            <path
                                d="m98.599 464.477h39.489v29.948h-39.489z"
                                transform="matrix(.707 -.707 .707 .707 -304.354 224.098)"
                            />
                            <path
                                d="m12.775 378.699h39.252v29.946h-39.252z"
                                transform="matrix(.707 -.707 .707 .707 -268.884 138.222)"
                            />
                            <path
                                d="m389.634 359.466-7.662-7.662-122.016 122.017 38.035 38.036 67.604-67.604z"
                            />
                            <path
                                d="m67.61 146.251-67.61 67.611 38.115 38.118 122.019-122.02-7.662-7.662z"
                            />
                            <path
                                d="m34.858 334.036 143.038 143.039 29.315-13.65-158.704-158.701z"
                            />
                        </g>
                    </svg>
                    <span class="link-text">~/Projects</span>
                </router-link>
            </li>

            <li class="nav-item" id="themeButton">
                <router-link to="/" class="nav-link">
                    <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        style="enable-background: new 0 0 512 512"
                        xml:space="preserve"
                    >
                        <g>
                            <g>
                                <path
                                    d="M452,0H60C26.916,0,0,26.916,0,60v80h40V60c0-11.028,8.972-20,20-20h392c11.028,0,20,8.972,20,20v392
			c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20v-80H0v80c0,33.084,26.916,60,60,60h392c33.084,0,60-26.916,60-60V60
			C512,26.916,485.084,0,452,0z"
                                />
                            </g>
                        </g>
                        <g>
                            <g>
                                <polygon
                                    points="240,131.716 211.716,160 287.716,236 0,236 0,276 287.716,276 211.716,352 240,380.284 364.284,256 		"
                                />
                            </g>
                        </g>
                    </svg>
                    <span class="link-text">Log In</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Nav",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@-moz-keyframes spin {
    100% {
        -moz-transform: rotate(180deg);
    }
}
@-webkit-keyframes spin {
    100% {
        -webkit-transform: rotate(180deg);
    }
}
@keyframes spin {
    100% {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
    }
}

.navbar {
    z-index: 1;
    position: fixed;
    background-color: var(--bg-primary);
    transition: width 600ms ease;
    overflow: scroll;
}

.navbar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}

.nav-item {
    width: 100%;
}

.nav-item:last-child {
    margin-top: auto;
}

.nav-link {
    display: flex;
    align-items: center;
    height: 5rem;
    color: var(--text-primary);
    text-decoration: none;
    transition: var(--transition-speed);
}

.nav-item svg {
    width: 5rem;
    height: 5rem;
}

.nav-link:hover {
    background: var(--bg-secondary);
    color: var(--text-secondary);
}

.nav-link:hover svg {
    filter: brightness(0) invert(1);
}

.nav-link:hover .link-text {
    font-size: larger;
}

.logo:hover svg {
    -webkit-animation: spin var(--transition-speed) linear infinite;
    -moz-animation: spin var(--transition-speed) linear infinite;
    animation: spin var(--transition-speed) linear infinite;
}

.link-text {
    display: none;
    margin-left: 1rem;
}

.nav-link svg {
    width: 2rem;
    min-width: 2rem;
    margin: 0 1.5rem;
}

.logo {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
    color: var(--text-secondary);
    background: var(--bg-secondary);
    font-size: 1.5rem;
    letter-spacing: 0.3ch;
    width: 100%;
}

.logo svg {
    transform: rotate(0deg);
    filter: brightness(0) invert(1);
    transition: var(--transition-speed);
}

.logo-text {
    display: inline;
    position: absolute;
    left: -999px;
    transition: var(--transition-speed);
}

.navbar:hover .logo svg {
    transform: rotate(-180deg);
}

/* Small screens */
@media only screen and (max-width: 600px) {
    .navbar {
        bottom: 0;
        width: 100vw;
        height: 5rem;
    }

    .logo {
        display: none;
    }

    .navbar-nav {
        flex-direction: row;
    }

    .nav-link {
        justify-content: center;
    }

    main {
        margin: 0;
    }
}

/* Large screens */
@media only screen and (min-width: 600px) {
    .navbar {
        top: 0;
        width: 5rem;
        height: 100vh;
    }

    .navbar:hover {
        width: 16rem;
    }

    .navbar:hover .link-text {
        display: inline;
    }

    .navbar:hover .logo svg {
        margin-left: 11rem;
    }

    .navbar:hover .logo-text {
        left: 0px;
    }
}
</style>
