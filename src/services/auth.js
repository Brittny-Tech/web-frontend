let token = process.env.SVELTE_APP_USERNAME + ":" + process.env.SVELTE_APP_PASS;
let hash = window.btoa(token); 
let credentials = "Basic " + hash; 

export default credentials;