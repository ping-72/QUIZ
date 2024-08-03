import React, { useEffect } from 'react'
import {io} from "socket.io-client"

    // const backend_url = import.meta.env.BACKEND_URL

function TrialPage() {
    // const socket = useMemo(
    //     () =>
    //       io("http://localhost:3000", {
    //         withCredentials: true,
    //       }),
    //     []
    //   );

    const socket = io("http://localhost:3000");


    useEffect(()=>{
        socket.on("connect", ()=>{
            console.log("Connected", socket.id);
        })

        socket.on("Welcome", (s)=>{
            console.log(s);
        })
        socket.on("Joined", (s)=>{
            console.log(s);
        })

        // return keyword use hota hai when component unmounts
        return ()=>{socket.disconnect()};
    },[]);
    
  return (
    <div>
      Trial Page
    </div>
  )
}

export default TrialPage
