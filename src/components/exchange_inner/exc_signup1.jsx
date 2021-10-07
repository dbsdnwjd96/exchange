// eslint-disable-next-line
import React from 'react';
import styled from 'styled-components';
import HomeLayout from '../css/layout/header';

const { Header, HeaderTitle, MypageBtn} = HomeLayout;

function ExchangeSignup1 () {
    return(
        <div>
            <Header>
                <HeaderTitle>환전신청</HeaderTitle>
                <MypageBtn></MypageBtn>
            </Header>
        </div>
    );
}

export default ExchangeSignup1;