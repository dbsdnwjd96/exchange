import styled from 'styled-components';

//exchage currency table_box
const ExTableContainer = styled.ul`
    border-top: 1px solid #222222;
`;

const ExTableList = styled.li`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f5f5f5;
    padding: 0 10px;

    > div {
        display: inline-block;
        font-size: 16px; 
        font-weight: 500; 
        line-height: 40px;
    
        &:nth-child(1) {
            width: 40%;
            text-align: left;
        }
        &:not(first-child) {
            width: ${props => props.width ? '25%' : '20%'};
            text-align: right;
        }
    
    }
`;

const ExCountry = styled.span`
    color : ${props => props.theme.blue};
    display : inline-block;
    margin-right : 5px;
`;

const ExImg = styled.img`
    width : 12px;
    height : 8px;
`;


const ExUp = ({Children}) => {
    return(
        <>
            <ExImg src="img/icon-up.png" alt="" />
            <span style = {{color : "#ff2929" }}>{Children}</span>
        </>
    );
}
const ExDown = ({Children}) => {
    return(
        <>
            <ExImg src="img/icon-down.png" alt="" />
            <span style = {{color : "{props.theme.blue}" }}>{Children}</span>
        </>
    );
}

//

const TableLayout = { ExTableContainer, ExTableList, ExCountry, ExUp, ExDown }

export default TableLayout;



