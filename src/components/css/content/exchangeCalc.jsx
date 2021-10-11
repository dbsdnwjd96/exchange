import styled from 'styled-components';
import { ContentBox } from './set_default';



export const ExchangeCalc =  () => {
    return(
        <ContentBox>
            <h3>환전 계산기</h3>

            <Calculation>
                <div className="list1">
                    <CalculationSelectBox>
                        <div className="country_box">
                            <div>미국</div>
                            <div>usd</div>
                        </div>
                    </CalculationSelectBox>
                    <CalculationInputBox className="currency_money" >
                        <input type="text" />
                    </CalculationInputBox>
                </div>
                <p>* 1일 신청 한도 : $300 ~ $1,980 / 20단위 신청 가능</p>
                <div className="list2">
                    <CalculationInputBox className="currency_kor_money">
                        <span>KRW</span>
                        <input type="text" />
                    </CalculationInputBox>
                </div>
            </Calculation>
        </ContentBox>
    );
}

const Calculation = styled.div`

    > div {
        display: block;
        width: 100%;
    }

    > p {
        display: block;
        width: 100%;
        text-align: right;
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
        margin: 10px 0 15px;
    }

`;

const CalculationInputBox = styled.div`
    padding: 17px 15px 16px;
    border: 1px solid #ededed;
    border-radius: 5px;
    height: 60px;
    vertical-align: top;
    overflow: hidden;

    > input {
        width: 100%;
        font-family: "Lato";
        font-size: 20px;
        font-weight: 800;
        border: none;
        outline: none;
        text-align: right;
    }

    &.currency_money {
        display: inline-block;
        width: calc(100% - 165px);
        margin-left: 5px;

        > div{
            
        }
    }

    &.currency_kor_money {
        text-align: right;
        > input {
            width: calc(100% - 80px);
        }
        > span {
            position: relative;
            display: inline-block;

            &::before {
                position: absolute;
                display: block;
                content: '';
                width: 30px;
                height: 30px;
                top: 50%;
                left: -45px;
                transform: translateY(-50%);
                border: 1px solid #ededed;
                border-radius: 50%;
                background: url(img/krw.png) no-repeat;
                background-size: cover;
                background-position: center;
            }
        }
    }
`;

const CalculationSelectBox = styled.div`
    position: relative;
    display: inline-block;
    padding: 10px 60px 9px;
    border: 1px solid #ededed;
    border-radius: 5px;
    width: 160px;
    height: 60px;
    vertical-align: middle;
    overflow: hidden;

    &::after {
        position: absolute;
        display: block;
        content: '';
        width: 20px;
        height: 20px;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        background: url(img/icon_more.png) no-repeat;
        background-size: cover;
        background-position: center;
    }

    .country_box {
        position: relative;

        &::after {
            position: absolute;
            display: block;
            content: '';
            width: 30px;
            height: 30px;
            top: 50%;
            left: -45px;
            transform: translateY(-50%);
            border: 1px solid #ededed;
            border-radius: 50%;
            background: url(img/usd.png) no-repeat;
            background-size: cover;
            background-position: center;
        }

        > div {
            text-align: center;
            margin: 3px 0;

            &:first-child {
                font-weight: 600;
                color: ${props => props.theme.blue};
            }
        }
    }
`;




