import Button from '@mui/material/Button';
import { useStyles } from "./Style/styles.js"

const ButtonSum = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.button}>
            <Button variant="contained" onClick={props.onClick}>+</Button>
        </div>
    );
}
export default ButtonSum;