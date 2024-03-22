import {FaHamburger, FaPizzaSlice} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink>
        <SLink to={'/cuisine/Japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </SLink>
    </List>
  );
}

// Updated styling of categories
const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); /* Adjust for responsive layout */
  justify-content: center;
  gap: 1rem; /* Spacing between items */
  margin: 2rem 0rem;
  padding: 0 1rem; /* Padding on the sides */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* One column on small screens */
    place-items: center; /* Center items vertically and horizontally */
  }
`;

//Styling of category links
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px; /* Adjust the radius as needed */
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    
    svg {
        color: white;
    }
    h4 {
        color: white;
    }
  }

  @media (max-width: 768px) {
    margin-right: 0; /* Remove margin on small screens */
    width: 80%; /* Optional: Adjust width on small screens for better visibility */
    height: auto; /* Adjust height automatically */
    padding: 1rem; /* Add some padding */
  }
`;

export default Category;
