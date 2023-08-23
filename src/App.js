import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import $ from "jquery";
import AnimatedCursor from "react-animated-cursor"
import Aboutus from "./Pages/Aboutus";
import Connect from "./Pages/Connect";



function App() {

  $(window).on("load", function () {
    console.log("sasasa")
    $(".loader-wrapper").fadeOut("slow");
  });
  

  return (

    <div className="App">
    <AnimatedCursor
      innerSize={10}
      outerSize={15}
       color='255, 255, 255'
     innerStyle={{mixBlendMode:"difference"}}
     outerStyle={{mixBlendMode:"difference"}}
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
          options: {
            innerSize: 12,
            outerSize: 12,
            color: '255, 255, 255',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
    />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="connect" element={<Connect />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div class="loader-wrapper">
        <span class="loader">
          <span class="loader-inner"></span>
        </span>
      </div>
    </div>

  );
}

export default App;
