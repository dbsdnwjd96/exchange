import styled from 'styled-components';

const CheckButton = styled.button`
    width: 100%;
    height: 60px;
    outline: none; 
    border: none;
    background-color: ${props => props.theme.blue}; 
    color: #fff;
    border-radius: 5px;
    font-size: 18px;
`;

const ViewMoreButton = styled.button`
    width: 100%; 
    outline: none; 
    border: none; 
    border-radius: 5px;
    display : block;
    margin-top: 10px; 
    background: ${props => props.theme.gray1}; 
    line-height: 40px; 
    font-size: 14px; 
`;

const ExchangeApply = styled.button`
    margin-top: 3px;
    width: 40px;
    height: 35px;
    border: 1px solid #cad9f0; 
    border-radius: 5px;
    color : ${props => props.theme.blue};
    background: ${props => props.theme.white}; 
`;

const SMSButton = styled.button`
    display: inline-block;
    margin-left: 5px;
    width: 95px;
    height: 60px;
    color: #fff;
    background: ${props => props.theme.skyblue}; 
    vertical-aligns: top;
    outline: none; 
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
`;

export const ExchangeApplyButton = () => {
    return(
        <ExchangeApply>신청</ExchangeApply>
    );
}

const Button = { CheckButton, ViewMoreButton, ExchangeApplyButton, SMSButton }

export default Button;