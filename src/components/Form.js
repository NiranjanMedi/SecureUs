import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BasicButton from './Button.js'

const BasicTextFields = ({title}) => {
    return (
        <div className='my-20 mx-20'>
            <div className='heading-container'>
                <h3>
                    {title} Form
                </h3>
            </div>
            <Box 
                component='form'
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete = 'off'
            >
                <TextField id='email' label='Enter your Email' variant='outlined' />
                <TextField id='password' label='Enter your Password' variant='outlined' />
            </Box>

            <BasicButton title={title} />
        </div>
    )
}

export default BasicTextFields;
