
export function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
  const seen = new Array(graph.length).fill(false);
  const prev = new Array(graph.length).fill(-1);
  const q: number[] = [source];
  seen[source] = true;
  do {
    const curr = q.shift() as number;
    if (curr === needle) { break; }
    const adj = graph[curr];
    for (let i = 0; i < adj.length; i += 1) {
      if (adj[i] === 0) { continue; }
      if (seen[i]) { continue; }
      seen[i] = true;
      prev[i] = curr;
      q.push(i);
    }
    seen[curr] = true;
  } while (q.length)

  if (prev[needle] === -1) {
    return null
  }

  let curr = needle;
  const out: number[] = [];
  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }
  // if (out.length) {
  //   return [source].concat(out.reverse());
  // }
  // return null;
  return [source].concat(out.reverse());
}

export function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
  const seen: boolean[] = new Array(graph.length).fill(false);
  const path: number[] = [];
  walk(graph, source, needle, seen, path);
  if (path.length === 0) { return null; }
  return path;
}

function walk(graph: WeightedAdjacencyList, current: number, needle: number, seen: boolean[], path: number[]): boolean {
  if (seen[current]) { return false; }
  seen[current] = true;
  path.push(current);
  if (current === needle) { return true; }
  const list = graph[current];
  for (let i = 0; i < list.length; i += 1) {
    const edge = list[i];
    if (walk(graph, edge.to, needle, seen, path)) {
      // path.push(edge.to);
      // break;
      return true;
    }
  }
  path.pop();
  return false;
}
