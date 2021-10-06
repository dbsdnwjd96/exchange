// eslint-disable-next-line
import React from 'react';
import styled from 'styled-components';
import HomeLayout from '../layout/header';

import { Link } from 'react-router-dom';

const { Header, HeaderTitle, MypageBtn} = HomeLayout;

function ExchangeDetails1 () {
    return(
        <div>
            <Header>
                <HeaderTitle>환전신청</HeaderTitle>
                <MypageBtn></MypageBtn>
            </Header>
            <div className="process_title">
                환전신청 내역
            </div>
            <div>정문학님 환전 신청 내역 <span className="blue">4건</span> 있습니다.</div>
            <ul>
                <li>
                    <Link to="/exc_datails2">
                        <div><img src="" alt="" /></div>
                        <div>
                            <div>USD</div>
                            <div>1,000$ 신청</div>
                        </div>
                        <div>
                            <div>1,145,000입금</div>
                            <div className="blue">미완료</div>
                        </div>
                    </Link>
                </li>
                <li>
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
                </li>
                <li>
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
                </li>
                <li>
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
                </li>
            </ul>
        </div>
    );
}

export default ExchangeDetails1;