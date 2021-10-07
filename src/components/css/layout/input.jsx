import styled from 'styled-components';

const InputBox = styled.div`
    width: ${props => props.width || "100%"};
    display: inline-block;
    padding: 21px 20px 20px;
    border: 1px solid #ededed;
    border-radius: 5px;
    width: 100%;
    height: 60px;
    vertical-align: top;
    margin: ${props => props.margin || ""};

        input {
            border: none;
            outline: none;
            width: 100%;
            &::placeholder {
                font-size: 16px;
                color: ${props => props.theme.font}; 
            }
        }
`;

export default InputBox;