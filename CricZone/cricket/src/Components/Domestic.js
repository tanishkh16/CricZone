import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
const backgroundImageUrl = 'fixture.jpeg';


export default function Domestic() {



  const [option,setOption] = useState([]);
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover', // You can adjust these properties based on your image and design
    backgroundPosition: 'center',
  };

  const data=[

    {
        date:'Fri, 24 NOV 2023',match:'ICC Mens T20 World Cup Africa Region Qualifier 2023',team:'Kenya vs Tanzania, 8th Match',time:'1:00 PM'
    },
    {
        date:'Fri, 25 NOV 2023',match:'ICC Mens T20 World Cup Africa Region Qualifier 2023',team:'Kenya vs Tanzania, 8th Match',time:'1:00 PM'

    },
    {
        date:'Fri, 26 NOV 2023',match:'ICC Mens T20 World Cup Africa Region Qualifier 2023',team:'Kenya vs Tanzania, 8th Match',time:'1:00 PM'

    }
]

const getSchedules = async () => {
  const options = {
      method: 'GET',
      url: 'https://cricbuzz-cricket.p.rapidapi.com/schedule/v1/domestic',
      headers: {
        'X-RapidAPI-Key': 'e5b69f846emshcf242c44657e58dp13d1d8jsn11732e5f9182',
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        // console.log("e",response.data)
      //   console.log(response.data.matchScheduleMap[0].scheduleAdWrapper.matchScheduleList[0].seriesName);
        const responseData = response?.data?.matchScheduleMap;
        const filteredOption = responseData.filter(
          (_, index) => index !== 1 && index !== 5
        );
        setOption(filteredOption);

        
       
    } catch (error) {
        console.error(error);
    }
}
// Function to convert time zone to IST (with only hour and minute)
const convertToIST = (timestamp) => {
const timestampMilliseconds = parseInt(timestamp, 10);

if (isNaN(timestampMilliseconds) || !isFinite(timestampMilliseconds)) {
return "Invalid timestamp";
}

const date = new Date(timestampMilliseconds);
if (isNaN(date.getTime())) {
return "Invalid date";
}

const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
const istTime = new Date(date.getTime() + istOffset);

const formattedISTTime = istTime.toLocaleTimeString('en-US', { hour12: false, timeZone: 'Asia/Kolkata' });
return formattedISTTime;
};

useEffect(() => {
  getSchedules();
},[option])
   
    
  return (
    <div  className="pt-2" style={backgroundStyle}>
               <div className='flex justify-center mt-2'>
        <Navbar/>
        </div>
        <div className='mt-4 ml-60 mr-60 bg-slate-100 opacity-90 '>
        <div className='flex  '>
           <button className='mt-2  ml-4 mr-10'>Curent Matches</button>
           <button className='mt-2 mr-10'>Curent & Future Series</button>
           <button className='mt-2 mr-10'>Matches By Day</button>
           
          
        </div>
        <hr className='font-bold mt-4 text-2xl h-1 bg-slate-300'></hr>
        <h1 className='mt-10 ml-4 font-bold text-2xl'>
          Cricket  Schedule
        </h1>
        <div className='flex mt-4'>
            <button className='rounded-xl border mr-10 ml-10 w-32 bg-gray-200 opacity-90 '><Link to ='/schedule'>International</Link></button>
            <button className='rounded-xl border mr-10 w-32 bg-green-600 opacity-90 text-slate-100  '><Link to='/domestic'>Domestic</Link></button>
            <button className='rounded-xl border mr-10 w-32 bg-gray-200 opacity-90 '><Link to='/leagues'>Leagues</Link></button>
            <button className='rounded-xl border mr-10 w-32 bg-gray-200 opacity-90 '><Link to='/women'>Women</Link></button>
        </div>
        {Array.isArray(option) ? (
    option?.map((item, index) => (
        <>
                   <div className='mt-4 bg-slate-300'>
<h1 className='bg-slate-300 ml-8 font-bold font-serif'>{item?.scheduleAdWrapper?.date}</h1>
                   </div>
                   <hr className='font-bold mt-2'></hr>
                   <div className="flex">
      <div className="flex-1 border p-4 text-sm font-bold ">
      {item?.scheduleAdWrapper?.matchScheduleList[0]?.seriesName}
      </div>
      <div className="flex-1 border p-4 w-1/2 text-xs">
      <h1 className='ml-2 text-sm font-bold'>{item?.scheduleAdWrapper?.matchScheduleList[0]?.matchInfo[0]?.team1?.teamName} vs {item?.scheduleAdWrapper?.matchScheduleList[0]?.matchInfo[0]?.team2?.teamName} {item?.scheduleAdWrapper?.matchScheduleList[0]?.matchInfo[0]?.matchDesc}</h1>
      <h1 className='ml-2'>{item?.scheduleAdWrapper?.matchScheduleList[0]?.matchInfo[0]?.venueInfo.ground},{item?.scheduleAdWrapper?.matchScheduleList[0]?.matchInfo[0]?.venueInfo.city}</h1>
      </div>
      <div className="flex-1 border p-4 text-sm w-1/4">
        <h1 className='font-bold ml-5'>
      {convertToIST(item?.scheduleAdWrapper?.matchScheduleList[0]?.matchInfo[0]?.venueInfo.timezone)} IST
      </h1></div>
    </div>
        </>
        ))
        ) : (
          <div>Error: Data is not in the expected format</div>
        )}
       

      </div>
      
    </div>
  )
}
