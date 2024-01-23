document.addEventListener('DOMContentLoaded', function() {
  
});


// display error message 
document.getElementById('error-username').style.display = 'none'; 
document.getElementById('error-email').style.display = 'none';
document.getElementById('good').style.display ='none'


function displayErrorRegister(value) { 
   
    if(value === 'email') {document.getElementById('error-email').style.display = 'block';} 
    if(value === 'username') {document.getElementById('error-username').style.display = 'block';}
    
    
}
function displayGood(value) { 
    if(value) { document.getElementById('good').style.display = 'block'}
}


// functions of Register.html
async function register() { 

    event.preventDefault() // no refresh 
    let responseData = null
    try { 
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value

    const response = await fetch('http://localhost:7070/api/register', { 
        method: 'POST',
        headers: { 'content-type':'application/json'},
        body: JSON.stringify({ username, password,name,email })
    })
     responseData = await response.json();
     console.log(responseData)
    
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    if(responseData.status == 'Success') {
        displayGood(true)
    }
    
    
        
    }catch(err) {
        if(responseData.errors[0].path === 'email') { const value = 'email'; displayErrorRegister(value)}
        if(responseData.errors[0].path === 'username') { const value = 'username'; displayErrorRegister(value)}
        console.log('error:', err)}
    

}





