
export function insertionSort(array: number[]): void {
  // let count = 0;
  for (let i = 1; i < array.length; i += 1) {
    let swapped = false;
    for (let j = i; j > 0; j -= 1) {
      // count += 1;
      if (array[j] < array[j - 1]) {
        const temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
        swapped = true;
      }
      if (!swapped) { break; }
    }
  }
  // console.log(count);
}
