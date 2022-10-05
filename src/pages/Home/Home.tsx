import { Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from "uuid";

const Home = () => {
    const navigate = useNavigate();
    const navigateToGroup = () => {
        navigate(`/role/${uuidv1()}`);
    };

    return (
        <Container style={{ display: "flex", justifyContent: "center", height: "100%", alignItems: "center" }}>
            <Button variant="contained" onClick={navigateToGroup}>
                Criar rolê
            </Button>
        </Container>
    );
};

export default Home;
