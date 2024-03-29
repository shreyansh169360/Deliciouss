import React from "react";
import AlllPage from "./pages/AlllPage";
import Category from "./components/category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork/>
          <Logo to={'/'}>Deliciouss</Logo>
        </Nav>
        <Search/>
        <Category />
        <AlllPage />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration:none;
  font-size:1.5rem;
  font-weight:400;
  font-family:'Lobster Two' , cursive; 
`;

const Nav = styled.div`
padding : 2rem 0rem;
display: flex;
justify-content: flex-start;
align-items: center;
svg{
  font-size:2rem; 
  margin:0.5rem;
}
`;

export default App;
