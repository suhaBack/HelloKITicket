import "./main.css";
import Carousel from "./slider.js";
import Add from "./add.js";
import ScrollToTopButton from './topbtn.js'
import Category from "./category/categoty.js";
import UiSelect from "./selcetUiI/selectUI.js";
import Mainvideo from './video&expected/mainVideo.js';
import Expexted from './video&expected/expected.js';



function Main() {
  return (
    <div className="mainBg">
      <ScrollToTopButton></ScrollToTopButton>
      <div className="mainDiv container">
        <div style={{marginBottom: '6vw'}}>
          <Carousel></Carousel>
        </div>
        <div className="mb-5">
          <UiSelect></UiSelect>
        </div>
        <div className="mb-5">
          <Add/>
        </div>
        <div className="mb-5">
          <Category/>
        </div>
        <div className="lastMain pb-5">
          <Mainvideo/>
          <Expexted></Expexted>
        </div>
      </div>
    </div>
  );
}

export default Main;
