import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'
import axios from 'axios'
import { useState } from 'react'
import { set } from 'mongoose'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

const backgroundImageUrl = 'profile1.jpg';


export default function Profile() {
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const navigate = useNavigate();
    const backgroundStyle = {
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: 'contain', // You can adjust these properties based on your image and design
      backgroundPosition: 'center',
    };
    const {user}=useContext(UserContext);

    console.log("user",user);
   const logout=()=>{


   try{
    const res=fetch("http://localhost:5000/logout",{
        method:"GET",
        headers:{
          "Content-Type": "application/json"
        },
      })
      Cookies.remove('accessToken');
      navigate('/login');
    
   }catch(err){
     console.log(err)
    navigate('/profile');
    }
    

   }

const fetchData = async () => {
    try {
      // Retrieve the access token from the cookie
      const accessToken = document.cookie.replace(/(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
     if(!accessToken){
      navigate('/')
     }
      const decodedToken=jwtDecode(accessToken);
      console.log("decodedtoken",decodedToken.subscription);
      console.log("token",accessToken); 
      // Make the Axios request with the access token in the headers
      const res = await axios.get("http://localhost:5000/getuser", {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Include the access token in the Authorization header
        },
      });
  
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
  
      console.log(res);
      navigate('/profile');
    } catch (err) {
      console.log(err);
      navigate('/profile');
    }
  };
  
  useEffect(()=>{
    fetchData();
  },[])

  const updateProfile=async(e)=>{

  }

  return (
    <div className='bg-gray-200 pb-48 pt-1  ' style={backgroundStyle}>
     <div  className='flex justify-center mt-1'>
      <Navbar/>
      </div>
     {/* <div className='bg-gray-100 opacity-80 w-auto  ml-56  mr-56'>
       <h1 className='flex justify-center mt-4 pt-8  font-bold text-3xl'> Profile Details</h1>
       <div className='flex justify-center mt-8'>
        <div className='-ml-20'>
        <img src='https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQMjYrFKl1JFRSYQRRxSJUEn4oQy-Xc2f6isP63tmq9sJXHCyjp18p-0sxXO-et4TbAaSOEFUxWkUry6Js' className='h-72 w-72   rounded-2xl'
        ></img></div>
        <div className='flex mt-20 '>
             */}
       {/* <h1 className='ml-8 mr-1 text-xl font-bold'>Username:</h1>
       <div className='mr-4 mt-1 border w-20 font-bold border-slate-900 h-8 '>{username}</div>
       <h1 className='mr-1 ml-2 mt-1 text-xl font-bold '>Email:</h1>
       <h1 className='mt-1 border border-slate-900 h-8 w-28'>{email}</h1> 
       
       </div>
    

       </div> */}




     {/* <h1 className='  mt-10 text-2xl ml-4'> Update Your Profile</h1>
    <form className='pb-10' onSubmit={updateProfile}>
        <input className="border border-slate-950 p-3  rounded-lg w-56 mt-4 ml-10" type="username" placeholder="Username" id="username" onChange={(e)=>setUsername(e.target.value)}  required />
        {/* <input className="border border-slate-950 p-3 rounded-lg w-56 mt-4 ml-2" type="email" placeholder="Email" id="email" onChange={(e)=>setEmail(e.target.value)} required /> */}
        {/* <button  className='bg-green-600 opacity-80 p-3 text-slate-50 uppercase hover:opacity-95 border rounded-lg w-56 ml-10'>Update Profile</button>    </form> */}
     {/* </div> */} 
     {/* <div className='flex justify-center'>
     <button onClick={logout} className='bg-green-600 opacity-80 p-3 text-slate-50 uppercase hover:opacity-95 border rounded-lg w-56 ml-10 mt-10 flex justify-center'>Logout</button>


    </div> */}
    <div className='flex justify-start pl-10 mt-10 mr-10 ml-20'>
    <div class="max-w-sm rounded overflow-hidden shadow-lg ">
    <img src='https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQMjYrFKl1JFRSYQRRxSJUEn4oQy-Xc2f6isP63tmq9sJXHCyjp18p-0sxXO-et4TbAaSOEFUxWkUry6Js' className='h-72 w-96   rounded-2xl'></img>

  <div class="px-6 py-4">
    <div class="font-bold text-xl text-white mb-2 ml-28">Profile Details</div>
    <div className='flex mt-4'>
    <h1 className='ml-8 mr-1 text-white  text-lg font-bold '>Username:</h1>
   <h1 className=' mt-1 mb-1 text-white '>{username}</h1>
   </div>
   <div className='flex mt-4'>
    <h1 className='ml-8 mr-1 text-lg text-white font-bold'>Email:</h1>
   <h1 className=' mt-1 mb-1 text-white'>{email}</h1>
   </div>
   <hr className='font-bold h-1 bg-black opacity-50'></hr>
   <div className='mt-4 ml-16 text-xl font-bold'>
    <h1 className='ml-10 text-white'>Update Profile</h1>
   </div>
   <div className='flex'>
   <form className=' flex' onSubmit={updateProfile}>
        <input className="border border-slate-950 p-3 h-10 rounded-lg w-40 mt-4 " type="username" placeholder="Username" id="username" onChange={(e)=>setUsername(e.target.value)}  required />
        {/* <input className="border border-slate-950 p-3 rounded-lg w-56 mt-4 ml-2" type="email" placeholder="Email" id="email" onChange={(e)=>setEmail(e.target.value)} required /> */}
        <button  className='bg-green-600 p-2  text-slate-50 uppercase hover:opacity-95 border rounded-lg w-40 h-10 ml-2 mt-4'>Update Profile</button>    </form>
   </div>
   <div>
   <button onClick={logout} className='bg-green-600  p-3 text-slate-50 uppercase hover:opacity-95 border rounded-lg w-56 ml-10 mt-10 flex justify-center'>Logout</button>

   </div>
   
  </div>
 
</div>
</div>
   </div>
  )
}
