import './styles.css';

interface BoardCellProps {
  cell: number;
  line: number;
  placePiece: (lineNumber: number) => {};
}

export function BoardCell(BoardCellProps: BoardCellProps) {

  const getCellColor = () => {
    if (BoardCellProps.cell === 1) {
      return 'player1';
    } else if (BoardCellProps.cell === 2) {
      return 'player2';
    } else {
      return '';
    }
  }

  return (
    <div className="board-cell">
      <div>
        <div onClick={() => BoardCellProps.placePiece(BoardCellProps.line)} className={getCellColor()}></div>
      </div>
    </div>
  )
}