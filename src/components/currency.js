// eslint-disable-next-line 
import React from 'react';
import styled from 'styled-components';
import HomeLayout from './layout/header';
import { Container } from './css/content/set_default';
import Content from './css/content/set_default';
import TableLayout from './css/content/list';
import Button from './css/layout/button';

import { Link } from 'react-router-dom';

const { Header, HeaderMidTitle, HeaderBackbtn} = HomeLayout;

const { ContentMidTitle, ContentBox } = Content;
const { ExTableContainer, ExTableList, ExCountry, ExUp, ExDown } = TableLayout;
const { ExchangeApplyButton } = Button;



function Currency () {
    
    return (
        <div>
            <Header>
                <HeaderBackbtn />
                <HeaderMidTitle>환율</HeaderMidTitle>
            </Header>
            <Container>
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
                <ExTableList>
                    <div>통화명</div>
                    <div>환율</div>
                    <div>전일대비</div>
                    <div>환전</div>
                </ExTableList>
                <ExTableList>
                    <div>
                        <ExCountry>미국</ExCountry>
                        USD
                    </div>
                    <div width="25%">1,146.00</div>
                    <div><ExUp>2.5</ExUp></div>
                    <ExchangeApplyButton />
                </ExTableList>
                <ExTableList>
                    <div>
                        <ExCountry>미국</ExCountry>
                        USD
                    </div>
                    <div>1,146.00</div>
                    <div><ExUp>2.5</ExUp></div>
                    <ExchangeApplyButton />
                </ExTableList>
                <ExTableList>
                    <div>
                        <ExCountry>미국</ExCountry>
                        USD
                    </div>
                    <div>1,146.00</div>
                    <div><ExDown>2.5</ExDown></div>
                    <ExchangeApplyButton />
                </ExTableList>
            </ExTableContainer>    
        </ContentBox>

        </>
    );
}

// const Max = styled.div`

// `'


export default Currency;