import styled from 'styled-components';
import { BASE_URL, Button } from '../../App.jsx';
const SearchResult = ({ data }) => {
  return (
    <>
    <FoodCardContainer>
    <FoodCards>
      {data?.map((food) => (
        <FoodCard key={food.namd}>
            <div className="food_image">
          <img src={BASE_URL + food.image} alt={food.name} />
          </div>
          <div className="food_info">
            <div className="info">
              <h3>{food.name}</h3>
              <p>{food.text}</p>
            </div>
            <div className='btn'>
            <Button>$ {food.price}.00</Button>
            </div>
          </div>
        </FoodCard>
      ))}
    </FoodCards>
  </FoodCardContainer>
  </>
  )
}

export default SearchResult;

const FoodCardContainer = styled.section`
  min-height: calc(100vh - 140px);
  background-image: url("/images/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 30px;

  @media (max-width: 600px) {
    margin-top: 40px;
  }
`;

const FoodCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const FoodCard = styled.div`
  display: flex;
  max-width: 450px;
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  color: white;
  text-align: center;
  /* Rectangle 1 */

box-sizing: border-box;


background: url(.png), radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%);
background-blend-mode: overlay, normal;
backdrop-filter: blur(13.1842px);
border-radius: 19.4467px;

border: 0.66px solid;

background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)


  p {
    margin-bottom: 15px;
  }

  img {
    border-radius: 5px;
  }
  .btn{
    display: flex;
    justify-content: end;
    align-items: end;
    margin-right:17px;
    margin-bottom: 10px;
  }
  .info{
    display: flex;
    flex-direction:column;
    text-align: left;
    gap: 10px;
    margin-bottom: 10px;
  }

`;
