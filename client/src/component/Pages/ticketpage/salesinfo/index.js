import React from "react";
import "./salesinfo.css";

// 판매정보
const SalesInfo = () => {
  return (
    <div className="sale-info">
      {" "}
      {/* [판매정보] (전체) 섹션 */}
      <div className="agency-info">
        {" "}
        {/* [기획사 정보] (전체) 섹션 */}
        <div className="agency-title">
          {" "}
          {/* [기획사 정보] (제목) 섹션 */}
          기획사 정보
        </div>
        <div className="agency-content">
          {" "}
          {/* [기획사 정보] (내용) 섹션 */}
          주최/주관: (주)물고기뮤직, (주)CJ ENM
        </div>
      </div>
      <div className="product-info">
        {" "}
        {/* [상품관련 정보] (전체) 섹션 */}
        <div style={{width: "100%"}}>
          <div className="product-title">
            {" "}
            {/* [상품관련 정보] (제목) 섹션 */}
            상품관련 정보
          </div>
          <div className="product-content">
            {" "}
            {/* [상품관련 정보] (내용) - {전체} 섹션 */}
            <table className="table_info">
              {" "}
              {/* 테이블 */}
              <colgroup className="table-cols">
                {" "}
                {/* 표 스타일 마다 각각 세팅적용*/}
                <col className="col_1" />
                <col className="col_2" />
              </colgroup>
              <tbody className="table_tbody">
                <tr>
                  <th>주최/기획</th>
                  <td>(주) 회사명</td>
                </tr>
                <tr>
                  <th>공연 관련 문의</th>
                  <td>카카오톡채널(@헬로티켓)</td>
                </tr>
                <tr>
                  <th>예매 관련 문의</th>
                  <td>0000-0000</td>
                </tr>
                <tr>
                  <th>이용가능 장소</th>
                  <td>장소 위치</td>
                </tr>
                <tr>
                  <th>유효기간<br></br>(이용조건)</th>
                  <td>0000.00.00 - 0000.00.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style={{width: "100%"}}>
          <div className="product-title">
            {" "}
            {/* [상품관련 정보] (제목) 섹션 */}
            판매자 정보
          </div>
          <table className="table_info">
            {" "}
            {/* 테이블 */}
            <colgroup className="table-cols">
              {" "}
              {/* 표 스타일 마다 각각 세팅적용*/}
              <col className="col_1" />
              <col className="col_2" />
            </colgroup>
            <tbody className="table_tbody">
              <tr>
                <th>상호</th>
                <td>(주) 회사명</td>
              </tr>
              <tr>
                <th>대표자명</th>
                <td>홍길동, 이순신</td>
              </tr>
              <tr>
                <th>사업자등록번호</th>
                <td>000-00-00000</td>
              </tr>
              <tr>
                <th>E-mail</th>
                <td>abcd@naver.com</td>
              </tr>
              <tr>
                <th>연락처</th>
                <td>0000-0000</td>
              </tr>
              <tr>
                <th>주소</th>
                <td>주소란</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesInfo;
