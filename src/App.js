import "./App.css";
// import {BrowserRoute, Route , Switch , Redirect} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
  const shouldRedirect = true; 
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/" exact element={<Home />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
     
    </div>
  );
}

export default App;
