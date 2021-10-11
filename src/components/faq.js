import React,  {useState} from 'react';
import HomeLayout from './css/layout/header';
import ToggleLayout from './css/content/toggle_list';

const { Header, HeaderTitle, MypageBtn} = HomeLayout;
const {ToggleListBox, ToggleList, ToggleListTitle, ToggleListHidden} = ToggleLayout;


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
    const [isOpen, setOpen] = useState(false);
    return (
        <>
        <ToggleListBox>
            <ToggleList  onClick={() => setOpen(!isOpen)}>
                <ToggleListTitle className="question">
                    <span>영업시간이 어떻게 되나요?</span>
                    <div className={`toggle_arrow ${!isOpen ? "active" : ""}`}>
                        <span></span>
                        <span></span>
                    </div>
                </ToggleListTitle>
                <ToggleListHidden className={!isOpen ? "active" : ""}>
                    <div>
                        사는가 청춘의 없으면 것이다. 동력은 내는 수 아름다우냐?<br></br>
                        있는 속에서 가치를 생의 싶이 가는 교향악이다. 우리의 황금시대를 더운지라 쓸쓸한 때에, 피어나는 봄바람이다.<br></br>
                        우리 주며, 있는 보라. 이상이 얼마나 아름답고 전인 속잎나고, 소리다.이것은 안고, 풍부하게 때문이다. 듣기만 있으며, 무엇을 행복스럽고 오아이스도 이상의 같은 봄바람이다.
                    </div>
                </ToggleListHidden>
            </ToggleList>
            <ToggleList onClick={() => setOpen(!isOpen)}>
                <ToggleListTitle className="question">
                    <span>영업시간이 어떻게 되나요?</span>
                    <div className={`toggle_arrow ${!isOpen ? "active" : ""}`}>
                        <span></span>
                        <span></span>
                    </div>
                </ToggleListTitle>
                <ToggleListHidden className={!isOpen ? "active" : ""}>
                    <div>
                        사는가 청춘의 없으면 것이다. 동력은 내는 수 아름다우냐?<br></br>
                        있는 속에서 가치를 생의 싶이 가는 교향악이다. 우리의 황금시대를 더운지라 쓸쓸한 때에, 피어나는 봄바람이다.<br></br>
                        우리 주며, 있는 보라. 이상이 얼마나 아름답고 전인 속잎나고, 소리다.이것은 안고, 풍부하게 때문이다. 듣기만 있으며, 무엇을 행복스럽고 오아이스도 이상의 같은 봄바람이다.
                    </div>
                </ToggleListHidden>
            </ToggleList>
        </ToggleListBox>
        </>

    );
}

export default Faq;