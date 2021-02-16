<script>
    export let heading = "";
    export let content = "";
    export let tooltip = "";
</script>


<div class="level-item has-text-centered" data-tooltip="{tooltip.length ? tooltip : false}">
    {#if heading.length}
        <p class="heading">{heading}</p>
    {/if}
    {#if content.length}
        <p class="title">{@html content}</p>
    {/if}
</div>

<style>
    .level-item {
        flex-direction: column;
        padding: 50px 0;
    }

    .level-item:hover:not([data-tooltip=false]) {
        border-radius: 5px;
        background-color: #eee;
        cursor: pointer;
    }
</style>