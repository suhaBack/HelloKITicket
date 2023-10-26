import jpg1 from "./../../Main/images/1.jpg";
import jpg2 from "./../../Main/images/2.jpg";
import jpg3 from "./../../Main/images/3.jpg";
import jpg4 from "./../../Main/images/4.jpg";
import jpg5 from "./../../Main/images/5.jpg";
import jpg6 from "./../../Main/images/6.jpg";
import jpg7 from "./../../Main/images/7.jpg";
import jpg8 from "./../../Main/images/8.jpg";
import jpg9 from "./../../Main/images/9.jpg";
import jpg10 from "./../../Main/images/10.jpg";
import jpg11 from "./../../Main/images/11.jpg";
import jpg12 from "./../../Main/images/12.jpg";
import "./exhibition.css";
import { useState, useEffect } from "react";

function Exhibition() {
  let [img, setImg] = useState([
    jpg1,
    jpg2,
    jpg3,
    jpg4,
    jpg5,
    jpg6,
    jpg7,
    jpg8,
    jpg9,
    jpg10,
    jpg11,
    jpg12,
  ]);

  let [ui, setUi] = useState(1);
  const maxLength = 12; // 원하는 최대 길이 설정
  const originalText = [
    "전시회1",
    "전시회2",
    "전시회3",
    "전시회4",
    "전시회5",
    "전시회6",
    "전시회7",
    "전시회8",
    "전시회9",
    "전시회10",
    "전시회11",
    "전시회12",
  ];
  const [truncatedText, setTruncatedText] = useState(originalText);

  useEffect(() => {
    if (originalText.length > maxLength) {
      setTruncatedText(originalText.substring(0, maxLength) + "...");
    }
  }, [originalText, maxLength]);

  return (
    <div className="exhibitionBg">
      <div className="exhibition container">
        <div className="mainTitle">전시회</div>
        <div className="exhibitionBtnBox">
          <i
            className="fa-solid fa-bars"
            onClick={() => {
              setUi(1);
            }}
          ></i>
          <i
            className="fa-solid fa-table-cells-large"
            onClick={() => {
              setUi(2);
            }}
          ></i>
        </div>

        {ui == 1 ? (
          <div className="exhibitionBox1">
            <div className="exhibitionBox1Header">
              <div></div>
              <div>공연명</div>
              <div>공연일시</div>
              <div>공연장소</div>
            </div>
            {img.map((a, i) => {
              return (
                <div className="exhibitionBox1card">
                  <img src={img[i]}></img>
                  <div className="exhibitionBox1Title">공연명</div>
                  <div className="exhibitionBox1Date">공연일시</div>
                  <div className="exhibitionBox1Location">공연장소</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="exhibitionBox2">
            {img.map((a, i) => {
              return (
                <div className="exhibitionCard">
                  <img src={img[i]}></img>
                  <div className="exhibitionTitle container">
                    {truncatedText[i]}
                  </div>
                  <div className="exhibitionLocation container">위치</div>
                  <div className="exhibitionDate container">날짜</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Exhibition;
