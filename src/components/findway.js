// eslint-disable-next-line
import React, { useState } from "react";
import CreateMap from './map';
import HomeLayout from './layout/header';

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
        <div className="address">
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
        </div>
    );
}


export default Findway;

