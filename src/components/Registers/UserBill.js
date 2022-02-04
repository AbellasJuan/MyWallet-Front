import styled from "styled-components";

export default function UserBill( {register} ){
    
    return(
        <UnicaLinha>
        <DateAndName>
        <Date>
            data
        </Date>
        
        <Name>
            {register.descricao}
        </Name>
        </DateAndName>
        <Value >
           <span>{register.valor}</span>
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
    color: ${({isCredit}) => (isCredit?"green":"red")};
    margin-right: 10px;
`;