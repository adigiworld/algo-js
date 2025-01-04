
export function mergeSort(array: number[]): void {
  const mid = Math.floor(array.length / 2);
}


// export function mergeSort(array: number[]): number[] {
//   if (array.length < 2) { return array; }
//   const mid = Math.floor(array.length / 2);
//   const left = mergeSort(array.slice(0, mid));
//   const right = mergeSort(array.slice(mid));
//   return merge(left, right);
// }
//
// function merge(sortedLeft: number[], sortedRight: number[]): number[] {
//   const result = [];
//   while (sortedLeft.length > 0 && sortedRight.length > 0) {
//     if (sortedLeft[0] <= sortedRight[0]) {
//       // result.push(sortedLeft.shift());
//       const item = sortedLeft.shift();
//       if (item !== undefined) { result.push(item); }
//     } else {
//       // result.push(sortedRight.shift());
//       const item = sortedRight.shift();
//       if (item !== undefined) { result.push(item); }
//     }
//   }
//   return result.concat(sortedLeft, sortedRight);
// }
