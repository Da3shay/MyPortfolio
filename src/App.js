import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import $ from "jquery";
import Cursor from "react-special-cursor";



function App() {
  $(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
  });

  return (
    <Cursor
    initial={{
      dotSize:"2rem",
      circleSize:"5rem",
      borderStyle:"dotted",
      color:"white",
      borderWidth:"3px",
      circleDay:"0.1s",
      dotDelay:"0.05s"
}}
>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div class="loader-wrapper">
        <span class="loader">
          <span class="loader-inner"></span>
        </span>
      </div>
    </div>
    </Cursor>
  );
}

export default App;
