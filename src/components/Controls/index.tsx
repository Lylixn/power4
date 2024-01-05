import './styles.css';

export function Controls({currentPlayer}: {currentPlayer: number}) {

  return (
    <div className="controls">
      <div>
        <p className={currentPlayer === 1 ? 'active' : ''}>Joueur 1</p>
        <p className={currentPlayer === 2 ? 'active' : ''}>Joueur 2</p>
      </div>
      <div>
        <p>reset</p>
        <p>undo</p>
        <p>redo</p>
      </div>
    </div>
  );
}