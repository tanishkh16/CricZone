import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const backgroundImageUrl = 'ground.jpg';


export default function Team() {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover', // You can adjust these properties based on your image and design
        backgroundPosition: 'center',
      };
    
  return (
    <div className='bg-gray-200 pt-10 pb-20' style={backgroundStyle}>
      <div  className='flex justify-center mt-2'>
      <Navbar/>
      </div>
      <div className='ml-40 pt-10 mt-4 bg-white mr-40 pb-10'>
        <h1 className='font-bold text-2xl pl-8 pb-2 font-serif'>Cricket Teams</h1>
       
        <button className='text-md ml-10 mt-8 mb-4 border p-2 rounded-xl bg-green-600 opacity-95 text-white hover:underline'>International</button>
        <Link to='/ipl'>
        <button className='text-md border p-2 rounded-xl  opacity-95 text-black hover:underline ml-10'>Leagues</button>
       </Link>
        <hr className='bg-gray-200 ml-10  h-1'></hr>
        <div class="grid grid-cols-3 gap-10 ml-20 mt-10">
  <div class="col-span-1 gap-10">
  <div class="mb-4 flex items-center">
  <h1 class="flex items-center font-bold text-xl ">
    <img class='h-10 w-16 mr-2 ' src='india.png' alt='India'></img>
    India
  </h1>
</div>

<div> <hr className='font-bold h-2 pb-8'></hr></div>

<div class="mb-8 flex items-center">
  <h1 class="flex items-center font-bold text-xl ">
    <img class='h-10 w-16 mr-2 ' src='australia.png' alt='India'></img>
    Australia
  </h1>
</div>

<div> <hr className='font-bold h-2 pb-8'></hr></div>

<div class="mb-8 flex items-center">
  <h1 class="flex items-center font-bold text-xl ">
    <img class='h-10 w-16 mr-2 ' src='eng.png' alt='India'></img>
   ENGLAND
  </h1>
</div>

<div> <hr className='font-bold h-2 pb-8'></hr></div>  


<div class="mb-8 flex items-center">
  <h1 class="flex items-center font-bold text-xl ">
    <img class='h-10 w-16 mr-2 ' src='nz.png' alt='India'></img>
    NewZealand
  </h1>
</div>

<div> <hr className='font-bold h-2 pb-8'></hr></div>

<div class="mb-8 flex items-center">
  <h1 class="flex items-center font-bold text-xl ">
    <img class='h-10 w-16 mr-2 ' src='z.jpeg' alt='India'></img>
    Zimbabwe
  </h1>
</div>

<div> <hr className='font-bold h-2 pb-8'></hr></div>

<div class="mb-8 flex items-center">
  <h1 class="flex items-center font-bold text-xl ">
    <img class='h-10 w-16 mr-2 ' src='ban.jpeg' alt='India'></img>
    Bangladesh
  </h1>
</div>

<div> <hr className='font-bold h-2 pb-8'></hr></div>









  </div>

  <div class="col-span-1">
  <div class="mb-8 flex items-center">
  <h1 class="flex items-center font-bold text-xl ">
    <img class='h-10 w-16 mr-2 ' src='sa.png' alt='India'></img>
    South Africa
  </h1>
</div>

<div> <hr className='font-bold h-2 pb-8'></hr></div>
    
    
<div class="mb-8 flex items-center">
  <h1 class="flex items-center font-bold text-xl ">
    <img class='h-10 w-16 mr-2 ' src='sl.jpeg' alt='India'></img>
    SriLanka
  </h1>
</div>

<div> <hr className='font-bold h-2 pb-8'></hr></div>



<div class="mb-8 flex items-center">
  <h1 class="flex items-center font-bold text-xl ">
    <img class='h-10 w-16 mr-2 ' src='ire.png' alt='India'></img>
    Ireland
  </h1>
</div>

<div> <hr className='font-bold h-2 pb-8'></hr></div>



<div class="mb-8 flex items-center">
  <h1 class="flex items-center font-bold text-xl ">
    <img class='h-10 w-16 mr-2 ' src='wi.jpeg' alt='India'></img>
    West Indies
  </h1>
</div>

<div> <hr className='font-bold h-2 pb-8'></hr></div>



<div class="mb-8 flex items-center">
  <h1 class="flex items-center font-bold text-xl ">
    <img class='h-10 w-16 mr-2 ' src='afg.png' alt='India'></img>
    Afghanistan
  </h1>
</div>

<div> <hr className='font-bold h-2 pb-8'></hr></div>

<div class="mb-8 flex items-center">
  <h1 class="flex items-center font-bold text-xl ">
    <img class='h-10 w-16 mr-2 ' src='pak.jpeg' alt='India'></img>
    Pakistan
  </h1>
</div>

<div> <hr className='font-bold h-2 pb-4'></hr></div>
   





  




  </div>

 
  <div class="col-span-1">
    <div className='mr-4'><img src="odi.webp" className='h-96'></img></div>
  </div>
</div>

      </div>


    </div>
  )
}
