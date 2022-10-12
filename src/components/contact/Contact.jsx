
import './contact.css'

const Contact = () => {
  return (
    <div id="contact">
      <h3>Get in touch</h3>
      <h1>Contact me</h1>
      <form action="#">
        <ul>
          <li> 
            <input type="text" id="name" placeholder='Full name'/>
          </li>
          <li> 
            <input type="emal" d="email" placeholder='E-mail'/>
          </li>
          <li>
            <textarea id="message" cols="30" rows="10" placeholder='Escriba un mensajes'> 
            </textarea>
          </li>
        </ul>
      <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact