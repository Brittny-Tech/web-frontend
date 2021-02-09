<script>
	//export let name;
</script>

<main>
	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item" href="https://bulma.io">
				<img
					src="https://bulma.io/images/bulma-logo.png"
					width="112"
					height="28"
					alt=""
				/>
			</a>
		</div>
	</nav>
	
	<section class="hero">
		<div class="hero-body">
			<div class="container is-max-desktop">
				<h1 class="title is-1">Hero title</h1>
				<p class="subtitle">Hero subtitle</p>
	
				<div class="columns">
					<div class="column">
					</div>
					<div class="column">
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
	
	<section class="section is-medium">
		<nav class="level">
			<div class="level-item has-text-centered">
				<div>
					<p class="heading">Years Experience</p>
					<p class="title">5</p>
	
					<article class="message">
						<div class="message-header">
						<p>Hello World</p>
						<button class="delete" aria-label="delete"></button>
						</div>
						<div class="message-body">
						Lorem ipsum dolor sit amet, consectetur
						</div>
					</article>
				</div>
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
			<!--div class="level-item has-text-centered">
				<div>
					<p class="heading">Likes</p>
					<p class="title">789</p>
				</div>
			</div-->
		</nav>
	</section>
	
	<section class="section is-medium">
		<div class="container is-max-desktop">
			<h3 class="title is-2">Medium section</h3>
			<p class="subtitle">
				A simple container to divide your page into <strong>sections</strong
				>, like the one you're currently reading.
			</p>
			<div>
				<h6 class="title is-6">Title 6</h6>
				<progress class="progress is-large is-primary" value="80" max="100"
					>80%</progress
				>
				<h6 class="title is-6">Title 6</h6>
				<progress class="progress is-large is-link" value="80" max="100"
					>80%</progress
				>
				<h6 class="title is-6">Title 6</h6>
				<progress class="progress is-large is-info" value="80" max="100"
					>80%</progress
				>
				<h6 class="title is-6">Title 6</h6>
				<progress class="progress is-large is-success" value="80" max="100"
					>80%</progress
				>
				<h6 class="title is-6">Title 6</h6>
				<progress class="progress is-large is-warning" value="80" max="100"
					>80%</progress
				>
				<h6 class="title is-6">Title 6</h6>
				<progress class="progress is-large is-danger" value="80" max="100"
					>80%</progress
				>
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
							<article class="tile is-child notification is-primary">
								<p class="title">Vertical...</p>
								<p class="subtitle">Top tile</p>
							</article>
							<article class="tile is-child notification is-warning">
								<p class="title">...tiles</p>
								<p class="subtitle">Bottom tile</p>
							</article>
						</div>
						<div class="tile is-parent">
							<article class="tile is-child notification is-info">
								<p class="title">Middle tile</p>
								<p class="subtitle">With an image</p>
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
						<article class="tile is-child notification is-danger">
							<p class="title">Wide tile</p>
							<p class="subtitle">Aligned with the right tile</p>
							<div class="content"></div>
						</article>
					</div>
				</div>
				<div class="tile is-parent">
					<article class="tile is-child notification is-success">
						<div class="content">
							<p class="title">Tall tile</p>
							<p class="subtitle">With even more content</p>
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
				<strong>Bulma</strong> by
				<a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
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
	.level-item:hover {
		padding: 50px 0;
		border-radius: 5px;
		background-color: #eee;
		cursor: pointer;
	}
	.message {
		margin-top:20px;
	}
</style>