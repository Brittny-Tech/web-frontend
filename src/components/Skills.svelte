<script>
    import Progress from '../common/Progress.svelte';
	export let colourClass = "is-primary";
    export let skills = [];
    export let others = "";
</script>

{#each skills as skill}
    <h6 class="title is-6">{skill.title}</h6>
    <Progress colourClass="{colourClass}" finalValue="{skill.perc}"/>
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