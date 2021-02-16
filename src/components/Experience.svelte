<script>
	import { experienceArray } from '../stores/experiences.js';
	import { onMount } from 'svelte';
    import credentials from '../services/auth.js';

    let experiences = []
    onMount(async () => {
		const res = await fetch(process.env.SVELTE_APP_EXPERIENCE_URL, 
            {
                method: "GET",
                headers: 
                {
                    "Authorization": credentials
                }
            });
		experiences = await res.json();
		$experienceArray = [...$experienceArray, ...experiences];
	});


</script>

{#each $experienceArray as experience}
    <article class="media">
        <figure class="media-left">
            <p class="image is-64x64">
                <img src="{experience.image_url}" alt="logo">
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
                <h5 class="title is-4">{experience.title}</h5> <!--small>@johnsmith</small> <small>31m</small-->
                <p>{@html experience.body}</p>
            </div>
        </div>
    </article>
{/each}

<style></style>