import { NavLink } from 'react-router-dom'
import './Header.css'
import { useSelector } from 'react-redux'

const Header = () => {
  const isLogged = useSelector((store) => store.auth.isLogged);

  const userTo = isLogged ? "/profile" : "/login";

  return (
    <header className='header_container'>
      <div className='header_title'>
        <h1>e-commerce</h1>
      </div>

      <div className='header_list_item'>
          <ul className='header_list'>

            <NavLink to={userTo} className='header_navlink_items'>
              <li className='header_item'>
                  <i className='bx bx-user'></i>  
              </li>
            </NavLink>

            <NavLink className='header_navlink_items'>
              <li className='header_item'>
                  <i className='bx bx-box'></i>
              </li>
            </NavLink>

            <NavLink className='header_navlink_items'>
              <li className='header_item'>
                  <i className='bx bx-cart' ></i>
              </li>
            </NavLink>
          </ul>

      </div>
      

    </header>
  )
}

export default Header