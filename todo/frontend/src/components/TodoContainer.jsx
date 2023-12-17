import { Box, Container, CssBaseline } from '@mui/material'
import React from 'react'
import TodoPage from '../pages/TodoPage'


const TodoContainer = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="100vw" >
                <Box sx={{  height: '100vh' }} display={'flex'} justifyContent={'center'} alignItems={'center'} bgcolor={'darkblue'}>
                    
                    <TodoPage/>
                </Box>
            </Container>
        </>
    )
}

export default TodoContainer