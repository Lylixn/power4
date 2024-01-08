import './styles.css';
import {BoardLine} from "../BoardLine";
import {checkIfLineIsFull} from "../../utils/checkIfLineIsFull";
import {placeToken} from "../../utils/placeToken";
import {checkWin} from "../../utils/checkWin";

interface GameBoardProps {
  currentPlayer: number;
  setCurrentPlayer: (currentPlayer: number) => void;
  setBoard: (board: number[][]) => void;
  board: number[][];
  setWin: (win: boolean) => void;
}

export function GameBoard(GameBoardProps: GameBoardProps) {

  const placePiece = (lineIndex: number) => {
    if (checkIfLineIsFull(GameBoardProps.board[lineIndex])) {
      return 0;
    }

    let line = placeToken(GameBoardProps.board[lineIndex], GameBoardProps.currentPlayer);
    let tempBoard = [...GameBoardProps.board];
    tempBoard[lineIndex] = line;
    GameBoardProps.setBoard(tempBoard);

    if (checkWin(tempBoard)){
      GameBoardProps.setWin(true);
      return 0;
    }

    GameBoardProps.setCurrentPlayer(GameBoardProps.currentPlayer === 1 ? 2 : 1);
    return 0;
  }

  const renderLine = () => {
    return GameBoardProps.board.map((line, index) => {
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