<script>
	import Hero from './common/Hero.svelte'
	import Section from './common/Section.svelte'
	import SelfSummary from './components/SelfSummary.svelte'
	import Skills from './components/Skills.svelte'
	import Tools from './components/Tools.svelte'
	import Experience from './components/Experience.svelte'
	import Contact from './components/Contact.svelte'
	import Footer  from './common/Footer.svelte'

	let technicalSkills = [
        {
            title: "HTML/CSS/SASS",
            perc: 95,
        },
        {
            title: "Vanilla Javascript/Node.js/Angular/Vue)",
            perc: 90,
        },
        /*{
            title: "Python (Flask/Django)",
            perc: 80,
        },*/
        {
            title: "Svelte",
            perc: 50,
        },
        {
            title: "Golang",
            perc: 30,
        },
        /*{
            title: "C++",
            perc: 30,
        },*/
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
</script>

<main>
	<Hero/>

	<Section 
	isAfterHero="true" 
	title="About me"
	subtitle="a little bit of bree">
		<p slot="content">
			hi
		</p>
	</Section>

	<Section>
		<div slot="content">
			<SelfSummary></SelfSummary>
		</div>
	</Section>
	
	<Section
	title="Technical Skills"
	subtitle="A simple container to divide your pagee">
		<div slot="content">
			<Skills skills="{technicalSkills}" others="{otherTechnicalSkills}"/>
		</div>
	</Section>

	<Section
	title="Soft Skills"
	subtitle="A simple container to divide your pagee">
		<div slot="content">
			<Skills colourClass="is-link" skills="{softSkills}" others="{otherSoftSkills}"/>
		</div>
	</Section>
	


	<Section
	title="Top Tools"
	subtitle="A simple container to divide your pagee">
		<div slot="content">
			<Tools/>
		</div>
	</Section>

	<Section
	title="Experience"
	subtitle="A simple container to divide your pagee">
		<div slot="content">
			<Experience/>
		</div>
	</Section>


	<Section
	title="Contact"
	subtitle="A simple container to divide your pagee">
		<div slot="content">
			<Contact/>
		</div>
	</Section>

	<Footer/>
	
</main>

<style></style>