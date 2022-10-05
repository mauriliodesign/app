import { useEffect, useRef, useState } from "react";

const Maps = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map>();

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
        if (map) {
            map.setOptions({ zoom: 11, center: { lat: 33.669445, lng: -117.823059 } });
        }
    }, [ref, map]);

    return <div ref={ref} id="map" style={{ height: "100%", width: "100%" }} />;
};

export default Maps;
