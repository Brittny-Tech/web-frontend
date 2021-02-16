<script>
</script>

<div class="stack">
    <div class="content card">
        <p>
            <b>
                <span id="desktop-prompt">This page is powered by</span>
                <span id="mobile-prompt">This page is powered by</span>
            </b> 
            <br>
            <img class="logo-img"
            src="/images/logos/svelte.svg" 
            alt="Svelte Logo">
            <img class="logo-img is-node-logo"
            src="/images/logos/node.png" 
            alt="Node.js Logo">
            <img class="logo-img"
            src="/images/logos/rails.svg" 
            alt="Rails Logo">
            <img class="logo-img"
            src="/images/logos/perl.svg" 
            alt="Perl Logo">
        </p>
    </div>

    <a target="_blank"
    href="https://github.com/Brittny-Tech/web-frontend"
    class="box-shadow card">
        <h3 class="stack-title title is-6">This website is powered by...</h3>
        <img class="logo-img"
        src="/images/logos/svelte.svg" 
        alt="Svelte Logo">
        <span class="subtitle">Click to view on github</span>
    </a>
    <a target="_blank"
    href="https://github.com/Brittny-Tech/web-api-gateway"
    class="padding card">
        <img class="logo-img is-node-logo"
        src="/images/logos/node.png" 
        alt="Node.js Logo">
        <span class="subtitle nodejs">Click to view on github</span>
    </a>
    <a target="_blank"
    href="https://github.com/Brittny-Tech/articles-microservice"
    class="border card">
        <img class="logo-img"
        src="/images/logos/rails.svg" 
        alt="Rails Logo">
        <span class="subtitle">Click to view on github</span>
    </a>
    <a target="_blank"
    href="https://github.com/Brittny-Tech/email-microservice"
    class="background card">
        <img class="logo-img"
        src="/images/logos/perl.svg" 
        alt="Perl Logo">
        <span class="subtitle">Click to view on github</span>
    </a>
</div>

<style lang="postcss">

    @use postcss-preset-env {
        stage: 0;
    }

    .stack {
        display: grid;
        grid: [stack] / [stack];
        perspective: 5000;

        &:matches(:hover, :active) {
            &:before {
                background: lch(15 0 0);
            }
        }
    }


    .card {
        grid-area: stack;

        --z-offset: 0;
        --easeInOutCirc: cubic-bezier(0.85, 0, 0.15, 1);
        --bg-opacity: 0%;

        transition: transform 4s ease;

        inline-size: 40vmin;
        block-size: 40vmin;
        box-sizing: border-box;
        color: rgb(0, 0, 0);
        box-siing: border-box;
        background: white !important;
        position: relative;
        overflow: visible;

        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
        padding: 5vmin;
        cursor: pointer;

        @media (orientation: landscape) {
            inline-size: 40vh;
            block-size: 40vh;
        }

        @media (max-width: 540px) {
            inline-size: 60vw;
            block-size: 60vw;
        }

        &:nth-child(1) {
            z-index: 3;
        }

        &:nth-child(2) {
            z-index: 2;
        }

        &::after {
            content: "Box";
            position: absolute;
            left: -45%;
            top: 110%;
            font-size: 1.25rem;
            text-shadow: 0 1px 3px lch(0 0 0 / 75%);
            white-space: nowrap;
            padding: 1ch 2ch;
            border-radius: 4ch;
            opacity: 0;
            transition: opacity 0.5s ease 0s, transform 0.5s ease;
            transform: rotate(-45deg) rotateY(45deg) translateX(20px);
            background: lch(0 0 0 / 70%);
            color:white;
            display: none !important;

            @media (max-width: 540px) {
                left: -20%;
                top: 70%;
            }
        }

        &.content {
            z-index: 6;
            transition: border-color 4s ease, background-color 5s ease 2s,
                color 4s ease 0s, transform 4s ease 0s;
            font-size: max(2.5vmin, 0.9rem);
            line-height: 1.5;
            background: lch(100 0 0);
            //border: 5px solid #05d1b2;
            color: black;

            &::after {
                content: "Svelte Frontend";
                left: -50%;

                @media (max-width: 540px) {
                    left: -23%;
                }
            }
        }

        &.padding {
            //background: white;
            z-index: 4;
            transition-delay: 0.1s;

            &::after {
                content: "Node.js Backend";
            }
            &::before {
                content: "";
                position: absolute;
                inset: 0;
            }
        }

        &.border {
            z-index: 3;
            //background: white;
            transition-delay: 0.2s;

            &::after {
                content: "Ruby Microservice";
            }
            &::before {
                content: "";
                position: absolute;
                inset: 0;
                clip-path: polygon(
                    0% 0%,
                    0% 100%,
                    5px 100%,
                    5px 5px,
                    calc(100% - 5px) 5px,
                    calc(100% - 5px) calc(100% - 5px),
                    5px calc(100% - 5px),
                    5px 100%,
                    100% 100%,
                    100% 0%
                );
                border-radius: 5px;
                //background: linear-gradient(#05d1b2, #05d1b2);
            }
        }

        &.background {
            z-index: 2;
            transition: background-color 4s ease 0.3s, transform 4s ease 0.3s;
            box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
                0 6.7px 5.3px rgba(0, 0, 0, 0.028),
                0 12.5px 10px rgba(0, 0, 0, 0.035),
                0 22.3px 17.9px rgba(0, 0, 0, 0.042),
                0 41.8px 33.4px rgba(0, 0, 0, 0.05),
                0 100px 80px rgba(0, 0, 0, 0.07);

            &::after {
                content: "Perl Microservice";
            }
        }

        &.box-shadow {
            z-index:5;
            background: transparent;
            transition: box-shadow 4s ease 0.4s, transform 4s ease 0.4s;

            &::after {
                content: "";
            }
        }


        --bg-opacity: 5%;
        transition-duration: 2s;
        transition-timing-function: var(--easeInOutCirc);

        &:nth-child(1) {
            --z-offset: 50vh;
            transform: rotateX(45deg) rotate(45deg) translateZ(var(--z-offset))
                translateY(15vh) translateX(15vh);
        }
        &:nth-child(2) {
            --z-offset: 50vh;
            transform: rotateX(45deg) rotate(45deg) translateZ(var(--z-offset))
                translateY(20vh) translateX(15vh);
        }
        &:nth-child(3) {
            --z-offset: 35vh;
            transform: rotateX(45deg) rotate(45deg) translateZ(var(--z-offset))
                translateY(25vh) translateX(15vh);
        }
        &:nth-child(4) {
            --z-offset: 20vh;
            transform: rotateX(45deg) rotate(45deg) translateZ(var(--z-offset))
                translateY(30vh) translateX(15vh);
        }
        &:nth-child(5) {
            --z-offset: 5vh;
            transform: rotateX(45deg) rotate(45deg) translateZ(var(--z-offset))
                translateY(35vh) translateX(15vh);
        }

        &:nth-child(1)::after {
            transition-delay: 1.5s;
        }
        &:nth-child(2)::after {
            transition-delay: 1.7s;
        }
        &:nth-child(3)::after {
            transition-delay: 1.9s;
        }
        &:nth-child(4)::after {
            transition-delay: 2.1s;
        }
        &:nth-child(5)::after {
            transition-delay: 2.3s;
        }

        &::after {
            opacity: 1;
            transform: rotate(-45deg) rotateY(45deg) translateX(0px);
        }

        &.content {
            opacity: 0;
            transition: opacity 4s, transform 2s ;
            z-index:-1;
            //transition-delay: 5s;
        }

        &.padding {
            transition-delay: 0.1s;
        }

        &.border {
            transition-delay: 0.2s;
        }

        &.background {
            transition: transform 2s var(--easeInOutCirc) 0.2s;
        }

        & .subtitle {
            visibility: hidden;
            font-size: 15px;
            margin-top: 10px !important;
            margin-bottom: 0 !important;
        }
        & .subtitle.nodejs {
            margin-left: -25px !important;
        }
    }

    p:first-of-type {
        margin-block-start: 0;
    }

    @media (hover: hover) {
        #mobile-prompt {
            display: none;
        }
    }

    @media (hover: none) {
        #desktop-prompt {
            display: none;
        }
    }

    .logo-img {
        height: 40px !important;
        margin-top: 10px;
        display: block;
        margin-left: -25px !important;
    }
    .is-node-logo {
    }

    .card:hover {
        background: #eee !important;
        & .subtitle {
            visibility: visible;
        }
    }

    .stack-title {
        position: absolute;
        top: 40px;
        font-family: 'Press Start 2P', cursive;
        text-align: center;
        margin-left: -10px !important;
        max-width: 30vh;
    }
</style>
