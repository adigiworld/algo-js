export function mergeSort(list: number[]): void {
  sort(list, 0, list.length - 1);
}
function sort(arr: number[], low: number, hig: number): void {
  if (low >= hig) { return; }
  const midIdx = low + Math.floor((hig - low) / 2);
  sort(arr, low, midIdx);
  sort(arr, midIdx + 1, hig);

  merge(arr, low, midIdx, hig);
}
function merge(arr: number[], low: number, mid: number, hig: number): void {
  const leftLength = (mid - low) + 1;
  const rightLength = hig - mid;
  let sortedLeft: number[] = [];
  let sortedRight: number[] = [];
  for (let i = 0; i < leftLength; i += 1) {
    sortedLeft.push(arr[low + i]);
  }
  for (let j = 0; j < rightLength; j += 1) {
    sortedRight.push(arr[mid + 1 + j]);
  }
  let l = 0;
  let r = 0;
  let k = low;
  while (l < leftLength && r < rightLength) {
    if (sortedLeft[l] < sortedRight[r]) {
      arr[k] = sortedLeft[l];
      l += 1;
    } else {
      arr[k] = sortedRight[r];
      r += 1;
    }
    k += 1;
  }
  while (l < leftLength) {
    arr[k] = sortedLeft[l];
    l += 1;
    k += 1;
  }
  while (r < rightLength) {
    arr[k] = sortedRight[r];
    r += 1;
    k += 1;
  }
}

//const a = [5, 4, 3, 2, 1];
//mergeSort(a);
//console.log(a);

