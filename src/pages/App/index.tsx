import React from 'react';
// import logo from '../../assets/images/logo.svg';
import './styles.css';
import {GameBoard} from "../../components/GameBoard";
import {Controls} from "../../components/Controls";

function Index() {
  const [currentPlayer, setCurrentPlayer] = React.useState(1)

  return (
    <div className="App">
      <Controls currentPlayer={currentPlayer} />
      <GameBoard currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />
    </div>
  );
}

export default Index;
