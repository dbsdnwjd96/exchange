import styled from 'styled-components';

export const CheckButton = styled.button`
    display: inline-block;
    padding: ${props => props.padding || ""};
    margin: ${props => props.margin || ""};
    width: ${props => props.width || "100%"};
    height: 60px;
    outline: none; 
    border: none;
    background-color: ${props => props.bg || props.theme.blue}; 
    color: ${props => props.color || props.theme.white};
    border-radius: ${props => props.borderRadius || "5px"};
    font-size: 18px;
`;


const ViewMoreButton = styled.button`
    width: ${props => props.width || "100%"};
    height: ${props => props.height || ""};
    outline: none; 
    border: none; 
    border-radius: 5px;
    display : block;
    margin-top: 10px; 
    background: ${props => props.theme.gray1}; 
    line-height: 40px; 
    font-size: 14px; 
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