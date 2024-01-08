import './styles.css';

interface ControlsProps {
  currentPlayer: number;
  setReset: (reset: boolean) => void;
}

export function Controls(ControlsProps: ControlsProps) {

  return (
    <div className="controls">
      <div>
        <p className={ControlsProps.currentPlayer === 1 ? 'active' : ''}>Joueur 1</p>
        <p className={ControlsProps.currentPlayer === 2 ? 'active' : ''}>Joueur 2</p>
      </div>
      <div>
        <button onClick={() => {ControlsProps.setReset(true)}}>RESET</button>
      </div>
    </div>
  );
}