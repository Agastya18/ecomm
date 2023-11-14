import {useContext , createContext,useState,useEffect} from 'react';


const AuthContext= createContext();


const AuthProvider = ({children})=>{
     const [auth,setAuth]= useState({
            user:null,
            token:""
            
        
     })
     useEffect(()=>{
         const data = localStorage.getItem('auth')
          if(data)
          {
             const parsedData = JSON.parse(data)
             setAuth(
              {  ...auth,
                user:parsedData.existingUser,
                token:parsedData.token
            }

             )
          }

     },[auth])
    return(
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
    </AuthContext.Provider>
    )
    
}
const useAuth=()=> useContext(AuthContext);
export {AuthProvider,useAuth }