import './skills.css'
import {BsCodeSlash, BsPalette, BsTools} from 'react-icons/bs'
import {SiFigma, SiNotion, SiVisualstudiocode, SiJavascript, SiPython, SiMysql, SiReact, SiGit} from 'react-icons/si'
import {ImHtmlFive, ImCss3} from 'react-icons/im'
import {GrMysql} from 'react-icons/gr'
import {CgWebsite} from 'react-icons/cg'
import {FaUserCog} from 'react-icons/fa'

const Skills = () => {
  return (
    <div id="skills">
      <h3>Experience</h3>
      <h1>Tools/Skills</h1>
      <div className="skills">
        <h2><FaUserCog/> Skills</h2>
        <ul className='skills_card'>
          <li className='skill_type'>
            <div className="skill_tittle">
              <BsCodeSlash/> Development
            </div>
            <ul>
              <li className='skill_items'><ImHtmlFive className='skill_icon'/></li>
              <li className='skill_items'><ImCss3 className='skill_icon'/></li>
              <li className='skill_items'><SiJavascript className='skill_icon'/></li>
              <li className='skill_items'><SiGit className='skill_icon'/></li>
              <li className='skill_items'><GrMysql className='skill_icon'/></li>
              <li className='skill_items'><SiReact className='skill_icon'/></li>
              <li className='skill_items'><SiPython className='skill_icon'/></li>
            </ul>
          </li>
          <li className='skill_type'>
            <div className="skill_tittle">
              <BsPalette /> Design 
            </div>
            <ul>
              <li className='skill_items'>
                <div className="skill_item">
                  <CgWebsite className='skill_icon'/><p>Web Design</p>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="tools">
        <h2><BsTools/> Tools</h2>
        <ul className='tool_card'>
          <li className='tool_item'><SiVisualstudiocode className='tool_icon'/><p>Code editor</p></li>
          <li className='tool_item'><SiFigma className='tool_icon'/> <p>UI Design, prototyping</p></li>
          <li className='tool_item'><SiNotion className='tool_icon'/> <p>Project managment</p></li>
        </ul>
      </div>
    
    </div>
  )
}

export default Skills