import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import "../css/header.css";

const Header = () => {
  return (
    <>
      <div id="Header">
        <h1>Melon 티켓</h1>
        <input type="text" placeholder="검색창"></input>
        <AiOutlineSearch size={22} id="search-icon" />
        <nav id="Login">
          <ul>
            <li>
              <NavLink to="/login">로그인</NavLink>
            </li>
            <li>
              <NavLink to="/join">회원가입</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div id="ManuBar">
        <nav>
          <ul>
            <li>홈</li>
            <li>콘서트</li>
            <li>뮤지컬/연극</li>
            <li>클래식</li>
            <li>전시/행사</li>
            <li>테마/지역</li>
            <li>랭킹</li>
            <li>티켓오픈소식</li>
            <li>이벤트</li>
            <li>마이티켓</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
