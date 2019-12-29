console.log("Let's begin");

//Lesson 1

//Big O notation
//To analyze the performance of an algorithm, we use big O notation.
//let's count the number of simple operations, computer has to perform
//Big O is basically relationship between input and its coresponding runtime
//Constant i.e. O(1)
//When function(n) grows it refects no change in the runtime
//Linear i.e. O(n) runtime is proportionate to input
//Quadaratic, when input grows, runtime grows roughly at a rate of n squared
//Arithmetic operations, variable assigmnent (n=2 or n=1000), accessing element
// in an array or object are constant

//Examples

//O(n)

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total = total + i;
  }
  return total;
}
console.log(addUpTo(3));

//O(1)

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}
console.log(addUpTo2(3));

//O(n)   (O(n)+O(n)=2*O(N))

function addUpDown(n) {
  console.log("adding up");
  for (var i = 0; i <= n; i++) {
    console.log(i);
  }
  console.log("adding down");
  for (var j = n; j >= 0; j--) {
    console.log(j);
  }
}
addUpDown(5);

//O(n^2)  (its nested loop)

function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
printAllPairs(3);

//O(n)

function atleastFive(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
atleastFive(10);

//O(1)

function atmostFive(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
atmostFive(10);

//Space complexicity or Auxiliary space complexicity
//It refers to space required by the algorithm, not including space taken up by 
//the inputs
//most primitives (boolean,number,null,undefined) are constant
//string requires O(n) space, where n is the string length
//array and objects also requires O(n) space
//look for variables because they take up the space

//examples

//Space-complexicity: O(1)

function totalSum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
}
console.log(totalSum([1, 2, 3, 4]));

//Space-complexicity: O(n)

function doubleArray(arr) {
  newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] * 2);
  }
  return newArray;
}
console.log(doubleArray([1, 2, 3, 4, 5]));
