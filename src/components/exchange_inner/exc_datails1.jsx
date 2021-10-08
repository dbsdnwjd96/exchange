// eslint-disable-next-line
import React from 'react';
import styled from 'styled-components';
import HomeLayout from '../css/layout/header';
import Title from '../css/content/title';
import { Container } from '../css/content/set_default';

import { Link } from 'react-router-dom';

const { Header, HeaderTitle, MypageBtn } = HomeLayout;
const {ContentSubTitle, ContentSubTitle2} = Title;



const ExListBox = styled.ul`
    padding-top: 30px;
`;

const ExList = styled.li`
`;

const ExListInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.gray1};
    margin-top: -1px;
    padding: 16.5px 5px 21.5px;

        > div {
            display: inline-block;
        }
`;

const ExList_lft = styled.div`
    width: 50%;
        > div {
            display: inline-block;
        }
`;

const ExList_rgt = styled.div`
    text-align: right;
`;

const ExListCont = styled.div`
    font-size: 16px;
    font-weight: ${props => props.fontWeight || ""};
    line-height: 24px;
    vertical-align: ${props => props.verticalAlign || "middle"};

    .not_done {
        color: ${props => props.theme.blue};
        font-weight: 800;
    }
    .cancle {
        color: ${props => props.theme.red};
        font-weight: 800;
    }
`;

const ImgBox = styled.div`
    padding: ${props => props.padding || ""};
    margin: ${props => props.margin || ""};
    width: 34px;
    height: 34px;
    border-radius: 50%;
    overflow: hidden;
    vertical-align: ${props => props.verticalAlign || "middle"};

    >img {
        width: 100%;
        height: 100%;
    }
`;

function ExchangeDetails1 () {
    return(
        <div>
            <Header>
                <HeaderTitle>환전신청</HeaderTitle>
                <MypageBtn></MypageBtn>
            </Header>
            <Container>
            <ContentSubTitle>환전신청 내역</ContentSubTitle>
            <ContentSubTitle2>정문학님 환전 신청 내역 <span className="blue">4건</span> 있습니다.</ContentSubTitle2>
            <ExListBox>
                <ExList>
                    <Link to="/exc_datails2">
                        <ExListInner>   
                            <ExList_lft>
                                <ImgBox margin="0 10px 0 0"><img src="img/usd.png" alt=""/></ImgBox>
                                <ExListCont fontWeight="800">
                                    <div>USD</div>
                                    <div>1,000$ 신청</div>
                                </ExListCont>
                            </ExList_lft>
                            <ExList_rgt>
                                <ExListCont>
                                    <div>1,145,000입금</div>
                                    <div className="not_done">미완료</div>
                                </ExListCont>
                            </ExList_rgt>
                        </ExListInner>    
                    </Link>
                </ExList>
                <ExList>
                    <Link to="/exc_datails2">
                        <ExListInner>   
                            <ExList_lft>
                                <ImgBox margin="0 10px 0 0"><img src="img/usd.png" alt=""/></ImgBox>
                                <ExListCont fontWeight="800">
                                    <div>USD</div>
                                    <div>1,000$ 신청</div>
                                </ExListCont>
                            </ExList_lft>
                            <ExList_rgt>
                                <ExListCont>
                                    <div>1,145,000입금</div>
                                    <div className="cancle">입금취소</div>
                                </ExListCont>
                            </ExList_rgt>
                        </ExListInner>    
                    </Link>
                </ExList>
                <ExList>
                    <Link to="/exc_datails2">
                        <ExListInner>   
                            <ExList_lft>
                                <ImgBox margin="0 10px 0 0"><img src="img/usd.png" alt=""/></ImgBox>
                                <ExListCont fontWeight="800">
                                    <div>USD</div>
                                    <div>1,000$ 신청</div>
                                </ExListCont>
                            </ExList_lft>
                            <ExList_rgt>
                                <ExListCont>
                                    <div>1,145,000입금</div>
                                    <div>입금완료</div>
                                </ExListCont>
                            </ExList_rgt>
                        </ExListInner>    
                    </Link>
                </ExList>
                <ExList>
                    <Link to="/exc_datails2">
                        <ExListInner>   
                            <ExList_lft>
                                <ImgBox margin="0 10px 0 0"><img src="img/usd.png" alt=""/></ImgBox>
                                <ExListCont fontWeight="800">
                                    <div>USD</div>
                                    <div>1,000$ 신청</div>
                                </ExListCont>
                            </ExList_lft>
                            <ExList_rgt>
                                <ExListCont>
                                    <div>1,145,000입금</div>
                                    <div>입금완료</div>
                                </ExListCont>
                            </ExList_rgt>
                        </ExListInner>    
                    </Link>
                </ExList>
            </ExListBox>
            </Container>
        </div>
    );
}

export default ExchangeDetails1;