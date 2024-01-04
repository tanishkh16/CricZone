import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../Context/UserContext'
import { useContext } from 'react'
import { set } from 'mongoose'
import UserContextProvider from '../Context/UserContextProvider'
const backgroundImageUrl = 'login.jpg';


export default function Signup() {
const [username,setUsername]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const {setUser}=useContext(UserContext);
  // const [form,setForm] = useState({})
  const navigate = useNavigate();
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover', // You can adjust these properties based on your image and design
    backgroundPosition: 'center',
  };

  // const handleChange = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.id]: e.target.value
  //   })
  // }


  const handleSubmit = async(e) => {
    e.preventDefault()
// setUser({username,email,password})

    // try{
    //   const res=await fetch("http://localhost:5000/signup",{
    //     method:"POST",
    //     headers:{
    //     "Content-Type": "application/json"
    //   },
    //   body:JSON.stringify(form)
    // })
    // console.log("user created")
    // navigate('/login')

    // }catch(err){
    //   console.log(err)
    //   navigate('/signup');
    // }

    try{
      const res=await axios.post("http://localhost:5000/signup",{username,email,password},{
        headers:{
        "Content-Type": "application/json"
      }
    })
    console.log(res);
    if(res.status===200){
      setUser(res.data.user)
    }
    console.log("user created")
    navigate('/login')

    }catch(err){
      console.log(err)
      navigate('/signup');
    }
  }




  
 


//   useEffect(() => {
//     axios.post('http://localhost:5000/signup', {
//      headers:{
//        "Content-Type": "application/json"
//      },
//   }).then((res) => {
//     console.log(res);
//   })
//   , []
// })

  return (
    <div>
       <div className='bg-gray-200 pb-44 pt-2' style={backgroundStyle}>
     <div  className='flex justify-center mt-2'>
      <Navbar/>
      </div>
      <div className=' w-96  ml-96  pl-32'>
        <h1 className='flex justify-center mt-8   text-white font-bold text-3xl'>Sign Up</h1>
        
        <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-3 items-center mt-8 pb-40'>
        <input className="border border-slate-950 p-3 rounded-lg w-72 " type="username" placeholder="Username" id="username" onChange={(e)=>setUsername(e.target.value)}  required />
      <input className="border border-slate-950 p-3 rounded-lg w-72 " type="email" placeholder="Email" id="email" onChange={(e)=>setEmail(e.target.value)} required />
      <input className="border border-slate-950 p-3 rounded-lg w-72 " type="password" placeholder='Password' id="password"onChange={(e)=>setPassword(e.target.value)}  required/>
      <button  className='bg-green-600 opacity-80 p-3 text-slate-50 uppercase hover:opacity-95 border rounded-lg w-72'>SignUP</button>

      <h1 className='text-sm mt-2 text-white bg-black opacity-70'> Already Have account?</h1>
      <Link to='/login'>
      <button className='border rounded-lg border-slate-900 bg-slate-900  text-white w-32 h-8'>Login</button>
     </Link>
      </form>
        
      </div>
      
    </div>
    </div>
  )
}
