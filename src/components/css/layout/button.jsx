import styled from 'styled-components';

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

export const ExchangeApplyButton = () => {
    return(
        <ExchangeApply>신청</ExchangeApply>
    );
}

const Button = { ViewMoreButton, ExchangeApplyButton }

export default Button;