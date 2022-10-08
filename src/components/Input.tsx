import { TextField as MUITextField, TextFieldProps } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";

// const TextField = styled(MUITextField)`
//     input {
//         background: transparent;
//         border-radius: 20px;
//         border: 1px solid #598392;
//         min-width: 31.25rem;
//     }
// `;

const Input: FC<TextFieldProps> = ({ ...props }) => <MUITextField id="outlined-basic" {...props} />;

export default Input;
