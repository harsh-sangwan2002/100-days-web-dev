import { useState } from "react";
import Navbar from "./Components/Navbar";
import Parent1 from "./Components/Parent1";
import Parent2 from "./Components/Parent2";
import Context from "./Context/Context";
import './App.css';

function App() {

  const [theme, setTheme] = useState(false);

  return (
    <Context.Provider value={theme}>
      <button onClick={() => setTheme(!theme)}>Change Theme</button>
      <Navbar />
      <Parent1 />
      <Parent2 />
    </Context.Provider>
  );
}

export default App;
