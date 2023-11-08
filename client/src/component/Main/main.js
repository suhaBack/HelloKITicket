import "./main.css";
import Carousel from "./slider.js";
import MainAdBanner from "./mainAdBanner.js";

import Category from "./category/categoty.js";
import UiSelect from "./selcetUiI/selectUI.js";
import Mainvideo from './video&expected/mainVideo.js';
import Expexted from './video&expected/expected.js';



function Main() {
  return (
    <div className="mainBg">
      {/* <ScrollToTopButton></ScrollToTopButton> */}
      <div className="mainDiv">
        <div style={{margin: "3vw 0 4vw 0"}}>
          <Carousel></Carousel>
        </div>
        <div className="mb-5 container">
          <UiSelect></UiSelect>
        </div>
        <div className="mb-5 container">
          <MainAdBanner/>
        </div>
        <div className="container">
          <Category/>
        </div>
        <div className="lastMain pb-5 container">
          <Mainvideo/>
          <Expexted></Expexted>
        </div>
      </div>
    </div>
  );
}

export default Main;
