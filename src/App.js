import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from  "./components/Sign-in/SignIn.js";
import SignUp from './components/Sign-up/SignUp.js';
import Bills from './components/Registers/Bills.js';
import NewEntry from './components/Transactions/NewEntry.js';
import NewExit from './components/Transactions/NewExit.js';
import styled from 'styled-components';

export default function App() {

  return (
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/bills" element={<Bills />} />
            <Route path="/newentry" element={<NewEntry/>} />
            <Route path="/newexit" element={<NewExit/>} />
          </Routes>
        </Container>
      </BrowserRouter>
  );
}

const Container = styled.div`
	height: auto;
  min-height: 100vh;
  background: #8C11BE;
  
`;