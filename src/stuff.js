export function doStuff(element) { 
  element.addEventListener('submit', async function(event) {
    const API_BASE = import.meta.env.VITE_API_URL === "" ? '/api' : import.meta.env.VITE_API_URL
    event.preventDefault(); 
    console.log(element)

    const form = new FormData(element)
    const firstName = form.get('first-name')
    const lastName = form.get('last-name')
    const email = form.get('email')
    const password = form.get('password')

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = emailPattern.test(email);  
    const validPassword = password.length > 8 && password.length < 20;

    if (!validEmail || !validPassword) {
        return;
    }

    console.log('first name', firstName)
    console.log('last name', lastName)
    console.log('email', email)
    console.log('password', password)
    console.log('API_BASE: ', API_BASE)

    const payload = {
      firstName,
      lastName,
      email,
      password
    }


    try {
      const response = await fetch(`${API_BASE}/auth/register`, {  
        method: "POST", 
        headers: {
          "Content-Type" : 'application/json',  // The Content-Type: application/json header tells Express "the body is JSON"
        },         
        body: JSON.stringify(payload) // fetch's body must be a string '{"firstName":"...","email":"...",...}'
      })

      if (!response.ok) {
        throw Error('failed to hit the api')
      }

      const data = await response.json();

      console.log('>>>>>>>>> ', data.message)

    } catch(err) {
      console.log(err)
    }
    
  });
}


