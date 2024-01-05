import './styles.css';
import {BoardLine} from "../BoardLine";
import {useState} from "react";
import {checkIfLineIsFull} from "../../utils/checkIfLineIsFull";
import {placeToken} from "../../utils/placeToken";
import {checkWin} from "../../utils/checkWin";

interface GameBoardProps {
  currentPlayer: number;
  setCurrentPlayer: (currentPlayer: number) => void;
}

export function GameBoard(GameBoardProps: GameBoardProps) {
  //create board table state with 7x6 cell
  const [board, setBoard] = useState(Array(7).fill(Array(6).fill(0)));

  const placePiece = (lineIndex: number) => {
    if (checkIfLineIsFull(board[lineIndex])) {
      return 0;
    }

    let line = placeToken(board[lineIndex], GameBoardProps.currentPlayer);
    let tempBoard = [...board];
    tempBoard[lineIndex] = line;
    setBoard(tempBoard);

    if (checkWin(board)){
      alert(`Player ${GameBoardProps.currentPlayer} won!`);
      return 0;
    }

    GameBoardProps.setCurrentPlayer(GameBoardProps.currentPlayer === 1 ? 2 : 1);
    return 0;
  }

  const renderLine = () => {
    return board.map((line, index) => {
      return <BoardLine key={index} line={line} lineIndex={index} placePiece={placePiece}  />
    })
  }

  return (
    <div className="board-wrapper">
      <div>
        <div className="board">
          {renderLine()}
        </div>
      </div>
    </div>
  )

}