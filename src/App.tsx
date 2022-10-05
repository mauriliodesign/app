import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Role from "./pages/Role/Role";
import "./styles.css";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="role/:groupId" element={<Role />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
