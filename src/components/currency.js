// eslint-disable-next-line 
import React from 'react';
import styled from 'styled-components';
import HomeLayout from './css/layout/header';
import { Container } from './css/content/set_default';
import { ContentBox } from './css/content/set_default';
import TableLayout from './css/content/list';
import Button from './css/layout/button';

import { Link } from 'react-router-dom';

const { Header, HeaderMidTitle, HeaderBackbtn} = HomeLayout;

const { ExTableContainer, ExTableList, ExCountry, ExUp, ExDown } = TableLayout;
const { ExchangeApplyButton } = Button;



function Currency () {
    
    return (
        <div>
            <Header>
                <HeaderBackbtn />
                <HeaderMidTitle>환율</HeaderMidTitle>
            </Header>
            <Container padding="20px 0 100px 0">
                <CurrencyTable />
            </Container>
        </div>
    );
}

function CurrencyTable() {
    return(
        <>

        <ContentBox>
            <ExTableContainer>
                <ExTableList padding="0">
                    <div className="currency_nm">통화명</div>
                    <div className="currency_rate">환율</div>
                    <div className="compare">전일대비</div>
                    <div className="apply_btn">환전</div>
                </ExTableList>
                <ExTableList padding="10.5px 0 8px">
                    <div className="currency_nm">
                        <img src="img/usd.png" alt="" />
                        <span>일본</span>
                        JYP
                    </div>
                    <div className="currency_rate">1,146.00</div>
                    <div className="compare"> <span className="up">2.5</span> </div>
                    <div className="apply_btn"><ExchangeApplyButton /></div>
                </ExTableList>
                <ExTableList padding="10.5px 0 8px">
                    <div className="currency_nm">
                        <img src="img/usd.png" alt="" />
                        <span>미국</span>
                        USD
                    </div>
                    <div className="currency_rate">1,146.00</div>
                    <div className="compare"> <span className="up">2.5</span> </div>
                    <div className="apply_btn"><ExchangeApplyButton /></div>
                </ExTableList>
                <ExTableList padding="10.5px 0 8px">
                    <div className="currency_nm">
                        <img src="img/usd.png" alt="" />
                        <span>미국</span>
                        USD
                    </div>
                    <div className="currency_rate">1,146.00</div>
                    <div className="compare"> <span className="up">2.5</span> </div>
                    <div className="apply_btn"><ExchangeApplyButton /></div>
                </ExTableList>
                <ExTableList padding="10.5px 0 8px">
                    <div className="currency_nm">
                        <img src="img/usd.png" alt="" />
                        <span>미국</span>
                        USD
                    </div>
                    <div className="currency_rate">1,146.00</div>
                    <div className="compare"> <span className="up">2.5</span> </div>
                    <div className="apply_btn"><ExchangeApplyButton /></div>
                </ExTableList>

            </ExTableContainer>    
        </ContentBox>

        </>
    );
}

// const Max = styled.div`

// `'


export default Currency;