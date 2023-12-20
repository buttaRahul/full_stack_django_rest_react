import { Box, IconButton, Typography } from '@mui/material'
import React, { useContext } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { APICall } from '../apiCall'
import { TodoContext } from '../TodoContext'

const TodoListItem = ({todo}) => {
    const {refresh} = useContext(TodoContext)

    const handleCompleted= async  ()=>{
        await APICall.PATCH(todo.id)
        await refresh()

    }
    const handleCompleted1= (e)=>{
        todo.completed = true
        const url = `http://127.0.0.1:8000/api/todos/${todo.id}/`
        const options = {
            "method" : "PUT",
            "headers": {
                "content-Type" : "application/json"

            },
            "body": JSON.stringify(todo)
        }
        fetch(url,options).then(resp=> resp.json()).then(jsonData => console.log(jsonData))
    }


    const handleDelete = async () =>{
        await APICall.DELETE(todo.id)
        await refresh()

    }
    const handleDelete1 = () =>{
        // console.log("Clicked Delete")
        const url = `http://127.0.0.1:8000/api/todos/${todo.id}/`
        const options = {
            "method" : "DELETE",
            
        }
        fetch(url,options).then(resp=> {
            if (resp.ok) console.log("Todo with id: ",todo.id," deleted")
        })
    }

    console.log(todo)
    // const todo = {
    //     "title": "Eat Ice cream",

    //     "completed": false,
    // }
    return (
        <Box bgcolor={'lightblue'} display={'flex'} alignItems={'center'} padding={1} sx={
            {
                borderRadius:'10px'
            }
        } mb={1}>
            <Typography variant='h5' pl={1} flexGrow={2}>
                {todo.completed? <s>{todo.title}</s> : todo.title}
                
                


            </Typography>
            <Box mr={1} >
                <IconButton onClick={handleCompleted}>
                    <CheckCircleOutlineIcon color='success' />
                </IconButton>
                <IconButton onClick={handleDelete}>
                    <DeleteForeverIcon color='error' />
                </IconButton>
            </Box>
        </Box>
    )
}

export default TodoListItem