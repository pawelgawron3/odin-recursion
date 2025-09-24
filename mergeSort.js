function merge(arrayOne, arrayTwo) {
  let arrayThree = [];

  while (arrayOne.length !== 0 && arrayTwo.length !== 0) {
    if (arrayOne[0] > arrayTwo[0]) {
      arrayThree.push(arrayTwo[0]);
      arrayTwo = arrayTwo.slice(1);
    } else {
      arrayThree.push(arrayOne[0]);
      arrayOne = arrayOne.slice(1);
    }
  }

  while (arrayOne.length !== 0) {
    arrayThree.push(arrayOne[0]);
    arrayOne = arrayOne.slice(1);
  }

  while (arrayTwo.length !== 0) {
    arrayThree.push(arrayTwo[0]);
    arrayTwo = arrayTwo.slice(1);
  }

  return arrayThree;
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  let firstHalf = array.slice(0, array.length / 2);
  let secondHalf = array.slice(array.length / 2);

  let arrayOne = mergeSort(firstHalf);
  let arrayTwo = mergeSort(secondHalf);

  return merge(arrayOne, arrayTwo);
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
