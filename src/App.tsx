import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import LLMMaster from "./pages/programs/LLMMaster";
import AgenticAI from "./pages/programs/AgenticAI";
import Predictive from "./pages/programs/Predictive";
import GenerativeAI from "./pages/programs/GenerativeAI";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path='/about-us' element={<About/>}></Route>
       <Route path="/course/llm-master" element={<LLMMaster/>}></Route>
       <Route path="/course/agentic-ai" element={<AgenticAI/>}></Route>
       <Route path="/course/predictive-analysis-using-data-science-and-ai" element={<Predictive/>}/>
       <Route path="/course/mastering-generative-ai" element={<GenerativeAI/>}/>
       <Route path="/contact-us" element={<Contact/>}></Route>
    </Routes>
  );
};

export default App;
