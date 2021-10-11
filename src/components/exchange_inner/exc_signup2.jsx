// eslint-disable-next-line
import React from 'react';
import styled from 'styled-components';
import HomeLayout from '../css/layout/header';
import { CheckButton } from '../css/layout/button';
import Title from '../css/content/title';
import ExchangeCheckList from '../css/content/list2';
import {Container} from '../css/content/set_default';

const { Header, HeaderTitle, MypageBtn} = HomeLayout;
const {ContentSubTitle} = Title;
const {ExChkListBox, ExChkList} = ExchangeCheckList;



function ExchangeSignup2 () {
    return(
        <div>
            <Header>
                <HeaderTitle>환전신청</HeaderTitle>
                <MypageBtn></MypageBtn>
            </Header>
            <Container>
            <ContentSubTitle>
                환전 신청이 완료<br></br>
                되었습니다.
            </ContentSubTitle>
            <ImgBox2 width="110px" height="110px" margin="0 0 25px auto;">
                    <img src="img/exchange.png" alt="" />
            </ImgBox2>
            <ExChkListBox>
                <ExChkList>
                    <div>통화명</div>
                    <div>미국 USD</div>
                </ExChkList>
                <ExChkList>
                    <div>환전신청금액</div>
                    <div>1,000$</div>
                </ExChkList>
                <ExChkList>
                    <div>입금금액</div>
                    <div>1,154,160원</div>
                </ExChkList>
                <ExChkList>
                    <div>입금은행</div>
                    <div>한국은행</div>
                </ExChkList>
                <ExChkList>
                    <div>입금계좌</div>
                    <div>111-11-1111 정문학</div>
                </ExChkList>
            </ExChkListBox>
            <WarningBox>
                <ImgBox2 width="45px" height="45px">
                    <img src="img/icon-warning.png" alt="" />
                </ImgBox2>
                <span>
                    15분 이내 입금하지 않으면 자동 취소 됩니다.<br></br>
                    입금 정보는 알림톡으로 발송해드렸습니다.
                </span>
            </WarningBox>
            <CheckButton>확인</CheckButton>
            </Container>
        </div>
    );
}


const ImgBox2 = styled.div`
    padding: ${props => props.padding || ""};
    margin: ${props => props.margin || ""};
    width: ${props => props.width || ""};
    height: ${props => props.height || ""};
    border-radius: 50%;
    overflow: hidden;
    
    vertical-align: ${props => props.verticalAlign || "middle"};

    >img {
        width: 100%;
        height: 100%;
    }

`;

const WarningBox = styled.div`

    padding: 40px 0;

    > div {
        display: inline-block !important;
    }
    > span {
        display: inline-block;
        margin-left: 10px;
        font-size: 15px;
        line-height: 18px;
        color: #767676;
        vertical-align: middle;
    }
`;



export default ExchangeSignup2;