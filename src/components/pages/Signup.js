import React from 'react'

function Signup() {
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div>
            <form action='bg-white p-3 rounded w-25'>
                <h2>Sign Up</h2>
                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter Email' className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter Password' className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                <label htmlFor="password">Re-Typed Password</label>
                    <input type="password" placeholder='Enter Password' className='form-control rounded-0'/>
                </div>

                <button className='btn btn-success w-100 rounded-0'>Sign Up</button>
                <p>By signing up, you are agreeing to PriceTracker's terms and policies</p>
                <button to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Log In</button>
            </form>
        </div>
    </div>
    )
}

export default Signup