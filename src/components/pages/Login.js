import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation'

function Login() {

    const navigate = useNavigate();

  const navigateHome = () => {
    // 👇️ navigate to /contacts
    navigate('/user-homepage');
  };

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const [errors, setErrors] = useState({

    })
    const handleSubmit = (event) => {
        event.preventDefault();
        // setErrors(Validation(values));
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='bg-white p-3 rounded w-2'>
            <h2>Log In</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Enter Email' name ='email'
                        onChange={handleInput} className='form-control rounded-0'/>
                        <span>{errors.email && <span className="text-issue">{errors.email}</span>}</span>
                    </div>
                    <div className='mb-3'>
                    <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter Password' name='password'
                        onChange={handleInput} className='form-control rounded-0'/>
                        <span>{errors.password && <span className="text-issue">{errors.password}</span>}</span>
                    </div>
                    {/* <Link to='user-homepage'> */}
                    <button type='submit' className='btn btn-success w-100 rounded-0' onClick={navigateHome}>Log In</button>
                    {/* </Link> */}
                    <p></p>
                    </form>
                    <Link to='/sign-up'>
                    <button to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Sign Up</button>
                    </Link>
            </div>
        </div>
    )
}

export default Login;