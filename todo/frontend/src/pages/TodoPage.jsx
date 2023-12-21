import { Box, Paper, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import TodoAdd from '../components/TodoAdd'
import TodoList from '../components/TodoList'

const TodoPage = () => {
    return (
        <Box minHeight={'75%'} width={'50%'}mt={12} mb={5}>
            <Paper square={false} elevation={24} sx={{
                height: '100%',
                bgcolor: '#a0d2eb'
            }
            } >
                <Typography variant='h4' textAlign={'center'} color={'white'} bgcolor={'#4a4d60'}>Todo Application</Typography>
                <Box p={2}>
                    <TodoAdd />
                    <TodoList/>
                </Box>
            </Paper>
        </Box>
    )
}

export default TodoPage