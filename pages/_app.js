import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { AuthContext } from "../Auth/auth";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [Auth, setAuth] = useState({
    user: '',
    token:''
  })

useEffect(() => { 
    setAuth({user : JSON.parse(sessionStorage.getItem('user')),
    token : sessionStorage.getItem('token')
    })
  
},[])

  return (
    <AuthContext.Provider value={{Auth, setAuth}}>
      <div className="mx-auto bg-gray-100 h-screen w-screen">
        <Component {...pageProps} />
      </div>
    </AuthContext.Provider>
  );
}

export default MyApp;
