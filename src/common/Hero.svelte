<script>
	import TechStack from '../components/TechStack.svelte';
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
			<!--TODO: diagram-->
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
			<div class="personal-image square">
				<img 
				src="/images/PersonalSite2.jpg" 
				width="350" 
				alt="Brittny Lapierre"/>
			</div>
            <h1 class="title is-1">Hi, my name is<br><strong class="is-link">Brittny Lapierre</strong></h1>
            <p class="subtitle is-4 linkedin">
				<span>I'm a full-stack web developer </span>
				<a target="_blank"
				href="https://www.linkedin.com/in/britt-l">
					<img 
					alt="Click to go to my linked in"
					src="/images/logos/linkedin-sm.svg" 
					width="30">
				</a>
			</p>
        </div>
    </div>
</div>


<style lang="postcss">
	a {
		display: contents;
	}
	.subtitle.linkedin {
		display: flex;
		align-items: center;
		& img {
			margin-left: 10px;
		}
	}
	strong.is-link {
		color: #3275dc;
	}

	div.personal-image {
		margin-top:-25px;
		margin-bottom: 100px;

		&::before {
			content: '';
			background: #05d1b2;
			opacity: 0.3;
		}

		&.triangle::before {
			-webkit-clip-path: polygon(50% 0, 0 100%, 100% 100%);
			clip-path: polygon(50% 0, 0 100%, 100% 100%);
			width: 403px;
			height: 330px;
			position: absolute;
			z-index: -1;
			top: -63px;
			left: -46px;
			background: linear-gradient(#05d1b2 25%, #3275dc 75%);
		}
		&.circle::before {
			clip-path: circle(40%);
			width: 480px;
			height: 490px;
			position: absolute;
			z-index: -1;
			top: -130px;
			left: -110px;
			background: linear-gradient( 
				145deg
				, #05d1b2 25%, transparent 75%);
		}

		&.square::before {
			background-image: linear-gradient(to bottom right,#05d1b2, #3275dc);
			position: absolute;
			top: 40px;
			left: -71px;
			width: 360px;
			z-index: -1;
			border-radius: 20px;
			height: 360px;
		}

		& img {
			border-radius: 20px;
		}
	}
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
		top: 13vh;
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