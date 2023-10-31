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
import { useState } from "react";

function ClasicRanking(){
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

  let [ranking, setRanking] = useState([
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
  return (
    <>
      <div>클래식</div>
      <div className="topRankingBox mb-5">
        <div className="firstRankingBox">
          <div className="first">1위</div>
          <div className="rankingCard">
            <img src={img[0]}></img>
            <div className="rankingTitle container">{ranking[0].title}</div>
            <div className="rankingLocation container">
              {ranking[0].location}
            </div>
            <div className="rankingDate container">
              {ranking[0].startDate} ~ {ranking[0].endDate}
            </div>
          </div>
        </div>
        <div className="secondRankingBox">
          <div className="second">2위</div>
          <div className="rankingCard">
            <img src={img[1]}></img>
            <div className="rankingTitle container">{ranking[1].title}</div>
            <div className="rankingLocation container">
              {ranking[1].location}
            </div>
            <div className="rankingDate container">
              {ranking[1].startDate} ~ {ranking[1].endDate}
            </div>
          </div>
        </div>
        <div className="thirdRankingBox">
          <div className="third">3위</div>
          <div className="rankingCard">
            <img src={img[2]}></img>
            <div className="rankingTitle container">{ranking[2].title}</div>
            <div className="rankingLocation container">
              {ranking[2].location}
            </div>
            <div className="rankingDate container">
              {ranking[2].startDate} ~ {ranking[2].endDate}
            </div>
          </div>
        </div>
      </div>
      <div className="rankingBox1">
        <div className="rankingBox1Header">
          <div>순위</div>
          <div></div>
          <div>공연명</div>
          <div>공연일시</div>
          <div>공연장소</div>
        </div>
        {ranking.slice(3).map((item, index) => (
          <div className="rankingBox1card" key={item.id}>
            <div className="ranking">{index + 4}</div>
            <img
              className="rankingBox1Img"
              src={img[index + 3]}
              alt={`Ranking ${index + 1}`}
            />
            <div className="rankingBox1Intro">
              <div className="rankingBox1Title">{item.title}</div>
              <div className="rankingBox1Content">- 전시회 간단한 설명</div>
            </div>
            <div className="rankingBox1Date">
              {item.startDate} <br />~<br /> {item.endDate}
            </div>
            <div className="rankingBox1Location">{item.location}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ClasicRanking;