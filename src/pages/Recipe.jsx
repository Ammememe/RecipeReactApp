import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  //Hämta Parametrarna från URL useParams
  const params = useParams();
  const [details, setDetails] = useState(null);
  const [activeTab, setActiveTab] = useState("instructions");

  //Funktion för att hämta detaljer om recept från API
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
      console.log(detailData);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
//useEffect för att hämta receptdetaljer
  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  // Loading indicator while fetching data
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
) : (
  <p></p>
)}       
        
      </Info>
    </DetailWrapper>
  );
}
//Style
const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }
`;
//Style btn
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;
//Style info
const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe;
