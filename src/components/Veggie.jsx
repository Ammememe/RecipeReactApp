import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from "react-router-dom";

function Veggie() {
    const [veggie, setVeggie] = useState([]);
    const [perPage, setPerPage] = useState(3); // Default items per page

    // Adjust the number of items per page based on screen width
    useEffect(() => {
        const handleResize = () => {
            setPerPage(window.innerWidth < 768 ? 1 : 3);
        };

        // Set the initial state based on current window size
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Function to fetch vegetarian recipes from API/Local Storage
    const getVeggie = async () => {
        const check = localStorage.getItem('veggie');
    
        if (check) {
            setVeggie(JSON.parse(check));
        } else {
            try {
                const api = await fetch(
                    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
                );
              
                if (!api.ok) {
                    throw new Error(`Failed to fetch data from the API. Status: ${api.status}`);
                }
                const data = await api.json();
                localStorage.setItem('veggie', JSON.stringify(data.recipes));
                setVeggie(data.recipes);
            } catch (error) {
                console.error("An error occurred:", error);
            }
        }
    };

    useEffect(() => {
        getVeggie();
    }, []);

    return (
        <div>
            <Wrapper>
                <h3>Vegetarian Recipes</h3>
                <Splide options={{
                    perPage: perPage,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: "2rem",
                }}>
                {veggie.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <Link to={'/recipe/' + recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <Gradient />
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

// Style components remain unchanged
const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggie;
