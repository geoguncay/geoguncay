import './navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <li>
      <ul>
      <NavLink to='/'>Home</NavLink>
      </ul>
      <ul>
      <NavLink to='/projects'>About</NavLink>
      </ul>
    </li>
  )
}

export default Navbar