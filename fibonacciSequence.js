//Here it is required that the Fibonacci sequence starts with 0, 1, 1, 2... instead of 1, 1, 2, 3, 5...

function fibs(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

console.log(fibs(8));

function fibsRec(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let arr = fibsRec(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
}

console.log(fibsRec(8));
