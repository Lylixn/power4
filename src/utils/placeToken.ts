export function placeToken(line: Array<number>, player: number): Array<number> {
  const newLine = [...line];
  for (let i = newLine.length - 1; i >= 0; i--) {
    if (newLine[i] === 0) {
      newLine[i] = player;
      break;
    }
  }
  return newLine;
}