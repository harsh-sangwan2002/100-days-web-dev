import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
