import './style.css'
import { doStuff } from './stuff.js'

document.querySelector('#app').innerHTML = `
  <div>    
    <h1>Button Driven Development!</h1>
    <div class="card">
      <button id="button" type="button">Click me</button>
    </div>   
    <div class="card">
        <form id="form" class="form">        
            <input required placeholder="first name" name="first-name" type="text">
            <input required placeholder="last name" name="last-name" type="text">  
            <input required  placeholder="email" type="email" name="email">
            <input required name="password" type="password" placeholder="password" minlength="8" maxlength="20">
            <button id="submit" type="submit">Submit</button>
        </form>
    </div>
  </div>
`

doStuff(document.querySelector('#form'))
