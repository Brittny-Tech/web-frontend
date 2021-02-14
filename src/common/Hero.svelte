<script>
	import TechStack from '../components/TechStack.svelte'
</script>

<!--Title Background-->
<section class="hero is-fullheight is-hidden-mobile mask">
    <div class="hero-body">
        <div class="container is-max-desktop">

            <div class="columns">
                <div class="column is-three-quarters">
                </div>
                <div class="column">
                    <TechStack/>
                </div>
            </div>

            <div class="modal">
                <div class="modal-background"></div>
                <div class="modal-content"></div>
                <button class="modal-close is-large" aria-label="close" />
            </div>
        </div>
    </div>
</section>
<section class="hero is-fullheight is-hidden-desktop mask">
    <div class="hero-body">
    </div>
</section>

<!--Title Text-->
<div class="is-absolute">
    <div class="columns">
        <div class="column">
            <h1 class="title is-1">Hi! My name is Brittny</h1>
            <p class="subtitle is-4">I'm a full-stack web developer.</p>
        </div>
    </div>
</div>


<style>
.hero {
		/*background: url('/images/bg.jpg');
		background-size: cover;*/
		background: linear-gradient(
			324.7deg, #05d1b2 50%, white 0%);
	}
	.mask {
		-webkit-mask-image: -webkit-gradient(linear, left top, left bottom, 
    	from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
	}
	.is-absolute {
		position: absolute;
		top: 30vh;
		left: 10vw;
		opacity: 0.0;
		animation: fadeIn ease 3s forwards;
		-webkit-animation: fadeIn ease 3s forwards;
	}

	.is-absolute h1 {
		font-size: 3.5rem !important;
	}

	@keyframes fadeIn {
		0% {opacity:0;}
		100% {opacity:1;}
	}

	@-moz-keyframes fadeIn {
		0% {opacity:0;}
		100% {opacity:1;}
	}

	@-webkit-keyframes fadeIn {
		0% {opacity:0;}
		100% {opacity:1;}
	}

	@-o-keyframes fadeIn {
		0% {opacity:0;}
		100% {opacity:1;}
	}

	@-ms-keyframes fadeIn {
		0% {opacity:0;}
		100% {opacity:1;}
	}
</style>