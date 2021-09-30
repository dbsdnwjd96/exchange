// eslint-disable-next-line
import React from 'react';
import Banner from './banner';
import './css/main.css';

function Home() {
    return (
        <div>
            <div className="header">
                <div className="title big blue">EXCHANGE</div>
            </div>
            <Banner />
            <Guide />
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