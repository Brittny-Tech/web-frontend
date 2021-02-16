<script>
    import Level from '../common/Level.svelte';
    let levelItems = [
        {
            heading: "Years Experience",
            content: "5",
            tooltip: "I've been working as a full stack web developer since the summer of 2015!"
        },
        {
            heading: "University Degree",
            content: "1",
            tooltip: "I took my undergrad at Carleton University, earning a degree in Computer Science."
        },
        {
            heading: "Professional Certificate",
            content: "1",
            tooltip: "I've since began to take a UX Design certificate at the University of Toronto, and I'm loving every class!"
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