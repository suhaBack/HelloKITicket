import "./v&e.css";
import jpg1 from "./../images/1.jpg";
import jpg2 from "./../images/2.jpg";
import jpg3 from "./../images/3.jpg";
import jpg4 from "./../images/4.jpg";
import jpg5 from "./../images/5.jpg";
import jpg6 from "./../images/6.jpg";
import jpg7 from "./../images/7.jpg";


function Expexted() {
  const images = [jpg1, jpg2, jpg3, jpg4, jpg5, jpg6, jpg7];
  return (
    <div className='mainExpectedBox'>
      <div className="mainTitle" style={{ fontSize: "2vw" }}>
        상영 예정
      </div>
      <div className='expextedListBox'>
        <div className='expextedList'>
          <img src={images[0]} alt=''></img>
          <div className='expextedContent'>2023년 11월 13일 <br></br>상영 예정</div>
        </div>
        <div className='expextedList'>
          <img src={images[1]} alt=''></img>
          <div className='expextedContent'>2023년 11월 13일 <br></br>상영 예정</div>
        </div>
        <div className='expextedList'>
          <img src={images[2]} alt=''></img>
          <div className='expextedContent'>2023년 11월 13일 <br></br>상영 예정</div>
        </div>
        <div className='expextedList'>
          <img src={images[3]} alt=''></img>
          <div className='expextedContent'>2023년 11월 13일 <br></br>상영 예정</div>
        </div>
        <div className='expextedList'>
          <img src={images[4]} alt=''></img>
          <div className='expextedContent'>2023년 11월 13일 <br></br>상영 예정</div>
        </div>
        <div className='expextedList'>
          <img src={images[5]} alt=''></img>
          <div className='expextedContent'>2023년 11월 13일 <br></br>상영 예정</div>
        </div>
      </div>

      
    </div>
  );
}

export default Expexted;