import React from 'react';
import './css/layout.css';

function Footer() {
    return (
      <footer>
          <div className="f_head">
              <span className="tit">EXCHANGE</span>
              <div>개인정보처리방침</div>
          </div>
          <div className="f_cont">
              <p>한중 환전소</p>
              <p>대표이사 전문학</p>
              <p>서울 중고 명동 2길 43 1층</p>
              <p>사업자등록번호 211-11-1234, 통신판매업 신고번호</p>
          </div>
      </footer>
    );
  }

  export default Footer;