import { Status, Wrapper } from "@googlemaps/react-wrapper";
import Map from "../../components/Map";
import { Button } from "@mui/material";
import { useState } from "react";

const Role = () => {
    const [markPosition, setMarkPosition] = useState<google.maps.LatLng>();
    const render = (status: Status) => {
        return <h1>{status}</h1>;
    };

    const getPosition = () => {
        navigator.geolocation.getCurrentPosition((geolocation) => {
            const { latitude, longitude } = geolocation.coords;
            setMarkPosition(new google.maps.LatLng({ lat: latitude, lng: longitude }));
        });
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ height: "80vh", width: "60vw", margin: "auto" }}>
                <Wrapper apiKey={"AIzaSyDENelulmyQiu72laCFfCs7Kwa1ARKMDLc"} render={render}>
                    <Map markPosition={markPosition} />
                </Wrapper>
            </div>
            <Button variant="contained" onClick={getPosition} style={{ marginTop: "8px" }}>
                Enviar localização
            </Button>
        </div>
    );
};

export default Role;
