import { useEffect, useRef, useState } from "react";

const Map = () => {
    const ref = useRef();
    const center = { lat: -34.397, lng: 150.644 };
    const zoom = 4;

    const [map, setMap] = useState();

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
        if (map) {
            map.setOptions({ zoom: 11, center: { lat: 33.669445, lng: -117.823059 } });
        }
    }, [ref, map]);

    return <div ref={ref} id="map" style={{ height: "100%", width: "100%", margin: "auto" }} />;
};

export default Map;
