import React from "react";
import { createRoot } from "react-dom/client";
import WeatherApp from "./WeatherApp";
import "./styles.css";

function App() {
  return <WeatherApp />;
}

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
