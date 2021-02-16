<script>
    import Level from '../common/Level.svelte';
    let levelItems = [
        {
            heading: "VS Code",
            content: "<img class='tool-logo' alt='VSCode logo' src='/images/logos/vs-code.svg'></img>",
            tooltip: ""
        },
        {
            heading: "GitHub",
            content: "<img class='tool-logo' alt='GitHub logo' src='/images/logos/github-sm.png'></img>",
            tooltip: ""
        },
        {
            heading: "Draw.io",
            content: "<img class='tool-logo' alt='Draw.io logo' src='/images/logos/drawio.png'></img>",
            tooltip: ""
        },
        {
            heading: "Figma",
            content: "<img class='tool-logo' alt='Figma logo' src='/images/logos/figma.png'></img>",
            tooltip: ""
        },
        {
            heading: "Illustrator",
            content: "<img class='tool-logo' alt='Adobe Illustrator logo' src='/images/logos/illustrator.png'></img>",
            tooltip: ""
        },
        {
            heading: "Trello",
            content: "<img class='tool-logo' alt='Trello logo' src='/images/logos/trello.png'></img>",
            tooltip: ""
        },
    ];
</script>

<Level levelItems="{levelItems}"/>

<style>

</style>