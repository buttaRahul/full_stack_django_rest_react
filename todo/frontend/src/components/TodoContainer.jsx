import { Box, Container, CssBaseline } from '@mui/material'
import React from 'react'
import TodoPage from '../pages/TodoPage'
import { TodoContextProvider } from '../TodoContext'


const TodoContainer = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="100vw" >
                <Box sx={{ minHeight: '100vh',
                // marginTop: '100px'
               
             }} display={'flex'} justifyContent={'center'}  bgcolor={'#8659b2'}>
                    <TodoContextProvider>
                        <TodoPage />
                    </TodoContextProvider>
                </Box>
            </Container>
        </>
    )
}

export default TodoContainer