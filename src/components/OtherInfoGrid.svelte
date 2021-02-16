<script>
</script>
<div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
        <div class="tile">
            <div class="tile is-parent is-vertical">
                <article class="tile is-child notification">
                    <p class="title is-4">Vertical...</p>
                    <p class="subtitle is-6">Top tile</p>
                </article>
                <article class="tile is-child notification">
                    <p class="title is-4">...tiles</p>
                    <p class="subtitle is-6">Bottom tile</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification">
                    <p class="title is-4">Middle tile</p>
                    <p class="subtitle is-6">With an image</p>
                    <figure class="image is-4by3">
                        <img
                            src="https://bulma.io/images/placeholders/640x480.png"
                            alt=""
                        />
                    </figure>
                </article>
            </div>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child notification">
                <p class="title is-4">Wide tile</p>
                <p class="subtitle is-6">Aligned with the right tile</p>
                <div class="content"></div>
            </article>
        </div>
    </div>
    <div class="tile is-parent">
        <article class="tile is-child notification">
            <div class="content">
                <p class="title is-4">Tall tile</p>
                <p class="subtitle is-6">With even more content</p>
                <div class="content"></div>
            </div>
        </article>
    </div>
</div>
<!--div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
        <div class="tile">
            {#each $experienceArray as experience}
                <div class="tile is-parent">
                    <article class="tile is-child notification">
                        <p class="title is-4">{experience.title}</p>
                        <p class="subtitle is-6"
                        contenteditable bind:innerHTML={experience.body}></p>
                    </article>
                </div>
            {/each}

        </div>
    </div>
</div-->
<style></style>