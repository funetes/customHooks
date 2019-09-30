import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import {
  useDeviceOrientation,
  useFavicon,
  useGeolocation,
  useKeyPressed,
  useLocalStorage,
  useMousePosition,
  useOnline,
  useLockScroll
} from "./hooks";

function App() {
  const { alpha, beta, gamma } = useDeviceOrientation();
  const setFavicon = useFavicon("https://www.instagram.com/favicon.ico");
  const {
    coords: { latitude, longitude },
    error
  } = useGeolocation();
  const rPressed = useKeyPressed("r");
  const ePressed = useKeyPressed("e");
  const aPressed = useKeyPressed("a");
  const cPressed = useKeyPressed("c");
  const tPressed = useKeyPressed("t");
  const [currentLS, setLS] = useLocalStorage("foo", 12345);
  const { x, y } = useMousePosition();
  const isOnline = useOnline();
  const [isLocked, { lockScroll, unlockScroll }] = useLockScroll();
  return (
    <div className="App">
      <h2>useDeviceOrientation</h2>
      <ul>
        <li>alpha : {alpha}</li>
        <li>bata : {beta}</li>
        <li>gamma : {gamma} </li>
      </ul>
      <h2>useFavicon</h2>
      <button onClick={setFavicon}>change Favicon</button>
      <h2>useGeolocation</h2>
      <ul>
        <li>latitude : {latitude}</li>
        <li>logitude : {longitude}</li>
        <li>Geolocation Error : {error}</li>
      </ul>
      <h2>useKeyPress</h2>
      <ul>
        <li>Pressed 'r': {rPressed && "R"}</li>
        <li>Pressed 'e': {ePressed && "E"}</li>
        <li>Pressed 'a': {aPressed && "A"}</li>
        <li>Pressed 'c': {cPressed && "C"}</li>
        <li>Pressed 't': {tPressed && "T"}</li>
      </ul>
      <h2>useLocalStorage</h2>
      <ul>
        <li>Current Value : {currentLS}</li>
        <button onClick={() => setLS("12345")}>set Value : 12345</button>
        <button onClick={() => setLS(null)}>Clear LS</button>
      </ul>
      <h2>useMousePosition</h2>
      <ul>
        <li>x : {x}</li>
        <li>y : {y}</li>
      </ul>
      <h2>useOnline</h2>
      <p>Are We Online? {isOnline ? "yes" : "no"}</p>
      <h2>useLockScroll</h2>
      <h5>Is Locked ? {isLocked ? "yes" : "no"}</h5>
      <button onClick={lockScroll}>lockScroll</button>
      <button onClick={unlockScroll}>unlockScroll</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
