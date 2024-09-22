/* eslint-disable react/prop-types */
import styled from "styled-components";
const RoleDice = ({currentDice, roleDice}) => {

  return (
    <DiceContainer>
    <div className="dice"
    onClick={roleDice}>
        <img src={`/dice_${currentDice}.png`} alt="Dice 1" />
    </div>
    <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice;



const DiceContainer = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
margin-top: 50px;
img{
    height: 200px;
    width: 200px;
}
.dice{
    cursor: pointer;
}
`;
