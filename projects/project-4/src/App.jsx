import './App.css'
import styled from 'styled-components';

function App() {


  return (
    <Container>
      <TopContainer>
        <div className='logo'>
          <img src="/Foody Zone.svg" alt="logo" />
          <div className="search">
          <input type="text" placeholder="Search" />
        </div>
        </div>
      </TopContainer>
    </Container>
  )
}

export default App;
const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
`;

const TopContainer = styled.div`
min-height: `1`
display: flex;
justify-content: space-between;
.logo{
  background-color: #313335;
  
}
.search{

}
`;