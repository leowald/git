import "./App.css";
import Player from "./components/Player";
import Dice from "./components/Dice";
import Button from "./components/Button";
import { useState, useRef } from "react";

function App() {
  let currentScore = useRef(0);

  const [turn, updateTurn] = useState({ roll: "" });
  const [player, updatePlayer] = useState(1);
  const [score, updateScore] = useState([0, 0]);

  function rollDice() {
    let randomNum = Math.trunc(Math.random() * 6 + 1);

    if (randomNum === 1) {
      switchUser();
    } else {
      currentScore.current += randomNum;

      updateTurn(function (prevTurn) {
        let testObj = { roll: randomNum };

        return testObj;
      });
    }
  }

  function holdTurn() {
    const current = currentScore.current;
    updateScore(function (prevScore) {
      console.log(currentScore.current);
      const scoreArr = [...prevScore];

      scoreArr[player - 1] += current;
      return scoreArr;
    });
    switchUser();
    currentScore.current = 0;
  }

  function switchUser() {
    updateTurn(function (prev) {
      return { roll: prev.roll };
    });

    updatePlayer(function (prevPlayer) {
      return prevPlayer === 1 ? 2 : 1;
    });
  }
  return (
    <main>
      <Player
        score={score[0]}
        current={player == 1 ? currentScore.current : 0}
        playerNum="1"
        active={player == 1 && "player--active"}
      ></Player>
      <Player
        score={score[1]}
        current={player == 2 ? currentScore.current : 0}
        playerNum="2"
        active={player == 2 && "player--active"}
      ></Player>

      {turn.roll > 0 && <Dice number={turn.roll}></Dice>}

      <Button
        whenClick={rollDice}
        applyClass="btn--roll"
        text="🎲 Roll dice"
      ></Button>
      <Button
        whenClick={holdTurn}
        applyClass="btn--hold"
        text="📥 Hold"
      ></Button>
    </main>
  );
}
//<Button applyClass="btn--roll" text="🎲 Roll dice"></Button>
export default App;
