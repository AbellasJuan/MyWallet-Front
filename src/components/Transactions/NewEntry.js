import styled from 'styled-components';

export default function NewEntry(){
    return(
        <Container>
        <h1>Nova entrada</h1>

        <input type="text" placeholder="Valor"/>
        <input type="text" placeholder="Descrição"/>
        <input type="submit" value="Salvar entrada"/>
        </Container>
    );
};


const Container = styled.div`
display: flex;
flex-direction: column;
margin-left: 5vw;

    h1{
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-size: 26px;
        font-weight: 700;
        color: white;
        margin-top: 25px;
        margin-bottom: 40px;
    };

    input{
        height: 58px;
        
        border-radius: 5px;
        font-size: 20px;
        font-weight: 400;
        color: black;
        margin-bottom: 13px;
        padding-left: 15px;
        max-width: 90vw;
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;

        ::placeholder{
            font-family: 'Raleway', sans-serif;
            font-size: 20px;
            font-weight: 400;
            color: black;
        };

        :focus-within{
            padding-left: 17px;
            
            ::placeholder{
                padding-left: 0;
                color: gray;
            }     
        }
    };

    input[type="submit"] {
            font-family: 'Raleway', sans-serif;
            font-size: 20px;
            font-weight: 700;
            
            color: white;
            background: #A328D6;

            max-width: 90vw;
            height: 46px;
            border-radius: 5px;

            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
        };
`;