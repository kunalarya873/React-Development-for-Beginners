import './App.css';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SearchResult from './components/SearchResult/SearchResult';

export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  // useEffect Hook for fetching data
  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        setData(json); // Store the data in state
        setFilteredData(json);
      } catch (error) {
        console.error("Error fetching food data:", error);
        setError(error.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilteredData(data); // Show all data when search is empty
    } else {
      const filter = data?.filter((food) => 
        food.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filter);
    }
  };

  const filteredFood = (type) =>{
    if (type == 'all'){
      setFilteredData(data);
      setSelectedBtn('all');
      return;
    }
    const filter = data?.filter((food) =>
    food.type.toLowerCase().includes(type.toLowerCase()));

    setFilteredData(filter);
    setSelectedBtn(type);

  }

  const filteredBtns =[
    {
      "name": "All",
      "type": "all"
    },
    {
      "name": "Breakfast",
      "type": "breakfast"
    },
    {
      "name": "Lunch",
      "type": "lunch"
    },
    {
      "name": "Dinner",
      "type": "dinner"
    }

  ]

  // Conditional rendering based on loading, error, and data states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <TopContainer>
        <div className='logo'>
          <img src="/Foody Zone.svg" alt="logo" />
        </div>
        <div className="search">
          <input type="text" onChange={searchFood} placeholder="Search Food..." />
        </div>
      </TopContainer>
      <FilterComponent>
        {filteredBtns.map((btn) => (
          <Button
          isSelected={selectedBtn == btn.type}
            key={btn.type}
            onClick={() => filteredFood(btn.type)}
          >
            {btn.name}
          </Button>
        ))}
      </FilterComponent>
      <SearchResult data={filteredData}/>
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
    @media(0< width < 600px){
      margin-top:13px;
    }
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
    @media(0< width < 600px){
    margin-top: 0px;
  }
  }
  @media(0< width < 600px){
    flex-direction: column;
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
  @media(0< width < 600px){
    margin-top: 35px;
  }
`;

export const Button = styled.button`
  padding: 6px 12px;
  background: ${({isSelected}) => (isSelected?"#f22f2f": "#ff4343")};
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    background: #f22f2f; /* Slightly darker on hover */
  }
`;
