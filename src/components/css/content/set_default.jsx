import styled, { css } from 'styled-components';


export const Container = styled.div`
    margin : 0 20px;
    padding : ${props => props.padding || ""}
`;

export const ContentBox = styled.div`
    padding: ${props => props.padding || "0 0 30px 0;"}

    > h3 {
        display: block;
        padding-bottom: 15px; 
        font-size: 18px; 
        line-height: 24px; 
        text-align: left;    
    }
`;



