<script>
    import { onMount } from "svelte";
    export let colourClass = "is-primary";
    export let finalValue = 0;
    let value = 0;
    let progressElement;

    let windowY, windowHeight;

    onMount(() => {
        let interval = setInterval(() => {
            let bodyRect = document.body.getBoundingClientRect();
            let elemRect = progressElement.getBoundingClientRect();
            let progressY = elemRect.top - bodyRect.top;
            if(windowY < progressY-windowHeight) return
            if(value < finalValue) value++;
            else clearInterval(interval)
        }, 5);
    
    })


</script>

<svelte:window 
bind:scrollY={windowY}
bind:innerHeight="{windowHeight}"/>
<progress bind:this={progressElement} 
class="progress is-large 
{colourClass}" 
value="{value}" 
max="100">{value}%</progress>

<style></style>