// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const NewsImageDisplay = () => {
//     const [base64Image, setBase64Image] = useState('');

//     //   useEffect(() => {
//     //     const fetchData = async () => {
//     //       const newsOptions = {
//     //         method: 'GET',
//     //         url: 'https://cricbuzz-cricket.p.rapidapi.com/news/v1/index',
//     //         headers: {
//     //           'X-RapidAPI-Key': '3ff2745e58msh122fc74545f53b2p179ce0jsnc6119df0ab72',
//     //           'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com',
//     //         },
//     //       };

//     //       try {
//     //         const newsResponse = await axios.request(newsOptions);
//     // console.log(newsResponse?.data)
//     //         console.log(newsResponse?.data?.storyList[0]?.story?.imageId)
//     //         const imageId = newsResponse?.data?.storyList[0]?.story?.imageId;
//     //         const imageOptions = {
//     //           method: 'GET',
//     //           url: `https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${imageId}/i.jpg`,
//     //           params: {p: 'de', d: 'high'},
//     //           headers: {
//     //             'X-RapidAPI-Key': '3ff2745e58msh122fc74545f53b2p179ce0jsnc6119df0ab72',
//     //             'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com',
       
//     //           },
//     //         };

//     //         const imageResponse = await axios.request(imageOptions);  
                
//     //         // setBase64Image(imageResponse);
//     // console.log(base64Image);
//     //       } catch (error) {
//     //         console.error('Error fetching data:', error);
//     //       }
//     //     };

//     //     fetchData();
//     //   }, []); // Empty dependency array to run the effect only once when the component mounts

//   return (
//     <div className="image-container">
//         {/* {base64Image} */}
//         <img src="https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c231889/i.jpg" alt="Base64 Image" />
//          {/* {base64Image && <img src={base64Image} alt="Base64 Image" />} */}
//     </div>
//   );
// };

// export default NewsImageDisplay;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsAndImageComponent = () => {
  const [imageId, setImageId] = useState(null);
  const [newsData, setNewsData] = useState(null);
  const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       // Fetch news data
//       const newsOptions = {
//         method: 'GET',
//         url: 'https://cricbuzz-cricket.p.rapidapi.com/news/v1/index',
//         headers: {
//           'X-RapidAPI-Key': '3ff2745e58msh122fc74545f53b2p179ce0jsnc6119df0ab72',
//           'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com',
//         },
//       };

//       try {
//         const newsResponse = await axios.request(newsOptions);
//         const firstStory = newsResponse?.data?.storyList[0]?.story;

//         // Get the image ID from the first news story
//         const storyImageId = firstStory?.imageId;
//         setImageId(storyImageId);

//         // Set the news data in the component state if needed
//         setNewsData(newsResponse.data);
//       } catch (newsError) {
//         console.error('Error fetching news data:', newsError);
//         setError('Error fetching news data. Please try again later.');
//       }

//       // Fetch image using the obtained image ID
//       if (imageId) {
//         const imageOptions = {
//           method: 'GET',
//           url: `https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${imageId}/i.jpg?p=de&d=high`,
//           headers: {
//             'X-RapidAPI-Key': '3ff2745e58msh122fc74545f53b2p179ce0jsnc6119df0ab72',
//             'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com',
//           },
//         };

//         try {
//           const imageResponse = await axios.request(imageOptions);
//           console.log('Image data:', imageResponse.data);
//           // Do something with the image data if needed
//         } catch (imageError) {
//           console.error('Error fetching image data:', imageError);
//           setError('Error fetching image data. Please try again later.');
//         }
//       }
//     };

//     fetchData();
//   }, [imageId]); // Depend on imageId to trigger fetching image when it's available

  return (
    <div>
        
  <div class="flex">
    <div class="w-3/4 bg-gray-300 p-4 ml-40">
        
      <p class="text-xl">This is the 3/4th width column.</p>
    </div>
    <div class="w-1/4 bg-gray-400 p-4 mr-40">
      <p class="text-xl">This is the 1/4th width column.</p>
    </div>
  </div>

      <h2>Latest News</h2>
      
    
      {/* {imageId && (
        <img
          src={`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${imageId}/i.jpg?p=de&d=high`}
          alt="News Image"
          className='h-20 w-20'
        />
      )} */}
    </div>

  );
};

export default NewsAndImageComponent;
