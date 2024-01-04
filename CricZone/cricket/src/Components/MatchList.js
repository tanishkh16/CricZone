// import React from 'react'
// import Slider from "react-slick";
// // import "~slick-carousel/slick/slick.css"; 
// // import "~slick-carousel/slick/slick-theme.css";


// export default function MatchList() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   };
//   const data=[
//     {
//         date:'Fri, 24 NOV 2023',match:'ICC Mens T20 World Cup Africa Region Qualifier 2023',team:'Kenya vs Tanzania, 8th Match',time:'1:00 PM'
//     },
//     {
//         date:'Fri, 25 NOV 2023',match:'ICC Mens T20 World Cup Africa Region Qualifier 2023',team:'Kenya vs Tanzania, 8th Match',time:'1:00 PM'

//     },
//     {
//         date:'Fri, 26 NOV 2023',match:'ICC Mens T20 World Cup Africa Region Qualifier 2023',team:'Kenya vs Tanzania, 8th Match',time:'1:00 PM'

//     }
// ]
//   return (
//     <div className='w-3/4 m-auto flex '>
//       <div className='mt-20 flex'>
//       <Slider {...settings}>
//       {data.map((item,index)=>(
// <div className='bg-white h-[450px] text-black rounded-xl'>
//   <div className='h-56 rounded-xl bg-indigo-500 flex justify-center items-center'>
//     <img className='h-44 w-44 rounded-full'></img>

//   </div>
//   <div className='flex flex-col justify-center items-center gap-4 p-4'>
//     <p className='text-xl font-semibold'>{item.date}</p>
//     <p>{item.match}</p>
//     <button>readmore</button>

//   </div>

// </div>
//       ))

//       }
//       </Slider>
//       </div>
//     </div>
//   )
// }

import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// const CustomPrevArrow = ({ onClick }) => (
//   <button
//     className="absolute top-1/2 z-10 mt-2 -left-1  transform -translate-y-1/2 bg-gray-500 text-white px-3 py-1 rounded-md"
//     onClick={onClick}
//   >
//     Prev
//   </button>
// );

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-500 text-white px-3 py-1 rounded-md"
    onClick={onClick}
  >
    Next
  </button>
);

export default function MatchList() {
  const match = [
    { id: 1, content: 'Item 1' },
    { id: 2, content: 'Item 2' },
    { id: 3, content: 'Item 3' },
    { id: 4, content: 'Item 4' },
    { id: 5, content: 'Item 5' },
    { id: 6, content: 'Item 6' },
  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    // prevArrow: <CustomPrevArrow />,
  };
 
  return (
    <div className="mx-auto max-w-2xl ">
    <Slider {...settings}>
      {Array.isArray(match) ? (
        match.map((item) => (
          <div className='bg-white  border  '>
            <div className='flex mt-2 ml-2'>
              <h1 className='mr-10 text-xs '>
                hello . hello
              </h1>
            </div>
            <div className='flex justify-around mt-8 '>
              <h1 className='flex text-s '>hello</h1>
              <h1 className='text-xs'>
                hello
              </h1>
            </div>
            <div className='flex justify-around ml-2'>
              <h1 className='flex text-s '></h1>
              <h1 className='text-xs'>
                
              </h1>
            </div>
            <h1 className='mt-4 text-xs text-blue-600 hover:text-blue-600 cursor-pointer ml-2'>
              
            </h1>
          </div>
        ))
      ) : (
        <div>Error: Data is not in the expected format</div>
      )}
    </Slider>
  </div>
);
};
  
