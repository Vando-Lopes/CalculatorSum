import { useStyles } from "./Style/styles.js"
import * as React from 'react';
import TextField from '@mui/material/TextField';


const NumberForm = (props) => {

    const classes = useStyles()
    return (
        <div className={classes.numberInputs}>
            <TextField
                className='input'
                type="number"
                inputProps={{ style: { textAlign: 'center' } }}
                onChange={e => { props.setNumber1(+e.target.value) }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                className="input1"
                type="number"
                inputProps={{ style: { textAlign: 'center' } }}
                onChange={e => { props.setNumber2(+e.target.value) }}
                InputLabelProps={{
                    shrink: true,
                }}
            />

        </div>);

}

export default NumberForm; 