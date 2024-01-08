import './styles.css'

interface WinModalProps {
  resetGame: () => void;
  setWin: (win: boolean) => void;
  winner: number;
}

export function WinModal(WinModalProps: WinModalProps) {

  const resetGame = () => {
    WinModalProps.resetGame();
    WinModalProps.setWin(false);
  }

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <h1>Player {WinModalProps.winner} wins!</h1>
        <button onClick={resetGame}>Play again</button>
      </div>
    </div>
  )

}