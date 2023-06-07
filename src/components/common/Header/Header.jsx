import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { reset } from '../../../store/slices/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((store) => store.auth.isLogged);

  const userTo = isLogged ? "/profile" : "/login";

  const logout = () => {
    dispatch(reset()); 
     navigate("/login");
  }

  return (
    <header className='header_container'>
      <div className='header_title'>
        <Link to="/">
          <h1>e-commerce</h1>
        </Link>
      </div>

      <nav>
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
      </nav>
      
      { isLogged && <button onClick={logout}>Log Out</button> }

    </header>
  )
}

export default Header