import { Box, Container, CssBaseline } from '@mui/material'
import React from 'react'

const TodoContainer = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="100vw" >
                <Box sx={{ bgcolor: 'black', height: '100vh' }} />
            </Container>
        </>
    )
}

export default TodoContainer