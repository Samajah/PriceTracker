import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div>
                <form action='bg-white p-3 rounded w-25'>
                    <h2>Log In</h2>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Enter Email' className='form-control rounded-0'/>
                    </div>
                    <div className='mb-3'>
                    <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter Password' className='form-control rounded-0'/>
                    </div>
                    <Link to='/user-homepage'>
                    <button to="/user-homepage" className='btn btn-success w-100 rounded-0'>Log In</button>
                    </Link>
                    {/* <p>By signing up, you are agreeing to PriceTracker's terms and policies</p> */}
                    <Link to='/sign-up'>
                    <button to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Sign Up</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login;