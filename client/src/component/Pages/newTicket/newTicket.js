import axios from "axios";
import "./newTicket.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewTicket() {
  const navigate = useNavigate();
  const [image, setimageURL] = useState();

  const loadImg = (e) => {
    let value = URL.createObjectURL(e.target.files[0]);
    setimageURL(value);
  };

  const AddContents = async (e) => {
    e.preventDefault();

    const imageURL = "test"; // C:\fakepath\스크린샷 2023-06-04 031733.png
    const title = e.target.contentTitle.value; // asd
    const kind = e.target.contnetKind.value; // 2
    const date = e.target.contentDate.value;
    const address = e.target.contentAddress.value;
    const price = e.target.contentPrice.value;
    const help = e.target.contentHelp.value;
    const people = e.target.contentMax.value;
    //db 순서 = 제목 종류 가격 설명 사진 위치 일정 최대인원
    // console.log(imageURL,title,find,date,address,price,help,people);

    console.log("test", imageURL);

    await axios
      .post("/newTicket", {
        title,
        kind,
        price,
        help,
        imageURL,
        address,
        date,
        people,
      })
      .then(() => {
        console.log("성공");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="newTicketPage container">
      <div className="mainTitle">티켓등록</div>
      <form onSubmit={AddContents}>
        <div className="newTicketinfo">
          <label>프로그램 명</label>
          <input type="text" name="newImage" id="contentTitle"></input>
        </div>
        <div className="newTicketinfo">
          <label>분류</label>
          <select id="contnetKind">
            <option value={1}>콘서트</option>
            <option value={2}>뮤지컬</option>
            <option value={3}>클래식</option>
            <option value={4}>전시회</option>
          </select>
        </div>
        <div className="newTicketinfo">
          <label>상영 일정</label>
          <input type="date" name="newImage" id="contentDate"></input>
        </div>
        <div className="newTicketinfo">
          <label>위치</label>
          <input type="text" name="newImage" id="contentAddress"></input>
        </div>
        <div className="newTicketinfo">
          <label>가격</label>
          <input type="number" name="newImage" id="contentPrice"></input>
        </div>
        <div className="newTicketinfo">
          <label>프로그램 설명</label>
          <input type="text" name="newImage" id="contentHelp"></input>
        </div>
        <div className="newTicketinfo">
          <label>최대 이용가능 인원</label>
          <input type="number" name="newImage" id="contentMax"></input>
        </div>
        <div className="newTicketinfo">
          <label>포스터/홍보 이미지</label>
          <input
            type="file"
            name="newImage"
            id="contentImage"
            onChange={loadImg}
          ></input>
        </div>
        <div className="newticketEditBtn">
          <button type="submit">등록하기</button>
        </div>
      </form>
    </div>
  );
}

export default NewTicket;
