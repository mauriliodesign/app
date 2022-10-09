import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#FA824C",
        },
        secondary: {
            main: "#598392",
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: "contained",
                style: {
                    marginTop: "2rem",
                }
            },
        },
        MuiTextField: {
            defaultProps: {
                style: {
                    margin: ".8rem 0",
                }
            }
        }
    },
});
