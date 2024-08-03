import React from 'react'
import { SignIn } from '@clerk/clerk-react'

function Signin() {
  return (
    
    <div className='my-60 '>
      <div className="grid place-items-center ">
          <SignIn/>
      </div>
    </div>
  )
}

export default Signin
