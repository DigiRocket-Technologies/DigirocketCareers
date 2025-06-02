import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import LLMMaster from "./pages/LLMMaster";

const App = () => {
  return (
    <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path='/about-us' element={<About/>}></Route>
       <Route path="/course/llm" element={<LLMMaster/>}></Route>
    </Routes>
  );
};

export default App;
