import styled from "styled-components";

export default function UserBill( {register} ){
    const { description, value, isCredit, date } = register;

    return(
        <UnicaLinha>
            <DateAndName>
                <Date> {date} </Date>
                <Name> {description} </Name>
            </DateAndName>
            <Value isCredit={isCredit}>
                <span>{value.toFixed(2).replace('.',',').replace('-','')}</span>
            </Value>
        </UnicaLinha>
    );
};

const UnicaLinha = styled.div`
    display: flex;
    word-wrap: break-word;
    justify-content: space-between;
    margin-top: 23px;
`;

const DateAndName = styled.div`
    display: flex;
`;

const Date = styled.div`
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #C6C6C6;
    margin-left: 12px;
`;

const Name = styled.div`
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: black;
    margin-left: 12px;
`;

const Value = styled.span`
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: ${props => props.isCredit ? "#03AC00" : "#C70000" };
    margin-right: 10px;
`;