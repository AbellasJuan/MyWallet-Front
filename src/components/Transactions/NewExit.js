import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from "react";
import api from "../../service/API";
import Swal from 'sweetalert2';

export default function NewExit(){

    const navigate = useNavigate();
    
    const token = 123456789;

    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');

    function handleNewExit(event) {
        event.preventDefault();
            const body =  
              {
                value,
                description
              }
    
        api.postNewExit(body, token)
            .then(response => {
                navigate('/bills')
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Ops...',
                    text: 'Os campos devem ser preenchidos corretamente!',
                })
            });
    };  

    return(

        <Container>
            <h1>Nova saída</h1>

            <form onSubmit={handleNewExit}>
                <input 
                type="text" 
                placeholder='Valor' 
                value={value} 
                onChange={e => setValue(e.target.value)}
                />
                <input 
                type="text" 
                placeholder='Descrição' 
                value={description} 
                onChange={e => setDescription(e.target.value)}
                />
                <SubmitButton type="submit"> Salvar entrada </SubmitButton>
            </form>

        </Container>
    );
};


const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 5vw;

    h1{
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-size: 26px;
        font-weight: 700;
        color: white;
        margin-top: 25px;
        margin-bottom: 40px;
        
    };

    form{
    
    display: flex;
    flex-direction: column;
}

    input{
        height: 58px;
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
        };

        :focus-within{
            padding-left: 17px;
            
            ::placeholder{
                padding-left: 0px;
                color: gray;
            };   
        };
    };
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