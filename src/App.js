import { useState } from "react";
import WindowEvent from "./WindowEvent";
import "./App.css";

function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setClicked(!clicked)}>Toggle Window Event</button>
      {clicked && <WindowEvent />}
    </div>
  );
}

export default App;
