<script>
    import Level from '../common/Level.svelte';
    let levelItems = [
        {
            heading: "Years Experience",
            content: "5",
            tooltip: "explain 1"
        },
        {
            heading: "University Degree",
            content: "1",
            tooltip: "explain 2"
        },
        {
            heading: "Professional Certificate",
            content: "1",
            tooltip: "explain 3"
        },
    ];
</script>

<Level levelItems="{levelItems}"/>


<!--article class="message">
    <div class="message-header">
    <p>5 Years of Experience</p>
    <button class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
    My career as a web developer started in August 2015, and I haven't looked back since! I've learned a lot over the years, mostly learning how to learn. 
    </div>
</article-->


<style>
</style>