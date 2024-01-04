import React, { useEffect ,useState} from 'react'
import Navbar from './Navbar'

export default function Premium() {
  return (
    <div>
       <div className='flex justify-center mt-2'>
                <Navbar />
              
            </div>
            <div>
              This contain premium content in it.
            </div>
    </div>
  )
}
