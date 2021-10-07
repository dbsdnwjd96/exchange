import styled from 'styled-components';

const ContentSubTitle = styled.h1`
    display: block;
    padding-top: 32px;
    font-size: 28px;
    font-weight: 700;
    line-height: 38px;
    text-align: left;
`;

const ContentSubTitle2 = styled.h3`
    display: block;
    padding-top: 11px;
    font-size: 28px;
    line-height: 38px;
    text-align: left;

        span {
            font-weight: 600;
            color: ${props => props.theme.blue};
        }
`;

const ContentSubTitleDetail = styled.h1`
    display: block;
    font-size: 24px;
    line-height: 28px;
    text-align: left;
`;

const Title = { ContentSubTitle, ContentSubTitleDetail, ContentSubTitle2}

export default Title;