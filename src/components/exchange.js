import React from 'react';
import HomeLayout from './css/layout/header';

const { Header, HeaderTitle, MypageBtn} = HomeLayout;


function Exchange() {
    return (
        <div>
            <Header>
                <HeaderTitle>환전신청</HeaderTitle>
                <MypageBtn></MypageBtn>
            </Header>
        </div>
    );
}

export default Exchange;