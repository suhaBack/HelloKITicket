import { useState } from "react";
import jpg1 from "./../../Main/images/1.jpg";
import jpg2 from "./../../Main/images/2.jpg";
import jpg3 from "./../../Main/images/3.jpg";

function Responsive() {
  let [reservation, setReservation] = useState([
    {
      id: 1,
      jpg: jpg1,
      title: "타겟",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 2,
      jpg: jpg2,
      title: "스즈메의 문단속",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 3,
      jpg: jpg3,
      title: "놉",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
  ]);

  const cancelReservation = (id) => {
    const updatedReservation = reservation.filter((item) => item.id !== id);
    setReservation(updatedReservation);
  };

  return (
    <div className="reservation">
      <div className="mainTitle">최근 예매/취소</div>
      {reservation != "" ? <div className="reservationBox1">
        {reservation.map((a, i) => {
          return (
            <div className="reservationBox1card" key={i}>
              <img
                className="reservationBox1Img"
                src={reservation[i].jpg}
              ></img>
              <div className="reservationBox1Intro">
                <div className="reservationBox1Title">
                  {reservation[i].title}
                </div>
                <div className="reservationBox1Content">
                  - 전시회 간단한 설명
                </div>
              </div>

              <div className="reservationBox1Date">
                {reservation[i].startDate}
                <br />~<br />
                {reservation[i].endDate}
              </div>
              <div className="reservationBox1Location">
                {reservation[i].location}
              </div>
              <div
                className="reservationCancel"
                onClick={() => cancelReservation(a.id)}
              >
                취소
              </div>
            </div>
          );
        })}
      </div> : <div className="reservationBox1 noReservationContent">
        확인된 예매 내역이 없습니다...
      </div>}
      
    </div>
  );
}

export default Responsive;
