import { useNavigate } from 'react-router-dom';
import { Container, SubmitButton } from '../../components/FormComponents';
import { useState } from "react";
import api from "../../service/API";
import Swal from 'sweetalert2';

export default function NewExit(){
    const navigate = useNavigate();

    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');

    const userInfos = (JSON.parse(localStorage.getItem('userInfos')));

    function handleNewExit(e) {
        e.preventDefault();
		
		const body = {
			value: value.replace(',' , '.'),
			description,
		}
    
        api.postNewExit(body, userInfos?.token)
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
            <h1>Nova saída</h1>

            <form onSubmit={handleNewExit}>
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
                <SubmitButton type="submit"> Salvar saída </SubmitButton>
            </form>

        </Container>
    );
};