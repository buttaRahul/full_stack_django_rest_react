import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import TodoListItem from './TodoListItem'
import { TodoContext } from '../TodoContext'




const TodoList = () => {
    const url = 'http://127.0.0.1:8000/api/todos/'
    const {todosList,refresh} = useContext(TodoContext)
    const [todoList, setTodoList] = useState([])
    console.log('list in todoloist main ' , todosList)
    const fetchTodos = () => {
        fetch(url).then(resp => resp.json()).then(jsonData => {
            setTodoList(jsonData)
        })
    }


    useEffect(() => {         
        setTodoList(todosList)

    }, [todosList])

    return (
        <Box>
            {
                todoList.map((todo) => (
                    <TodoListItem key={todo.id} todo={todo} />
                ))
            }

            {/* <TodoList todo = {todoList[0]}/> */}
        </Box>
    )
}

export default TodoList