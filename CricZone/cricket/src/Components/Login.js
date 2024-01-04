import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import useContext from 'react';
import UserContext from '../Context/UserContext';
import UserContextProvider from '../Context/UserContextProvider'
import axios from 'axios';
const backgroundImageUrl = 'login.jpg';




export default function Login() {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

  const [form,setForm] = useState({})
  const navigate = useNavigate(); 
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover', // You can adjust these properties based on your image and design
    backgroundPosition: 'center',
  };

// const {setUser}=useContext(UserContext);
// const {user}=useContext(UserContext);
// console.log("user",user)
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    // setUser({email,password})

    try{
      const res=await axios.post("http://localhost:5000/login",{email,password},{
        headers:{
        "Content-Type": "application/json"
      }
    })
    console.log(res.data);
    console.log("hello");
    if(res.status===200){
      const token =res.data.token;
      Cookies.set('accessToken',token,{expires:1});
      
      navigate('/profile')}
      else if(res.status===400){
            navigate('/signup')}
            else if(res.status===401){
              navigate('/login')}

    }catch(err){ 
      console.log(err)
      navigate('/login');
    }

  //   try{
  //     const res=await fetch("http://localhost:5000/login",{
  //       method:"POST",
  //       headers:{
  //       "Content-Type": "application/json"
  //     },
  //     body:JSON.stringify(form)
  //   })

  //  if(res.status===200){
  //   const  data=await res.json();
  //   const token =data.token;
  //   Cookies.set('accessToken',token,{expires:1});
  //   navigate('/profile')
  //  }
  //  else if(res.status===400){
  //     navigate('/signup')
  //   }
  //   else if(res.status===401){
  //     navigate('/login')
  //   }
   

  //   }catch(err){
  //     console.log(err)
  //     navigate('/login');
  //   }
  }
  return (
    <div className='bg-gray-200 pb-44 pt-2' style={backgroundStyle}>
     <div  className='flex justify-center mt-2'>
      <Navbar/>
      </div>
      <div className=' w-96  ml-96 pl-32'>
        <h1 className='flex justify-center mt-8 text-white  font-bold text-3xl'> Log In</h1>
        
        <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-3 items-center mt-10 pb-40'>
      <input className="border border-slate-950 p-3 rounded-lg w-72 " type="email" placeholder="Email" id="email" onChange={(e)=>setEmail(e.target.value)}   required />
      <input className="border border-slate-950 p-3 rounded-lg w-72 " type="password" placeholder='Password' id="password" onChange={(e)=>setPassword(e.target.value)} required/>
      <h1 className='text-xs text-blue-600 hover:text-blue-500'> <Link to='/forget' >Forget Passowrd?</Link></h1>
      <button  className='bg-green-600 opacity-80 p-3 text-slate-50 uppercase hover:opacity-95 border rounded-lg w-72'>Login</button>

      <h1 className='text-sm mt-8 flex justify-start text-white bg-black opacity-70'> Dont Have account?</h1>
      <Link to='/signup'>
      <button className='border rounded-lg border-slate-900 bg-slate-900 text-white w-32 h-8'>Sign Up</button>
     </Link>
      </form>
        
      </div>
      
    </div>
  )
}
