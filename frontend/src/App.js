import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StandarUI from "./components/standardui"
import UserInput from "./components/userinput"

import Home from "./components/home";

function App() {
  return (
    <div>
      <Router>
        <section>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/standard" element={<StandarUI />}  />
            <Route path="/userinput" element={<UserInput />}  />
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
