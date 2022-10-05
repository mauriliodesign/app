import { FC,  useEffect, useRef, useState } from "react";
import Marker from "./Marker";

type Props = {
    markPosition?: google.maps.LatLng;
};

const Maps: FC<Props> = ({ markPosition }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map>();
    const [lat, setLat] = useState<number>(33.669445);
    const [lng, setLng] = useState<number>(-117.823059);

    useEffect(() => {
        navigator.permissions.query({ name: "geolocation" });
        navigator.geolocation.getCurrentPosition((geolocation) => {
            const { latitude, longitude } = geolocation.coords;
            setLat(latitude);
            setLng(longitude);
        });
    }, []);

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
    }, [ref]);

    useEffect(() => {
        if (map) {
            map.setOptions({ zoom: 11, center: { lat, lng } });
        }
    }, [lat, lng, map]);

    return (
        <div ref={ref} id="map" style={{ height: "100%", width: "100%" }}>
            <Marker position={markPosition} map={map} />
        </div>
    );
};

export default Maps;
