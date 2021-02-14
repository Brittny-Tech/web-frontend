<script>
	export let colourClass = "is-primary";
    export let skills = [];
    export let others = "";
</script>

{#each skills as skill}
    <h6 class="title is-6">{skill.title}</h6>
    <progress class="progress is-large {colourClass}" value="{skill.perc}" max="100">{skill.perc}%</progress>
{/each}

<br>
<p>
    <i>
        <b>Other:</b> 
        {others}
    </i>
</p>
		

<style>

</style>