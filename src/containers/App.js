import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Questions from "../components/Questions";
import Home from '../components/Home'
import About from '../components/About'
import Navbar from "../components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='question' element={<Questions/>} />
        <Route path='about' element={<About/>} />
        <Route path='/' element={<Home />} />
        <Route  path='/*' element={<Navigate to='/'/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


