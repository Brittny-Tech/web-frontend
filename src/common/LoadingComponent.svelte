<script>
    import Loader from './Loader.svelte';
    export let loading = "false";
</script>

{#if !loading}
    <slot name="content"></slot>
{:else}
    <Loader bind:loading="{loading}"/>
{/if}

<style></style>