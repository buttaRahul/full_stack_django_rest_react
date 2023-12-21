// const { useState } = require("react");
// const { createContext } = require("react");

import { createContext, useEffect, useState } from "react"
import { APICall } from "./apiCall"

export const TodoContext = createContext()

export const TodoContextProvider = ({children}) =>{


    const [todosList,setTodosList] = useState([])

    

    useEffect(() => {
      const  updateState = async () =>{
        const resp = await APICall.GET()
        if(resp.ok){
          setTodosList(resp.data)
        }
      }

      
      updateState()
      
    }, [])
    
    return(
      <TodoContext.Provider value={{todosList,setTodosList}}>
        {children}
      </TodoContext.Provider>
    )
}