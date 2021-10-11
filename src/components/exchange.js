import React, {useState} from 'react';
import styled from 'styled-components';
import { Container } from './css/content/set_default';
import { ContentBox } from './css/content/set_default';
import HomeLayout from './css/layout/header';
import CreateMap from './map';
import { ExchangeCalc } from './css/content/exchangeCalc';
import {CheckButton} from './css/layout/button';
import ToggleLayout from './css/content/toggle_list';
import ExchangeDate from './css/content/calendar';

import { Link } from 'react-router-dom';


const { Header, HeaderTitle, MypageBtn} = HomeLayout;
const {ToggleListBox, ToggleList, ToggleListTitle, ToggleListHidden} = ToggleLayout;


function Exchange() {
    return (
        <>
            <Header>
                <HeaderTitle>환전신청</HeaderTitle>
                <MypageBtn></MypageBtn>
            </Header>
            <Container>
                <Process />
                <ExchangeCalc />
                <ExchangeDate />
                <ExchangeLocation />
                <ServiceAgree />
            </Container>
        </>
    );
}


function ExchangeLocation () {
    return(
        <>
            <ContentBox padding="28px 0 30px;">
                <h3>수령장소</h3>
                <Location>
                    <p>서울 중구 명동2길 43 1층</p>
                    <div>
                        {/* <CreateMap /> */}
                    </div>
                </Location>
            </ContentBox>
        </>
    );
}

const Location = styled.div`

    > p {
        display: block;
        padding-bottom: 10px;
        font-size: 16px;
        line-height: 20px;
    }

    > div {
        width: 100%;
        height: 160px;
        overflow: hidden;
    }
`;

function ServiceAgree () {
    return(
        <>
            <ContentBox>
                <ServiceBtn>서비스 이용을 위한 동의</ServiceBtn>
                <ToggleListBox margin="0 0 25px 0;">
                    <ToggleList>
                        <ToggleListTitle>
                            <span>이용약관</span>
                        </ToggleListTitle>
                    </ToggleList>
                    <ToggleList>
                        <ToggleListTitle>
                            <span>개인정보 동의</span>
                        </ToggleListTitle>
                    </ToggleList>
                </ToggleListBox>
                <Link to="/exc_signup2">
                    <CheckButton>환전 신청하기</CheckButton>
                </Link>
            </ContentBox>
        </>

    );
}

const ServiceBtn = styled.div`
    position: relative;
    display: block;
    padding: 20px;
    margin-bottom: 10px;
    width: 100%;
    height: 60px;
    background: ${props => props.theme.white};
    border: 1px solid #dedede;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;

    &::before {
        position: absolute;
        display: block;
        content: '동의';
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        font-size: 16px;
        color: #acacac;
    }
    &::after {
        position: absolute;
        display: block;
        content: '';
        top: calc(50% - 3px);
        right: 55px;
        transform: translateY(-50%);
        width : 15px;
        height: 15px;
        background: url(img/icon-check-none.png) no-repeat;
        background-position: center;
        background-size: cover;
    }

    &.active {
        background: ${props => props.theme.blue};
        color: #fff;
        border: 1px solid ${props => props.theme.blue};

        &::before {
            position: absolute;
            display: block;
            content: '동의';
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            font-size: 16px;
            color: #fff;
        }

        &::after {
            position: absolute;
            display: block;
            content: '';
            top: calc(50% - 3px);
            right: 55px;
            transform: translateY(-50%);
            width : 15px;
            height: 15px;
            background: url(img/icon-check-check.png) no-repeat;
            background-position: center;
            background-size: cover;
        }
    }
`;

function Process () {
    return(
        <div>
            <ProcessArea>
                <ProcessList className="done">
                    <div className="number">1</div>
                    <div className="name">신청</div>
                </ProcessList>
                <ProcessList className="done">
                    <div className="number">2</div>
                    <div className="name">입금</div>
                </ProcessList>
                <ProcessList className="on">
                    <div className="number">3</div>
                    <div className="name">입금확인</div>
                </ProcessList>
                <ProcessList className="before">
                    <div className="number">4</div>
                    <div className="name">수령</div>
                </ProcessList>
            </ProcessArea>
        </div>
    );
}

const ProcessArea = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px auto 36px;
    padding: 0 60px;
    text-align: center;
`;

const ProcessList = styled.div`

    position: relative;
    width: 25%;
    

    // default //
    .number {
        position: relative;
        margin: 0 auto;
        width: 30px;
        height: 30px;
        font-size: 20px;
        font-weight: 800;
        line-height: 35px;
        color: #fff;
        background : ${props => props.theme.blue};
        border-radius: 50%;

    }
    .name {
        margin-top: 7px;
        font-size: 12px;
    }

    // state setting //
    &.done {
        &::before {
            position: absolute;
            content: '';
            width: 100%;
            height: 2px;
            top: 14px;
            background: ${props => props.theme.blue};
        }    

        .number {
            background: ${props => props.theme.blue};
        }
        .name {
            color: #acacac;
        }
    }
    &.on {
        &::before {
            position: absolute;
            content: '';
            width: 100%;
            height: 2px;
            top: 14px;
            background: #e4e8ed;
        }    
        .number {
            background: ${props => props.theme.blue};
        }
        .name {
            font-weight: 600;
            color: ${props => props.theme.blue};
        }
    }
    &.before {
        .number {
            background: #e4e8ed;
        }
        .name {
            color: #acacac;
        }
    }
`;


export default Exchange;