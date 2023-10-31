function Responsive(props) {
  

  const cancelReservation = (id) => {
    const updatedReservation = props.reservation.filter((item) => item.id !== id);
    props.setReservation(updatedReservation);
  };

  return (
    <div className="reservation">
      <div className="mainTitle">최근 예매/취소</div>
      {props.reservation != "" ? <div className="reservationBox1">
        {props.reservation.map((a, i) => {
          return (
            <div className="reservationBox1card" key={i}>
              <img
                className="reservationBox1Img"
                src={props.reservation[i].jpg}
              ></img>
              <div className="reservationBox1Intro">
                <div className="reservationBox1Title">
                  {props.reservation[i].title}
                </div>
                <div className="reservationBox1Content">
                  - 전시회 간단한 설명
                </div>
              </div>

              <div className="reservationBox1Date">
                {props.reservation[i].startDate}
                <br />~<br />
                {props.reservation[i].endDate}
              </div>
              <div className="reservationBox1Location">
                {props.reservation[i].location}
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
