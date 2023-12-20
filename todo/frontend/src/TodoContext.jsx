import { createContext, useEffect, useState } from "react";
import { APICall } from "./apiCall";



export const TodoContext = createContext()






export const TodoContextProvider = ({ children }) => {
  const refresh =  async () =>   {
     const data = await APICall.GET()
     console.log('context refresh ' , data)
     setTodosList(data)
  }




  useEffect(() => {

    // refresh().then(data => setTodosList(data))
    // console.log("TOM:",refresh)
    refresh()


  }, [])

  const [todosList, setTodosList] = useState([])

  return (

    <TodoContext.Provider value={{todosList,refresh}}>
      {children}
    </TodoContext.Provider>
  )

}