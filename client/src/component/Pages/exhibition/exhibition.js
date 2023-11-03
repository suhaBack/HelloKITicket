import jpg1 from "./../../Main/images/exhibition/1.jpg";
import jpg2 from "./../../Main/images/exhibition/2.jpg";
import jpg3 from "./../../Main/images/exhibition/3.jpg";
import jpg4 from "./../../Main/images/exhibition/4.jpg";
import jpg5 from "./../../Main/images/exhibition/5.jpg";
import jpg6 from "./../../Main/images/exhibition/6.jpg";
import jpg7 from "./../../Main/images/exhibition/7.jpg";
import jpg8 from "./../../Main/images/exhibition/8.jpg";
import jpg9 from "./../../Main/images/exhibition/9.jpg";
import jpg10 from "./../../Main/images/exhibition/10.jpg";
import "./exhibition.css";
import { useState, useEffect } from "react";
import MonthCarousel from "./monthslide.js"

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
  ]);

  let [exhibition, setExhibition] = useState([
    {
      id: 1,
      title: "타겟",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 2,
      title: "스즈메의 문단속",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 3,
      title: "놉",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 4,
      title: "백두산",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 5,
      title: "범죄와의 전쟁",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 6,
      title: "부산행",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 7,
      title: "롤드컵",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 8,
      title: "반도",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 9,
      title: "군함도",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 10,
      title: "1987",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
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
  ];
  const [truncatedText, setTruncatedText] = useState(originalText);
  useEffect(() => {
    if (originalText.length > maxLength) {
      setTruncatedText(originalText.substring(0, maxLength) + "...");
    }
  }, [originalText, maxLength]);

  return (
    <div className="Bg">
      <div className="exhibition container">
        <MonthCarousel></MonthCarousel>
        <div className="mainTitle">전체 전시회</div>
        <div className="exhibitionBtnBox">
          <i
            className="fa-solid fa-bars"
            style={{
              border:
                ui == 1 ? '3px solid rgb(226, 48, 74)' : "",
              color:
                ui == 1 ? 'rgb(226, 48, 74)' : ""
            }}
            onClick={() => {
              setUi(1);
            }}
          ></i>
          <i
            className="fa-solid fa-border-all"
            style={{
              border:
                ui != 1 ? '3px solid rgb(226, 48, 74)' : "",
              color:
                ui != 1 ? 'rgb(226, 48, 74)' : ""
            }}
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
                  <img className="exhibitionBox1Img" src={img[i]} loading="lazy"></img>
                  <div className="exhibitionBox1Intro">
                    <div className="exhibitionBox1Title">
                      {exhibition[i].title}
                    </div>
                    <div className="exhibitionBox1Content">
                      - 전시회 간단한 설명
                    </div>
                  </div>

                  <div className="exhibitionBox1Date">
                    {exhibition[i].startDate}
                    <br />~<br />
                    {exhibition[i].endDate}
                  </div>
                  <div className="exhibitionBox1Location">
                    {exhibition[i].location}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="exhibitionBox2">
            {img.map((a, i) => {
              return (
                <div className="exhibitionCard">
                  <img src={img[i]} loading="lazy"></img>
                  <div className="exhibitionTitle container">
                    {exhibition[i].title}
                  </div>
                  <div className="exhibitionLocation container">
                    {exhibition[i].location}
                  </div>
                  <div className="exhibitionDate container">
                    {exhibition[i].startDate} ~ {exhibition[i].endDate}
                  </div>
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
