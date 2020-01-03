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
let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time between test1: ${(t2 - t1) / 1000} seconds`);

//O(1)

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}
let t3 = performance.now();
addUpTo2(1000000000);
let t4 = performance.now();
console.log(`Time between test2: ${(t4 - t3) / 1000} seconds`);

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

//Lesson2

//Objects
//use when you dont need order and need fast insertion, access and removal all
//are (O(1)) but searching is O(n)
//keys,values and entries are 0(n) and hasOwnProperty is O(1)
let shilpi = {
  name: "shilpi",
  age: 24,
  favColor: "lavender",
  isMarried: false,
  friends: ["rupali", "anjali", "rajat", "rahul"]
};
console.log(Object.keys(shilpi));
console.log(Object.values(shilpi));
console.log(Object.entries(shilpi));
console.log(shilpi.hasOwnProperty("name"));
console.log(shilpi.hasOwnProperty("work"));
delete shilpi.age;
console.log(shilpi);

//Arrays
//accessing: O(1)
//searching: O(n)
//insertion: O(n) if insertion is in beggining
//removal: O(n) if removal is in beggining
//push and pop is fast as shift and unshift
//concat:O(n)
//slice:O(n)
//splice:O(n)
//filter:O(n)
//reduce:O(n)
//forEach/forMap:O(n)

const item1 = ["sheldon", "penny", "raj", "lenord", "howard"];
const item2 = ["monica", "rachel", "ross", "joey", "chandler", "phoebe"];
console.log(item1.concat(item2));
console.log(item1.slice(1, 5)); //slice the array from given position to  given
//position but end not included
let girls = ["penny", "rachel", "monica", "phoebe"];
girls.splice(2, 0, "bernie", "amy");
console.log(girls);
item1.splice(0, 3);
console.log(item1);
item2.splice(0, 2, "denerys", "sansa");
console.log(item2);

var ages = [12, 16, 17, 19, 23, 34, 35, 24, 25];
var result = ages.filter(age => {
  return age >= 18;
});
console.log(result);

//Lesson: 3

//What is Algorithm?
//A process or set of steps to accomplish a certain task.

//Problem solving approach:

//1. Understand the problem
//can i restate the problem in my own words?
//think of what is input and what will be the output

//2. Explore concrete examples
//start with a simple example
//then progess to complex example
//explore examples with empty input
//explore example with invalid input

//3. Break it down
//write out the steps you need to take

//4. Solve/Simplify

//5. Look back and refactor
