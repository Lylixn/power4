export function checkIfLineIsFull(line: Array<number>): boolean {
  return !line.some((cell) => cell === 0);
}