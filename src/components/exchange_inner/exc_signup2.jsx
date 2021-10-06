// eslint-disable-next-line
import React from 'react';
import styled from 'styled-components';
import HomeLayout from '../layout/header';

const { Header, HeaderTitle, MypageBtn} = HomeLayout;




function ExchangeSignup2 () {
    return(
        <div>
            <div>
                <Header>
                    <HeaderTitle>환전신청</HeaderTitle>
                    <MypageBtn></MypageBtn>
                </Header>
            </div>

            <div className="process_title">
                환전 신청이 완료<br></br>
                되었습니다.
            </div>
            <ul>
                <li>
                    <div>통화명</div>
                    <div>미국 USD</div>
                </li>
                <li>
                    <div>환전신청금액</div>
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
                    <div>입금은행</div>
                    <div>한국은행</div>
                </li>
                <li>
                    <div>입금계좌</div>
                    <div>한국은행 111-11-1111 정문학</div>
                </li>
            </ul>
            <div>
                <div className="img">
                    <img src="" alt="" />
                </div>
                <div>
                    15분 이내 입금하지 않으면 자동 취소 됩니다.<br></br>
                    입금 정보는 알림톡으로 발송해드렸습니다.
                </div>
            </div>
            <button className="btnBlue">확인</button>
        </div>
    );
}

export default ExchangeSignup2;