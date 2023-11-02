import React from "react";
import "./showinfo.css";

import Hero_1 from "../images/hero_1.jpg";
import Hero_2 from "../images/hero_2.jpg";
import Hero from "../images/hero.png";

// 공연 정보
const ShowInfo = () => {
  return (
    <div className="show_container">
      <div className="casting">
        <div className="casting-title">캐스팅</div>
        <div className="casting-info">
          {" "}
          {/* 사람들 이미지 전체 */}
          <ul>
            <li className="casting-images">
              {" "}
              {/* 각각의 이미지 칸 */}
              <div className="castain-img-name">
                <img src={Hero} alt="hero" />
                <div className="casting-names">
                  {" "}
                  {/* 이름 칸 */}
                  임영웅
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="show-time-info">
        <h4>
          <b>공연시간 정보</b>
        </h4>
        <div>
          <p>예매가능시간: 공연시간 6시간 전까지</p>
          <p>
            2000년 00월 00일(월) 오전 00시 00분 / 00월 0일(월) 오후 00시 / 00월
            00일(월) 오후 00시
          </p>
        </div>
      </div>
      <div className="note-details">
        <h4>
          <b>공지사항</b>
        </h4>
        <div>
          ※ 지원이 중단된 IE(Internet Explorer) 브라우저 또는 다수의 브라우저로
          동시 예매 진행 시 원활하지 않을 수 있습니다.
          <br />
          <br />
          ※원활한 예매를 위해 인터파크페이, 아이포인트(I-point), NOL포인트
          결제수단이 제한됩니다.
          <br />
          (그 외 신용카드, 카카오페이 등 결제수단 사용 가능)
          <br />
          <br />
          <b style={{ fontSize: "2vw", fontWeight: 100 }}>[예매일정 안내]</b>
          <br />
          - 티켓 오픈: 2023년 10월 19일(목) 오후 8시
          <br />
          ※ 매수제한: 회차당 1인 2매
          <br />
          - 일괄배송 마감일: 2023년 11월 13일(월) 23:59 예매 건까지 (이후
          현장수령만 선택 가능)
          <br />
          - 2023년 11월 13일(월) 23:59(KST)까지 예매 완료 건에 대하여 11월
          22일(수)부터 순차적으로 배송 될 예정이며, &nbsp;이후 예매하시는 분들은
          현장 수령으로만 가능합니다.
          <br />
          - 2023년 11월 13일(월) 23:59(KST)까지 배송지 변경이 가능합니다.
          <br />
          - 티켓 제작으로 인해 2023년 11월 13일(월) 23:59(KST) 이후 일괄 배송
          예매 건의 취소 요청은
          <br />
          &nbsp;&nbsp;2023년 11월 22일(수) 12:00(KST)까지 고객센터(1544-1555)
          또는
          <br />
          &nbsp;&nbsp;임영웅 전국투어 전용 ARS 고객센터(1660-1646)를 통해서만
          가능합니다.
          <br />
          <br />
          <b style={{ fontSize: "2vw", fontWeight: 100 }}>
            [불법 예매 티켓 모니터링 및 강제 취소 안내]
          </b>
          <br />
          본 공연은 불법 예매에 대한 지속적인 모니터링을 통해 부정한 방법의 예매
          건에 대하여
          <br />
          수시로 강제 취소 처리를 지속하고 있습니다.
          <br />
          티켓 불법 거래로 인한 피해에 대해 주최/주관사 및 예매처에서는 여하의
          책임을 지지 않습니다.
          <br />
          반드시 공식 예매처를 통해 티켓을 예매할 수 있도록 팬 여러분들의
          자발적인 협조 부탁드립니다.
          <br />
          <br />
          <b style={{ fontSize: "2vw", fontWeight: 100 }}>
            [무통장 입금 관련 안내]
          </b>
          <br />
          - 본 공연은 원활한 예매 진행을 위해 예매 시 무통장 입금 결제가
          제한됩니다.
          <br />
          &nbsp;&nbsp;티켓 불법 양도, 암표 근절 및 티켓을 구입하고 싶어하시는
          관객분들에게
          <br />
          &nbsp;&nbsp;피해가 되지 않도록 조치를 취하는 것이니, 이 점 양해
          부탁드립니다.
          <br />
          <br />
          <b style={{ fontSize: "2vw", fontWeight: 100 }}>
            [휠체어석 예매 안내]
          </b>
          <br />
          - 휠체어석(장애인석) 예매는 10/20(금) 오전 9시부터 인터파크 티켓
          고객센터(1544-1555) 또는
          <br />
          &nbsp;&nbsp;임영웅 전국투어 전용 ARS 고객센터(1660-1646)를 통해 전화
          예매로만 가능합니다.
          <br />
          &nbsp;&nbsp;(전화 예매 가능 시간: 평일 9시~18시)
          <br />
          - 공연 당일 예매자 본인의 실물 신분증과 장애인 등록증(또는 복지카드)
          확인이 이루어지며,
          <br />
          &nbsp;&nbsp;미지참 시 입장이 불가합니다.
          <br />
          &nbsp;&nbsp;(복지카드를 소지하고 계시더라도 휠체어를 이용하지 않는
          관객은 휠체어석 이용이 불가합니다.)
          <br />
          - 휠체어석 예매 티켓은 현장 수령만 가능하며, 공연 당일 예매자
          본인(휠체어석 이용자)이 직접 티켓을 수령해야 합니다.
          <br />
          &nbsp;&nbsp;(대리수령 및 양도불가)
        </div>
      </div>
      <div className='conDetailinfoBox'>
        <h4>
          <b>공연상세 / 출연진정보</b>
        </h4>
        <img src={Hero_1} alt="hero_img_1" width="100%" />
        <img src={Hero_2} alt="hero_img_2" width="100%" />
      </div>
    </div>
  );
};

export default ShowInfo;
