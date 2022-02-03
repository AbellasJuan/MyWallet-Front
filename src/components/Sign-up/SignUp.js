import styled from 'styled-components';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { postSignUp } from "../../service/API";

export default function SignUp(){
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
    const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
    

    function handleSignUp(event){
        event.preventDefault();
        
        const body = {
                        nome,
                        email,
                        senha
                     }
        postSignUp(body)
            .then(()=> {
                Swal.fire({
                    icon:'success',
                    title: 'Sucesso!',
                    text: 'O usuário foi cadastrado'
                })
                navigate('/');
            })
            .catch(() =>{
                Swal.fire({
                    icon: 'error',
                    title: 'Cadastro Inválido',
                    text: 'Todos os campos devem ser preenchidos corretamente'
                })
            })
    }

    return(
        <Container>
            <h1>My Wallet</h1>
            
            <form onSubmit={handleSignUp}>
                <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)}/>
                <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)}/>
                <input type="password" placeholder="Confirme a senha" value={confirmacaoSenha} onChange={e => setConfirmacaoSenha(e.target.value)}/>
                <SubmitButton type="submit"> Cadastrar </SubmitButton>
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
        margin-top: 159px;
        margin-bottom: 24px;
        color: white;
    }

    form{
        max-width: 800px;
        display: flex;
        flex-direction: column;
    }

    input{
        height: 58px;
        width: 326px;
        border-radius: 5px;
        font-size: 20px;
        font-weight: 400;
        color: black;
        margin-bottom: 13px;
        max-width: 90vw;
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
        }

        :focus-within{
            padding-left: 17px;
            
            ::placeholder{
                padding-left: 0px;
                color: gray;
            } 
        }
    }
`;

const SubmitButton = styled.button`
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: white;
    background: #A328D6;
    padding-left: 0;
    max-width: 90vw;
    height: 46px;
    border-radius: 5px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
`

const LinkStyled = styled.div`
    font-size: 15px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    text-align: center;
    color: white;
    margin-top: 30px;
`;