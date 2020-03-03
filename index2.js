//Recursion
//a process(function) that calls itself

//countdown recursive function

function countDown(num) {
  if (num <= 0) {
    console.log("all done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
countDown(3);

//conventional way

function simpleCountDown(num) {
  for (let i = num; i >= 1; i--) {
    console.log(i);
  }
  console.log("all done");
}
simpleCountDown(3);

//sum range recursive function

function sumRange(sum) {
  if (sum === 1) {
    return 1;
  }
  return sum + sumRange(sum - 1);
}
console.log(sumRange(3));

//conventional way

function simpleSumRange(sum) {
  let total = 0;
  for (let i = sum; i > 0; i--) {
    total = total + i;
  }
  return total;
}
console.log(simpleSumRange(3));

//recursive factorial

function recursiveFactorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * recursiveFactorial(num - 1);
}
console.log(recursiveFactorial(5));

//pick up odds(conventional way)

function pickOdds(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(
  pickOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])
);

//helper method recursion

function pickupOdds(arr) {
  let results = [];
  function helperMethod(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      results.push(helperInput[0]);
    }
    helperMethod(helperInput.slice(1));
  }
  helperMethod(arr);
  return results;
}
console.log(pickupOdds([1, 3, 5, 7, 9]));

//pure recursion

function collectOdds(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOdds(arr.slice(1)));
  return newArr;
}
console.log(collectOdds([1, 3]));

//challenge-1
function power(base, exponential) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

//challenge-2

function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(factorial(5));

//challenge -3

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

//challenge-4
function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}

//Searching algorithm

const names = ["shilpi", "rupali", "aish", "anjali", "priya", "tina"];
console.log(names.indexOf("riya"));
console.log(names.indexOf("shilpi"));
console.log(Math.round(names.length / 2));

//challenge 1

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch(names, "priyadarshani"));
console.log(linearSearch([1, 2, 3, 4, 5], 6));

//challenge 2

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  } else {
    return -1;
  }
}

const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(num, 1));

//naive string search

function naiveSearch(longStr, shortStr) {
  let count = 0;
  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < shortStr.length; j++) {
      if (shortStr[j] !== longStr[i + j]) {
        break;
      }
      if (j === shortStr.length - 1) {
        count++;
      }
    }
  }

  return count;
}
console.log(naiveSearch("babobabobaba", "ba"));

