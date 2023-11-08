import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    //Header text
    <HeaderContainer>
      <h1>Welcome to Amir's Recipes</h1>
      <p>Your source for delicious recipes!</p>
    </HeaderContainer>
  );
}
//Stil för header
const HeaderContainer = styled.header`
  background-color: #1500;
  color: #black;
  text-align: center;
  padding: 1rem;
`;

export default Header;
