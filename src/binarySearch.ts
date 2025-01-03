// Used if data is sorted
export function binarySearch(haystack: number[], needle: number): boolean {
  let low = 0;
  let hig = haystack.length;
  while (low < hig) {
    let mid = Math.floor(low + (hig - low) / 2);
    if (haystack[mid] === needle) {
      return true;
    } else if (haystack[mid] < needle) {
      low = mid + 1;
    } else {
      hig = mid;
    }
  }
  return false;
}
