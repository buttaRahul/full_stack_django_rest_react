import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'


const TodoAdd = () => {
  const [title, setTitle] = useState('')

  const handleOnChange = (e) => {
    setTitle(e.target.value)
  }


  const handleAdd = (e) => {
    const options = {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
      },
      "body": JSON.stringify({
        "title": title
      })
    }
    fetch("http://127.0.0.1:8000/api/todos/", options).then(resp => {
      if (resp.ok)
        return resp.json()
      else {
        console.log(resp.status)
        console.log(resp.statusText)
      }
    }).then(jsonData => console.log("Todo Added with id: ",jsonData.id))
  }
  return (
    <Box bgcolor={'peachpuff'} display={'flex'} marginTop={5} mb={2}>
      <TextField fullWidth label='New Todo' onChange={handleOnChange}>Text</TextField>
      <Button variant='contained' sx={{
        marginLeft: '2px'
      }}

        onClick={handleAdd}>Add</Button>
    </Box>
  )
}

export default TodoAdd