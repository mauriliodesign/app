import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from "./components/Map";
import "./styles.css";

function App() {
    const render = (status: Status) => {
        return <h1>{status}</h1>;
    };

    return (
        <div className="App">
            <div style={{ height: "80vh", width: "60vw", margin: "auto" }}>
                <Wrapper apiKey={"AIzaSyDENelulmyQiu72laCFfCs7Kwa1ARKMDLc"} render={render}>
                    <Map />
                </Wrapper>
            </div>
            <button type="submit">Criar rolê</button>
        </div>
    );
}

export default App;
