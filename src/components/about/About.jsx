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
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam minima nisi porro distinctio veritatis non quae, reprehenderit quasi impedit magni adipisci beatae, eos soluta? In accusamus officia possimus ratione ea.
          Labore sunt voluptate molestiae animi impedit consequatur odit deleniti consequuntur temporibus porro minima harum unde non, voluptas consectetur aspernatur. Dolorum excepturi ea est explicabo eaque sed maxime temporibus aperiam exercitationem.
          Eius, dolores! Eligendi saepe cum officia quia quae commodi, accusamus vel animi asperiores quibusdam natus sapiente dignissimos cupiditate. Mollitia similique, repudiandae nobis error nulla consectetur incidunt dicta vero sit veritatis.
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