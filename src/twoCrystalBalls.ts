
export function twoCrystalBalls(breacks: boolean[]): number {
  const jump = Math.floor(Math.sqrt(breacks.length));
  let idx = jump;
  for (idx; idx < breacks.length; idx += jump) {
    if (breacks[idx]) { break; }
  }
  idx -= jump;
  for (let j = 0; j < idx && idx < breacks.length; j += 1, idx += 1) {
    if (breacks[idx]) { return idx; }
  }
  return -1;
}
