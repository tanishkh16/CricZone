import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const backgroundImageUrl = 'subs.png';


export default function Subscription() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'left', // Set background position to left
    // Set the height to cover the entire viewport
    
    
    
     
  };
    
  return (
    <div className='bg-gray-200  pt-2 ' style={backgroundStyle}>
      <div  className='flex justify-center mt-2'>
      <Navbar/>
      </div>
      <div className=' ml-40 mr-40 mt-10 pb-4 bg-slate-100'>
<div className='flex justify-center'>
    <h1 className='font-bold text-2xl mt-4 font-serif'>Select Your Plan</h1>
</div>
<div className='flex justify-around mt-10'>
    <h1 className='border border-white  rounded  bg-white shadow-sm p-2 font-bold font-style: italic ' >Cricbuzz Plus Sony Liv<br>
    </br><h1 className='text-sm ml-4'>Annual Combo Plan</h1></h1>
    <h1 className='border p-2 border-green-600 bg-green-600 text-white hover:bg-green-500 cursor-pointer opacity-90 rounded-lg font-bold font-style: italic'>Cricbuzz Plans<br>
    </br>
    <h1 className='text-sm ml-2'>Annual Plan</h1></h1>
    <h1 className='border border-white rounded bg-white shadow-sm p-2 font-bold font-style: italic'>Cricbuzz Plus Times Prime<br>
    </br><h1 className='text-sm ml-8'>Annual Combo Plan</h1></h1>
</div>



      </div>
      <div className='ml-40 mr-40  bg-gray-300 pb-2  border'>
        <div className='flex justify-around mt-10 '>
            <div className='border border-white bg-white rounded'>
<h1 className=' text-slate-900 '><h1 className='font-bold text-md p-2'>Cricbuzz Originals</h1>
<h1 className='text-xs text-gray-500 font-sans p-2'>Expert Pick, Player Matchups, Differential Player,<br></br> Venue Details And All Other Stats for 200+ Matches
</h1>
<img  className="h-32 w-96 p-2" src="fantasy.webp"></img></h1>
            </div>

            <div className='border border-white bg-white rounded'>

            <h1 className=' text-slate-900 '><h1 className='font-bold text-md p-2'>Fantasy Handbook</h1>
<h1 className='text-xs text-gray-500 font-sans p-2'>Experience the ultimate entertainment for cricket<br></br> enthusiasts with our exclusive lineup of shows
</h1>
<img  className="h-32 w-96 p-2" src="original.webp"></img></h1>
            </div>
        </div>
      </div>

      <div className='ml-40 mr-40  bg-gray-300   border'>
        <div className='flex justify-around mt-10 pb-2'>
            <div className='border border-white bg-white rounded '>
<h1 className=' text-slate-900 '><h1 className='font-bold text-md p-2'>News</h1>
<h1 className='text-xs text-gray-500 font-sans p-2'>Read 100+ exclusive articles, interviews, reflections,<br></br> and inside stories
</h1>
<img  className="h-32 w-96 p-2" src="room.webp"></img></h1>
            </div>






            <div className='border border-white bg-white rounded'>

            <h1 className=' text-slate-900 '><h1 className='font-bold text-md p-2'>No Intrusive Ads</h1>
<h1 className='text-xs text-gray-500 font-sans p-2'>Enjoy a seamless Cricbuzz experience with no ads<br></br> except within Live Match Broadcast
</h1>
<img  className="h-32 w-96 p-2" src="ads.jpeg"></img></h1>
            </div>
        </div>
      </div>
      <div className='bg-slate-100 mr-40 ml-40 pt-8 pb-20'>
        <div className='flex justify-center'>
            <Link to='/payment'>
<button className='bg-green-500 opacity-90 p-3 hover:bg-green-600 text-white rounded '>Subscribe at INR 399/Year</button>
      </Link>
      </div>
      </div>
    </div>
  )
}
