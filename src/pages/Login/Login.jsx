import LoginForm from '../../components/login/Login/LoginForm'
import { login } from '../../services/auth/login'



import './Login.css'

const Login = () => {
    const handleLogin = async (loginData) => {
        const userData = await login(loginData);
        console.log(userData)
    }

  return (
    <section>

        <p>Welcome! Enter your email and password to continue</p>   
        <div>
            <h3>Test data</h3>
            <ul>
                <li>
                    <em>Email:</em> jesusrodriguez@gmail.com
                </li>
                <li>
                    <em>Password:</em> 12345
                </li>
            </ul>
        </div>

        <LoginForm onLogin={handleLogin} />
       
    </section>
  )
}

export default Login