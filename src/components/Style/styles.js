import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles(() => ({
    button: {
        "& .MuiButton-root": {
            padding: "25px 30px",
            fontSize: "30px",
            borderRadius: "20px 40px",
            background: "#5f30e6",
            border: "none",
            marginBottom: "25px",
            color: "#d7cbf7",
            cursor: "pointer",
            width: "250px", 
            marginTop: "25px",
        }
    },
    numberInputs: {
        marginBottom: "20px",
        "& .MuiTextField-root": {
            fontSize: "80px",
            borderRadius: "10px",
            width: "25%",
            padding: "10px",
            textAlign: "center",
            background: "#d2c0fd",
            color: "#2a1263",
        },
        "& .input": {
            marginRight: "10px",
            textAlign: "center",
        },
        "& .input1": {
            marginLeft: "10px"
        },
    }
}))