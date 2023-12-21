import { Box, Button, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { APICall } from '../apiCall'
import { TodoContext } from '../TodoContext'


const TodoAdd = () => {
  const {setTodosList} = useContext(TodoContext)
  const [title, setTitle] = useState('')

  const handleOnChange = (e) => {
    setTitle(e.target.value)
  }


  const handleAdd = async () => {     
    const resp = await APICall.POST(title)
    if(resp.ok) {
      const getResp = await APICall.GET()
      if(getResp.ok) {
        setTodosList(getResp.data)
        setTitle('')
      }
    }


    
  }
  
  return (
    <Box bgcolor={'#e8e8f8'} display={'flex'} marginTop={5} mb={2}>
      <TextField fullWidth label='New Todo'value={title} onChange={handleOnChange}>Text</TextField>
      <Button variant='contained' sx={{
        marginLeft: '2px'
      }}

        onClick={handleAdd}>Add</Button>
    </Box>
  )
}

export default TodoAdd