// App.js

import React from 'react';
import Pages from './pages/Pages';
import Category from './components/Category';
import Search from './components/Search';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';
import { BrowserRouter, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    //Wrap komponenter i BrowserRouter för hantering av routing
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav>
          <GiKnifeFork />
          <Logo to={'/'}>Amir's Recipes</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
        <Footer /> {/* Include the Footer component here */}
      </BrowserRouter>
    </div>
  );
}
//Style
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster two', cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

export default App;
