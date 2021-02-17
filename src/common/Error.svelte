<script>
    import Notification from "./Notification.svelte";
    export let message = "";
    export let isShowing = false;
</script>
{#if isShowing}
    <Notification message="{message}" type="is-danger"/>
{/if}
<style></style>