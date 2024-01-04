import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
export default function Payment() {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
   const token = document.cookie.replace(/(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
   console.log("tokenpay",token);
    const decoded=jwtDecode(token);
    console.log("decoded",decoded);
    console.log(decoded.id)
    const handleSubmit=()=>{
        console.log("clicked");
    }

    const makePayment = async(e) => {
        e.preventDefault();
        const stripe = await loadStripe('pk_test_51OHAA3SETXDcTTgLUwK8fSYVlPr1gnzOSED8Ox0ioJqehQXE2YC2t4LFl4QKaaq7T5senm4hpDrVlFp3vMzLjRdk006KGh5J9e');
const headers={
    "Content-Type": "application/json"
}

const res=await axios.post("http://localhost:5000/payment",{userId:decoded.id},{
    headers:headers,
})
console.log(res);

// const session=await res.json();

const result=await stripe.redirectToCheckout({
    sessionId:res.data.id,
})

if(result.error){
    console.log(result.error.message);
    console.log("error")
}

    }
  return (
    <div>
     <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-3 items-center mt-20 pb-40'>
     {/* <input className="border border-slate-950 p-3 rounded-lg w-72 " type="username" placeholder="Username" id="username" onChange={(e)=>setUsername(e.target.value)}  required />
      <input className="border border-slate-950 p-3 rounded-lg w-72 " type="password" placeholder='Password' id="password" onChange={(e)=>setPassword(e.target.value)} required/> */}
      
    <button onClick={makePayment} className='bg-green-600 opacity-80 p-3 text-slate-50 uppercase hover:opacity-95 border rounded-lg w-72'>Payment</button>
    </form>
    </div>
  )
}
