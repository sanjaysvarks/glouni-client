import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Home  from "./pages/Home";
import  Products  from "./pages/Products";
import  About  from "./pages/About";
import  Why  from "./pages/Why";
import  ExportPage  from "./pages/ExportPage";
import  Contact  from "./pages/Contact";
import "./styles/App.css";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Router>
      <Routes>  
        <Route path="/" element={<Layout />} >
        <Route  index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/why" element={<Why />} />
        <Route path="/export" element={<ExportPage />} />
        <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}