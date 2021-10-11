import React from 'react';
import './css/layout.css';
import styled from 'styled-components';

const Nav = ()=> {

    const [ activeNav, setActiveNav ] = useState(1);

    return (
      <NavContainer>
          <Link to="/" className="nav_link" onClick={()=> setActiveNav(1)}>
            <NavInner>
              <img src={activeNav === 1 ? "img/gnb-home-on.png" : "img/gnb-home.png"} alt="" />
              <div className={activeNav === 1 ? "blue" : null}>HOME</div>
            </NavInner>
          </Link>
          <Link to="/exchange" className="nav_link" onClick={()=> setActiveNav(2)}>
            <NavInner>
              <img src={activeNav === 2 ? "img/gnb-exchange-on.png" : "img/gnb-exchange.png"} alt="" />
              <div className={activeNav === 2 ? "blue" : null}>환전신청</div>
            </NavInner>
          </Link>
          <Link to="/findway" className="nav_link" onClick={()=> setActiveNav(3)}>
            <NavInner>
              <img src={activeNav === 3 ? "img/gnb-map-on.png" : "img/gnb-map.png"} alt="" />
              <div className={activeNav === 3 ? "blue" : null}>오시는길</div>
            </NavInner>  
          </Link>
          <Link to="/faq" className="nav_link" onClick={()=> setActiveNav(4)}>
            <NavInner>
              <img src={activeNav === 4 ? "img/gnb-faq-on.png" : "img/gnb-faq.png"} alt="" />
              <div className={activeNav === 4 ? "blue" : null}>FAQ</div>
            </NavInner>
          </Link>
          <Link to="/mypage" className="nav_link" onClick={()=> setActiveNav(5)}>
            <NavInner>
              <img src={activeNav === 5 ? "img/gnb-mypage-on.png" : "img/gnb-mypage.png"} alt="" />
              <div className={activeNav === 5 ? "blue" : null}>마이페이지</div> 
            </NavInner>
          </Link>
      </NavContainer>
    );
}

const NavContainer = styled.nav`
  position: fixed; 
  display: flex; 
  justify-content: 
  space-between; 
  align-items: center; 
  width: 100%; 
  height: 90px; 
  padding: 12.5px 24px 0; 
  background: #fff; 
  bottom: 0; left: 0; 
  z-index: 99;

  > a {
    line-height: 59px;

    
  }
`;

const NavInner = styled.div`
  > div {
    font-size: 11px; 
    font-weight: 800; 
    line-height: 18px; 
    color: #222222; 

    &.blue {
      color: ${props => props.theme.blue};
    }
  }

  > img {
    display: block; 
    margin: 0 auto 7px; 
    width: 23px; 
    height: 23px;
  }
`;





const Footer = () => {
    return (
      <FooterContainer>
          <FooterHead className="f_head">
              <span className="tit">EXCHANGE</span>
              <div>개인정보처리방침</div>
          </FooterHead>
          <FooterContent>
              <p>한중 환전소</p>
              <p>대표이사 전문학</p>
              <p>서울 중고 명동 2길 43 1층</p>
              <p>사업자등록번호 211-11-1234, 통신판매업 신고번호</p>
          </FooterContent>
      </FooterContainer>
    );
  }

  const FooterContainer = styled.footer`
    position: relative; 
    padding-bottom: 90px;
  `;

  const FooterHead = styled.div`
    display: flex; 
    justify-content: space-between; 
    width: 100%; 
    padding: 16px 30px 15px; 
    background: #cad9f0;

    > div {
      display: inline-block; 
      font-size: 13px; 
      line-height: 26px; 
      color: #ffffff; 
      text-decoration: underline; 
      text-underline-position: under;
    }

    > span {
      font-size: 20px; 
      color: #fff; 
      line-height: 29px; 
      font-weight: 800;
    }
  `;

  const FooterContent = styled.div`
    display: block; 
    padding: 26px 30px; 
    background: #f5f5f5; 

    > p {
        font-size: 13px; 
        color: #767676; 
        line-height: 17px;
    }
  `;

  export default Footer;