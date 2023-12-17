import { Box, Paper, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import TodoAdd from '../components/TodoAdd'
import TodoList from '../components/TodoList'

const TodoPage = () => {
    return (
        <Box height={'75%'} width={'50%'}>
            <Paper square={false} elevation={24} sx={{
                height: '100%',
                bgcolor: 'tomato'
            }
            } >
                <Typography variant='h4' textAlign={'center'} color={'white'} bgcolor={'black'}>Todo Application</Typography>
                <Box p={2}>
                    <TodoAdd />
                    <TodoList/>
                </Box>
            </Paper>
        </Box>
    )
}

export default TodoPage