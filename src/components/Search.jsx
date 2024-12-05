import React from 'react';
import styled from 'styled-components';
import{useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {

//Använd useState för hantering av staten för inmatningsfältet
    const [input, setInput]= useState("");
    const navigate=useNavigate();


    const submitHandler = (e) =>{
        e.preventDefault();
        navigate('/searched/' + input)
    };

    return (
      <FormStyle onSubmit={submitHandler}>
        <div>
        <FaSearch></FaSearch>
        <input 
        onChange={(e) => setInput(e.target.value)} 
        type="text" 
        value={input} 
        />
        </div>
      </FormStyle>
    );
  }
  // Style för sökformuläret
 const FormStyle = styled.form`
  margin: 0rem 2rem; // Adjusted for better responsiveness on smaller screens
  position: relative;
  div {
    width: 100%;
    position: relative;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131); 
    color: white;
    font-size: 1.2rem; // Slightly smaller font for better mobile appearance
    padding: 0.8rem 2.5rem; // Adjusted padding for smaller screens
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }

  @media (max-width: 768px) { // Responsive adjustments for smaller devices
    margin: 0 1rem; // Less margin on smaller screens

    input {
      padding: 0.8rem 2rem; // Adjust padding for smaller devices
    }
  }
`;
  

export default Search