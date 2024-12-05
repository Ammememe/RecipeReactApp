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
  padding: 2rem 1rem; /* Reduced padding for mobile */
  display: flex;
  justify-content: center; /* Centering on mobile */
  align-items: center;
  flex-direction: column; /* Stack items vertically on mobile screens */

  svg {
    margin-bottom: 1rem; /* Add space between icon and logo on mobile */
  }

  @media (min-width: 768px) {
    flex-direction: row; /* Horizontal layout for larger screens */
    justify-content: flex-start;
    padding: 4rem 0rem;

    svg {
      margin-bottom: 0; /* Remove the bottom margin on larger screens */
    }
  }
`;


export default App;
