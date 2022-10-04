import { useState } from "react"
import { Wrapper, Status } from "@googlemaps/react-wrapper"


export default function Map() {
    const render = (status: Status) => {
      return <h1>{status}</h1>
    }
  return (
    <div>Map</div>
  )
}