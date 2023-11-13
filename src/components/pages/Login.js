import React from 'react'
import { Link } from 'react-router-dom'
import validation from './LoginValidation'

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const [errors, setErrors] = useState({

    })
    const handleEvent = (event) => {
        event.preventDefault();
        setErrors(validation(values));
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
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
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Log In</button>
                    <p>By signing up, you are agreeing to PriceTracker's terms and policies</p>
                    <button to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Login