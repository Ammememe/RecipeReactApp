import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from "react-router-dom";
function Popular() {
  //useState för hantera state för populära recept
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  //Funktion för att hämta populära recept från API, /random för random recept, antal recept som visas är 9
  //Error handling
  const getPopular = async () => {
    const check = localStorage.getItem('popular');
  
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      try {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
        );
        
        if (!api.ok) {
          throw new Error(`Failed to fetch data from the API. Status: ${api.status}`);
        }
        //Spara populära recept lokalt, kan återställas under Applikation i local storage
        const data = await api.json();
        localStorage.setItem('popular', JSON.stringify(data.recipes));
        setPopular(data.recipes);
        console.log(data.recipes);
      
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  };
  

  return (
    <div>
          <Wrapper>
            <h3>Popular Recipes</h3>
            <Splide options={{
              perPage: 4,
              arrows: false,
              pagination: false,
              drag: 'free',
              gap: "2rem",
            }}>
            {popular.map((recipe)=> {
            return (
              <SplideSlide key={recipe.id}>
              <Card>
                <Link to={'/recipe/' +recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient/>
                </Link>
              </Card>
              </SplideSlide>

            );
              
            })}
            </Splide>
          </Wrapper>
       
    </div>
  );
}
// Design
const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
//Design
const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
position: relative;

img{
  border-radius: 2rem;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

}
p{
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  color: white;
  width: 100%;
  text-algin: center;
  font-weight: 600;
  font-size: 1rem;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

`;
//Design
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Popular;

