// eslint-disable-next-line
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Banner from './banner';
import './css/main.css';


const exTableContainer = styled.div`
    border-top: 1px solid #222222;
`;

const exTableList = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f5f5f5;
    padding: 0 10px;
`;

const exName = styled.div`
    display: inline-block;
    font-size: 16px; 
    font-weight: 500; 
    line-height: 40px;
    color: #222222;

    &:nth-child(1) {
		width: 50%;
        text-align: left;
	}
    &:not(first-child) {
		text-align: right;
	}
`;



function Home() {
    return (
        <div>
            <div className="header">
                <div className="title big blue">EXCHANGE</div>
            </div>
            <Banner />
            <Exchange />
            <ExchangeCalc />
            <Guide />
        </div>
    );
}

function Exchange() {
    return(
        <>


        <exTableContainer>
            <exTableList>
            
            </exTableList>
            <exTableList>
                
            </exTableList>
        </exTableContainer>
        <div className="content exchange">
            <div className="sub_tit">환율</div>
                <div className="table_head">
                    <div>통화명</div>
                    <div>환율</div>
                    <div>전일대비</div>
                </div>
                <ul>
                    <li>
                        <div>
                            <span className="country blue">미국</span>
                            <span className="currency">USD</span>
                        </div>
                        <div>
                            1,146.00
                        </div>
                        <div>2.5</div>
                    </li>
                    <li>
                        <div>
                            <span className="country blue">일본</span>
                            <span className="currency">JPY 100</span>
                        </div>
                        <div>
                            1,060.59
                        </div>
                        <div>2.5</div>
                    </li>
                    <li>
                        <div>
                            <span className="country blue">중국</span>
                            <span className="currency">CNY</span>
                        </div>
                        <div>
                            180.21
                        </div>
                        <div>2.5</div>
                    </li>
                </ul>
            <Link to="/currency">
                <button className="btn gray">더보기</button>
            </Link>
            
        </div>
        </>
    );
}

function ExchangeCalc () {
    return(
        <div className="content calc">
            <div className="sub_tit">환전 계산기</div>
            <div className="c_other">
                {/* 어떡하지 ㅇ<<... */}
                <select name="" id="">
                    <option value="미국">미국 USD</option>
                </select>
                <div>
                    <input type="text" />
                </div>
            </div>
            <div className="info">* 1일 신청 한도 : $300 ~ $1,980 / 20단위 신청 가능</div>
            <div className="c_my">
                <div className="img"><img src="img/krw.png" alt="" /></div>
                <span>KRW</span>
                <input type="text" />
            </div>
        </div>
    );
}

function Guide () {
    return(
        <div className="content guide">
            <div className="sub_tit">이용안내</div>
            <ul>
                <li>
                    <span className="blue">01</span>
                    <p>출국일을 선택하고</p>
                    <div className="img">
                        <img src="img/guide/step1.png" alt="" />
                    </div>
                </li>
                <li>
                    <span className="blue">02</span>
                    <p>환전신청을 합니다.</p>
                    <div className="img">
                        <img src="img/guide/step2.png" alt="" />
                    </div>
                </li>
                <li>
                    <span className="blue">03</span>
                    <p>공항 도착후 안내된 번호로 전화하면</p>
                    <div className="img">
                        <img src="img/guide/step3.png" alt="" />
                    </div>
                </li>
                <li>
                    <span className="blue">04</span>
                    <p>10분 내로 외화를 받게 됩니다.</p>
                    <div className="img">
                        <img src="img/guide/step4.png" alt="" />
                    </div>
                </li>
            </ul>
            <div>
                <span>잠깐!</span>
                공항에 도착해서 신청하셔도 됩니다.
            </div>
        </div>
    );
}

export default Home;