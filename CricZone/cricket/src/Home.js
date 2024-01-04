import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';



const backgroundImageUrl = 'https://images.unsplash.com/photo-1512719994953-eabf50895df7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D';


export default function Home() {
  const [option, setOption] = useState([])
  const [plan,setPlan]=useState([])
  const [result,setResult]=useState([])
  const [imageId, setImageId] = useState(null);
  const [match,setMatch]=useState([])
  const [newMatch,setNewMatch]=useState([])
  const [nextMatch,setNextMatch]=useState([])
  const [lastMatch,setLastMatch]=useState([])
  const [image,setImage]=useState(null)
  const [subscriptionStatus, setSubscriptionStatus] = useState(false);

  const matches=async()=>{
const options = {
  method: 'GET',
  url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent',
  headers: {
    'X-RapidAPI-Key': '3ff2745e58msh122fc74545f53b2p179ce0jsnc6119df0ab72',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  }
};

try { 
	const response = await axios.request(options);
	console.log(response.data.typeMatches[0].seriesMatches);
  setMatch(response.data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches) 
  setNewMatch(response.data.typeMatches[0].seriesMatches[2].seriesAdWrapper?.matches)
  setNextMatch(response.data.typeMatches[0].seriesMatches[3].seriesAdWrapper?.matches)
  setLastMatch(response.data.typeMatches[0].seriesMatches[4].seriesAdWrapper?.matches)
  setImage(response.data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches)
  // console.log(response.data.typeMatches[0].seriesMatches[3].seriesAdWrapper?.matches[0].matchInfo?.team1?.imageId);
  // setNewMatch(response.data.typeMatches[0].seriesMatches[1].seriesAdWrapper.matches)
  
} catch (error) {
	console.error(error);
}
  }
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
    } catch (error) {
      console.error(error);
    }
  }

  const plans=async()=>{
const options = {
  method: 'GET',
  url: 'https://cricbuzz-cricket.p.rapidapi.com/news/v1/topics/349',
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
  )
  setPlan(filteredOption);
  setImageId(response?.data?.storyList)
} catch (error) {
	console.error(error);
}
  }

  const results=async()=>{
    const options = {
      method: 'GET',
      url: 'https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/40381/scard',
      headers: {
        'X-RapidAPI-Key': '3ff2745e58msh122fc74545f53b2p179ce0jsnc6119df0ab72',
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    } 
  }
  useEffect(() => {
    handleClick();
    plans();
    matches();
  },[])


  useEffect(() => {
    const token = Cookies.get('accessToken');
  const decodedToken = jwtDecode(token);
  console.log('Decoded Token:', decodedToken.id);
    const subscription=async()=>{
    try{
      const res = await axios.put(`http://localhost:5000/check/${decodedToken.id}`, { id: decodedToken.id },
        {
          headers: {
            "Content-Type": "application/json"
          }
        })

    }catch(err){
      console.log(err)
    }


    }
    subscription();
  },[])
 
  


  const backgroundStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'contain', // You can adjust these properties based on your image and design
    backgroundPosition: 'center',
};
  return (
    <div className='bg-gray-200 pb-10 pt-10' style={backgroundStyle}>
      <div  className='flex justify-center '>
      <Navbar/>
      </div>
      <div className='flex ml-52 h-32 mt-4'>
       




      {Array.isArray(match) ? (
            match.slice(0,1).map((item) => (
                <>
        <div className='bg-white  opacity-80 ml-2'>
          <div className='flex mt-2 ml-2'>
<h1 className='mr-10 text-xs text-black'> {item?.matchInfo?.matchDesc} . {item?.matchInfo?.seriesName}</h1> 
{/* <button className='bg-slate-700 text-white text-xs h-auto w-10 rounded-lg mt-1 mr-2'>{item.matchInfo.matchFormat
}</button> */}
        </div>
        <div className='flex justify-around mt-2  '>
          
        <h1 className='flex text-xs font-bold'>
        {image && (
          <img src={`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${item.matchInfo.team1.imageId}/i.jpg?p=de&d=high`} className='h-4 w-4 rounded-sm mr-2'></img>
        )}
          {item?.matchInfo.team1?.teamSName}</h1>
        <h1 className='text-xs font-bold'>{item?.matchScore?.team1Score?.inngs1?.runs}-{item?.matchScore?.team1Score?.inngs1.wickets} ({item.matchScore.team1Score.inngs1.overs})</h1>
        </div>
        <div className='flex justify-around mt-2  '>
        <h1 className='flex text-xs font-bold '><img src={`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${item.matchInfo.team1.imageId}/i.jpg?p=de&d=high`} className='h-4 w-4 rounded-sm mr-2'></img>
{item?.matchInfo.team2?.teamSName}</h1>
        <h1 className='text-xs font-bold'> {item?.matchScore?.team2Score?.inngs1?.runs}-{item?.matchScore?.team2Score.inngs1.wickets} ({item.matchScore.team2Score.inngs1.overs})</h1>
        </div>
        <h1 className='mt-4 text-xs text-blue-600 hover:text-blue-600 cursor-pointer ml-2'>{item.matchInfo.status}</h1>
        </div>
        </>
              ))
            ) : (
              <div>Error: Data is not in the expected format</div>
            )}

{Array.isArray(newMatch) ? (
            newMatch.slice(0,1).map((item) => (
                <>
        <div className='bg-white    opacity-80 ml-2'>
          <div className='flex mt-2 ml-2'>
<h1 className='mr-10 text-xs text-black'> {item?.matchInfo?.matchDesc} . {item?.matchInfo?.seriesName}</h1> 
{/* <button className='bg-slate-700 text-white text-xs h-auto w-10 rounded-lg mt-1 mr-2'>{item.matchInfo.matchFormat
}</button> */}
        </div>
        <div className='flex justify-around mt-2  '>
          
        <h1 className='flex text-xs font-bold'>
        {image && (
          <img src={`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${item.matchInfo.team1.imageId}/i.jpg?p=de&d=high`} className='h-4 w-4 rounded-sm mr-2'></img>
        )}
          {item?.matchInfo.team1?.teamSName}</h1>
        <h1 className='text-xs font-bold'>{item?.matchScore?.team1Score?.inngs1?.runs}-{item?.matchScore?.team1Score?.inngs1.wickets} ({item.matchScore.team1Score.inngs1.overs})</h1>
        </div>
        <div className='flex justify-around mt-2  '>
        <h1 className='flex text-xs font-bold '><img src={`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${item.matchInfo.team1.imageId}/i.jpg?p=de&d=high`} className='h-4 w-4 rounded-sm mr-2'></img>
{item?.matchInfo.team2?.teamSName}</h1>
        <h1 className='text-xs font-bold'> {item?.matchScore?.team2Score?.inngs1?.runs}-{item?.matchScore?.team2Score.inngs1.wickets} ({item.matchScore.team2Score.inngs1.overs})</h1>
        </div>
        <h1 className='mt-4 text-xs text-blue-600 hover:text-blue-600 cursor-pointer ml-2'>{item.matchInfo.status}</h1>
        </div>
        </>
              ))
            ) : (
              <div>Error: Data is not in the expected format</div>
            )}
            {Array.isArray(nextMatch) ? (
            nextMatch.slice(0,1).map((item) => (
                <>
        <div className='bg-white  opacity-80 ml-2'>
          <div className='flex mt-2 ml-2'>
<h1 className='mr-10 text-xs text-black'> {item?.matchInfo?.matchDesc} . {item?.matchInfo?.seriesName}</h1> 
{/* <button className='bg-slate-700 text-white text-xs h-auto w-10 rounded-lg mt-1 mr-2'>{item.matchInfo.matchFormat
}</button> */}
        </div>
        <div className='flex justify-around mt-2  '>
          
        <h1 className='flex text-xs font-bold'>
        {image && (
          <img src={`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${item.matchInfo.team1.imageId}/i.jpg?p=de&d=high`} className='h-4 w-4 rounded-sm mr-2'></img>
        )}
          {item?.matchInfo.team1?.teamSName}</h1>
        <h1 className='text-xs font-bold'>{item?.matchScore?.team1Score?.inngs1?.runs}-{item?.matchScore?.team1Score?.inngs1.wickets} ({item.matchScore.team1Score.inngs1.overs})</h1>
        </div>
        <div className='flex justify-around mt-2  '>
        <h1 className='flex text-xs font-bold '><img src={`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${item.matchInfo.team1.imageId}/i.jpg?p=de&d=high`} className='h-4 w-4 rounded-sm mr-2'></img>
{item?.matchInfo.team2?.teamSName}</h1>
        <h1 className='text-xs font-bold'> {item?.matchScore?.team2Score?.inngs1?.runs}-{item?.matchScore?.team2Score.inngs1.wickets} ({item.matchScore.team2Score.inngs1.overs})</h1>
        </div>
        <h1 className='mt-4 text-xs text-blue-600 hover:text-blue-600 cursor-pointer ml-2'>{item.matchInfo.status}</h1>
        </div>
        </>
              ))
            ) : (
              <div>Error: Data is not in the expected format</div>
            )}



        
        
        
        
        



        {/* <div className='bg-white ml-2'>
          <div className='flex mt-2 ml-2'>
<h1 className='mr-10 text-xs '> Australia Tour of India</h1> 
<button className='bg-slate-700 text-white text-xs h-auto w-10 rounded-lg mt-1 mr-2'>T20I</button>
        </div>
        <div className='flex justify-around mt-2  '>
        <h1 className='flex text-s '>AUS</h1>
        <h1 className='text-s'> 208-2 (20)</h1>
        </div>
        <div className='flex justify-around  '>
        <h1 className='flex text-s '>IND</h1>
        <h1 className='text-s'> 208-2 (19.5)</h1>
        </div>
        <h1 className='mt-4 text-xs text-blue-600 hover:text-blue-600 cursor-pointer ml-2'>Result</h1>
        </div> */}
    
      </div>
      <div className="flex opacity-80 bg-white ml-52 mt-2 mr-48">
      {/* 1st Column */}
      <div className="w-1/4 p-4 border">
        
        <div className='border-b border-bg-black text-green-600 text-serif first-letter:text-xl font-bold'>Latest News</div>
        {Array.isArray(option) ? (
    option?.map((item, index) => (
        
        <div className='text-sm border-b mt-2 cursor-pointer hover:underline'><h1 className='mb-2 font-sans'><Link to='/news'>{item?.story?.hline}</Link></h1></div>
        ))
        ) : (
          <div>Error: Data is not in the expected format</div>
        )}
      </div>

      {/* 2nd Column */}
      <div className="w-1/2 p-4 border">
        <div className='border-b'>
          <h1 className='text-green-600 font-bold text-serif text-xl mb-2 '>Cricbuzz Plus</h1>
          </div>
          {Array.isArray(plan) ? (
    plan?.slice(0,3).map((item, index) => (
          <div className='border-b cursor-pointer '>
  
        <img
          src="plan.jpeg"
          alt="News Image"
          className='h-40 w-96 mt-4'
        />
     <h1 className='text-xl mt-2 font-bold text-serif hover:underline'>{item?.story?.hline}</h1>
            <h1 className='mb-2 text-md opacity-80 hover:underline'>{item?.story?.intro}</h1>
          </div>
           ))
           ) : (
             <div>Error: Data is not in the expected format</div>
           )}
        
      </div>

      {/* 3rd Column */}
      <div className="w-1/6 p-4 ">
        
      </div>
      
    </div>
    </div>
  )
}
