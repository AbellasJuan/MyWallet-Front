import { useNavigate } from 'react-router-dom';
import { Container, SubmitButton, StyledLink } from "../../components/FormComponents.js";
import { useState } from "react";
import Swal from 'sweetalert2';
import api from "../../service/API";

export default function SignIn(){
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e) {
        e.preventDefault();
            const body =  
              {
                email,
                password
              }
    
        api.postLogin(body)
            .then((response) => {
                localStorage.setItem('userInfos', JSON.stringify(response.data));
                
                navigate('/bills');
            })
            .catch((error) => {
                if(email.length === 0 || password.length === 0){
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
                    
                } else if(error.response.data.includes('Unauthorized')){
                    return Swal.fire({
                        icon: 'error',
                        title: 'Ops...',
                        text: 'Usuário não cadastrado!',
                    })
                } else if(error.response.data[0].includes('email')){
                    return Swal.fire({
                        icon: 'error',
                        title: 'Ops...',
                        text: 'O e-mail deve ser preenchido corretamente!',
                    })
                } else if(error.response.status === 404){
                    return Swal.fire({
                        icon: 'error',
                        title: 'Ops...',
                        text: 'O e-mail deve ser preenchido corretamente!',
                    })
                }
            });
    };  

    return(
        <Container>
            <h1>My Wallet</h1>
            
            <form onSubmit={handleLogin}>
                <input 
                type="email" 
                placeholder='E-mail' 
                value={email} 
                onChange={e => setEmail(e.target.value)}
                />
                <input 
                type="password" 
                placeholder='Senha' 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                />
                <SubmitButton type="submit"> Entrar </SubmitButton>
            </form>
        
            
            <StyledLink to="/sign-up">Primeira vez? Cadastre-se!</StyledLink>
            
        </Container>
    );
}; 