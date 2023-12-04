import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Validation from "./PaymentValidation";

function PaymentMethod() {

    const [cardNo, setCardNo] = useState('')
    const [expDate, setExpDate] = useState('')
    const [CVV, setCVV] = useState('')

    const [errors, setErrors] = useState({

    })

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(cardNo, expDate, CVV));
        if (errors.cardNo === "" && errors.expDate === "" && errors.CVV === "") {
            axios.post('http://localhost:8080/sign-up', { cardNo: cardNo, expDate: expDate, CVV: CVV })
                .then((data) => {
                    console.log(data)
                    setCardNo('')
                    setExpDate('')
                    setCVV('')
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div>
                <form className='mx-auto border-2 p-9 md:p-12 w-72 md:w-96 border-aquamarine-400 mt-36 h-84' onSubmit={handleSubmit}>
                    <h3 className='pb-6 text-2xl text-center text-black'>Add Payment Method</h3>
                    <div className='mb-3'>
                        <label htmlFor="cardNo">Card Number</label>
                        <input id="cardNo" type="password" placeholder="Enter Card Number" value={cardNo}
                            onChange={(e) => setCardNo(e.target.value)} />
                        <span>{errors.cardNo && <span className="text-issue">{errors.cardNo}</span>}</span>
                    </div>
                    <div className='mb-3'>
                        <label className='block mb-1 text-xl text-aquamarine-400' htmlFor="expDate">Expiration Date</label>
                        <input className='w-full h-8 p-1 mb-6 focus:outline-none' id="expDate" type="text" placeholder="Enter Expiration Date" value={expDate}
                            onChange={(e) => setExpDate(e.target.value)} />
                        <span>{errors.expDate && <span className="text-issue">{errors.expDate}</span>}</span>
                    </div>
                    <div className='mb-3'>
                        <label className='block mb-1 text-xl text-aquamarine-400' htmlFor="CVV">CVV</label>
                        <input className='w-full h-8 p-1 mb-6 focus:outline-none' id="CVV" type="text" placeholder="Enter CVV" value={CVV}
                            onChange={(e) => setCVV(e.target.value)} />
                        <span>{errors.CVV && <span className="text-issue">{errors.CVV}</span>}</span>
                    </div>
                    <div className='d-flex justify-content-center align-items-center mb-3'>
                        <button className='px-3 py-1 rounded-sm bg-aquamarine-400' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PaymentMethod;