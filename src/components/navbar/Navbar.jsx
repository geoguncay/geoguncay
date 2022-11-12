import './navbar.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBookBookmark, BiMessageSquareEdit} from 'react-icons/bi'
import {useState} from 'react'

const Navbar = () =>{
  const [activeNav, setActiveNav ] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}  className={activeNav==='#' ? 'active' : ''}> <AiOutlineHome/> </a>
      <a href="#about" onClick={() => setActiveNav('#about')}  className={activeNav==='#about' ? 'active' : ''}> <AiOutlineUser/></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')}  className={activeNav==='#skills' ? 'active' : ''}> <BiBookBookmark/> </a>
      <a href="#contact"onClick={() => setActiveNav('#contact')}  className={activeNav==='#contact' ? 'active' : ''}> <BiMessageSquareEdit/> </a>
    </nav>
  )
}

export default Navbar 