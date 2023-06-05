import { NavLink } from 'react-router-dom'
import './Header.css'
import { useSelector } from 'react-redux'

const Header = () => {
  const isLogged = useSelector((store) => store.auth.isLogged);

  const userTo = isLogged ? "/profile" : "/login";

  return (
    <header className='header_container'>
      <h1>Ecommerce</h1>

      <ul>
        <li>
          <NavLink to={userTo}>

          </NavLink>
        </li>

        <li>
          <NavLink>

          </NavLink>
        </li>

        <li>
          <NavLink>
            
          </NavLink>
        </li>

      </ul>

    </header>
  )
}

export default Header