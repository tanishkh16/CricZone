import React, { useEffect ,useState} from 'react'
import Navbar from './Navbar'

export default function Premium() {
  return (
    <div>
       <div className='flex justify-center mt-2'>
                <Navbar />
              
            </div>
            <div>
              Welcome Subscriber. This is the premium content for you all.
            </div>
    </div>
  )
}
