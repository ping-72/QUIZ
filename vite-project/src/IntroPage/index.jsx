import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ContestList from './[ContestList]/ContestList';

function Intropage() {
  return (
    <div className='m-0'>
      {/* Logo
      Banner 
      what do we offer
      signin        
      */}
      
      <div className='flex w-100vw  h-15 bg-blue-200  justify-between px-10 py-5 shadow-md items-center'>
            <div>
                <img src="../../public/logo.svg" width={100} height={100} alt="" />
                <h2 className='font-bold'>DBMS</h2>
            </div>
            <div className='!rounded-md h-10'>
                <Link to="/Dashboard" >
                    <Button className="!rounded-2xl bg-blue-500 hover:bg-blue-600 hover:text-white focus:ring-4" variant="secondary">
                        <a className='font-bold text-lg flex items-center '>Dashboard
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                        </a>
                    </Button>
                </Link>
            </div>
      </div>

      <div className='my-1 flex justify-between mt-16 mx-10 px-16'>
        <ContestList/>        
      </div>

      <div className='mt-16 flex mr-20 justify-end'>

        <Link to={'/auth/signin'}>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Sign In Now
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
        </Link>
                
      </div>
    </div>
  );
}

export default Intropage;
