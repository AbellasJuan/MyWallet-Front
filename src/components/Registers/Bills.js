import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useEffect } from 'react';
import { getUserRegisters } from '../../service/API.js';
import UserBill from './UserBill.js';
import { IoMdExit } from 'react-icons/io';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';


export default function Bills({ user, setUserRegisters, userRegisters }){

    const token = 123456789;

    useEffect(() => {
        getUserRegisters(token)
            .then((response) => setUserRegisters(response.data))
            
            .catch(() => console.error)
    }, []);

    if( userRegisters === null) {
		return <h1> CARREGANDO... </h1>	
    }


    console.log(userRegisters)

    return(

        <Container>
            <Header>
                <h1>{`Olá, ${user}`}</h1>
                <IoMdExit id="icon-exit"/>
            </Header>

        <ExtractContainer>
                {userRegisters.map((register, index) => 
                        <UserBill key={index} register={register}/>
                )}
            <Saldo>
                <b>SALDO</b>
                <span>199,90</span>
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
    height: 100vh;

       h1{
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-size: 26px;
        font-weight: 700;
        color: white;
        margin-top: 25px;
        margin-bottom: 22px;
        margin-left: 5vw;
    };
`;

const Header = styled.div`
    display:flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    
    #icon-exit{
     margin-right: 5vw;
     font-size: 33px;
     color: white;
    }
`;

const EntryAndExit = styled.div`    
    display: flex;
    margin-top: 13px;

    #link-entry{
        width: 155px;
        height: 114px;
        width: 42.5vw;
        margin-left: 5vw;
        background: #A328D6;
        border-radius: 5px;
        
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
        margin-left: 5vw;
        margin-right: 5vw;
        background: #A328D6;
        border-radius: 5px;
        
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


const ExtractContainer = styled.div`
width: 90vw;
height: 446px;
background: #FFFFFF;
border-radius: 5px;
margin-left: 5vw;
`;

const Saldo = styled.p`
    margin-top: 340px;
    margin-left: 12px;
    margin-right: 12px;
    display: flex;
    justify-content: space-between;

      b{
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-size: 17px;
        font-weight: 700;
        }

        span{
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-size: 17px;
        font-weight: 400;
        }
`;