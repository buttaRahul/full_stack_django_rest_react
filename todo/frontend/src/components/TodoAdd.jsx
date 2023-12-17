import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const TodoAdd = () => {
  return (
    <Box  bgcolor={'peachpuff'} display={'flex'} marginTop={5} mb={2}> 
        <TextField fullWidth label='New Todo'>Text</TextField>
        <Button variant='contained' sx={{
            marginLeft:'2px'
        }}
    
        >Add</Button>
    </Box>
  )
}

export default TodoAdd