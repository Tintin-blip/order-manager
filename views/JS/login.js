




function toRegister() { 
    window.location.href= 'register.html'
    }
function toPassword()  { 
window.location.href = 'passswordmissed.html'
}    




 userid = null
async function  login() { 
    
    event.preventDefault(); 

    try { 
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        
        
       
        const response = await fetch('http://localhost:7070/api/login', { 
            method: 'POST',
            headers: { 'content-type':'application/json'},
            body: JSON.stringify({ username, password })
        })
      
        if( response.status != 200 || response.error ) { throw new Error('user or password incorrect')}
        const login = await response.json()
        console.log(login)
        localStorage.setItem('token', login.token);
        localStorage.setItem('userid', login.data);
        window.location.href = 'neworders.html'
        
        }catch(err) { 
            displayErrorLogin(true)            
            console.log('error:', err)
           
        }

    
}  

document.getElementById('error-user').style.display = 'none';

function displayErrorLogin(value) { 
    if(value) { document.getElementById('error-user').style.display = 'block'}
}





