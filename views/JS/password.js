
document.getElementById('error-user').style.display = 'none';
document.getElementById('error-username').style.display = 'none';
document.getElementById('good').style.display = 'none';

function displayErrorLogin(value) { 
    if(value) { document.getElementById('error-user').style.display = 'block'}
}
function displayErrorUsername(value) { 
    if(value) { document.getElementById('error-username').style.display = 'block'}
}
function displayGood(value) { 
    if(value) { document.getElementById('good').style.display = 'block'}
}


 async function change() { 
    event.preventDefault(); 

    try { 
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value;
    const newpassword = document.getElementById('new-password').value
        
    if (password === newpassword) { 
       

        const response = await fetch('http://localhost:7070/api/passwordmissed', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username})
        })

        if(response.status === 400 || response.error) {
            displayErrorUsername(true)
            throw new Error('Este usuario no existe')}
        

    }
    else{ 
        displayErrorLogin(true)
        throw new Error('Las contraseñas no son iguales')

    }
    
   
    const request = await fetch('http://localhost:7070/api/editpassword', { 
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username,password})
        })
        if(request.status !== 200) {throw new Error('Internal error')}
        if(request.status == 200) { 
            displayGood(true)
        }
        


        
}   catch(err) {console.log(err)}
        


 }