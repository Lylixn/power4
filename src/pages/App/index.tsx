import React, {useState} from 'react';
// import logo from '../../assets/images/logo.svg';
import './styles.css';
import {GameBoard} from "../../components/GameBoard";
import {Controls} from "../../components/Controls";
import {WinModal} from "../../components/modals/WinModal";
import {ResetModal} from "../../components/modals/ResetModal";

function Index() {
  const [currentPlayer, setCurrentPlayer] = React.useState(1)
  const [board, setBoard] = useState(Array(7).fill(Array(6).fill(0)));
  const [win, setWin] = useState(false);
  const [reset, setReset] = useState(true);

  const resetGame = () => {
    setCurrentPlayer(1);
    setBoard(Array(7).fill(Array(6).fill(0)));
  }

  return (
    <div className="App">
      <Controls currentPlayer={currentPlayer} setReset={setReset} />
      <GameBoard currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} board={board} setBoard={setBoard} setWin={setWin}/>
      {win && <WinModal setWin={setWin} resetGame={resetGame} winner={currentPlayer} />}
      {reset && <ResetModal resetGame={resetGame} resetModal={setReset}/>}
    </div>
  );
}

export default Index;
