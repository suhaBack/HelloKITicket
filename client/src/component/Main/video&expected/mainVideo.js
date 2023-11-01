import video1 from "./video/1.mp4";
import video2 from "./video/2.mp4";
import video3 from "./video/3.mp4";
import "./v&e.css";
import { useEffect, useState } from "react";

function Mainvideo() {
  let [select, setSelect] = useState(0);
  const videos = [video1, video2, video3];
  let [op0, setOp0] = useState("");
  let [op1, setOp1] = useState(1);
  let [op2, setOp2] = useState("");
  let [op3, setOp3] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setOp0(1);
    }, 100);
  }, [op1, op2, op3]);
  return (
    <div className="mainVideoBox">
      <div className="mainTitle" style={{ fontSize: "2.5vw"}}>
        절찬 상영중
      </div>
      <div className="videoBox" style={{ opacity: op0 }}>
        <video
          style={{ width: "100%", height: "100%", opacity: op0 }}
          autoPlay
          muted
          loop
          preload="metadata"
          key={videos[select]}
        >
          <source src={videos[select]} type="video/mp4"></source>
        </video>
      </div>

      <div className="videoListBox">
        <div className="videoList">
          <video
            style={{ width: "100%", opacity: op1 }}
            onClick={() => {
              setSelect(0);
              setOp1(1);
              setOp2("");
              setOp3("");
            }}
          >
            <source src={video1} type="video/mp4"></source>
          </video>
        </div>
        <div className="videoList">
          <video
            style={{ width: "100%", opacity: op2 }}
            onClick={() => {
              setSelect(1);
              setOp1("");
              setOp2(1);
              setOp3("");
            }}
          >
            <source src={video2} type="video/mp4"></source>
          </video>
        </div>
        <div className="videoList">
          <video
            style={{ width: "100%", opacity: op3 }}
            onClick={() => {
              setSelect(2);
              setOp1("");
              setOp2("");
              setOp3(1);
            }}
          >
            <source src={video3} type="video/mp4"></source>
          </video>
        </div>
      </div>
    </div>
  );
}

export default Mainvideo;
