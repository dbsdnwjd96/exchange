import styled from 'styled-components';


const ExChkListBox = styled.ul`
    display: block;
    padding: 5px 0;
    border-top : 1px solid ${props => props.theme.black};
    border-bottom : 1px solid ${props => props.theme.black};
`;

const ExChkList = styled.li`
    display: flex;
    justify-content: space-between;
    alignconsole.log();-items: center;
    border-bottom: 1px solid ${props => props.theme.gray1};
    font-size: 16px;
    line-height: 40px;
    padding: 0 5px;

    &:last-child {
        border-bottom: none;
    }

    > div {
        display: inline-block;
        
        &:first-child {
            color: ${props => props.theme.gray2};
        }
    }
`;


const ExchangeCheckList = {ExChkListBox, ExChkList}

export default ExchangeCheckList;
