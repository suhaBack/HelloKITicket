import "./category.css";
import { Link } from "react-router-dom";
import concertJpg from "./../images/concert.jpg";
import musicalJpg from "./../images/musical.jpg";
import classicJpg from "./../images/classic.jpg";
import exhibitionJpg from "./../images/exhibition.jpg";

function Category() {
  return (
    <>
      <div className="categoryTitle">카테고리</div>
      <div className="categoryGridBox">
        <Link to="/concert" style={{ textDecoration: "none" }}>
          <div className="categoryConcertBox">
            <div className="categortMent">
              <div className="categortMentTitle">콘서트1111</div>
              <div className="categortMentContent">
                환상적인 음악과 열정의 축제<br/>화려한 콘서트에
                여러분을 초대합니다!
              </div>
            </div>
          </div>
        </Link>
        <Link to="/musical" style={{ textDecoration: "none" }}>
          <div className="categoryMusicalBox">
            <div className="categortMent">
              <div className="categortMentTitle">뮤지컬</div>
              <div className="categortMentContent">
              마음을 사로잡는 음악, 멋진 춤과 연기<br/>극적인 뮤지컬 세계로 여러분을 초대합니다!
              </div>
            </div>
          </div>
        </Link>
        <Link to="/classic" style={{ textDecoration: "none" }}>
          <div className="categoryClassicBox">
            <div className="categortMent">
              <div className="categortMentTitle">클래식</div>
              <div className="categortMentContent" style={{WebkitTextStroke: '1px black'}}>
              피아노 소리와 바이올린 멜로디<br/>마음을 녹이는 클래식 공연을 즐겨보세요.
              </div>
            </div>
          </div>
        </Link>
        <Link to="/exhibition" style={{ textDecoration: "none" }}>
          <div className="categoryExhibitionBox">
            <div className="categortMent">
              <div className="categortMentTitle">전시회</div>
              <div className="categortMentContent">
              창의적 예술과 문화의 향연<br/>현대 예술의 아름다움을 만나보세요!
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Category;
