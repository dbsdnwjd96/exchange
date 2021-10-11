import styled from 'styled-components';


const ToggleListBox = styled.div`
    padding: ${props => props.padding || ""};
    margin: ${props => props.margin || ""};
`;

const ToggleList  = styled.div`
    display: block;
`;

const ToggleListTitle = styled.div`
    position: relative; 
    display: block; 
    padding: 20px 20px 17.5px 45px; 
    text-align-last: left; 
    font-size: 16px; 
    color: #222222; 
    line-height: 20px; 
    border-bottom: 1px solid #f5f5f5;

    & .toggle_arrow {
        position: absoulte;
        display: block;
        content: '';

        > span
    }

    &.question {
        > span {
            &::before {
                position: absolute; 
                display: block; 
                content: 'Q'; 
                top: 50%; 
                left: 25px; 
                transform: translateY(-50%); 
                font-size: 18px; 
                font-weight: 800; 
                color: ${props => props.theme.blue};
            }    
        }
    }
`;

const ToggleListHidden = styled.div`
    display: block; 
    background: #f5f5f5; 
    font-size: 14px; 
    color: #767676; 
    line-height: 16px; 
    text-align: left;
    height: 0px;

    &.active {
        height: auto;
        transition: max-height 2s ease;

        
        > div {
            display: block;
        }
    }

    > div {
        padding: 22px 45px; 
        display: none;
    }

`;

const ToggleLayout = {ToggleListBox, ToggleList, ToggleListTitle, ToggleListHidden}

export default ToggleLayout;