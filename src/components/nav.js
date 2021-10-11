// eslint-disable-next-line
import React, { useState } from 'react';
import './css/layout.css';
//Connect Router
import { Link } from "react-router-dom";
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


  export default Nav;