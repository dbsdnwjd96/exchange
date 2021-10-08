// eslint-disable-next-line
import React from 'react';
import styled from 'styled-components';
import InputBox from '../css/layout/input';
import Button from '../css/layout/button';

import { Link } from 'react-router-dom';

const {CheckButton} = Button;


const Background = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background: #222222;
    opacity: 0.8;
    z-index: 999;
`;

const ModalArea = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Modal = styled.div`
    position: relative;
    display: block;
    padding: 32px 0 0;
    width: 80%;
    height: auto;
    background: #fff;
    text-align: center;
    border-radius: 10px;
    overflow: hidden;
`;

const ModalInner = styled.div`
    padding: 0 20px;
`;


const ModalTitle = styled.div`
    padding-bottom: 25px;
    font-size: ${props => props.fontSize || ""};
    line-height: 28px;
`;


function ManagerChk () {
    return(
        <div>
            <Background>
                <ModalArea>
                    <Modal>
                        <ModalInner>
                            <ModalTitle fontSize="16px">관리자 확인</ModalTitle>
                            <ModalTitle fontSize="20px">수령 확인하시겠습니까?</ModalTitle>
                            <InputBox margin="0 0 25px">
                                <input type="text" placeholder="관리자 비밀번호 입력" />
                            </InputBox>
                        </ModalInner>
                        <div>
                            <Link to="/exc_datails2">
                                <CheckButton width="50%" borderRadius="0px">취소</CheckButton>
                            </Link>
                            <CheckButton type="submit" width="50%" bg="${props.theme.gray1}" color="${porps.theme.font}" borderRadius="0px">확인</CheckButton>
                        </div>
                    </Modal>
                </ModalArea>
            </Background>
        </div>
    );
}

export default ManagerChk;