import styled from "styled-components";

export default function UserBill(props){
const { id, date, name, value, isCredit } = props.item;

    return(
        <UnicaLinha>
        <DateAndName>
        <Date>
            {`${date[8]}${date[9]}/${date[5]}${date[6]}`}
        </Date>
        
        <Name>
            {name}
        </Name>
        </DateAndName>
        <Value isCredit={isCredit}>
           <p>{value}</p>
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

const Value = styled.p`
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: ${({isCredit}) => (isCredit?"green":"red")};
    margin-right: 10px;
`;