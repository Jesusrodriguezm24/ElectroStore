import { useId, useState } from 'react'
import './LoginForm.css'

const LoginForm = ( {onLogin} ) => {
    const emailId = useId();
    const passwordId = useId();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [formData, setFormData] = useState({email: "", password: ""});
    
    const handleChange = (e) => {
        const { name, value } = e.target;

        const newFormData = { ...formData, [name]: value }

        setFormData(newFormData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) return;

        onLogin(formData);

    }

  return (
   <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor={emailId}>Email</label>
        </div>
        <input type="email" onChange={handleChange} value={formData.email} name="email" id={emailId} required/>
        
        <div>
            <label htmlFor={passwordId}>Password</label>
        </div>
        <input type={isPasswordVisible ? 'text' : 'password'} onChange={handleChange} value={formData.password} name="password" id={passwordId} required/>
        <button type='button'><i className='bx bx-low-vision' onClick={()=>setIsPasswordVisible(!isPasswordVisible)}></i></button>

        <div>
            <button type="submit">Login</button>
        </div>
   </form>
  )
}

export default LoginForm