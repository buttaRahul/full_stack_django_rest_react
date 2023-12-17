import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

const TodoListItem = ({todo}) => {


    const handleCompleted = (e)=>{
        console.log("Clicked Complete")
    }


    const handleDelete = () =>{
        console.log("Clicked Delete")
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