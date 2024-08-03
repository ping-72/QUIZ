import React from 'react'
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// '/dbms/practice.attempt/'
const Attempt = () => {


     return (
          <div className='items-center mt-16'>
               <h1>Enter the Arena</h1>
               <Link to="/dbms/practice" >
                    <Button className='bg-blue-300 rounded m-4 hover:bg-blue-500' >Start</Button>
               </Link>
               {/* <Button onClick={handleStart}>Start</Button> */}
          </div>
     )
}

export default Attempt

