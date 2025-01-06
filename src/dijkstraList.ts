
export function dijkstraList(source: number, needle: number, arr: WeightedAdjacencyList): number[] {
  const seen = new Array(arr.length).fill(false);
  const prev = new Array(arr.length).fill(-1);
  const dists = new Array(arr.length).fill(Infinity);
  dists[source] = 0;

  while (hasUnvisited(seen, dists)) {
    const curr = getLowestUnvisited(seen, dists);
    seen[curr] = true;
    const adj = arr[curr];
    for (let i = 0; i < adj.length; i += 1) {
      const edge = adj[i];
      if (seen[edge.to]) {
        continue;
      }
      const dist = dists[curr] + edge.weight;
      if (dist < dists[edge.to]) {
        dists[edge.to] = dist;
        prev[edge.to] = curr;
      }
    }
  }
  const out: number[] = [];
  let curr = needle;
  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }
  out.push(source);
  return out.reverse();
}

function hasUnvisited(seen: boolean[], dists: number[]): boolean {
  return seen.some((s, i) => !s && dists[i] < Infinity);
}

function getLowestUnvisited(seen: boolean[], dists: number[]): number {
  let idx = -1;
  let lowestDistance = Infinity;
  for (let i = 0; i < seen.length; i += 1) {
    if (seen[i]) { continue; }
    if (lowestDistance > dists[i]) {
      lowestDistance = dists[i];
      idx = i;
    }
  }
  return idx;
}
