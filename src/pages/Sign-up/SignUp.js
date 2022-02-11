
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, SubmitButton, StyledLink } from "../../components/FormComponents.js";
import Swal from 'sweetalert2';
import api from "../../service/API";

export default function SignUp(){
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    function validPassword(){
        if (password !== confirmPassword){
            return true
        }    
    }

    function handleSignUp(event){
        event.preventDefault();
        if(validPassword() === true){
            return  Swal.fire({
                        icon: "error",
                        title: "Ops...",
                        text: "As senhas não coincidem! "
                    })
        }else {  
            const body = {
                            name,
                            email,
                            password
                        }
            api.postSignUp(body)
                .then(() => {
                    Swal.fire({
                        icon:'success',
                        title: 'Sucesso!',
                        text: 'O usuário foi cadastrado'
                    })
                    navigate('/');
                })
                .catch((error) => {
                    if(email.length === 0 || password.length === 0 || name.length === 0){
                        return Swal.fire({
                            icon: 'error',
                            title: 'Ops...',
                            text: 'Todos os campos devem ser preenchidos!'
                        })
                    } else if(error.response.data[0].includes('password')){
                        return Swal.fire({
                            icon: 'error',
                            title: 'Ops...',
                            text: 'A senha deve ter no mín 3 caracteres!'
                        })
                    } else if(error.response.data[0].includes('email')){
                        return Swal.fire({
                            icon: 'error',
                            title: 'Ops...',
                            text: 'O e-mail deve ser preenchido corretamente!',
                        })
                    } else if(error.response.data[0].includes('name')){
                        return Swal.fire({
                            icon: 'error',
                            title: 'Ops...',
                            text: 'O usuário deve ter no mín 3 caracteres!',
                        })
                    }else if(error.response.status === 400){
                        return Swal.fire({
                            icon: 'error',
                            title: 'Ops...',
                            text: 'O usuário já existe!',
                        })
                    }
                });
        }
    }

    return(
        <Container>
            <h1>My Wallet</h1>
            
            <form onSubmit={handleSignUp}>
                <input 
                type="text" 
                placeholder="Nome" 
                value={name} 
                onChange={e => setName(e.target.value)}/>
                <input 
                type="email" 
                placeholder="E-mail" 
                value={email} 
                onChange={e => setEmail(e.target.value)}/>
                <input 
                type="password" 
                placeholder="password" 
                size={30} 
                value={password} 
                onChange={e => setPassword(e.target.value)}/>
                <input 
                type="password" 
                placeholder="Confirme a password" 
                value={confirmPassword} 
                onChange={e => setConfirmPassword(e.target.value)}/>

                <SubmitButton type="submit"> Cadastrar </SubmitButton>
            </form>
            
            
                <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
            
        </Container>
    );
};