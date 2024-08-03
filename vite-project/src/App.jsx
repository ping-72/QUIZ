import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import { UserButton } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import { QuizProvider } from './Result_context/ResultContext'


function App() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isSignedIn && isLoaded) {
    return <Navigate to={'/auth/signin'} />
  }

  return (
    <>
      <QuizProvider>
        <div className='flex w-100vw h-15 bg-blue-200  justify-between px-10 py-5 shadow-md items-center'>
          <div>
            <img src="../../public/logo.svg" width={100} height={100} alt="" />
            <h2 className='font-bold'>DBMS</h2>
          </div>
          <div className='flex items-center'>
            <div className='!rounded-md h-10'>
              <Link to="/Dashboard" >
                <Button className="!rounded-2xl" variant="secondary">Dashboard</Button>
              </Link>
            </div>
            <div className='ml-5'>
              <UserButton />
            </div>
          </div>
        </div>
        <Outlet />
      </QuizProvider>


    </>
  )
}

export default App
