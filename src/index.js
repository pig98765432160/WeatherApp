import React from "react"
import ReactDOM from "react-dom"
import WeatherApp from "./WeatherApp"
import "./styles.css"

function App() {
  return <WeatherApp />
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render( 
    <App />
);
