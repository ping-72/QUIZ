import React from 'react'
import ContestList from '@/IntroPage/[ContestList]/ContestList'
import PreviousAttempts from '@/components/myComponents'

function Dashboard() {
  return (

    // List of Contest
    // Your Previous Attempt

    <div className='bg-slate-100 pb-14'>
      <div className='bg-slate-100 pb-4'>
        <h1 className='pt-10'>Available Contests</h1>
        <div className='my-1 flex justify-center gap-7 mt-6 mb-10 mx-10 px-16 '>
          <ContestList />
        </div>
      </div>
      <div>
        <h1>Your Previous Attempts</h1>
        <div className='my-1 flex justify-center gap-5 mt-6 mb-10 mx-10 px-16 '>
          <PreviousAttempts />
        </div>
      </div>
    </div>

  )
}

export default Dashboard
