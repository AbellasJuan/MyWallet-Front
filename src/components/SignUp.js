import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SignUp(){

    return(
        <Container>
            <h1>My Wallet</h1>
            
            <form>
                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="E-mail"/>
                <input type="text" placeholder="Senha"/>
                <input type="text" placeholder="Confirme a senha"/>
                <input type="submit" value="Cadastrar" />
            </form>
            
            <Link to="/" >
                <LinkStyled>Já tem uma conta? Entre agora!</LinkStyled>
            </Link>
        </Container>
    );
};

const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;

    h1{
    font-family: 'Saira Stencil One', cursive;
    font-size: 35px;
    margin-top: 100px;
    margin-bottom: 24px;
    color: white;
}

  form{
    width: 90vw;
    display: flex;
    flex-direction: column;
  };

  input{
    height: 58px;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 400;
    color: black;
    margin-bottom: 13px;
    padding-left: 15px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;

        ::placeholder{
            margin-left: 15px;
            font-family: 'Raleway', sans-serif;
            font-size: 20px;
            font-weight: 400;
            color: black;
        };

        :focus-within{
            padding-left: 17px;
            
            ::placeholder{
                padding-left: 0px;
                color: gray;
            }     
        }
    };

    input[type="submit"] {
            font-family: 'Raleway', sans-serif;
            font-size: 20px;
            font-weight: 700;
            padding-left: 15px;
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

const LinkStyled = styled.div`
    font-size: 15px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    text-align: center;
    color: white;
    margin-top: 30px;
`;