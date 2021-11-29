import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Button } from '@mui/material';

const Form = (props:{
    title:string,
    onChange:(a:any)=>void,
    buttonName:string,
    placeholder:string,
    type:string
}) => {
    return(
        <div className="class-Form">
            <Box component="form" noValidate autoComplete="off">
                <FormControl sx={{ width: '25ch' }}>
                    <h4>
                        {props.title}
                        <hr/>
                    </h4>
                    <OutlinedInput type={props.type} placeholder={props.placeholder} onChange={(b)=>props.onChange(b)}/>
                    <Button variant="contained">{props.buttonName}</Button>
                </FormControl>
            </Box>
        </div>
    )
}

export default Form;