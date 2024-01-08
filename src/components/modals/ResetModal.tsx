import './styles.css'

interface WinModalProps {
  resetGame: () => void;
  resetModal: (resetModal: boolean) => void;
}

export function ResetModal(WinModalProps: WinModalProps) {

  const resetGame = () => {
    WinModalProps.resetGame();
    WinModalProps.resetModal(false);
  }

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <h1>Êtes vous sur de vouloir réinitialisé ?</h1>
        <div className="modal-actions">
          <button onClick={resetGame}>Confirmer</button>
          <button onClick={() => {WinModalProps.resetModal(false);}}>Annuler</button>
        </div>
      </div>
    </div>
  )

}