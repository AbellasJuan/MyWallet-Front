import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { useEffect, useState } from 'react';
import api from '../../service/API.js';
import UserBill from './UserBill.js';
import { IoMdExit } from 'react-icons/io';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';


export default function Bills(){
    const navigate = useNavigate();

    const userToken = localStorage.getItem('user_token');

    const [user, setUser] = useState('');
    const [userRegisters, setUserRegisters] = useState('');
    
    if (!userToken) {
        navigate('/sign-in');
      }

    console.log(userToken)
    
    useEffect(() => {
        api.getUserRegisters(userToken)
            .then((response) => {
                setUserRegisters(response.data);
                calcularSaldo()
            }).catch((error) => console.error(error))
            
    }, [userToken]);

    console.log(userRegisters)

    if( userRegisters === null) {
		return <h1> CARREGANDO... </h1>	
    }

    function calcularSaldo(){
        const arrayDeValores = [];
        userRegisters?.forEach(element => {
            arrayDeValores.push(element.valor)
        });

        let soma = 0;
        for(let i in arrayDeValores){
            soma += arrayDeValores[i]
        }
        return soma;
    }

    

    // {calcularSaldo().toString().replace('-','')}
    // saldo={calcularSaldo()}

    return(
        <Container>
            <Header>
                <h1>{`Olá, ${user}`}</h1>
                <IoMdExit id="icon-exit"/>
            </Header>

        <ExtractContainer> 
            {userRegisters.length === 0 ? 
                <h2>VOCÊ AINDA NÃO TEM TRANSAÇÕES</h2>
                :
                userRegisters?.map((register, index) => 
                <UserBill key={index} register={register}/>)
            }
            <Saldo >
                <b>SALDO</b>
                <span></span>
            </Saldo>
        </ExtractContainer>        
        
        <EntryAndExit>
            <Link to="/newentry" id="link-entry">  
                <AiOutlinePlusCircle id="icon-plus-minus"/>
                <span>Nova entrada</span>
            </Link>

            <Link to="/newexit" id="link-exit">
                <AiOutlineMinusCircle id="icon-plus-minus"/>
                <span>Nova saída</span>
            </Link>
        </EntryAndExit>
        </Container>
    );
};

const Container = styled.div`
	display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;

       h1{
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-size: 26px;
        font-weight: 700;
        color: white;
    };
`;

const Header = styled.div`
    width: 90vw;
    display:flex;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 15px;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    
    #icon-exit{
    display: flex;
    font-size: 33px;
    color: white;
    }
`;

const ExtractContainer = styled.div`
    width: 90vw;
    min-height: 70vh;
    height: auto;
    padding-bottom: 60px;
    background: #FFFFFF;
    border-radius: 5px;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    margin: 0 auto;

        h2{
            font-family: 'Raleway', sans-serif;
            text-align: center;
            margin-top: 20%;
            font-weight: 700;
        }
`;

const EntryAndExit = styled.div`    
    display: flex;
    padding-bottom: 30PX;
    width: 90vw;
    margin: auto;
    justify-content: space-between;


    #link-entry{
        width: 155px;
        height: 114px;
        width: 42.5vw;
        background: #A328D6;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        
        span{
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-size: 17px;
        font-weight: 700;
        width: 90px;
        color: white;
        margin-top: 35px;
        margin-left: 10px;
        }
    }

    #link-exit{
        width: 155px;
        height: 114px;
        width: 42.5vw;
        background: #A328D6;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        
        span{
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-size: 17px;
        font-weight: 700;
        width: 80px;
        color: white;
        margin-top: 35px;
        margin-left: 12px;
        }
    }

    #icon-plus-minus{
            margin-top: 11px;
            margin-left: 11px;
            color: white;
            font-size: 24px;
        }
`;

const Saldo = styled.p`
    width: inherit;
    position: absolute;
    bottom: 5px;
    display: flex;
    height: 30px;
    background-color: white;

      b{
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-size: 17px;
        font-weight: 700;
        margin-left: 12px;
        }

        span{
        position: absolute;
        right: 0;
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-size: 17px;
        font-weight: 400;
        margin-right: 12px;
        color:${props => props.saldo > 0 ? "#03AC00" : "#C70000"}
        }
`;