// eslint-disable-next-line
import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';


const btnBlue = styled.button`
    
`;



function Mypage() {
    return (
        <div>
            <div className="header">
                <div className="title">마이페이지</div>
                <div className="btn_mypage">MY</div>
            </div>
            <div className="process_title">
                환전신청 내역조회
            </div>

            <form action="">
                <div className="phone">
                    <div className="input_box">
                        <input type="text" placeholder="전화번호 인증"/>
                    </div>
                    <button className="btn skyblue">SMS 인증</button>
                </div>
                <div className="password">
                    <div className="input_box">
                        <input type="text" placeholder="비밀번호" />
                    </div>
                </div>
                <Link to="/exc_datails1">
                <button type="submit" className="btnBlue">확인</button>
                </Link>
            </form>

            
        </div>

    );
}

export default Mypage;