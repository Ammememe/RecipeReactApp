import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    //Header text
    <HeaderContainer>
      <h1>Amir's Recipe Website</h1>
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
  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem; // Smaller font size for mobile
    }
    p {
      font-size: 1rem; // Smaller font size for mobile
    }
  }
`;

export default Header;
