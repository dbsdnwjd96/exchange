// eslint-disable-next-line 
import React from 'react';
import styled from 'styled-components';



    const Header = styled.div`
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 20px 14px;
        width: 100%;
        height: 60px;
        text-align: left;

    `;

    const HeaderTitle = styled.div`
        font-size: 20px;
        font-weight: 700;
    `;

    const HeaderBigTitle = styled.div`
        font-size: 24px;
        font-weight: 700;
        line-height: 34px;
    `;

    const HeaderMidTitle = styled.div`
        margin: 0 auto;
        font-size: 20px;
        font-weight: 500;
    `;

    const HeaderBackbtn = styled.div`
        width: 25px;
        height: 25px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
        }
    `;

function Currency () {
    
    return (
        <div>
            <Header>
                <HeaderBackbtn>
                    <img src="img/btn-prev.png" alt="" />
                </HeaderBackbtn>
                <HeaderMidTitle>환율</HeaderMidTitle>
            </Header>
        </div>
    );
}

export default Currency;