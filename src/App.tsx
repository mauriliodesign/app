import { useState } from "react"
import { Wrapper, Status } from "@googlemaps/react-wrapper"

function App() {
  const [count, setCount] = useState(0)
  const render = (status: Status) => {
    return <h1>{status}</h1>
  }

  return (
    <div className="App">
      <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
        <YourComponent />
      </Wrapper>
    </div>
  )
}

export default App
