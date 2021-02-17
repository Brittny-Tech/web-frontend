<script>
    import LoadingComponent from '../common/LoadingComponent.svelte';
	import { experienceArray } from '../stores/experiences.js';
	import { onMount } from 'svelte';
    import credentials from '../services/auth.js';

    let loading = true
    let experiences = []
    onMount(async () => {
        loading = true
		const res = await fetch(process.env.SVELTE_APP_EXPERIENCE_URL, 
            {
                method: "GET",
                headers: 
                {
                    "Authorization": credentials
                }
            });
		experiences = await res.json();
        if(Array.isArray(experiences)) {
            experiences.reverse();
            $experienceArray = [...$experienceArray, ...experiences];
        }
        loading = false
	});


</script>

<LoadingComponent bind:loading="{loading}">
    <div slot="content">
        {#each $experienceArray as experience}
            <article class="media">
                <figure class="media-left">
                    <p class="image is-64x64">
                        <img src="{experience.image_url}" alt="logo">
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <h5 class="title is-5">{experience.title}</h5> <!--small>@johnsmith</small> <small>31m</small-->
                        <p>{@html experience.body}</p>
                    </div>
                </div>
            </article>
        {/each}
    </div>
</LoadingComponent>

<style>
    .title.is-5 {
        margin-bottom: 0.6em !important;
    }
</style>