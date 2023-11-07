import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    try {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );

      if (!api.ok) {
        throw new Error(`Failed to fetch data from the API. Status: ${api.status}`);
      }

      const data = await api.json();
      setPopular(data.recipes);
      console.log(data.recipes);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div>
      {popular.map((recipe) => {
        return (
          <Wrapper>
            <h3>Popular Recipes</h3>
            {popular.map((recipe)=> {
            return (
              <Card>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
              </Card>

            );
              
            })}
          </Wrapper>
        );
      })}
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;

`;
export default Popular;

