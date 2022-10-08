import { styled, TextField } from "@mui/material";

type InputTypes = {
    label: string,
    variant: "standard" | "filled" | "outlined" | undefined
}

const Input = ({label, variant}: InputTypes) => (
    <div className="input-wrapper">
        <TextField id="outlined-basic" label={label} variant={variant} sx={{
            background: 'transparent',
            borderRadius: '20px',
            border: "1px solid #598392",
            minWidth: "31.25rem"
        }}/>
    </div>
)

export default Input;
