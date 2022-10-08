import { ThemeProvider } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Role from "./pages/Role/Role";
import { theme } from "./style/theme";
import "./styles.css";

const App = () => (
    <div className="app">
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="role/:groupId" element={<Role />} />
                    <Route path="login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </div>
);

export default App;
