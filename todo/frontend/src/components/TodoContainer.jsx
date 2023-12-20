import { Box, Container, CssBaseline } from '@mui/material'
import React from 'react'
import TodoPage from '../pages/TodoPage'
import { TodoContextProvider } from '../TodoContext'


const TodoContainer = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="100vw" >
                <Box sx={{ height: '100vh' }} display={'flex'} justifyContent={'center'} alignItems={'center'} bgcolor={'darkblue'}>
                    <TodoContextProvider>
                        <TodoPage />
                    </TodoContextProvider>
                </Box>
            </Container>
        </>
    )
}

export default TodoContainer