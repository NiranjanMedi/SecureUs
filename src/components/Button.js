import React from 'react';
import Button from '@mui/material/Button';

const BasicButton = ({title}) => {
    return (
        <Button variant='contained'>{title}</Button>
    );
}

export default BasicButton;