import "./mypage.css";
import Reservation from"./reservation.js"

function Mypage() {
  return (
    <div className="mypage container">
      <div className="mainTitle">마이페이지</div>
      <div className="mypageGridBox">
        <div className="mypageProfile">
          <i class="fa-solid fa-circle-user"></i>
        </div>
        <div className="mypageUserinfo">
          <div className="mypageUserinfoName">유저이름</div>
          <div className="mypageUserinfoBtnBox">
            <button>개인정보 수정</button>
            <button>로그아웃</button>
          </div>
        </div>
        <div className='haveTicketBox'>
          <div className='ticketCount'>0</div>
          <div className="ticketContent">예매내역</div>
        </div>
        <div className='haveTicketBox'>
          <div className='ticketCount'>0</div>
          <div className="ticketContent">할인쿠폰</div>
        </div>
        <div className='haveTicketBox'>
          <div className='ticketCount'>0</div>
          <div className="ticketContent">공연예매권</div>
        </div>
      </div>
      <Reservation></Reservation>
    </div>
  );
}

export default Mypage;
