import React from "react";
import { useState, useEffect } from "react";
import "./concert.css";
import concert1 from "../../Main/images/1.jpg";
import concert2 from "../../Main/images/2.jpg";
import concert3 from "../../Main/images/3.jpg";
import concert4 from "../../Main/images/4.jpg";
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

function Concert() {
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

  let [concert, setConcert] = useState([
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

  let mainConcert = [
    {
      id: 1,
      title: "해피성중데이",
      content: "팀24 멤버 '곤'의 생일 기념 팬미팅",
    },
    {
      id: 2,
      title: "2023 THE RAMPAGE 1st FAN CONCERT in SEOUL∼THE BEGINNING∼",
      content: "한국 레이버즈 여러분과 함께하는 첫...",
    },
    {
      id: 3,
      title: "현대카드 Curated 89 민수 〈민수는 참을 수 없어！〉",
      content: "참을 수 없는 민수 단독 공연!",
    },
    {
      id: 4,
      title: "BLITZERS FAN－CON［A to z］",
      content: "블리들을 위한 첫 팬콘서트",
    },
  ];
  return (
    <div className="Bg">
      <div className="concert container">
      <div className='mainTitle'>콘서트</div>
        <div className="jsw_concertGridBox">
          <div className="jsw_concertImgBox">
            <img src={concert1} />
            <div className="jsw_concertContentBox">
              <div className="jsw_mainConcertTitle">
                {mainConcert[0].title.length > 13
                  ? `${mainConcert[0].title.substring(0, 13)}...`
                  : mainConcert[0].title}
              </div>
              <div className="jsw_mainConcertDetail">
              {mainConcert[0].content.length > 18
                  ? `${mainConcert[0].content.substring(0, 18)}...`
                  : mainConcert[0].content}
              </div>
            </div>
          </div>
          <div className="jsw_concertImgBox">
            <img src={concert2} />
            <div className="jsw_concertContentBox">
              <div className="jsw_mainConcertTitle">
              {mainConcert[1].title.length > 13
                  ? `${mainConcert[1].title.substring(0, 13)}...`
                  : mainConcert[1].title}
              </div>
              <div className="jsw_mainConcertDetail">
              {mainConcert[1].content.length > 18
                  ? `${mainConcert[1].content.substring(0, 18)}...`
                  : mainConcert[1].content}
              </div>
            </div>
          </div>
          <div className="jsw_concertImgBox">
            <img src={concert3} />
            <div className="jsw_concertContentBox">
              <div className="jsw_mainConcertTitle">
              {mainConcert[2].title.length > 13
                  ? `${mainConcert[2].title.substring(0, 13)}...`
                  : mainConcert[2].title}
              </div>
              <div className="jsw_mainConcertDetail">
              {mainConcert[2].content.length > 18
                  ? `${mainConcert[2].content.substring(0, 18)}...`
                  : mainConcert[2].content}
              </div>
            </div>
          </div>
          <div className="jsw_concertImgBox">
            <img src={concert4} />
            <div className="jsw_concertContentBox">
              <div className="jsw_mainConcertTitle">
              {mainConcert[3].title.length > 13
                  ? `${mainConcert[3].title.substring(0, 13)}...`
                  : mainConcert[3].title}
              </div>
              <div className="jsw_mainConcertDetail">{mainConcert[3].content.length > 18
                  ? `${mainConcert[3].content.substring(0, 18)}...`
                  : mainConcert[3].content}</div>
            </div>
          </div>
        </div>
        <div className="mainTitle">전체 전시회</div>
        <div className="concertBtnBox">
          <i
            className="fa-solid fa-bars"
            style={{
              border: ui == 1 ? "3px solid rgb(226, 48, 74)" : "",
              color: ui == 1 ? "rgb(226, 48, 74)" : "",
            }}
            onClick={() => {
              setUi(1);
            }}
          ></i>
          <i
            className="fa-solid fa-border-all"
            style={{
              border: ui != 1 ? "3px solid rgb(226, 48, 74)" : "",
              color: ui != 1 ? "rgb(226, 48, 74)" : "",
            }}
            onClick={() => {
              setUi(2);
            }}
          ></i>
        </div>

        {ui == 1 ? (
          <div className="concertBox1">
            <div className="concertBox1Header">
              <div></div>
              <div>공연명</div>
              <div>공연일시</div>
              <div>공연장소</div>
            </div>
            {img.map((a, i) => {
              return (
                <div className="concertBox1card">
                  <img className="concertBox1Img" src={img[i]}></img>
                  <div className="concertBox1Intro">
                    <div className="concertBox1Title">{concert[i].title}</div>
                    <div className="concertBox1Content">
                      - 전시회 간단한 설명
                    </div>
                  </div>

                  <div className="concertBox1Date">
                    {concert[i].startDate}
                    <br />~<br />
                    {concert[i].endDate}
                  </div>
                  <div className="concertBox1Location">
                    {concert[i].location}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="concertBox2">
            {img.map((a, i) => {
              return (
                <div className="concertCard">
                  <img src={img[i]}></img>
                  <div className="concertTitle container">
                    {concert[i].title}
                  </div>
                  <div className="concertLocation container">
                    {concert[i].location}
                  </div>
                  <div className="concertDate container">
                    {concert[i].startDate} ~ {concert[i].endDate}
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

export default Concert;
