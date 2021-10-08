import styled from 'styled-components';

const ContentSubTitle = styled.h1`
    display: block;
    padding: ${props => props.padding || "32px 0 0 10px;"};
    font-size: 28px;
    font-weight: 700;
    line-height: 38px;
    text-align: left;
`;

const ContentSubTitle2 = styled.h3`
    display: block;
    padding-left: 10px;
    padding-top: 10px; 
    font-size: 18px;
    line-height: 20px;
    text-align: left;

        span {
            font-weight: 800;
            color: ${props => props.theme.blue};
        }
`;

const ContentSubTitleDetail = styled.h1`
    display: block;
    padding: 36px 0 31.4px 10px;
    font-size: 24px;
    line-height: 28px;
    text-align: left;
`;

const Title = { ContentSubTitle, ContentSubTitleDetail, ContentSubTitle2}

export default Title;