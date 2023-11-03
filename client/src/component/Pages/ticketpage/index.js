import React, { useState } from "react";
import "./ticketpage.css";
import Main_Hero from "./images/main_hero.png";
import ShowInfo from "./showinfo/";
import SalesInfo from "./salesinfo/";

const ListItem = ({ title, content }) => (
  <div className="title_all">
    <div className="hd_title_info">
      <strong className="hd_title">{title}</strong>
    </div>
    <div className="hd_title_p">
      <p>{content}</p>
    </div>
  </div>
);

const TicketPage = () => {
  const ticketDetails = {
    title: "티켓 정보",
    posterUrl: Main_Hero,
  };

  const [selectedSection, setSelectedSection] = useState("공연정보");

  const showAdditionalInfo = () => {
    if (selectedSection === "공연정보") {
      return <ShowInfo />;
    } else if (selectedSection === "판매정보") {
      return <SalesInfo />;
    } else {
      return null;
    }
  };

  return (
    <div className="ticketpageBg">
      <div className="p_all container">
        <div className="hd_ps_info">
          <div className="hd_name">
            <div>{ticketDetails.title}</div>
          </div>
          <div className="hd_ps_infoBox">
            <img
              className="hd_poster"
              alt={ticketDetails.title}
              src={ticketDetails.posterUrl}
            />
            <div className="ps_all">
              <div className="poster_info">
                <div className="poster_info_title">IM HERO (TOUR 2023)</div>
                <div className="poster_info_gridBox">
                  <div className="info_gridBox">
                    <div className="info_title">장소</div>
                    <div className="info_content">서울특별시 송파구</div>
                  </div>
                  <div className="info_gridBox">
                    <div className="info_title">공연기간</div>
                    <div className="info_content">2023.10.10 ~ 2023.11.13</div>
                  </div>
                  <div className="info_gridBox">
                    <div className="info_title">공연시간</div>
                    <div className="info_content">2시간</div>
                  </div>
                  <div className="info_gridBox">
                    <div className="info_title">관람연령</div>
                    <div className="info_content">만 19세</div>
                  </div>
                  <div className="info_gridBox">
                    <div className="info_title">혜택</div>
                    <div className="info_content">국제대생 무료</div>
                  </div>
                  <div className="info_gridBox">
                    <div className="info_title">배송</div>
                    <div className="info_content">CJ대한통운</div>
                  </div>
                </div>
                <div className="pricereserveBox">
                  <div className="ticketPrice">티켓 구매가: 30000원</div>
                  <div className="reserveBtnBox">
                    <div className="reserveBtn">예매하기</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-section">
          <button
            className={selectedSection === "공연정보" ? "active" : ""}
            onClick={() => setSelectedSection("공연정보")}
          >
            공연정보
          </button>
          <button
            className={selectedSection === "판매정보" ? "active" : ""}
            onClick={() => setSelectedSection("판매정보")}
          >
            판매정보
          </button>
        </div>
        {showAdditionalInfo()}
      </div>
    </div>
  );
};

export default TicketPage;
