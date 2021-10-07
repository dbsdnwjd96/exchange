// eslint-disable-next-line
import React from 'react';
import styled from 'styled-components';
import HomeLayout from './css/layout/header';
import { Container } from './css/content/set_default';
import Content from './css/content/set_default';
import TableLayout from './css/content/list';
import Button from './css/layout/button';


import { Link } from 'react-router-dom';
import Banner from './banner';
import './css/main.css';

const { Header, HeaderHomeTitle } = HomeLayout;
const { ContentMidTitle, ContentBox } = Content;
const { ExTableContainer, ExTableList, ExCountry, ExUp, ExDown } = TableLayout;
const { ViewMoreButton } = Button;

function Home() {
    return (
        <div>
            <Header>
                <HeaderHomeTitle>EXCHANGE</HeaderHomeTitle>
            </Header>

            <Banner />
            <Container>
                <ContentsTop />
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

        <ContentBox>
            <ContentMidTitle>환율</ContentMidTitle>
            <ExTableContainer>
                <ExTableList>
                    <div>통화명</div>
                    <div>환율</div>
                    <div>전일대비</div>
                </ExTableList>
                <ExTableList>
                    <div>
                        <ExCountry>미국</ExCountry>
                        USD
                    </div>
                    <div>1,146.00</div>
                    <div><ExUp>2.5</ExUp></div>
                </ExTableList>
                <ExTableList>
                    <div>
                        <ExCountry>미국</ExCountry>
                        USD
                    </div>
                    <div>1,146.00</div>
                    <div><ExUp>2.5</ExUp></div>
                </ExTableList>
                <ExTableList>
                    <div>
                        <ExCountry>미국</ExCountry>
                        USD
                    </div>
                    <div>1,146.00</div>
                    <div><ExDown>2.5</ExDown></div>
                </ExTableList>
            </ExTableContainer>    
            <Link to="/currency">
                <ViewMoreButton>더보기</ViewMoreButton>
            </Link>
        </ContentBox>

        </>
    );
}


function ExchangeCalc () {
    return(
        <div className="content calc">
            <div className="sub_tit">환전 계산기</div>
            <div className="c_other">
                {/* 어떡하지 ㅇ<<... */}
                <select name="" id="">
                    <option value="미국">미국 USD</option>
                </select>
                <div>
                    <input type="text" />
                </div>
            </div>
            <div className="info">* 1일 신청 한도 : $300 ~ $1,980 / 20단위 신청 가능</div>
            <div className="c_my">
                <div className="img"><img src="img/krw.png" alt="" /></div>
                <span>KRW</span>
                <input type="text" />
            </div>
        </div>
    );
}

function Guide () {
    return(
        <div className="content guide">
            <div className="sub_tit">이용안내</div>
            <ul>
                <li>
                    <span className="blue">01</span>
                    <p>출국일을 선택하고</p>
                    <div className="img">
                        <img src="img/guide/step1.png" alt="" />
                    </div>
                </li>
                <li>
                    <span className="blue">02</span>
                    <p>환전신청을 합니다.</p>
                    <div className="img">
                        <img src="img/guide/step2.png" alt="" />
                    </div>
                </li>
                <li>
                    <span className="blue">03</span>
                    <p>공항 도착후 안내된 번호로 전화하면</p>
                    <div className="img">
                        <img src="img/guide/step3.png" alt="" />
                    </div>
                </li>
                <li>
                    <span className="blue">04</span>
                    <p>10분 내로 외화를 받게 됩니다.</p>
                    <div className="img">
                        <img src="img/guide/step4.png" alt="" />
                    </div>
                </li>
            </ul>
            <div>
                <span>잠깐!</span>
                공항에 도착해서 신청하셔도 됩니다.
            </div>
        </div>
    );
}


const ContentsTop = styled.div`
    padding-top: 28px;
`;

export default Home;