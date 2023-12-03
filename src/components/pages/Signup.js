import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Validation from "./SignupValidation";

function Signup() {
    // const [values, setValues] = useState({
    //   email: '',
    //   password: '',
    //   retypedPassword: ''
    // })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [retypedPassword, setRetypedPassword] = useState('')

    const [errors, setErrors] = useState({

    })

    //   const handleSubmit = (event) => {
    //     axios.post('http://localhost:8080/sign-up', { email: email, password: password })
    //       .then((data) => {
    //         event.preventDefault();
    //         console.log(data)
    //         setEmail('')
    //         setPassword('')
    //       })
    //   }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(email, password, retypedPassword));
        if (errors.email === "" && errors.password === "" && errors.retypedPassword === "") {
            axios.post('http://localhost:8080/sign-up', { email: email, password: password })
                .then((data) => {
                    console.log(data)
                    setEmail('')
                    setPassword('')
                    setRetypedPassword('')
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <form className='mx-auto border-2 p-9 md:p-12 w-72 md:w-96 border-aquamarine-400 mt-36 h-84' onSubmit={handleSubmit}>
                    <h3 className='pb-6 text-2xl text-center text-black'>Sign Up</h3>
                    <div className='mb-3 d-flex justify-content-center align-items-center'>
                        <label className='block mb-1 text-xl text-aquamarine-400' htmlFor="email">Email</label>
                        <input className='w-full h-8 p-1 mb-6 focus:outline-none' id="email" type="text" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <span>{errors.email && <span className="text-issue">{errors.email}</span>}</span>
                    </div>
                    <div className='d-flex justify-content-center align-items-center mb-3'>
                        <label className='block mb-1 text-xl text-aquamarine-400' htmlFor="password">Password</label>
                        <input className='w-full h-8 p-1 mb-6 focus:outline-none' id="password" type="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <span>{errors.password && <span className="text-issue">{errors.password}</span>}</span>
                    </div>
                    <div className='d-flex justify-content-center align-items-center mb-3'>
                        <label className='block mb-1 text-xl text-aquamarine-400' htmlFor="retypePassword">Retyped Password</label>
                        <input className='w-full h-8 p-1 mb-6 focus:outline-none' id="retypePassword" type="password" value={retypedPassword}
                            onChange={(e) => setRetypedPassword(e.target.value)} />
                        <span>{errors.retypedPassword && <span className="text-issue">{errors.retypedPassword}</span>}</span>
                    </div>
                    <div>
                        <button className='px-3 py-1 rounded-sm bg-aquamarine-400' type="submit">Sign Up</button>
                        <p>
                            By signing up, you are agreeing to PriceTracker's terms and policies
                        </p>
                        <Link to="/login">
                            <button className='px-3 py-1 rounded-sm bg-aquamarine-400' to="/login">Log In</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;