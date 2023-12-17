import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TodoListItem from './TodoListItem'




const TodoList = () => {
    const url = 'http://127.0.0.1:8000/api/todos/'
    const [todoList, setTodoList] = useState([])
    const fetchTodos = () => {
        fetch(url).then(resp => resp.json()).then(jsonData => {
            setTodoList(jsonData)
        })
    }

    useEffect(() => {
      fetchTodos()
    
    
    }, [])
    
    return (
        <Box>
            {
                todoList.map((todo)=>(
                    <TodoListItem todo = {todo}/>
                ))
            }

            {/* <TodoList todo = {todoList[0]}/> */}
        </Box>
    )
}

export default TodoList