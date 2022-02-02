import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from  "./components/LoginPage.js";
import SignUp from './components/SignUp.js';
import Bills from './components/Bills.js';
import NewEntry from './components/NewEntry.js';
import NewExit from './components/NewExit.js';
import styled from 'styled-components';

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/bills" element={<Bills/>} />
          <Route path="/newentry" element={<NewEntry/>} />
          <Route path="/newexit" element={<NewExit/>} />
        </Routes>
        </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
	height: 100vh;
  background: #8C11BE;
`;