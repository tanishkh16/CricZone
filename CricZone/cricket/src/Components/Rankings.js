import React, { useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useState } from 'react'
const backgroundImageUrl = 'cr.jpeg';



export default function Rankings() {
    const [format,setFormat]=useState('Test')
    const[option,setOption]=useState([])
    const [image,setImage]=useState('')
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover', // You can adjust these properties based on your image and design
        backgroundPosition: 'center',
      };
    const test=async()=>{
        setFormat('Test')
        const options = {
          method: 'GET',
          url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/teams',
          params: {formatType: 'test'},
          headers: {
            'X-RapidAPI-Key': '3ff2745e58msh122fc74545f53b2p179ce0jsnc6119df0ab72',
            'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
          }
        };
        
        try {
            const response = await axios.request(options);
            console.log(response?.data)
            setOption(response?.data?.rank)
            
            
                
        } catch (error) {
            console.error(error);
        }
    }
    // useEffect(()=>{
    //     handleClick();
    // },[])

    const odi=async()=>{
        setFormat('ODI')
           const options = {
          method: 'GET',
          url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/teams',
          params: {formatType: 'odi'},
          headers: {
            'X-RapidAPI-Key': '3ff2745e58msh122fc74545f53b2p179ce0jsnc6119df0ab72',
            'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
          }
        };
        
        try {
            const response = await axios.request(options);
            setOption(response?.data?.rank)
            console.log(option)
            
        } catch (error) {
            console.error(error);
        }

    }
    const t20=async()=>{ 
        setFormat('T20I')
           const options = {
          method: 'GET',
          url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/teams',
          params: {formatType: 't20'},
          headers: {
            'X-RapidAPI-Key': '3ff2745e58msh122fc74545f53b2p179ce0jsnc6119df0ab72',
            'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
          }
        };
        
        try {
            const response = await axios.request(options);
            setOption(response?.data?.rank)
            console.log(option)
            
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <div className='bg-gray-200 pt-2 pb-20' style={backgroundStyle}>
        <div  className='flex justify-center mt-2 '>
      <Navbar/>
      </div>
      <div className='bg-white mr-40 ml-40'>
        
        <div className='mt-2 pt-2 pl-8 '>
            <h1 className='font-bold text-2xl'>ICC Cricket Rankings - Men's {format} Team </h1>
        </div>
        <button onClick={test} className='ml-10 mt-10 border p-1 rounded-xl text-white bg-green-600 font-bold w-20 hover:underline'>Test</button>
        <button onClick={odi} className='ml-10 mr-10 border p-1 rounded-xl text-white bg-green-600 font-bold w-20 hover:underline'>ODI</button>
        <button onClick={t20} className=' mr-20 border p-1 rounded-xl text-white bg-green-600 font-bold w-20 hover:underline'>T20I</button>
        <hr className='mt-4 font-bold'></hr>
      <div className='pl-8 mt-10  '>
      <div class="grid grid-cols-4 gap-8">
       
<div className='flex'><h1 className='text-md font-bold'>Position</h1></div>
<div><h1 className='text-md font-bold'>Team</h1></div>
<div><h1 className='text-md font-bold'>Ratings</h1></div>
<div><h1 className='text-md font-bold'>Points</h1></div>
{/* {
option.map((item)=>(
    <>
    <div className=''>{item?.rank[0]?.rank}</div>
    <div className=''>{item?.rank[0]?.name}</div>
    <div className=''>{item?.rank[0]?.rating}</div>
    <div className=''>{item?.rank[0]?.points}</div>

   </>
    ))
    } */}

{Array.isArray(option) ? (
              option.map((item) => (
                <>
                  <div className=''><img className='h-4 mt-1' src={image}></img>{item?.rank}</div>
                  <div className=''>{item?.name}</div>
                  <div className=''>{item?.rating}</div>
                  <div className=''>{item?.points}</div>
                </>
              ))
            ) : (
              <div>Error: Data is not in the expected format</div>
            )}
</div> 
      </div>
      </div>
    </div>
  )
}
