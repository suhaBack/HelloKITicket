import "./ranking.css";
import React, { useState } from "react";
// import concert1 from "./../../Main/images/concert/1.gif";
// import concert2 from "./../../Main/images/concert/2.jpg";

function Ranking(){

  //날짜 표시 함수
  let day = new Date();   
  // 년. 월. 일 형식으로 표시
  let tod = day.toLocaleDateString();

  // 요일 구하는 함수
  // 숫자 형태로 리턴되기 때문에 0 - 6이 일 - 토의 형태를 띈다.
  // 배열에 넣어서 각 숫자에 해당하는 값을 리턴하도록 설정했다.
  const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
  let week = WEEKDAY[day.getDay()];
  // getDay가 숫자로 리턴하기 때문에 배열로 치환해준다.
  // console.log(week);
  
  // 합쳐서 오늘 날짜를 년. 월. 일.(요일) 로 표시하는 함수
  let today = tod + "(" + week + ")";
  // console.log(today);
  
  
  // 주제 클릭 시 테이블 내용 변경하는 함수
  function SetTopic(event){
    console.log("SetTopic 실행");



  }
  //버튼 클릭시 카테고리를 변경
  let [rankingCategoty, setRankingCategory] = useState("콘서트/페스티벌");




  // let [thumb_img, setchangimg] = useState("");


  function noImage(){

  }


  return (
    <div className='rankingMain container'>
      <h1 className="Topic_Name">장르별 실시간 랭킹</h1>
      <h3 className="Today_Rank">{today} 기준 </h3>
      <div className="Category_Btn_Area">
        <button className="Category_Btn" id="CB1" onClick={()=>{
          setRankingCategory("콘서트/페스티벌");SetTopic();}} value={'콘서트/페스티벌'}>
        콘서트/페스티벌
        </button>
        <button className="Category_Btn" id="CB2" onClick={()=>{setRankingCategory("뮤지컬/연극"); SetTopic();}} value={'뮤지컬/연극'}>
        뮤지컬/연극
        </button>
        <button className="Category_Btn" id="CB3" onClick={()=>{setRankingCategory("전시/클래식/기타"); SetTopic();}} value={'전시/클래식/기타'}>
        전시/클래식/기타
        </button>
        </div>

      <div className="rank_top">
        {/* <h2 className="tit_sub_float" id="rankTopTitle">콘서트/페스티벌</h2> */}
        <h2 className="tit_sub_float" id="rankTopTitle" value={'콘서트/페스티벌'}>{rankingCategoty}</h2>
      </div>
      <div className="ranking_list">
        <table summary="TOP 10 리스트" className="table_style_1">
          <caption className="hide"></caption>
          <colgroup>
            <col width={138} />
            <col width={424} />
            <col width={128} />
            <col width={168} />
            <col width={150} />
          </colgroup>
          <thead>
            <tr>
              <td>랭킹</td>
              <td className="mid">공연명</td>
              <td>공연일시</td>
              <td>공연장소</td>
              <td>예매</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fst">
                <span className="ranking_rank">1</span>
                <p className="change">-</p>
                <span className="explanation">순위유지</span>
              </td>
              <td>
                <div className="show_info">
                  <div className="thumb_img">
                    <a href="/">
                      <img src="" width={90} onError={noImage}>
                        {/* 오류 발생 시에도 이미지 크기 고정 */}
                      </img>
                    </a>
                    </div>
                    <p className="info_text">
                      <span className="show_title">
                        <a href="/">제목</a>
                      </span>
                      </p>
                </div>
              </td>
              <td>
                <ul className="show_date">
                  <li>0000.00.00</li>
                  <li>~ 0000.00.00</li>
                </ul>
              </td>
              <td>
                장소
              </td>
              <td className="lst">
                <a href="/" className="btn_rank">
                <span>예매하기</span>
                </a>
              </td>
            </tr>
            <tr>
              <td className="fst">
                <span className="ranking_rank">2</span>
                <p className="change">
                  <span className="ico_change_up">
                  1
                  </span>
                </p>
                <span className="explanation">순위상승</span>
              </td>
              <td>
                <div className="show_info">
                  <div className="thumb_img">
                    <a href="/">
                      <img src="" width={90} onError={noImage(this, 90, 125)}>
                        {/* 오류 발생 시에도 이미지 크기 고정 */}
                      </img>
                    </a>
                    </div>
                    <p className="info_text">
                      <span className="show_title">
                        <a href="/">제목</a>
                      </span>
                      </p>
                </div>
              </td>
              <td>
                <ul className="show_date">
                  <li>0000.00.00</li>
                  <li>~ 0000.00.00</li>
                </ul>
              </td>
              <td>
                장소
              </td>
              <td className="lst">
                <a href="/" className="btn_rank">
                <span>예매하기</span>
                </a>
              </td>
            </tr>
            <tr>
              <td className="fst">
                <span className="ranking_rank">3</span>
                <p className="change">
                  <span className="ico_change_down">
                    1
                  </span>
                </p>
                <span className="explanation">순위유지</span>
              </td>
              <td>
                <div className="show_info">
                  <div className="thumb_img">
                    <a href="/">
                      <img src="" width={90} onError={noImage(this, 90, 125)}>
                        {/* 오류 발생 시에도 이미지 크기 고정 */}
                      </img>
                    </a>
                    </div>
                    <p className="info_text">
                      <span className="show_title">
                        <a href="/">제목</a>
                      </span>
                      </p>
                </div>
              </td>
              <td>
                <ul className="show_date">
                  <li>0000.00.00</li>
                  <li>~ 0000.00.00</li>
                </ul>
              </td>
              <td>
                장소
              </td>
              <td className="lst">
                <a href="/" className="btn_rank">
                <span>예매하기</span>
                </a>
              </td>
            </tr>
            <tr>
              <td className="fst">
                <span className="ranking_rank">4</span>
                <p className="change">-</p>
                <span className="explanation">순위유지</span>
              </td>
              <td>
                <div className="show_info">
                  <div className="thumb_img">
                    <a href="/">
                      <img src="" width={90} onError={noImage(this, 90, 125)}>
                        {/* 오류 발생 시에도 이미지 크기 고정 */}
                      </img>
                    </a>
                    </div>
                    <p className="info_text">
                      <span className="show_title">
                        <a href="/">제목</a>
                      </span>
                      </p>
                </div>
              </td>
              <td>
                <ul className="show_date">
                  <li>0000.00.00</li>
                  <li>~ 0000.00.00</li>
                </ul>
              </td>
              <td>
                장소
              </td>
              <td className="lst">
                <a href="/" className="btn_rank">
                <span>예매하기</span>
                </a>
              </td>
            </tr>
            <tr>
              <td className="fst">
                <span className="ranking_rank">5</span>
                <p className="change">-</p>
                <span className="explanation">순위유지</span>
              </td>
              <td>
                <div className="show_info">
                  <div className="thumb_img">
                    <a href="/">
                      <img src="" width={90} onError={noImage(this, 90, 125)}>
                        {/* 오류 발생 시에도 이미지 크기 고정 */}
                      </img>
                    </a>
                    </div>
                    <p className="info_text">
                      <span className="show_title">
                        <a href="/">제목</a>
                      </span>
                      </p>
                </div>
              </td>
              <td>
                <ul className="show_date">
                  <li>0000.00.00</li>
                  ~
                  <br></br>
                  <li>0000.00.00</li>
                </ul>
              </td>
              <td>
                장소
              </td>
              <td className="lst">
                <a href="/" className="btn_rank">
                <span>예매하기</span>
                </a>
              </td>
            </tr>
            <tr>
              <td className="fst">
                <span className="ranking_rank">6</span>
                <p className="change">-</p>
                <span className="explanation">순위유지</span>
              </td>
              <td>
                <div className="show_info">
                  <div className="thumb_img">
                    <a href="/">
                      <img src="" width={90} onError={noImage(this, 90, 125)}>
                        {/* 오류 발생 시에도 이미지 크기 고정 */}
                      </img>
                    </a>
                    </div>
                    <p className="info_text">
                      <span className="show_title">
                        <a href="/">제목</a>
                      </span>
                      </p>
                </div>
              </td>
              <td>
                <ul className="show_date">
                  <li>0000.00.00</li>
                  <li>~ 0000.00.00</li>
                </ul>
              </td>
              <td>
                장소
              </td>
              <td className="lst">
                <a href="/" className="btn_rank">
                <span>예매하기</span>
                </a>
              </td>
            </tr>
            <tr>
              <td className="fst">
                <span className="ranking_rank">7</span>
                <p className="change">-</p>
                <span className="explanation">순위유지</span>
              </td>
              <td>
                <div className="show_info">
                  <div className="thumb_img">
                    <a href="/">
                      <img src="" width={90} onError={noImage(this, 90, 125)}>
                        {/* 오류 발생 시에도 이미지 크기 고정 */}
                      </img>
                    </a>
                    </div>
                    <p className="info_text">
                      <span className="show_title">
                        <a href="/">제목</a>
                      </span>
                      </p>
                </div>
              </td>
              <td>
                <ul className="show_date">
                  <li>0000.00.00</li>
                  <li>~ 0000.00.00</li>
                </ul>
              </td>
              <td>
                장소
              </td>
              <td className="lst">
                <a href="/" className="btn_rank">
                <span>예매하기</span>
                </a>
              </td>
            </tr>
            <tr>
              <td className="fst">
                <span className="ranking_rank">8</span>
                <p className="change">-</p>
                <span className="explanation">순위유지</span>
              </td>
              <td>
                <div className="show_info">
                  <div className="thumb_img">
                    <a href="/">
                      <img src="" width={90} onError={noImage(this, 90, 125)}>
                        {/* 오류 발생 시에도 이미지 크기 고정 */}
                      </img>
                    </a>
                    </div>
                    <p className="info_text">
                      <span className="show_title">
                        <a href="/">제목</a>
                      </span>
                      </p>
                </div>
              </td>
              <td>
                <ul className="show_date">
                  <li>0000.00.00</li>
                  <li>~ 0000.00.00</li>
                </ul>
              </td>
              <td>
                장소
              </td>
              <td className="lst">
                <a href="/" className="btn_rank">
                <span>예매하기</span>
                </a>
              </td>
            </tr>
            <tr>
              <td className="fst">
                <span className="ranking_rank">9</span>
                <p className="change">-</p>
                <span className="explanation">순위유지</span>
              </td>
              <td>
                <div className="show_info">
                  <div className="thumb_img">
                    <a href="/">
                      <img src="" width={90} onError={noImage(this, 90, 125)}>
                        {/* 오류 발생 시에도 이미지 크기 고정 */}
                      </img>
                    </a>
                    </div>
                    <p className="info_text">
                      <span className="show_title">
                        <a href="/">제목</a>
                      </span>
                      </p>
                </div>
              </td>
              <td>
                <ul className="show_date">
                  <li>0000.00.00</li>
                  <li>~ 0000.00.00</li>
                </ul>
              </td>
              <td>
                장소
              </td>
              <td className="lst">
                <a href="/" className="btn_rank">
                <span>예매하기</span>
                </a>
              </td>
            </tr>
            <tr>
              <td className="fst">
                <span className="ranking_rank">10</span>
                <p className="change">-</p>
                <span className="explanation">순위유지</span>
              </td>
              <td>
                <div className="show_info">
                  <div className="thumb_img">
                    <a href="/">
                      <img src="" width={90} onError={noImage(this, 90, 125)}>
                        {/* 오류 발생 시에도 이미지 크기 고정 */}
                      </img>
                    </a>
                    </div>
                    <p className="info_text">
                      <span className="show_title">
                        <a href="/">제목</a>
                      </span>
                      </p>
                </div>
              </td>
              <td>
                <ul className="show_date">
                  <li>0000.00.00</li>
                  <li>~ 0000.00.00</li>
                </ul>
              </td>
              <td>
                장소
              </td>
              <td className="lst">
                <a href="/" className="btn_rank">
                <span>예매하기</span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Ranking;
