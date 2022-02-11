import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
        border-radius: 5px;
        font-size: 20px;
        font-weight: 400;
        color: black;
        padding-left: 15px;
        margin-bottom: 13px;
        max-width: 90vw;
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

const StyledLink = styled(Link)`
    font-size: 15px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    text-align: center;
    color: white;
    margin-top: 30px;
`;

export {
    Container,
    SubmitButton,
    StyledLink
  }