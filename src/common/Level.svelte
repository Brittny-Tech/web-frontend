<script>
	import LevelItem from './LevelItem.svelte';
    
    export let levelItems = [];
    // heading, content
</script>

<nav class="level">
    {#each levelItems as levelItem}
        <LevelItem heading="{levelItem.heading}" content="{levelItem.content}" tooltip="{levelItem.tooltip}"/>
    {/each}
</nav>

<style>

</style>