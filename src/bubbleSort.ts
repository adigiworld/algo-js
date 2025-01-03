export function bubbleSort(arr: number[]): void {
  let swapped: boolean;
  for (let i = 0; i < arr.length; i += 1) {
    swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j += 1) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swapped = true;
      }
      // console.log(j);
    }
    if (!swapped) {
      break;
    }
  }
}
