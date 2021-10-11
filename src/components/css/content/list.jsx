import styled from 'styled-components';

//exchage currency table_box
const ExTableContainer = styled.ul`
    border-top: 1px solid #222222;
`;

const ExTableList = styled.li`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f5f5f5;
    padding: ${props => props.padding || "0 10px"};

    > div {
        display: inline-block;
        width: ${props => props.width || ""};
        font-size: 16px; 
        font-weight: 500; 
        line-height: 40px;
    
        &:first-child {
            text-align: left;
        }
        &:not(first-child) {
            text-align: right;
        }
        
        &.currency_nm {
            width: 33%;

            > span {
                display : inline-block;
                color : ${props => props.theme.blue};
                margin-right : 5px;
            }

            > img {
                display: inline-block;
                margin-right: 7px;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                vertical-align: middle;
            }
        }
        &.currency_rate {
            width: 30%
        }
        &.compare {
            position: relative;
            width: 73px;

            > span {
                position: relative;
                font-weight: 800;

                &.up {
                    color: ${props => props.theme.red};
                    &::before {
                        position:absolute;
                        display: block;
                        content: '';
                        width: 12px;
                        height: 8px;
                        top: 50%;
                        left: -20px;
                        transform: translateY(-50%);
                        background: url(img/icon-up.png) no-repeat;
                        background-position: center;
                        background-size: cover;
                    }
                }
                &.down {
                    color: ${props => props.theme.blue};
                    &::before {
                        position:absolute;
                        display: block;
                        content: '';
                        width: 12px;
                        height: 8px;
                        top: 50%;
                        left: -20px;
                        transform: translateY(-50%);
                        background: url(img/icon-down.png) no-repeat;
                        background-position: center;
                        background-size: cover;
                    }
                }
            }
        }
        &.apply_btn {
            display: inline-block;
            width: 50px;
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



const TableLayout = { ExTableContainer, ExTableList, ExCountry}

export default TableLayout;



