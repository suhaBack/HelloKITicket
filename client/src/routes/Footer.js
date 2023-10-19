import React from 'react';
import "../css/footer.css";

const Footer = () => {
    return (
            <div id="kitiket-down">
                <div class="kitiket-content-wrapper"><div id="kitiket-footer-copy">
                    <ul>    
                        <li>홈</li> 
                        <li>헬로키티켓 안내</li>
                        <li>이용약관</li>
                        <li>개인정보처리방침</li>
                    </ul>
                </div>
                <div id="kitiket-footer-address">
                    <span>㈜헬로키티켓 | 서울특별시 용산구 남산공원길 105 | 사업자 등록번호 : 101-202-30303</span>
                    <span>통신판매업신고번호 : 2023-남산타워B-0003 | 고객센터(평일/주말 09:00~18:00) : 1011-0220</span>
                    <span>© Kitiket Entertainment Corp.</span>
                </div></div>
            </div>
    );
};

export default Footer;