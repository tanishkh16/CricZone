import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
const backgroundImageUrl = 'ground.jpg';



export default function IPL() {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover', // You can adjust these properties based on your image and design
        backgroundPosition: 'center',
      };
    
  return (
    <div className='bg-gray-200 pt-8 pb-20' style={backgroundStyle}>
      <div  className='flex justify-center mt-2'>
      <Navbar/>
      </div>
      <div className='ml-40 pt-10 mt-4 bg-white mr-40 pb-10'>
        <h1 className='font-bold text-2xl pl-8 pb-2 font-serif'>Cricket Teams</h1>
       
       <Link to='/team'>
     <button className='text-md ml-10 mt-8 mb-4 border p-2 rounded-xl  opacity-95 text-black hover:underline'>International</button>
    </Link>
        <button className='text-md border p-2 rounded-xl  opacity-95 bg-green-600 text-white hover:underline ml-10'>Leagues</button>
        <hr className='bg-gray-200 ml-10  h-1'></hr>
        <div class="grid grid-cols-3 gap-10 ml-20 mt-10">
  <div class="col-span-1 gap-10">
  <div class="mb-8 flex items-center">
  <h1 class="flex items-center font-bold text-lg text-blue-600 ">
    <img class='h-10 w-16 mr-2 ' src='mi.jpeg' alt='India'></img>
    Mumbai Indians
  </h1>
</div>

<div> <hr className='font-bold h-2 pb-4'></hr></div>

<div class="mb-8 flex items-center">
  <h1 class="flex items-center font-bold text-md text-purple-600 ">
    <img class='h-10 w-16 mr-2 ' src='kkr.jpeg' alt='India'></img>
    Kolkata Knight Riders
  </h1>
</div>

<div> <hr className='font-bold h-2 pb-4'></hr></div>

<div class="mb-8 flex items-center">
  <h1 class="flex items-center font-bold text-lg text-pink-400">
    <img class='h-10 w-16 mr-2 ' src='rr.jpeg' alt='India'></img>
   Rajasthan Royals
  </h1>
</div>

<div> <hr className='font-bold h-2 pb-4'></hr></div>  


<div class="mb-8 flex items-center">
  <h1 class="flex items-center font-bold text-lg text-pink-700">
    <img class='h-10 w-16 mr-2 ' src='pun.jpeg' alt='India'></img>
    Punjab Kings
  </h1>
</div>

<div> <hr className='font-bold h-2 pb-4'></hr></div>

<div class="mb-8 flex items-center">
  <h1 class="flex items-center font-bold text-lg text-blue-800 ">
    <img class='h-10 w-16 mr-2 ' src='guj.jpeg' alt='India'></img>
    Gujarat Titans
  </h1>
</div>

<div> <hr className='font-bold h-2 pb-4'></hr></div>










  </div>

  <div class="col-span-1">
  <div class="mb-8 flex items-center">
  <h1 class="flex items-center font-bold text-lg text-yellow-500 ">
    <img class='h-10 w-16 mr-2 ' src='csk.jpeg' alt='India'></img>
    Chennai Super Kings
  </h1>
</div>

<div> <hr className='font-bold h-2 pb-4'></hr></div>
    
    
<div class="mb-8 flex items-center">
  <h1 class="flex items-center font-bold text-md text-red-500 ">
    <img class='h-10 w-16 mr-2 ' src='rcb.jpeg' alt='India'></img>
    Royal Challenegers Bangalore
  </h1>
</div>

<div> <hr className='font-bold h-2 pb-4'></hr></div>



<div class="mb-8 flex items-center">
  <h1 class="flex items-center font-bold text-md text-orange-500">
    <img class='h-10 w-16 mr-2 ' src='srh.jpg' alt='India'></img>
    Sunrisers Hyderabad
  </h1>
</div>

<div> <hr className='font-bold h-2 pb-4'></hr></div>



<div class="mb-8 flex items-center">
  <h1 class="flex items-center font-bold text-lg text-sky-700 ">
    <img class='h-10 w-16 mr-2 ' src='dc.jpeg' alt='India'></img>
    Delhi Capitals
  </h1>
</div>

<div> <hr className='font-bold h-2 pb-4'></hr></div>



<div class="mb-8 flex items-center">
  <h1 class="flex items-center font-bold text-md text-teal-600 ">
    <img class='h-10 w-16 mr-2 ' src='lsg.jpeg' alt='India'></img>
    Lucknow Super Giants
  </h1>
</div>

<div> <hr className='font-bold h-2 pb-4'></hr></div>



   





  




  </div>

 
  <div class="col-span-1">
    <div className='mr-2'><img src="ipl.jpeg" className='h-96 w-96'></img></div>
  </div>
</div>

      </div>


    </div>
  )
}
