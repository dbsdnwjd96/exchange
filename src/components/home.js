// eslint-disable-next-line
import React from 'react';
import styled from 'styled-components';
import HomeLayout from './css/layout/header';
import { Container } from './css/content/set_default';
import { ContentBox } from './css/content/set_default';
import TableLayout from './css/content/list';
import Button from './css/layout/button';
import { ExchangeCalc } from './css/content/exchangeCalc';


import { Link } from 'react-router-dom';
import Banner from './banner';//swiper
import './css/main.css';

const { Header, HeaderHomeTitle } = HomeLayout;
const { ExTableContainer, ExTableList, ExCountry } = TableLayout;
const { ViewMoreButton } = Button;

function Home() {
    return (
        <div>
            <Header>
                <HeaderHomeTitle>EXCHANGE</HeaderHomeTitle>
            </Header>
            <Banner />
            <Container>
                <CurrencyTableSmall />
                <ExchangeCalc />
                <Guide />
            </Container>
        </div>
    );
}

function CurrencyTableSmall() {
    return(
        <>
        <ContentBox padding="28px 0 30px;">
            <h3>환율</h3>
            <ExTableContainer>
                <ExTableList>
                    <div className="currency_nm">통화명</div>
                    <div className="currency_rate">환율</div>
                    <div className="compare">전일대비</div>
                </ExTableList>
                <ExTableList>
                    <div className="currency_nm">
                        <span>미국</span>
                        USD
                    </div>
                    <div className="currency_rate">1,146.00</div>
                    <div className="compare"> <span className="up">2.5</span> </div>
                </ExTableList>
                <ExTableList>
                    <div className="currency_nm">
                        <span>일본</span>
                        JPY 100
                    </div>
                    <div className="currency_rate">1,060.59</div>
                    <div className="compare"> <span className="down">2.5</span> </div>
                </ExTableList>
                <ExTableList>
                    <div className="currency_nm">
                        <span>중국</span>
                        CNY
                    </div>
                    <div className="currency_rate">180.21</div>
                    <div className="compare"> <span className="down">2.5</span> </div>
                </ExTableList>


            </ExTableContainer>    
            <Link to="/currency">
                <ViewMoreButton>더보기</ViewMoreButton>
            </Link>
        </ContentBox>
        </>
    );
}

function Guide () {
    return(
        <ContentBox padding="30px 0;">
            <h3>이용안내</h3>
            <ul>
                <GuideList>
                    <span>01</span>
                    <p>출국일을 선택하고</p>
                    <div className="img">
                        <img src="img/guide/step1.png" alt="" />
                    </div>
                </GuideList>
                <GuideList>
                    <span>02</span>
                    <p>환전신청을 합니다.</p>
                    <div className="img">
                        <img src="img/guide/step2.png" alt="" />
                    </div>
                </GuideList>
                <GuideList>
                    <span>03</span>
                    <p>공항 도착후 안내된 번호로 전화하면</p>
                    <div className="img">
                        <img src="img/guide/step3.png" alt="" />
                    </div>
                </GuideList>
                <GuideList>
                    <span>04</span>
                    <p>10분 내로 외화를 받게 됩니다.</p>
                    <div className="img">
                        <img src="img/guide/step4.png" alt="" />
                    </div>
                </GuideList>
            </ul>
            <GuideWarn>
                <span>잠깐!</span>
                공항에 도착해서 신청하셔도 됩니다.
            </GuideWarn>
        </ContentBox>
    );
}

const GuideList = styled.div`
    position: relative; 
    display: flex; 
    align-items: center; 
    margin-bottom: 5px; 
    padding: 16px;  
    width: 100%; 
    height: 68px; 
    border: 1px solid #f5f5f5; 
    border-radius: 5px;

    > span {
        display: inline-block; 
        margin-right: 16px; 
        font-size: 20px; 
        font-weight: 800; 
        line-height: 29px;
        color: ${props => props.theme.blue};    
    }

    > p {
        width: 70%;
        font-size: 15px;
        line-height: 20px;
    }

    .img {
        position: absolute; 
        width: 40px; 
        height: 38px;  
        right: 21.4px;

        > img {
            width: 100%; 
            height: 100%;
        }
    }
`;

const GuideWarn = styled.div`
    padding-top: 21px; 
    font-size: 14px; 
    color: #222222; 
    text-align: left;

    > span {
        display: inline-block; 
        margin-right: 7px; 
        width: 48px; 
        height: 26px; 
        font-size: 14px; 
        font-weight: 600; 
        line-height: 27px; 
        background: #41e3f0; 
        color: #fff; 
        text-align: center; 
        border-radius: 20px;
    }
`;


export default Home;