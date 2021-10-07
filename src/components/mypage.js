// eslint-disable-next-line
import React from 'react';
import styled from 'styled-components';
import HomeLayout from './css/layout/header';
import Title from './css/content/title';
import Button from './css/layout/button';
import InputBox from './css/layout/input';
import { Container } from './css/content/set_default';


import { Link } from 'react-router-dom';

const { Header, HeaderTitle, MypageBtn} = HomeLayout;
const {ContentSubTitle} = Title;
const { CheckButton, SMSButton } = Button; 


function Mypage() {
    return (
        <div>
            <Header>
                <HeaderTitle>마이페이지</HeaderTitle>
                <MypageBtn></MypageBtn>
            </Header>
            <Container>
                <ContentSubTitle>환전신청 내역조회</ContentSubTitle>

                <form action="">
                    <div className="phone">
                        <InputBox width="calc(100% - 100px) !important">
                            <input type="text" placeholder="전화번호 인증"/>
                        </InputBox>
                        <SMSButton>SMS 인증</SMSButton>
                    </div>
                    <div className="password">
                        <InputBox margin="10px 0 0 0">
                            <input type="text" placeholder="비밀번호" />
                        </InputBox>
                    </div>
                    <Link to="/exc_datails1">
                    <CheckButton>확인</CheckButton>
                    </Link>
                </form>
            </Container>

            
        </div>

    );
}

export default Mypage;