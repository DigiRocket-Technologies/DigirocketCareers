import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path='/about-us' element={<About/>}></Route>
    </Routes>
  );
};

export default App;
