export function doStuff(element) { 
  element.addEventListener('submit', function(event) {
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

    if (validEmail && validPassword) {
        
    }

    console.log('first name', firstName)
    console.log('last name', lastName)
    console.log('email', email)
    console.log('password', password)
    
  });
}


