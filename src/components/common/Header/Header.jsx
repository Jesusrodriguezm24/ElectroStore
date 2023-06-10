import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../../store/slices/authSlice';


import './Header.css'
const Header = ({ updateCarVisible }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((store) => store.auth.isLogged);

  const userTo = isLogged ? "/profile" : "/login";
  const puchaseTo = isLogged ? "/purchases" : "/login" ;

  const logout = () => { 
    dispatch(reset()); 
     navigate("/login");
  }

  const handleCartClik = () => {
      if (isLogged) updateCarVisible();
      else navigate("/login");
    
  }

  const getClass = ({ isActivate }) => {
    if (isActivate) return "header_navlink_items header_navlink_items--activate"
    else return "header_navlink_items"
  }

  return (
    <header className='header_container'>
      <div className='header_title'>
        <Link to="/">
          <h1>e-commerce</h1>
        </Link>
      </div>

     
        <div className='header_list_item'>
          <ul className='header_list'>

            <NavLink to={userTo} className={getClass}>
              <li className='header_item'>
                  <i className='bx bx-user'></i>  
              </li>
            </NavLink>

            <NavLink to={puchaseTo} className={getClass}>
              <li className='header_item'>
                  <i className='bx bx-box'></i>
              </li>
            </NavLink>

           
              <li className='header_item' onClick={()=>{}}>
                 <button onClick={handleCartClik} className='btn_cart'><i className='bx bx-cart' ></i></button> 
              </li>
            

              { isLogged && (
                <li>
                    <button className='btn_log_out' onClick={logout}><i className='bx bx-log-out'></i></button>
                </li>
              )}
          </ul>

        </div> 
    
      
      

    </header>
  )
}

export default Header