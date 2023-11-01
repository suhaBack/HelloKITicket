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
import "./musical.css";
import { useState, useEffect } from "react";
import MonthCarousel from "./monthslide.js"

function Musical() {
  
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

  let [musical, setMusical] = useState([
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
    {
      id: 11,
      title: "부산행",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 12,
      title: "Sahrryock",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
  ]);
  let [ui, setUi] = useState(1);
  const maxLength = 12; // 원하는 최대 길이 설정
  const originalText = [
    "뮤지컬1",
    "뮤지컬2",
    "뮤지컬3",
    "뮤지컬4",
    "뮤지컬5",
    "뮤지컬6",
    "뮤지컬7",
    "뮤지컬8",
    "뮤지컬9",
    "뮤지컬10",
    "뮤지컬11",
    "뮤지컬12",
  ];
  const [truncatedText, setTruncatedText] = useState(originalText);
  useEffect(() => {
    if (originalText.length > maxLength) {
      setTruncatedText(originalText.substring(0, maxLength) + "...");
    }
  }, [originalText, maxLength]);

  return (
    <div className="Bg">
      <div className="musical container">
        <MonthCarousel></MonthCarousel>
        <div className="mainTitle">전체 뮤지컬</div>
        <div className="musicalBtnBox">
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
          <div className="musicalBox1">
            <div className="musicalBox1Header">
              <div></div>
              <div>공연명</div>
              <div>공연일시</div>
              <div>공연장소</div>
            </div>
            {img.map((a, i) => {
              return (
                <div className="musicalBox1card">
                  <img className="musicalBox1Img" src={img[i]}></img>
                  <div className="musicalBox1Intro">
                    <div className="musicalBox1Title">
                      {musical[i].title}
                    </div>
                    <div className="musicalBox1Content">
                      - 뮤지컬 간단한 설명
                    </div>
                  </div>

                  <div className="musicalBox1Date">
                    {musical[i].startDate}
                    <br />~<br />
                    {musical[i].endDate}
                  </div>
                  <div className="musicalBox1Location">
                    {musical[i].location}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="musicalBox2">
            {img.map((a, i) => {
              return (
                <div className="musicalCard">
                  <img src={img[i]}></img>
                  <div className="musicalTitle container">
                    {musical[i].title}
                  </div>
                  <div className="musicalLocation container">
                    {musical[i].location}
                  </div>
                  <div className="musicalDate container">
                    {musical[i].startDate} ~ {musical[i].endDate}
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

export default Musical;
