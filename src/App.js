import React from 'react';
import './App.css';
//Importing Web Animations API//
import useWebAnimations from "@wellyshen/use-web-animations"
//Importing SVG From img Folder//
import Intro_Front_Layer from "./img/Intro_Front_Layer.svg";
import Intro_Featured_Image_Empty from "./img/Intro_Featured_Image_Empty.svg";
import Intro_Brain from "./img/Intro_Brain.svg"
//////////////////////////////////////////////

function App() {
  const {ref:brainRef} = useWebAnimations({
    keyframes : {
      transform:["translateY(10px) rotate(-2deg)","translateY(-30px) rotate(0deg)"],
    },
    timing: {
      delay: 100, // Start with a 500ms delay
      duration: 2000, // Run for 2000ms
      iterations: Infinity, // Repeat Infinity
      direction: "alternate", // Run the animation forwards and then backwards
    }
  })
  const {ref:introFrontRef} = useWebAnimations({
    keyframes : {
     opacity:["0","0","1","0","0","0","1","0","0","1","0","0","1","0","0","1","0"]
    },
    timing: {
      duration: 1000, // Run for 1000ms
      iterations: Infinity, // Repeat Infinity
    }
  })
  
  return (
    <div>
      <div className="topbar-desktop">
        <div className="topbar-sticky">
          <div className="topbar-desktop-text">
              <span className="rainbow-animation rainbow-char1">S</span>
              <span className="rainbow-animation rainbow-char2">w</span>
              <span className="rainbow-animation rainbow-char3">i</span>
              <span className="rainbow-animation rainbow-char4">t</span>
              <span className="rainbow-animation rainbow-char5">c</span>
              <span className="rainbow-animation rainbow-char6">h</span>
              <span className="space"> </span>
              <span className="rainbow-animation rainbow-char7">e</span>
              <span className="rainbow-animation rainbow-char8">x</span>
              <span className="rainbow-animation rainbow-char9">p</span>
              <span className="rainbow-animation rainbow-char10">e</span>
              <span className="rainbow-animation rainbow-char11">r</span>
              <span className="rainbow-animation rainbow-char12">i</span>
              <span className="rainbow-animation rainbow-char13">e</span>
              <span className="rainbow-animation rainbow-char14">n</span>
              <span className="rainbow-animation rainbow-char15">c</span>
              <span className="rainbow-animation rainbow-char16">e</span>
              <span className="space"> </span>
          </div>
        </div>
      </div>
      <div className="row row2 header">
        <div className="row-inner">
          <div id="anchor-top" className="header-container">
              <div className="header-container-text">
                <div className="header-container-description">
                  <div className="header-container-title">
                    <div className="header-container-title-1">The</div> 
                    <div className="header-container-title-2">CORTEX</div>
                    <div className="header-container-title-3">COPYWRITER</div>
                  </div>
                  <div className="header-container-paragraph">
                    <p className="intro-title">Enhance your communications with psychology-based copywriting and UX writing</p>
                  </div>
                    <div className="header-container-cta">
                      <div className="topbar-desktop-text">
                        <span className="rainbow-animation rainbow-char1">S</span>
                        <span className="rainbow-animation rainbow-char2">e</span>
                        <span className="rainbow-animation rainbow-char3">n</span>
                        <span className="rainbow-animation rainbow-char1">d</span>
                        <span className="space"></span> 
                        <span className="rainbow-animation rainbow-char1">M</span>
                        <span className="rainbow-animation rainbow-char2">e</span>
                        <span className="rainbow-animation rainbow-char3">s</span>
                        <span className="rainbow-animation rainbow-char4">s</span>
                        <span className="rainbow-animation rainbow-char5">a</span>
                        <span className="rainbow-animation rainbow-char6">g</span>
                        <span className="rainbow-animation rainbow-char7">e</span>
                      </div>
                    </div>  
                </div>
              </div>
            
              <div className="header-container-image" >
                <img src={Intro_Front_Layer} alt="Intro_Front_Layer" className="header-front" ref={introFrontRef} />
                <img src={Intro_Featured_Image_Empty} alt="Intro_Featured_Image_Empty" />
                <img src={Intro_Brain} alt="Intro_Brain" className="header-brain" ref={brainRef}/>
              </div>
          </div>
        </div>
        <div className="header-container-bg"></div>
      </div>
    </div>
  );
}

export default App;
