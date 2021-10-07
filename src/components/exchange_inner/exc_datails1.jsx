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
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${props => props.theme.gray1};
    margin-top: -1px;
    padding: 16.5px 5px 21.5px;

        >div {
            display: inline-block;
        }
`;

const ExList_lft = styled.div`
    
`;

const ExList_rgt = styled.div`
    
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
                <Link to="/exc_datails2">
                    <ExList>
                        <ExList_lft>
                            <div><img src="" alt="" /></div>
                            <div>
                                <div>USD</div>
                                <div>1,000$ 신청</div>
                            </div>
                        </ExList_lft>
                        <ExList_rgt>
                            <div>1,145,000입금</div>
                            <div className="blue">미완료</div>
                        </ExList_rgt>
                    </ExList>
                </Link>
                <ExList>
                    <Link to="/exc_datails2">
                        <ExList_lft>
                        </ExList_lft>

                        <div><img src="" alt="" /></div>
                        <div>
                            <div>USD</div>
                            <div>1,000$ 신청</div>
                        </div>
                        <div>
                            <div>1,145,000입금</div>
                            <div className="blue">입금완료</div>
                        </div>
                    </Link>
                </ExList>
                <ExList>
                    <Link to="/exc_datails2">
                        <ExList_lft>
                        </ExList_lft>

                        <div><img src="" alt="" /></div>
                        <div>
                            <div>USD</div>
                            <div>1,000$ 신청</div>
                        </div>
                        <div>
                            <div>1,145,000입금</div>
                            <div className="blue">입금완료</div>
                        </div>
                    </Link>
                </ExList>
                <ExList>
                    <Link to="/exc_datails2">
                        <div><img src="" alt="" /></div>
                        <div>
                            <div>USD</div>
                            <div>1,000$ 신청</div>
                        </div>
                        <div>
                            <div>1,145,000입금</div>
                            <div className="blue">입금완료</div>
                        </div>
                    </Link>
                </ExList>
            </ExListBox>
            </Container>
        </div>
    );
}

export default ExchangeDetails1;