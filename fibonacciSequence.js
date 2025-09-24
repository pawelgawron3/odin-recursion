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
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    return fibsRec(n - 1) + fibsRec(n - 2);
  }
}

console.log(fibsRec(8));
