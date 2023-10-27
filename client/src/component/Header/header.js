import { Link } from "react-router-dom";
import "./header.css";
import { FaTicketAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import Modal from "react-modal";

function Header() {
  let [loginTrue, setLoginTrue] = useState(true);
  let [modalIsOpen, setModalIsOpen] = useState(false);
  let [zIndex, setZindex] = useState(1);
  let [end, setEnd] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setEnd("end");
    }, 100);
    return setEnd("");
  }, [modalIsOpen]);

  const onLogin = () => {
    console.log("로그인");
  };

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
          <input placeholder="어떤 공연을 보고 싶으세요?"></input>
          <span className="serchIcon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
        {loginTrue ? (
          <div className="navLogin">
            <Link
              className="loginBtn"
              to="/mypage"
              style={{ textDecoration: "none" }}
            >
              마이페이지
            </Link>
          </div>
        ) : (
          <div className="navLogin">
            <Link
              className="loginBtn"
              style={{ textDecoration: "none" }}
              onClick={() => {
                setModalIsOpen(true);
                setZindex(0);
              }}
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
        )}
        <Modal
          className={"loginModal"}
          isOpen={modalIsOpen}
          bodyOpenClassName="modal-open"
          onRequestClose={() => {
            setModalIsOpen(false);
            setZindex(1);
          }}
        >
          <form onSubmit={onLogin} className={"start " + end}>
            <div
              className="loginCloseBtn"
              onClick={() => {
                setModalIsOpen(false);
                setZindex(1);
              }}
            >
              <i class="fa-solid fa-xmark"></i>
            </div>
            <div className="mainTitle">로그인</div>
            <div className="loginInputBox">
              <input type="text" placeholder="ID" />
              <input type="password" placeholder="PASSWORD"></input>
            </div>
            <div className="loginBtnBox">
              <button type="submit">로그인</button>
            </div>
            <div className="registerHelp">
              계정이 없으신가요?{" "}
              <Link
                className="registerBtn"
                to="/register"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  setModalIsOpen(false);
                  setZindex(1);
                }}
              >
                회원가입
              </Link>
            </div>
          </form>
        </Modal>
      </div>

      <div className="menuNav" style={{ zIndex: zIndex }}>
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
          <Link to="/event">공지사항</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
