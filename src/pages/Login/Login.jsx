import { useDispatch, useSelector } from 'react-redux'
import LoginForm from '../../components/login/Login/LoginForm'
//import { login } from '../../services/auth/login'
import { startSessionThunk } from '../../store/slices/authSlice'



import './Login.css'
import { Navigate, useLocation } from 'react-router-dom'


const Login = () => {
    const dispatch = useDispatch();
    const isLogged = useSelector((store)=>store.auth.isLogged);
    const location = useLocation();
    
    const from = location.store?.from;

    const handleLogin = (loginData) => {
   
        dispatch(startSessionThunk(loginData));
    }

  return (
    <section>

        <section>
            <p>Welcome! Enter your email and password to continue</p>   
            <div>
                <h3>Test data</h3>
                <ul>
                    <li>
                        <em><i className='bx bx-envelope'></i></em> jesusrodriguez@gmail.com
                    </li>
                    <li>
                        <em><i className='bx bx-lock-alt'></i></em> 12345
                    </li>
                </ul>
            </div>

            <LoginForm onLogin={handleLogin} />
        
        </section>

        {(isLogged) && <Navigate to={from ?? "/"}/>}

    </section>
  )
}

export default Login