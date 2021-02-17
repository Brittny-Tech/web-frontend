<script>
    import TextArea from '../common/TextArea.svelte';
    import TextInput from '../common/TextInput.svelte';
    import EmailInput from '../common/EmailInput.svelte';
    import FormControl from '../common/FormControl.svelte';
    import Error from '../common/Error.svelte';
    import LoadingComponent from '../common/LoadingComponent.svelte';
    import credentials from '../services/auth.js';

    export let showSuccess = false;

    let from = "";
    let subject = "";
    let html = "";
    let loading = false;
    let error = false;

    function handleSubmit () {
        loading = true;
        const formData = new FormData();
        formData.append('from', from);
        formData.append('subject', subject);
        formData.append('html', html);

        let data = JSON.stringify({
                    from, subject, html
                });

        fetch(process.env.SVELTE_APP_CONTACT_URL, 
            {
                method: "POST",
                body: data,
                headers: 
                {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": credentials
                }
            }).then( async (response) => { 
                const json = await response.json();
                if(json['success']) {
                    showSuccess = true;
                    from = "";
                    subject = "";
                    html = "";
                }
                else error = true;
                loading = false;
            });
    }

</script>

<Error isShowing="{error}" message="Sorry, something unexpected happened. To reach me please send an email to brittny.lapierre@gmail.com, thank you!"/>
<LoadingComponent bind:loading="{loading}">
    <form slot="content" on:submit|preventDefault={handleSubmit}>
        <EmailInput  
        placeholder="your_email@hello.com" 
        icon="fa-envelope"
        bind:value={from}/>
        <TextInput 
        placeholder="Subject" 
        icon="fa-pen-alt"
        bind:value={subject}/>
        <TextArea 
        placeholder="Message..." 
        icon=""
        bind:value={html}/>
        
        <FormControl>
            <button 
            disabled="{!from.length || !from.includes("@") || !subject.length || !html.length}"
            class="button is-link"
            type=submit>Submit</button>
        </FormControl>
    </form>
</LoadingComponent>

<style></style>