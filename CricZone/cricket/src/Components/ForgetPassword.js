import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';


export default function ForgetPassword() {
    const [email,setEmail]=useState('');

    
   
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tk7k8dn', 'template_6wesx6j', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
     

    
  return (
    <div>
            <div className='bg-gray-200 pb-48 pt-10'>
     {/* <div  className='flex justify-center mt-2'>
      <Navbar/>
      </div> */}
      <div className='bg-gray-100 w-auto  ml-56  mr-56'>
        <h1 className='flex justify-center mt-10 pt-8  font-bold text-3xl'>Recover Password</h1>
        
        <form onSubmit={sendEmail} className='flex flex-col justify-center gap-3 items-center mt-20 pb-40'>
      <input className="border border-slate-950 p-3 rounded-lg w-72 " type="email" placeholder="Email" id="email" onChange={(e)=>setEmail(e.target.value)}   required />
      {/* <input className="border border-slate-950 p-3 rounded-lg w-72 " type="text" placeholder='OTP' id="otp"  /> */}
      <button  className='bg-green-600 opacity-80 p-3 text-slate-50 uppercase hover:opacity-95 border rounded-lg w-72'>Send OTP</button>

    
      </form>
        
      </div>
      
    </div>
      
    </div>
  )
}
