import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signin from './auth/sign-in/index.jsx'
import Dashboard from './Dsahboard/index.jsx'
import Home from './Home/index.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import Intropage from './IntroPage/index.jsx'
import TrialPage from './TrialPage/index.jsx'
import Attempt from './DBMS-qiuz/startQuiz.jsx'
import Quiz from './DBMS-qiuz/quiz.jsx'
import Results from './DBMS-qiuz/Results_page.jsx'
import Versus from './1v1/Versus_Controller.jsx'



// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key. See the clerk provider React Guide page")
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <Intropage />
  },
  // Only a trial page not to be pushed  in production 
  {
    path: '/trial',
    element: <TrialPage />
  },
  {
    element: <App />,
    children: [

      { // this route is not working
        path: '/home',
        element: <Home />
      },
      {
        path: '/dashBoard',
        element: <Dashboard />
      },
      {
        path: '/dbms/practice/attempt',
        element: <Attempt />
      },
      {
        path: '/dbms/practice',
        element: <Quiz />
      },
      {
        path: '/dbms/results',
        element: <Results />
      },
      {
        path: '/1v1',
        element: <Versus />
      },
    ]

  },
  {
    path: '/auth/signin',
    element: <Signin />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </>,
)
