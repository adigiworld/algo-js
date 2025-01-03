
// export function quickSort(array: number[]): number[] {
//   if (array.length <= 1) { return array }
//   const pivot = array[array.length - 1];
//   const left = [];
//   const right = [];
//   for (let i = 0; i < array.length - 1; i += 1) {
//     if (array[i] < pivot) {
//       left.push(array[i]);
//     } else {
//       right.push(array[i]);
//     }
//   }
//
//   const sortedLeft = quickSort(left);
//   const sortedRight = quickSort(right);
//
//   return sortedLeft.concat(pivot, sortedRight);
// }

export function quickSort(array: number[]): void {
  qs(array, 0, array.length - 1);
}

function qs(arr: number[], low: number, hig: number): void {
  if (low >= hig) { return }
  const pivotIdx = partition(arr, low, hig);
  qs(arr, low, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hig);
}

function partition(arr: number[], low: number, hig: number): number {
  const pivot = arr[hig];
  let idx = low - 1;
  for (let i = low; i < hig; i += 1) {
    if (arr[i] <= pivot) {
      idx += 1;
      const temp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = temp;
    }
  }
  idx += 1;
  arr[hig] = arr[idx];
  arr[idx] = pivot;
  return idx;
}
