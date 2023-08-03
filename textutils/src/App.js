
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Test from "./components/Testform";
import About from "./components/About";
import Myfunc from "./components/Nav";


function App() {
  return (
    <BrowserRouter>
          < Myfunc  title='TextTutils' aboutus="AboutUs" />
      <Routes>
        <Route path="/" element={<Test />}   ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/home" element={<Test  />} ></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
