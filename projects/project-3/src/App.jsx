import { useState } from "react";
import "./App.css";
import StartGame from "./components/StartGame/StartGame";
import GamePlay from "./components/StartGame/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? (
        <GamePlay />
      ) : (
        <StartGame toggle={toggleGamePlay} />
      )}
    </>
  );
}

export default App;
