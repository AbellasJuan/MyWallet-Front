import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from "react";
import api from "../../service/API";
import Swal from 'sweetalert2';

export default function NewEntry(){
    const navigate = useNavigate();

    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');

    const userInfos = (JSON.parse(localStorage.getItem('userInfos')));

    function handleNewEntry(e) {
        e.preventDefault();
		
		const body = {
			value: value.replace(',' , '.'),
			description,
		}
    
        api.postNewEntry(body, userInfos?.token)
            .then(response => {
                navigate('/bills')
            })
            .catch((error) => {
                if(value.length === 0 || description.length === 0){
                return Swal.fire({
                    icon: 'error',
                    title: 'Ops...',
                    text: 'Os campos devem ser preenchidos!'
                })
                }else if(error.response.data[0].includes('description')){
                    return Swal.fire({
                        icon: 'error',
                        title: 'Ops...',
                        text: 'A descrição deve ter no mín 2 caracteres!'
                    })
                } else if (error.response.data[0].includes('number')){
                    return Swal.fire({
                        icon: 'error',
                        title: 'Ops...',
                        text: 'O valor deve ser um número!',
                    })
                }else if (error.response.status === 401){
                    return Swal.fire({
                        icon: 'error',
                        title: 'Ops...',
                        text: 'Você precisa estar logado!',
                    })
                }
            });
    };  

    return(

        <Container>
            <h1>Nova entrada</h1>

            <form onSubmit={handleNewEntry}>
                <input 
                type="text" 
                placeholder='value' 
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