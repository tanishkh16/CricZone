import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



export default function Navbar() {
  const navigate = useNavigate();
  const [token, setToken] = useState(""); // Create a piece of state, and initialize it to null
  const fetchData = async () => {
    try {
      // Retrieve the access token from the cookie
      const accessToken = document.cookie.replace(/(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
      const res = await axios.get("http://localhost:5000/getuser", {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Include the access token in the Authorization header
        },
      });
      setToken(accessToken); // Update the piece of state storing the access token
      console.log("navbar",res);
      // navigate('/profile');
    } catch (err) {
      console.log(err);
      // navigate('/profile');
    }
  };

 useEffect(()=>{
    fetchData();
 },[token])


  return (
    <div className='bg-green-600 -mx-4'>
      <nav>
        <ul className="flex px-20">
          <li><Link to='/'><img src="cricbuzz.png" className='h-10 w-20'></img></Link></li>
          {/* <div className="hover:bg-gray-400 hover:bg-opacity-70 transition ">
            <li className="my-2 mx-4  cursor-pointer  text-base font-serif text-slate-50 ">
              <a href="#home">News</a></li>
          </div> */}
          <div className="hover:bg-gray-400 hover:bg-opacity-70 transition">
            <li className=" my-2 mx-4 cursor-pointer text-base font-serif text-slate-50 ">
              <Link to='/schedule'>Schedule</Link></li>
          </div>
          <div className="hover:bg-gray-400 hover:bg-opacity-70 transition " >
            <li className=" my-2 mx-4 cursor-pointer text-base font-serif text-slate-50 ">
              <Link to='/premium'>Premium</Link></li>
          </div>
          <div className="hover:bg-gray-400 hover:bg-opacity-70 transition">
            <li className=" my-2 mx-4 cursor-pointer text-base font-serif text-slate-50 ">
              <Link to='/news'>News</Link></li>
          </div>
          <div className="hover:bg-gray-400 hover:bg-opacity-70 transition " >
            <li className=" my-2 mx-4 cursor-pointer text-base font-serif text-slate-50 ">
              <Link to='/team'>Teams</Link></li>
          </div>
          <div className="hover:bg-gray-400 hover:bg-opacity-70 transition">
            <li className=" my-2 mx-4 cursor-pointer text-base font-serif text-slate-50 ">
              <Link to='/ranking'>Rankings</Link></li>
          </div>
          <div className="h-auto w-40 text-center">
            <li className=" my-2 mx-4 cursor-pointer text-base font-serif text-slate-950 rounded-2xl bg-slate-50  ">
              <Link to='/subscribe'>Cricbuzz Plans</Link></li>
          </div>
          <div className="hover:bg-gray-400 hover:bg-opacity-70 transition">
            {token === "" ?
              (<li className=" my-2 mx-4 cursor-pointer text-base font-serif text-slate-50 hover:underline">
                <Link to='/login'>Login</Link></li>) 
                :( <Link to='/profile'><img className="h-10 w-10" src="user.jpeg"></img></Link>)}
          </div>
        </ul>
      </nav>
    </div>
  )
}
