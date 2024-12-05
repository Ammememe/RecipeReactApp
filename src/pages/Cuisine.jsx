import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Cuisine() {
  const [recipes, setRecipes] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${type}`
        );
        const results = await data.json();
        setRecipes(results.results);
      } catch (error) {
        console.error("Failed to fetch cuisine recipes:", error);
      }
    };

    fetchRecipes();
  }, [type]);

  return (
    <Grid>
      {recipes.map((recipe) => (
        <Card key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <img src={recipe.image} alt={recipe.title} />
            <h4>{recipe.title}</h4>
          </Link>
        </Card>
      ))}
    </Grid>
  );
}

// Styles
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 0.5rem;
  }
`;

export default Cuisine;
