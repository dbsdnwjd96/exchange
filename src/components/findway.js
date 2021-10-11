// eslint-disable-next-line
import React, { useState } from "react";
import CreateMap from './map';
import HomeLayout from './css/layout/header';
import styled from "styled-components";

const { Header, HeaderTitle, MypageBtn} = HomeLayout;


function Findway () {
    return (
        <div>
            <Header>
                <HeaderTitle>오시는길</HeaderTitle>
                <MypageBtn></MypageBtn>
            </Header>
            
            <CreateMap />
            <Address />
        </div>
    );
}

function Address() {


    return (
        <AddressList>
            <ul>
                <li>
                    <div>주소</div>
                    <span>서울 중구 명동2길 43 1층 한국환전</span>
                </li>
                <li>
                    <div>전화번호</div>
                    <span>02-778-4567</span>
                </li>
                <li>
                    <div>대중교통</div>
                    <span>4호선 명동역 5번출구 200M<br></br> 2호선 을지로입구역 6번 출구 500M</span>
                </li>
            </ul>
        </AddressList>
    );
}

const AddressList = styled.div`
    padding: 10px 0 60px;

    > ul {
        > li {
            display: flex; 
            justify-content: 
            space-between; 
            padding: 17px 0px 18px; 
            margin: 0 20px; 
            border-bottom: 1px solid #f5f5f5;

            &:last-child {
                border-bottom: none;
            }

            > div {
                width: 100px; 
                text-align: left; 
                font-size: 16px; 
                font-weight: 800; 
                line-height: 18px; 
                vertical-align: top;
            }

            > span {
                width: calc(100% -100px); 
                text-align: right; 
                line-height: 18px;
            }
        }

    }
`;


export default Findway;

