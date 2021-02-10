<script>
	//export let name;
	import ExplodingLayers from './components/ExplodingLayers.svelte'
</script>

<main>
	<!--nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item" href="https://bulma.io">
				<img
					src="https://bulma.io/images/bulma-logo.png"
					width="112"
					height="28"
					alt=""
				/>
				Brittny.Tech
			</a>
		</div>
	</nav-->


	<section class="hero is-fullheight is-hidden-mobile">
		<div class="hero-body">
			<div class="container is-max-desktop">
	
				<div class="columns">
					<div class="column is-three-quarters">
					</div>
					<div class="column">
						<ExplodingLayers/>
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


	<section class="hero is-fullheight is-hidden-desktop">
		<div class="hero-body">
			<div class="container is-max-desktop">
	
				<div class="columns">
					<div class="column">
					</div>
				</div>

			</div>
		</div>
	</section>
	

	<div class="is-absolute">
		<div class="columns">
			<div class="column is-three-quarters">
				<h1 class="title is-1">Hi, my name's Brittny</h1>
				<p class="subtitle">I'm a full-stack web developer.</p>
			</div>
		</div>
	</div>




	<section class="section is-medium is-after-hero">
		<div class="container is-max-desktop">
			<h3 class="title is-2">Medium section</h3>
			<p class="subtitle">
				A simple container to divide your page into <strong>sections</strong
				>, like the one you're currently reading.
			</p>
			<div class="content">
				Hi
			</div>
		</div>
	</section>
	
	<section class="section is-medium">
		<div class="container is-max-desktop">
			<nav class="level">
				<div class="level-item has-text-centered">
					<div>
						<p class="heading">Years Experience</p>
						<p class="title">5</p>
					</div>

					<!--article class="message">
						<div class="message-header">
						<p>5 Years of Experience</p>
						<button class="delete" aria-label="delete"></button>
						</div>
						<div class="message-body">
						My career as a web developer started in August 2015, and I haven't looked back since! I've learned a lot over the years, mostly learning how to learn. 
						</div>
					</article-->
				</div>
				<div class="level-item has-text-centered">
					<div>
						<p class="heading">University Degree</p>
						<p class="title">1</p>
					</div>
				</div>
				<div class="level-item has-text-centered">
					<div>
						<p class="heading">Professional Certificate</p>
						<p class="title">1</p>
					</div>
				</div>
			</nav>
		</div>
	</section>
	
	<section class="section is-medium">
		<div class="container is-max-desktop">
			<h3 class="title is-2">Technical Skills</h3>
			<p class="subtitle">
				A simple container to divide your page into <strong>sections</strong
				>, like the one you're currently reading.
			</p>
			<div>
				<h6 class="title is-6">HTML/CSS/SASS</h6>
				<progress class="progress is-large is-primary" value="95" max="100"
					>95%</progress
				>
				<h6 class="title is-6">Javascript (Vanilla/Node.js/Angular/Vue)</h6>
				<progress class="progress is-large is-primary" value="90" max="100"
					>90%</progress
				>
				<h6 class="title is-6">Python (Flask/Django)</h6>
				<progress class="progress is-large is-primary" value="80" max="100"
					>80%</progress
				>
				<h6 class="title is-6">Svelte</h6>
				<progress class="progress is-large is-primary" value="35" max="100"
					>35%</progress
				>
				<h6 class="title is-6">Golang</h6>
				<progress class="progress is-large is-primary" value="25" max="100"
					>25%</progress
				>
				<h6 class="title is-6">Perl</h6>
				<progress class="progress is-large is-primary" value="15" max="100"
					>15%</progress
				>
				<h6 class="title is-6">Ruby (Rails)</h6>
				<progress class="progress is-large is-primary" value="10" max="100"
					>10%</progress
				>
			</div>
			<div class="content">
				<br>
				<p><i><b>Other:</b> Docker, Java, C, C++, Prolog, SQL (MySQL, DB2), MongoDB, Redis, Cloud Platforms (IBM Cloud, Heroku), Locust (Load Testing), Testing Frameworks (Mocha, Karma, JUnit), Git, Bash</i></p>
			</div>
		</div>
	</section>

	<section class="section is-medium">
		<div class="container is-max-desktop">
			<h3 class="title is-2">Soft Skills</h3>
			<p class="subtitle">
				A simple container to divide your page into <strong>sections</strong
				>, like the one you're currently reading.
			</p>
			<div>
				<h6 class="title is-6">Project/Time Management</h6>
				<progress class="progress is-large is-link" value="95" max="100"
					>95%</progress
				>
				<h6 class="title is-6">UX Design (User Research, Design Thinking, Prototyping, UAT/UX Testing...)</h6>
				<progress class="progress is-large is-link" value="90" max="100"
					>90%</progress
				>
				<h6 class="title is-6">Communication</h6>
				<progress class="progress is-large is-link" value="90" max="100"
					>90%</progress
				>
				<h6 class="title is-6">Leadership</h6>
				<progress class="progress is-large is-link is-light" value="80" max="100"
					>85%</progress
				>
			</div>
			<div class="content">
				<br>
				<p><i><b>Other:</b> Illustration, Writing. I frequently use Visual Studio, Github, Figma (or Sketch), Adobe Illustrator, and Trello.</i></p>
			</div>
		</div>
	</section>
	
	<section class="section is-medium">
		<div class="container is-max-desktop">
			<h3 class="title is-2">Medium section</h3>
			<p class="subtitle">
				A simple container to divide your page into <strong>sections</strong
				>, like the one you're currently reading.
			</p>
	
			<div class="tile is-ancestor">
				<div class="tile is-vertical is-8">
					<div class="tile">
						<div class="tile is-parent is-vertical">
							<article class="tile is-child notification">
								<p class="title is-4">Vertical...</p>
								<p class="subtitle is-6">Top tile</p>
							</article>
							<article class="tile is-child notification">
								<p class="title is-4">...tiles</p>
								<p class="subtitle is-6">Bottom tile</p>
							</article>
						</div>
						<div class="tile is-parent">
							<article class="tile is-child notification">
								<p class="title is-4">Middle tile</p>
								<p class="subtitle is-6">With an image</p>
								<figure class="image is-4by3">
									<img
										src="https://bulma.io/images/placeholders/640x480.png"
										alt=""
									/>
								</figure>
							</article>
						</div>
					</div>
					<div class="tile is-parent">
						<article class="tile is-child notification">
							<p class="title is-4">Wide tile</p>
							<p class="subtitle is-6">Aligned with the right tile</p>
							<div class="content"></div>
						</article>
					</div>
				</div>
				<div class="tile is-parent">
					<article class="tile is-child notification">
						<div class="content">
							<p class="title is-4">Tall tile</p>
							<p class="subtitle is-6">With even more content</p>
							<div class="content"></div>
						</div>
					</article>
				</div>
			</div>
		</div>
	</section>

	
	<section class="section is-medium">
		<div class="container is-max-desktop">
			<h3 class="title is-2">Medium section</h3>
			<p class="subtitle">
				A simple container to divide your page into <strong>sections</strong
				>, like the one you're currently reading.
			</p>
			<form>
				<div class="field">
					<div class="control form-group">
						<input class="input form-control" type="text" placeholder="Your Name" />
					</div>
				</div>
	
				<div class="field">
					<div class="control form-group has-icons-left has-icons-right">
						<input
							class="input form-control is-danger"
							type="email"
							placeholder="hello@hello.com"
						/>
						<span class="icon is-small is-left">
							<i class="fas fa-envelope" />
						</span>
						<span class="icon is-small is-right">
							<i class="fas fa-exclamation-triangle" />
						</span>
					</div>
					<p class="help is-danger">This email is invalid</p>
				</div>
	
				<div class="field">
					<div class="control form-group has-icons-left has-icons-right">
						<input
							class="input form-control is-success"
							type="text"
							placeholder="Subject"
							value="bulma"
						/>
						<span class="icon is-small is-left">
							<i class="fas fa-user" />
						</span>
						<span class="icon is-small is-right">
							<i class="fas fa-check" />
						</span>
					</div>
				</div>
	
				<div class="field">
					<div class="control form-group">
						<textarea class="form-control textarea" placeholder="Message..." />
					</div>
				</div>
	
				<div class="field is-grouped">
					<div class="control form-group">
						<button class="button is-link">Submit</button>
					</div>
					<div class="control form-group">
						<button class="button is-link is-light">Cancel</button>
					</div>
				</div>
			</form>
		</div>
	</section>
	
	<footer class="footer">
		<div class="content has-text-centered">
			<p>
				<strong>Brittny.Tech</strong> by
				<a href="https://jgthms.com">Brittny Lapierre</a>. The source code is
				licensed
				<a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
				The website content is licensed
				<a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
					>CC BY NC SA 4.0</a
				>.
			</p>
		</div>
	</footer>
</main>

<style>
	.hero {
		/*background: url('/images/bg.jpg');
		background-size: cover;*/
		background: linear-gradient(
			324.7deg, #05d1b2 50%, white 0%);
		-webkit-mask-image: -webkit-gradient(linear, left top, left bottom, 
    	from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
	}
	.level-item:hover {
		padding: 50px 0;
		border-radius: 5px;
		background-color: #eee;
		cursor: pointer;
	}
	.message {
		margin-top:20px;
		width: 300px !important;
	}
	.is-absolute {
		position: absolute;
		top: 30vh;
		left: 20vw;
	}

	
</style>