import React from 'react';
import { useState } from 'react/cjs/react.development';
import HomeLayout from './css/layout/header';

const { Header, HeaderTitle, MypageBtn} = HomeLayout;


function Faq() {
    return (
        <>
        <Header>
            <HeaderTitle>FAQ</HeaderTitle>
            <MypageBtn></MypageBtn>
        </Header>
        <Question />
        </>

    );
}

function Question () {
    const [answer, toggleAnswer] = useState(false);


    return (
        <>
        <div className="list_box">
            <div className="list" isOpen>
                <div className="question" onClick={()=> {toggleAnswer(!answer)}}>
                    영업시간이 어떻게 되나요?
                </div>
                <div className={"answer" + " " + (answer === true ? "on" : null)}>
                    사는가 청춘의 없으면 것이다. 동력은 내는 수 아름다우냐?<br></br>
                    있는 속에서 가치를 생의 싶이 가는 교향악이다. 우리의 황금시대를 더운지라 쓸쓸한 때에, 피어나는 봄바람이다.<br></br>
                    우리 주며, 있는 보라. 이상이 얼마나 아름답고 전인 속잎나고, 소리다.이것은 안고, 풍부하게 때문이다. 듣기만 있으며, 무엇을 행복스럽고 오아이스도 이상의 같은 봄바람이다.
                </div>
            </div>
            <div className="list">
                <div className="question" onClick={()=> {toggleAnswer(!answer)}}>
                    영업시간이 어떻게 되나요?
                </div>
                <div className={"answer" + " " + (answer === true ? "on" : null)}>
                    사는가 청춘의 없으면 것이다. 동력은 내는 수 아름다우냐?<br></br>
                    있는 속에서 가치를 생의 싶이 가는 교향악이다. 우리의 황금시대를 더운지라 쓸쓸한 때에, 피어나는 봄바람이다.<br></br>
                    우리 주며, 있는 보라. 이상이 얼마나 아름답고 전인 속잎나고, 소리다.이것은 안고, 풍부하게 때문이다. 듣기만 있으며, 무엇을 행복스럽고 오아이스도 이상의 같은 봄바람이다.
                </div>
            </div>
        </div>
        </>

    );
}

export default Faq;