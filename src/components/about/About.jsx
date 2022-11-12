import './about.css'
import meAbout from '../../assets/me-about.jpg'
import {RiDoubleQuotesL, RiDoubleQuotesR} from 'react-icons/ri'

function About() {
  return (
    <div id="about">
      <h3>Get to Know</h3>
      <h1>About me</h1>
      <div className="about_container">
        <div className="about_me">
          <img src={meAbout} alt="me" />
        </div>
        <div className="about_content">
          <p>My name is Geovanny Guncay, I am currently expanding my professional horizons, I seek to improve and test my skills and knowledge. I do not have extensive experience, but I am preparing myself to take on new challenges, I enjoy situations where I have to test myself and learn new things, I consider that the ability to overcome is one of the very important qualities for a candidate, that is why it prepares me a diary to learn and improve.
          </p>
          <div className="phrase">
            <p><RiDoubleQuotesL/>Learning is an experience. Everything else is just information<RiDoubleQuotesR/> </p>
            <div className="autor_phrase">
              <p><span>―</span> Albert Einstein</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About