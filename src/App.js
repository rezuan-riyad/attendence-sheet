import "./App.css";
import { Routes, Route } from "react-router-dom";

// screens
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

// components

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
