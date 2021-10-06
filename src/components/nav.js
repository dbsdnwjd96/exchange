// eslint-disable-next-line
import React, { useState } from 'react';
import './css/layout.css';
//Connect Router
import { Link } from "react-router-dom";

const Nav = ()=> {

    const [ activeNav, setActiveNav ] = useState(1);

    return (
      // 간단하게 만들 수 있는 방법이 무조건 있을거다....
      //img 이름 코드화 해놓고 map 돌릴때마다 link 이름이랑 같게 헤서 노출?
      <nav className="nav_wrap">
          <Link to="/" className="nav_link" onClick={()=> setActiveNav(1)}>
             <img src={activeNav === 1 ? "img/gnb-home-on.png" : "img/gnb-home.png"} alt="" />
            <div className={activeNav === 1 ? "blue" : null}>HOME</div>
          </Link>
          <Link to="/exchange" className="nav_link" onClick={()=> setActiveNav(2)}>
            <img src={activeNav === 2 ? "img/gnb-exchange-on.png" : "img/gnb-exchange.png"} alt="" />
            <div className={activeNav === 2 ? "blue" : null}>환전신청</div>
          </Link>
          <Link to="/findway" className="nav_link" onClick={()=> setActiveNav(3)}>
            <img src={activeNav === 3 ? "img/gnb-map-on.png" : "img/gnb-map.png"} alt="" />
            <div className={activeNav === 3 ? "blue" : null}>오시는길</div>
          </Link>
          <Link to="/faq" className="nav_link" onClick={()=> setActiveNav(4)}>
            <img src={activeNav === 4 ? "img/gnb-faq-on.png" : "img/gnb-faq.png"} alt="" />
            <div className={activeNav === 4 ? "blue" : null}>FAQ</div>
          </Link>
          <Link to="/mypage" className="nav_link" onClick={()=> setActiveNav(5)}>
            <img src={activeNav === 5 ? "img/gnb-mypage-on.png" : "img/gnb-mypage.png"} alt="" />
            <div className={activeNav === 5 ? "blue" : null}>마이페이지</div> 
          </Link>
      </nav>
    );
  }

  export default Nav;