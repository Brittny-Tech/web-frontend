<script>
	import Reveal from "svelte-c-reveal";
	import Hero from './common/Hero.svelte';
	import Section from './common/Section.svelte';
	import SelfSummary from './components/SelfSummary.svelte';
	import Skills from './components/Skills.svelte';
	import Tools from './components/Tools.svelte';
	import Experience from './components/Experience.svelte';
	import OtherInfoGrid from './components/OtherInfoGrid.svelte';
	import Contact from './components/Contact.svelte';
	import Footer  from './common/Footer.svelte';

	let technicalSkills = [
        {
            title: "HTML/CSS/SASS",
            perc: 95,
        },
        {
            title: "Vanilla Javascript/Node.js/Angular/Vue",
            perc: 90,
        },
        {
            title: "Python (Flask/Django)",
            perc: 80,
        },
        {
            title: "Svelte",
            perc: 50,
        },
        {
            title: "Golang",
            perc: 30,
        },
        {
            title: "C++",
            perc: 25,
        },
        {
            title: "Perl",
            perc: 15,
        },
        {
            title: "Ruby on Rails",
            perc: 10,
        },
    ];
    let otherTechnicalSkills = "Git, Docker, Python (Flask/Django), Java, C, C++, Prolog, SQL (MySQL, SQLite, DB2), MongoDB, Redis, Cloud Platforms (IBM Cloud, Heroku), Locust (Load Testing), Testing Frameworks (Mocha, Jasmine/Karma, JUnit), Bash"
	
		
	let softSkills = [ 
		{
			title: "Project/Time Management",
			perc : 95
		},
		{
			title: "UX Design (User Research, Design Thinking, Prototyping, UAT/UX Testing...)",
			perc : 90
		},
		{
			title: "Communication",
			perc : 90
		},
		{
			title: "Leadership",
			perc : 85
		}
	]
	let otherSoftSkills = "Illustration, Writing";

	let showContactSuccess = false;
</script>

<main>
	<Hero/>

	<Section 
	isAfterHero="true" 
	title="About me"
	subtitle="I am a hard-working, full-stack web developer who is passionate about design and continuous learning.">
		<div slot="content">
			<p>
				I started my career in web development in 2015 and have been learning ever since. Although my primary language is JavaScript, I can pick up new languages and frameworks with ease, thanks to my education and work experience. After leading the winning team for an IBM Developer Jumpstart Tech Challenge in 2020, I was able to speak at an IBM Developer
   Conference. I was a speaker for <a href="https://developer.ibm.com/conferences/digital-developer-conference-hybrid-cloud/" target="_blank">“Transforming an Idea into an Experience with Agile and Design Thinking”</a> and wrote <a href="https://ibm.ent.box.com/v/agile-design-thinking" target="_blank">an
   accompanying PDF.</a> 
			</p>
			<p>
				At Carleton University I earned my <a href="https://calendar.carleton.ca/undergrad/undergradprograms/computerscience/#Computer_Science__BCS_Major" target="_blank">Bachelor's degree in Computer Science.</a> The program teaches a mix of theory and application, and allowed me to expand the breadth of my learning through electives. I studied history, psychology, and the arts. I learned about Human Computer Interaction and the importance of the interface in the success of any peice of software. I've continued my studies in this area since I graduated, and I am now earning a <a href="https://learn.utoronto.ca/programs-courses/certificates/user-experience-design" target="_blank">UX Design Certificate</a> from the University of Toronto in my free time.
			</p>
		</div>
	</Section>

	<Reveal trigger="0.5" reveal="fadeInUp" hide="fadeOutDown">
		<Section>
			<div slot="content">
				<SelfSummary></SelfSummary>
			</div>
		</Section>
	</Reveal>
	
	<Reveal trigger="0.5" reveal="fadeInUp" hide="fadeOutDown">
		<Section
		title="Technical Skills"
		subtitle="Here are the technical skills I've picked up so far in my career.">
			<div slot="content">
				<Skills skills="{technicalSkills}" others="{otherTechnicalSkills}"/>
			</div>
		</Section>
	</Reveal>

	<Reveal trigger="0.5" reveal="fadeInUp" hide="fadeOutDown">
		<Section
		title="Other Skills"
		subtitle="I've also been fortunate to have been given opportunities to learn and develop other skills.">
			<div slot="content">
				<Skills colourClass="is-link" skills="{softSkills}" others="{otherSoftSkills}"/>
			</div>
		</Section>
	</Reveal>
	


	<Reveal trigger="0.5" reveal="fadeInUp" hide="fadeOutDown">
		<Section
		title="Top Tools"
		subtitle="These are the apps I can't live without; I use them most days that I'm working!">
			<div slot="content">
				<Tools/>
			</div>
		</Section>
	</Reveal>

	<Reveal trigger="0.5" reveal="fadeInUp" hide="fadeOutDown">
		<Section
		title="Experience"
		subtitle="I've been lucky to have had a job in my feild all throughout my education. My internship at IBM turned into a part time job that I had while I finished school, then into a full time job that I've had ever since! I also spent a lot of my time as a volunteer web developer around campus, in my community, for friends, and for family. ">
			<div slot="content">
				<Experience/>
			</div>
		</Section>
	</Reveal>

	<!-- TODO: my favourite moments -->
	<!--Reveal trigger="0.5" reveal="fadeInUp" hide="fadeOutDown">
		<Section
		title="Highlights"
		subtitle="A simple container to divide your pagee">
			<div slot="content">
				<OtherInfoGrid/>
			</div>
		</Section>
	</Reveal-->



	<Reveal trigger="0.5" reveal="fadeInUp" hide="fadeOutDown">
		<Section
		title="Contact"
		subtitle="If you would like to work with me or just want to get to know me better, feel free to reach out to me.">
			<div slot="content">
				<Contact bind:showSuccess="{showContactSuccess}"/>
			</div>
		</Section>
	</Reveal>

	<div class="modal" style="display: {showContactSuccess ? 'flex' : 'none'} !important;">
		<div class="modal-background"></div>
		<div class="modal-card">
		<header class="modal-card-head">
			<p class="modal-card-title">Thank you! I'll be in touch</p>
			<button class="delete" aria-label="close"></button>
		</header>
		<section class="modal-card-body">
			Your form was sent to my email, I should reply back to you in at most two days.
		</section>
		<footer class="modal-card-foot">
			<button class="button is-success" on:click="{() => showContactSuccess = false}">OK</button>
		</footer>
		</div>
	</div>


	<Footer/>
	
</main>

<style></style>