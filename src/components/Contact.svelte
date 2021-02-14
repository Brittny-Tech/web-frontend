<script>
    import TextArea from '../common/TextArea.svelte';
    import TextInput from '../common/TextInput.svelte';
    import EmailInput from '../common/EmailInput.svelte';
    import FormControl from '../common/FormControl.svelte';
    import credentials from '../services/auth.js';


    let from = ""
    let subject = ""
    let html = ""
    

    function handleSubmit () {
        const formData = new FormData();
        formData.append('from', from);
        formData.append('subject', subject);
        formData.append('html', html);

        let data = JSON.stringify({
                    from, subject, html
                })

        console.log(formData, from, subject, html, data)

        fetch(process.env.SVELTE_APP_CONTACT_URL, 
            {
                method: "POST",
                body: data,
                headers: 
                {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": credentials
                }
            }).then((response) => { 
                console.log(response);
                const json = response.json()
                let result = JSON.stringify(json)
            });
    }

</script>

<form on:submit|preventDefault={handleSubmit}>
    {from} {subject} {html}
    <EmailInput  
    placeholder="your_email@hello.com" 
    icon="fa-envelope"
    bind:value={from}/>
    <TextInput 
    placeholder="Subject" 
    icon=""
    bind:value={subject}/>
    <TextArea 
    placeholder="Message..." 
    icon=""
    bind:value={html}/>
    
    <FormControl>
        <button 
        class="button is-link"
        type=submit>Submit</button>
    </FormControl>
</form>

<style></style>