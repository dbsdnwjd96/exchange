// eslint-disable-next-line
import React from 'react';
import styled from 'styled-components';
import HomeLayout from '../css/layout/header';
import Title from '../css/content/title';
import { Container } from '../css/content/set_default';
import Button from '../css/layout/button';
import ExchangeCheckList from '../css/content/list2';


import { Link } from "react-router-dom";

const { Header, MypageBtn, HeaderBackbtn} = HomeLayout;
const {ContentSubTitleDetail} = Title;
const { CheckButton } = Button;
const {ExChkListBox, ExChkList} = ExchangeCheckList;


const ButtonBox = styled.div`
    display: block;
    width: 100%;
    padding: ${props => props.padding || "" };
    margin: ${props => props.margin || "" };
`;




function ExchangeDetails2 () {
    return(
        <div>
            <Header>
                <HeaderBackbtn />
                <MypageBtn></MypageBtn>
            </Header>
            <Container>
                <div>
                    <ContentSubTitleDetail>정문학님 <br></br> 환전 신청 내역</ContentSubTitleDetail>
                </div>
                <ExChkListBox>
                    <ExChkList>
                        <div>통화명</div>
                        <div>미국 USD</div>
                    </ExChkList>
                    <ExChkList>
                        <div>환전금액</div>
                        <div>1,000$</div>
                    </ExChkList>
                    <ExChkList>
                        <div>신청일</div>
                        <div>2021.08.10</div>
                    </ExChkList>
                    <ExChkList>
                        <div>입금금액</div>
                        <div>1,154,160원</div>
                    </ExChkList>
                    <ExChkList>
                        <div>입금여부</div>
                        <div>입금취소</div>
                    </ExChkList>
                    <ExChkList>
                        <div>입금계좌</div>
                        <div>한국은행 111-11-1111 정문학</div>
                    </ExChkList>
                    <ExChkList>
                        <div>입금일</div>
                        <div>2021.08.10 20:00</div>
                    </ExChkList>
                    <ExChkList>
                        <div>수령여부</div>
                        <div>미수령</div>
                    </ExChkList>
                </ExChkListBox>
                <ButtonBox padding="40px 0 95px">    
                    <Link to="/manager_chk">
                        <CheckButton width="calc(100% - 78px)">관리자 확인</CheckButton>
                    </Link>
                    <Link to="/exc_datails1">
                    <CheckButton margin="0 0 0 5px" width="73px" bg="${props.theme.gray1}" color="${props.theme.font}">목록</CheckButton>
                    </Link>
                </ButtonBox>
            </Container>
        </div>
    );
}

export default ExchangeDetails2;