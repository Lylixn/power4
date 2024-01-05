import './styles.css';
import {BoardCell} from "../BoardCell";

interface BoardLineProps {
  line: Array<number>;
  lineIndex: number;
  placePiece: (lineNumber: number) => {};
}

export function BoardLine(BoardLineProps:BoardLineProps) {

  const renderCell = () => {
    return BoardLineProps.line.map((cell, index) => {
      return <BoardCell key={index} cell={cell} line={BoardLineProps.lineIndex} placePiece={BoardLineProps.placePiece}/>
    })
  }

  return (
    <div className="board-line">
      {renderCell()}
    </div>
  )

}