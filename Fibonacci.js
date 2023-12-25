function fibs(num) {
  let prev = 0;
  let curr = 1;
  const fab = [prev, curr];

  for (let i = 2; i < num; i++) {
    let temp;
    temp = curr;
    curr = prev + curr;
    prev = temp;
    fab.push(curr);
  }
  return fab;
}

fibs(8);
console.log("loop", fibs(8));

function fibRec(n, arr = [0, 1], i = 1) {
  if (n <= 2) {
    return arr;
  }

  let curr = arr[i] + arr[i - 1];
  arr.push(curr);
  return fibRec(n - 1, arr, i + 1);
}

console.log("recursion", fibRec(8));
