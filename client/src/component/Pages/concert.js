import React from 'react';
import "./concert.css";
import concert1 from "../Main/images/concert1.jpg";
import concert2 from "../Main/images/concert2.jpg";
import concert3 from "../Main/images/concert3.jpg";
import concert4 from "../Main/images/concert4.png";

function Concert(){
  return (
    <div className='mainDiv'>
      {/* 상단부분 */}
      <div className='jsw_listlogo'>
        <span>콘서트</span>
      </div>
    {/* 상단 이미지 나열부분 */}
      <div id='jsw_toplist'>
        <div className='jsw_list'>
          <div className='jsw_listimg'>
            <img src={concert1} />
          </div>
          <div className='jsw_listname'>
            <span>해피성중데이</span>
          </div>
          <div className='jsw_listexplanation'>
            <span>팀24 멤버 '곤'의 생일 기념 팬미팅</span>
          </div>
        </div>
        <div className='jsw_list'>
          <div className='jsw_listimg'>
            <img src={concert2} />
          </div>
          <div className='jsw_listname'>
            <span>2023 THE RAMPAGE 1st FAN CONCERT in SEOUL∼THE BEGINNING∼</span>
          </div>
          <div className='jsw_listexplanation'>
            <span>한국 레이버즈 여러분과 함께하는 첫... </span>
          </div>
        </div>
        <div className='jsw_list'>
          <div className='jsw_listimg'>
            <img src={concert3} />
          </div>
          <div className='jsw_listname'>
            <span>현대카드 Curated 89 민수 〈민수는 참을 수 없어！〉</span>
          </div>
          <div className='jsw_listexplanation'>
            <span>참을 수 없는 민수 단독 공연!</span>
          </div>
        </div>
        <div className='jsw_list'>
          <div className='jsw_listimg'>
            <img src={concert4} />
          </div>
          <div className='jsw_listname'>
            <span>BLITZERS FAN－CON［A to z］</span>
          </div>
          <div className='jsw_listexplanation'>
            <span>블리들을 위한 첫 팬콘서트</span>
          </div>
        </div>

      </div>
    {/* 중간 카테고리 메뉴 */}
      <div className='jsw_midlist'>
        <ul>
          <li><a href='/'>전체</a></li>
          <li><a href='/'>아이돌</a></li>
          <li><a href='/'>팬클럽/팬미팅</a></li>
          <li><a href='/'>발라드/R&B</a></li>
          <li><a href='/'>힙합/EDM</a></li>
          <li><a href='/'>페스티벌</a></li>
          <li><a href='/'>인디/록</a></li>
          <li><a href='/'>내한</a></li>
          <li><a href='/'>그 외 장르</a></li>
        </ul>
      </div>
    {/* 메인부분 인기순, 공연임박순 등 */}
      <div className='jsw_mainlist'>

      </div>
    {/* 이미지 나열 */}
      <div className='jsw_main'>
        <div id='jsw_mainlist'>
          <div className='jsw_list_main'>
            <div className='jsw_listimg_main'>
              {/* <img src='./Main/images/concert1.jpg'></img> */}
            </div>
            <div className='jsw_listname_main'>
              <span>KIM BYUNGJOO 1st FAN CONCERT：Serendipity 앵콜</span>
            </div>
            <div className='jsw_listexplanation_main'>
              <ul>
                <li>2023.11.05 - 2023.11.05</li>
                <li><a href='/'>예림당아트홀</a></li>
              </ul>
              <span></span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Concert;