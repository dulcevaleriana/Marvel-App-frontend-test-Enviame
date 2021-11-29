import React from "react";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Button } from '@mui/material';

const Ejercicio1 = () => {
    return(
        <div className="class-Ejercicio1">
            <Box component="form" noValidate autoComplete="off">
                <FormControl sx={{ width: '25ch' }}>
                <OutlinedInput type="number" placeholder="write a number"/>
                <OutlinedInput type="number" placeholder="write a number"/>
                    <Button variant="contained">find prime numbers</Button>
                </FormControl>
            </Box>
        </div>
    )
}

export default Ejercicio1;