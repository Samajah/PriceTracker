import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';
import Validation from './SignupValidation';
import axios from 'axios';

function Signup() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        retypedPassword: ''
    })
    // const navigate = useNavigate();
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const [errors, setErrors] = useState({

    })
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setErrors(Validation(values));
    //     if (errors.email === "" && errors.password === "" && errors.retypedPassword === "") {
    //         axios.post('http://localhost:3000/sign-up', {values})
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err));
    //     }
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/sign-up', {
            Email: values.email,
            Password: values.password})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <h2>Sign Up</h2>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Enter Email' name='email'
                            onChange={handleInput} className='form-control rounded-0' />
                        <span>{errors.email && <span className="text-issue">{errors.email}</span>}</span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter Password' name='password'
                            onChange={handleInput} className='form-control rounded-0' />
                        <span>{errors.password && <span className="text-issue">{errors.password}</span>}</span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="retypePassword">Re-Typed Password</label>
                        <input type="password" placeholder='Enter Retyped Password' name='retypedPassword'
                            onChange={handleInput} className='form-control rounded-0' />
                        <span>{errors.retypedPassword && <span className="text-issue">{errors.retypedPassword}</span>}</span>
                    </div>

                    <button type="submit" className='btn btn-success w-100 rounded-0'>Sign Up</button>
                    <p>By signing up, you are agreeing to PriceTracker's terms and policies</p>
                    </form>

                    <Link to='/login' >
                        <button to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Log In</button>
                    </Link>
            </div>
        </div>
    )
}

export default Signup;