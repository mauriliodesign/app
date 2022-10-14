import { Button } from "@mui/material";

const SignUp = () => {
    return (
        <Button variant="contained" sx={{
            background: '#FA824C',
            color: '#FFF',
            borderRadius: '12px',
            width: '15.438rem',
            minHeight: '3.688rem',
            textTransform: 'unset',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            margin: "0 auto",
            "&:hover": {
                background: '#E15554'
            }
        }}>Sign up</Button>
    )
}

export default SignUp;
