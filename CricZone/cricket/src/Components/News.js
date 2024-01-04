import React, { useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import { useState } from 'react';
import { set } from 'mongoose';
const backgroundImageUrl = 'news1.png';

export default function News() {
    const [option, setOption] = useState([])
    const [imageId, setImageId] = useState(null);



    const handleClick = async () => {
        const options = {
            method: 'GET',
            url: 'https://cricbuzz-cricket.p.rapidapi.com/news/v1/index',
            headers: {
                'X-RapidAPI-Key': '3ff2745e58msh122fc74545f53b2p179ce0jsnc6119df0ab72',
                'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
            }
        };
        try {
            const response = await axios.request(options);
            console.log(response.data.storyList);
            const filteredOption = response.data.storyList.filter(
                (_, index) => index !== 1 && index !== 6
              );
        
              setOption(filteredOption);
            setImageId(response?.data?.storyList)
            console.log("option", option);
        } catch (error) {
            console.error(error);
        }
    }

    // useEffect(() => {
    //     handleClick();
    // }, [])
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'contain', // You can adjust these properties based on your image and design
        backgroundPosition: 'center',
    };
    return (
        <div className=' pt-10 ' style={backgroundStyle}>

            <div className='flex justify-center mt-2'>
                <Navbar />
            </div>
            <div className='bg-white opacity-90 ml-40 mr-40 mt-4 pb-10'>
                <h1 className='text-xl font-bold ml-2 pt-8'>Cricket News and Editorials</h1>
                <hr className='mt-2 border border-gray-300'></hr>


                <div className="flex flex-col mt-4">
  {Array.isArray(option) ? (
    option?.map((item, index) => (
       
      <div key={index} className="w-full flex bg-white opacity-90 p-4 mb-4">
        {/* Image Column */}
        <div className="w-1/3">
        
        <img
          src="news.jpg"
          className='h-40 w-80'
        />
          </div>

        {/* Text Column */}
        <div className="w-2/3 ml-4 flex-col">
          <h1 className="text-sm text-gray-600">{item?.story?.storyType} {item?.story?.context}</h1>
          <h1 className="text-lg mt-2 mb-2 font-serif font-bold text-black">{item?.story?.hline}</h1>
          <h1 className="text-md">{item?.story?.intro}</h1>
        </div>
      </div>
    ))
  ) : (
    <div>Error: Data is not in the expected format</div>
  )}


</div>



    



            </div>

           
        </div>
    )
}
