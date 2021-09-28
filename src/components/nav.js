// eslint-disable-next-line
import React from 'react';
import './css/layout.css';
//Connect Router
import { Link } from "react-router-dom";

const Nav = ()=> {
    return (
      <nav className="nav_wrap">
        <Link to="/">
          <div>HOME</div>
        </Link>
        <Link to="/exchange">
          <div>환전신청</div>
        </Link>
        <Link to="/findway">
          <div>오시는길</div>
        </Link>
        <Link to="/faq">
          <div>FAQ</div>
        </Link>
        <Link to="/mypage">
          <div>마이페이지</div> 
        </Link>
      </nav>
    );
  }

  export default Nav;