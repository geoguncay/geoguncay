import './header.css'
import me from '../../assets/me.png'
import Social from './Social'


const Header = () => {
  return (
    <header id='header'>
    <div className="container">
      <h5>
        Hello I'm 
      </h5>
      <h1 className='name'>
        Geo Guncay 
      </h1>
      <h5 className="text_level">
         Web Developer Jr 
      </h5>
      <div className="social">
        <Social/>
      </div>
      <div className="me">
        <img src={me} alt="geogunky, geo, guncay" />
      </div>
    </div>
  </header>
  )
}

export default Header
