<script>
    import FormControl from './FormControl.svelte';
    export let placeholder = "";
    export let icon = "";
    export let value = "";
</script>


<FormControl>
    <input
    class="input form-control" 
    type="email"
    placeholder="{placeholder}"
    bind:value="{value}"/> <!--is-danger, is-success-->
    
    <span class="icon is-small is-left">
        <i class="fas {icon}" />
    </span>

    <!--span class="icon is-small is-right">
        <i class="fas fa-exclamation-triangle" />
    </span-->

    <!--p class="help is-danger">This email is invalid</p-->
</FormControl>

<style></style>