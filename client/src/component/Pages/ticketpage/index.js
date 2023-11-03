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
    title: "티켓 페이지 제목",
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
                <ListItem title="장소" content="where" />
                <ListItem title="공연기간" content="yyyy.mm.dd ~ yyyy.mm.dd" />
                <ListItem title="공연시간" content="n분" />
                <ListItem title="관람연령" content="만 n세이상" />
                <ListItem title="가격" content="000,000 원" />
                <ListItem title="혜택" content="OOO 할부" />
                <ListItem
                  title="배송"
                  content="yyyy년 mm월 dd일 배송되는 상품입니다."
                />
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
