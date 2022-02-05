import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import SignIn from  "./components/Sign-in/SignIn.js";
import SignUp from './components/Sign-up/SignUp.js';
import Bills from './components/Registers/Bills.js';
import NewEntry from './components/Transactions/NewEntry.js';
import NewExit from './components/Transactions/NewExit.js';
import styled from 'styled-components';
import UserContext from '../src/contexts/UserContext.js';


export default function App() {

  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<SignIn setUser={setUser} />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/bills" element={<Bills />} />
            <Route path="/newentry" element={<NewEntry/>} />
            <Route path="/newexit" element={<NewExit/>} />
          </Routes>
        </Container>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

const Container = styled.div`
	height: auto;
  min-height: 100vh;
  background: #8C11BE;
  
`;