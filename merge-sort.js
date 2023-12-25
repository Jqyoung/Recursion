function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const mid = arr.length / 2;
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  //sort left and right halves till base case is reached
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  //merge the sorted halves
  const length = sortedLeft.length + sortedRight.length;
  for (let i = 0; i < length; i++) {
    if (sortedRight[0] < sortedLeft[0] || sortedLeft.length === 0) {
      arr[i] = sortedRight.shift();
    } else {
      arr[i] = sortedLeft.shift();
    }
  }
  return arr;
}

// test cases
const testArr = [5, 4, 9, 1, 6, 8, 2, 3, 15];
const testArr2 = [15, 22, 100, 3, 1, 5, 99, 32, 55, 6, 3, 1, 55];
const randomArr = Array.from({ length: 50 }, () =>
  Math.floor(Math.random() * 100)
);

// output result
console.log(mergeSort(randomArr));
