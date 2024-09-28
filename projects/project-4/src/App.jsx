import './App.css'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
const BASE_URL = "http://localhost:9000";

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false)

  const fetchFoodData = async () => {
    setLoading(true);
    try {
      const response = await fetch(BASE_URL);
      const json = await response.json(); // Await the json call
      setLoading(false);
      console.log(json);
      setData(json); // Store the data in state if needed
    } catch (error) {
      console.error("Error fetching food data:", error);
    }
  };

  useEffect(() => {
    fetchFoodData(); // Automatically fetch data on component mount
  }, []);

  return (
    <Container>
      <TopContainer>
        <div className='logo'>
          <img src="/Foody Zone.svg" alt="logo" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search Food..." />
        </div>
      </TopContainer>
      <FilterComponent>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterComponent>
      <FoodCardContainer>
        <FoodCards>
        {/* You can map over the fetched data and render the food cards here */}
        </FoodCards>
      </FoodCardContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin: 0 auto;
`;

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .logo {
    background-color: #313335;
  }

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 10px;
    }
  }
`;

const FilterComponent = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 14px;
  position: absolute;
  left: calc(50% - 326px/2);
  top: 100px;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 6px 12px;
  gap: 10px;
  background: #FF4343;
  border-radius: 5px;
  border: none;
  color: white;
`;

const FoodCardContainer = styled.section`
  height: calc(100vh - 140px);
  background-image: url("/images/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 30px;
`;

const FoodCards = styled.section`
  padding: 30px;
  box-sizing: border-box;
  position: relative;
  width: 340px;
  height: 167px;
  left: 0px;
  top: 0px;
  background: url(.png), radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%);
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);
  border-radius: 19.4467px;
`;
