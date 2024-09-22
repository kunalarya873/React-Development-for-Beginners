import TotalScore from "./TotalScore"
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { useState } from "react";
import Button from "../styled/Button";
import OutlineButton from "../styled/OutlineButton";
import Rules from "./Rules";
const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min=1, max=7) =>{
    return Math.floor(Math.random() * (max - min) + min)};
const roleDice = () =>{
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    const randomNumber= generateRandomNumber(1,7);
    setCurrentDice(randomNumber);

    if(selectedNumber == randomNumber){
        setScore((prev) => prev + randomNumber);
    }else{
        setScore((prev) => prev-2);
    }
    setSelectedNumber(undefined);
};
const resetScore = () =>{
    setScore(0);
}
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error}  setError = {setError}/>
        </div>
        <RoleDice currentDice={currentDice} roleDice={roleDice}/>
        <div className="btns">
          <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
          <Button
          onClick={() =>{
            setShowRules((prev) => !prev)
          }}
          >{
            showRules ? "Hide" : "Show"
            } Rules</Button>

        </div>
        { showRules && <Rules />}
    </MainContainer>
  )
}
export default GamePlay;

const MainContainer= styled.div`
margin: 50px;
    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
    .btns{
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
`;