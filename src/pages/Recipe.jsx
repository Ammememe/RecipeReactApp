import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  const params = useParams();
  const [details, setDetails] = useState(null);
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    try {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );

      if (!data.ok) {
        throw new Error(`Failed to fetch data from the API. Status: ${data.status}`);
      }

      const detailData = await data.json();
      setDetails(detailData);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === 'ingredients' ? (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        ) : null}       
      </Info>
    </DetailWrapper>
  );
}


const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 2rem;
  margin-bottom: 5rem;

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 2rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;

    img {
      width: auto;
    }
  }

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2, h3, ul, li {
    padding: 0 20px;
  }

  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 1rem;
  font-weight: 600;
  font-size: 0.8rem;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
    margin-right: 2rem;
    font-size: 1rem;
  }
`;

const Info = styled.div`
  @media (max-width: 767px) {
    margin-left: 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    margin-left: 10rem;
  }
`;

export default Recipe;
