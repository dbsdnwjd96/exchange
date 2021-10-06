// eslint-disable-next-line
import React from 'react';
import styled from 'styled-components';
import HomeLayout from '../layout/header';

import { Link } from "react-router-dom";

const { Header, HeaderTitle, MypageBtn} = HomeLayout;

function ExchangeDetails2 () {
    return(
        <div>
            <Header>
                <HeaderTitle>환전신청</HeaderTitle>
                <MypageBtn></MypageBtn>
            </Header>
            <div>
                <div>정문학님</div>
                <div>환전 신청 내역</div>
            </div>
            <ul>
                <li>
                    <div>통화명</div>
                    <div>미국 USD</div>
                </li>
                <li>
                    <div>환전금액</div>
                    <div>1,000$</div>
                </li>
                <li>
                    <div>신청일</div>
                    <div>2021.08.10</div>
                </li>
                <li>
                    <div>입금금액</div>
                    <div>1,154,160원</div>
                </li>
                <li>
                    <div>입금여부</div>
                    <div>입금취소</div>
                </li>
                <li>
                    <div>입금계좌</div>
                    <div>한국은행 111-11-1111 정문학</div>
                </li>
                <li>
                    <div>입금일</div>
                    <div>2021.08.10 20:00</div>
                </li>
                <li>
                    <div>수령여부</div>
                    <div>미수령</div>
                </li>
            </ul>
            <div>    
                <Link to="/manager_chk">
                    <button type="submit" className="btnBlue">관리자 확인</button>
                </Link>
                <button >목록</button>
            </div>

        </div>
    );
}

export default ExchangeDetails2;