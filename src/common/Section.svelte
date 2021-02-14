<script>
	export let isAfterHero = false;
	export let title = "";
	export let subtitle = "";
</script>

<section class="section is-medium" class:is-after-hero="{isAfterHero}">
    <div class="container is-max-desktop">
        {#if title.length}
            <h3 class="title is-2">{title}</h3>
        {/if}
        {#if subtitle.length}
            <p class="subtitle">
                {subtitle}
            </p>
        {/if}
		<div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</section>

<style>

</style>