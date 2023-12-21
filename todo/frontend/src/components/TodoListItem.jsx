import { Box, IconButton, Typography } from '@mui/material'
import React, { useContext } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { APICall } from '../apiCall'
import { TodoContext } from '../TodoContext'

const TodoListItem = ({todo}) => {

    const {setTodosList} = useContext(TodoContext)
    const handleCompleted= async  ()=>{
        const resp = await APICall.PATCH(todo.id)

        if(resp.ok){
            const getData = await APICall.GET()
            if(getData.ok){
                setTodosList(getData.data)
            }
        }

    }
    


    const handleDelete = async () =>{
       const resp =  await APICall.DELETE(todo.id)
       
       if(resp.ok){
        const getData = await APICall.GET()
        if(getData.ok){
            setTodosList(getData.data)
        }
       }
    }
    

    
    return (
        <Box bgcolor={'lightyellow'} display={'flex'} alignItems={'center'} padding={1} sx={
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