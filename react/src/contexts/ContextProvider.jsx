import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";


const  StateContext = createContext ({

    currentUser:null,
    token:null,
    setUser: () => {},
    setToken: () => {},
})


export const ContextProvider = ({children})=>{

    const [user, setUser]  = useState({});
    const [token, _setToken]  =useState({}); //useState(Cookies.get('AccessToken'));
   // const [token, _setToken]  =useState(Cookies.get('AccessToken')); //useState(Cookies.get('AccessToken'));



    const setToken = (token)=>{

        _setToken(token);
        if(token ){
          
            Cookies.setItem('AccessToken',token);
        }else{

            Cookies.removeItem('AccessToken');
        }

    };


    return (
        <StateContext.Provider value={{

          user,
          token,
          setUser,
          setToken,

        }}>


            {children}
        </StateContext.Provider>
    
    )
}

export const useStateContext = ()=>useContext(StateContext);
