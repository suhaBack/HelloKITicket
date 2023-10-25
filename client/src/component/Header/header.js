import { Link } from "react-router-dom";
import "./header.css";
import { FaTicketAlt } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="title">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="hello">
            <span className="titleIcon">
              <FaTicketAlt />
            </span>
            Hello<span className="kiticket">Kiticket</span>
          </div>
        </Link>
        <div className="titleInputBox">
          <input></input>
          <span className="serchIcon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
        <div className="navLogin">
          <Link
            className="loginBtn"
            to="/login"
            style={{ textDecoration: "none" }}
          >
            로그인
          </Link>
          /
          <Link
            className="registerBtn"
            to="/register"
            style={{ textDecoration: "none" }}
          >
            회원가입
          </Link>
        </div>
      </div>

      <div className="menuNav">
        <div className="menu SMNEffect21">
          <Link to="/">홈</Link>
        </div>
        <div className="menu">
          <Link to="/concert">콘서트</Link>
        </div>
        <div className="menu">
          <Link to="/musical">뮤지컬</Link>
        </div>
        <div className="menu">
          <Link to="/classic">클래식</Link>
        </div>
        <div className="menu">
          <Link to="/exhibition">전시회</Link>
        </div>
        <div className="menu">
          <Link to="/theme">테마</Link>
        </div>
        <div className="menu">
          <Link to="/ranking">랭킹</Link>
        </div>
        <div className="lastmenu">
          <Link to="/event">이벤트</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
