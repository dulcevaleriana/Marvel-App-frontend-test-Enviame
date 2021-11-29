import React, {useState} from "react";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Button } from '@mui/material';
import {Ejercicio1_result} from '../js/Ejercicio1_result';
import Alert from '@mui/material/Alert';

const Ejercicio1 = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const getNumber1 = (data:any) => {
        setNumber1(data.target.value);
    }
    const getNumber2 = (data:any) => {
        setNumber2(data.target.value);
    }
    return(
        <div className="class-Ejercicio1">
            <Box component="form" noValidate autoComplete="off">
                <FormControl sx={{ width: '25ch' }}>
                <h4>find prime numbers Here</h4>
                <OutlinedInput type="number" placeholder="write a number" onChange={(a)=>getNumber1(a)}/>
                <OutlinedInput type="number" placeholder="write a number" onChange={(b)=>getNumber2(b)}/>
                    <Button 
                        variant="contained" 
                        disabled={number1 > number2 ? true : false} 
                        onClick={()=>Ejercicio1_result(number1,number2)}>
                            find prime numbers
                    </Button>
                </FormControl>
                {number1 > number2  && (
                    <Alert severity="error">
                        The first value can't be more than the last value, try again please!
                    </Alert>
                )}
            </Box>
        </div>
    )
}

export default Ejercicio1;