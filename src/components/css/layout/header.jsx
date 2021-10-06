// eslint-disable-next-line 
import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';


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

    const HeaderHomeTitle = styled.div`
        font-size: 24px;
        font-weight: 700;
        line-height: 34px;
        color: ${props => props.theme.blue};
    `;

    const HeaderMidTitle = styled.div`
        margin: 0 auto;
        font-size: 20px;
        font-weight: 500;
    `;

    const HeaderBackbtnStyled = styled.div`
        width: 25px;
        height: 25px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
        }
    `;

    const MypageBtnStyled = styled.div`
        font-size: 18px;
    `;

    export const MypageBtn = () => {
        return(
            <Link to="/mypage">
            <MypageBtnStyled>MY</MypageBtnStyled>
            </Link>
        );
    }
    export const HeaderBackbtn = () => {
        return(
            <HeaderBackbtnStyled><img src="img/btn-prev.png" alt="" /></HeaderBackbtnStyled>
        );
    }

const HomeLayout = {Header, HeaderTitle, HeaderHomeTitle, HeaderMidTitle, HeaderBackbtn, MypageBtn}

export default HomeLayout;
