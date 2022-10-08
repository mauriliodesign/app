import { ThemeProvider } from "@mui/material";
import React from "react";
import { theme } from "../src/style/theme";

const ThemeDecorator = (storyFn) => (
    <ThemeProvider theme={theme}>
        {console.log(theme)}
        {storyFn()}
    </ThemeProvider>
);

export default ThemeDecorator;
