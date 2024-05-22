// // Selection Sort
// function selectionSort(nums) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     let minValue = i;
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] < nums[minValue]) {
//         minValue = j;
//       }
//     }
//     [nums[i], nums[minValue]] = [nums[minValue], nums[i]];
//   }
//   return nums;
// }

// // Bubble Sort
// function bubbleSort(nums) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[j] > nums[j + 1]) {
//         // let temp = nums[j + 1];
//         // nums[j + 1] = nums[j];
//         // nums[j] = temp;
//         [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
//       }
//     }
//   }
//   return nums;
// }

// // Pascal's Triangle
// function pascalTriangle(numRows) {
//   let res = [];

//   if (numRows >= 1) res.push([1]);
//   if (numRows >= 2) res.push([1, 1]);

//   for (let i = 2; i < numRows; i++) {
//     let first = 1;
//     let last = 1;

//     let prevArr = res[i - 1];
//     if (prevArr.length === 2) {
//       res.push([first, first + last, last]);
//     } else {
//       let left = 0;
//       let right = 1;
//       let add = [];
//       while (right < prevArr.length) {
//         add.push(prevArr[left] + prevArr[right]);
//         left++;
//         right++;
//       }
//       res.push([first, ...add, last]);
//     }
//   }

//   return res;
// }

// Insertion Sort
// function insertSort(nums) {
//   for (let i = 1; i < nums.length; i++) {
//     for (let j = i; j >= 0; j--) {
//       if (nums[j] < nums[j - 1]) {
//         [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
//       }
//     }
//   }
//   return nums;
// }

// // Two Sum
// function twoSum(nums, target) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const compliment = target - nums[i];
//     if (map.has(compliment)) {
//       return [i, map.get(compliment)];
//     } else {
//       map.set(nums[i], i);
//     }
//   }
//   // for (let i in nums) {
//   //   const dif = target - nums[i];
//   //   for (let j in nums) {
//   //     if (dif === nums[j]) {
//   //       return [i, j];
//   //     }
//   //   }
//   // }
// }

// function quickSort(arr) {
//   if (arr.length <= 1) return arr;

//   let pivot = arr[arr.length - 1];
//   let leftArr = [];
//   let rightArr = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       leftArr.push(arr[i]);
//     } else {
//       rightArr.push(arr[i]);
//     }
//   }

//   //   divide and conquer
//   if (leftArr.length > 0 && rightArr.length > 0) {
//     return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
//   } else if (leftArr.length > 0) {
//     return [...quickSort(leftArr), pivot];
//   } else {
//     return [pivot, ...quickSort(rightArr)];
//   }
// }

// // ------------------------------------------
// console.log(quickSort([0, 4, 3, 1, 6, 5]));
// // console.log(JSON.stringify(pascalTriangle(6)));

// const classDetails = {
//   strength: 78,
//   benches: 39,
//   blackBoard: 1,
// };

// const classStrength = classDetails.strength;
// const classBenches = classDetails.benches;
// const classBlackBoard = classDetails.blackBoard;

// const countToTen = (num = 1) => {
//   while (num <= 10) {
//     console.log(num);
//     num++;
//   }
// };
// countToTen();

// const fibonacci = (num, array = [0, 1]) => {
//   while (num > 2) {
//     const [nextToLast, last] = array.slice(-2);
//     array.push(nextToLast + last);
//     num -= 1;
//   }
//   return array;
// };
// console.log(fibonacci(12));

// const fib = (num, array = [0, 1]) => {
//   if (num <= 2) return array;
//   const [nextToLast, last] = array.slice(-2);
//   return fib(num - 1, [...array, nextToLast + last]);
// };

// console.log(fib(12));

// const fibPos = (pos) => {
//   if (pos < 2) return pos;
//   return fibPos(pos - 1) + fibPos(pos - 2);
// };
// console.log(fibPos(8));

// Flatten
// function flatten(value) {
//   let newArray = [];
//   let values = JSON.stringify(value).split("");

//   for (let v of values) {
//     if (v !== "[" && v !== "]" && v !== ",") {
//       newArray.push(Number(v));
//     }
//   }
//   return newArray;
// }

// console.log(flatten([1, 2, 3, [4, [5, 6]]]));

// Thirty days challenge
// Day one:
// var createHelloWorld = () => {
//   return (...args) => {
//     return "Hello World";
//   };
// };
// Day two:
// const counter = (n) => {
//   return function calc() {
//     return n++;
//   };
// };

// class Count {
//   constructor(n) {
//     this.c = n;
//   }
//   increment() {
//     return this.c++;
//   }
// }

// class Counter2 {
//   constructor(n) {
//     this.a = n;
//     this.c = n;
//   }
//   increment() {
//     return ++this.c;
//   }
//   decrement() {
//     return --this.c;
//   }
//   reset() {
//     return (this.c = this.a);
//   }
// }

// var createCounter = (x) => {
//   let count = x;
//   function increment() {
//     return ++count;
//   }
//   function decrement() {
//     return --count;
//   }
//   function reset() {
//     count = x;
//     return count;
//   }
//   return {
//     increment: increment,
//     decrement: decrement,
//     reset: reset,
//   };
// };

// const red = createCounter(10);
// console.log(red.increment());
// console.log(red.decrement());
// console.log(red.decrement());
// console.log(red.reset());

// var map = (arr, fn) => {
//   const res = [];

//   for (let i in arr) {
//     res.push(fn(arr[i], Number(i)));
//   }

//   return res;
// };

// Day three:
// var fiter = (arr, fn) => {
//   // arr.filter((n, i) => {
//   //     return n > 10
//   // })

//   const res = [];
//   //   for (let a of arr) {
//   //     if (a > 10) {
//   //       res.push(a);
//   //     }
//   //   }

//   for (let i in arr) {
//     if (fn(arr[i], +i)) {
//       res.push(arr[i]);
//     }
//   }

//   return res;
// };

// const nums = [1, 2, 7, 4, 5];
// function fn(init, n) {
//   return init + n;
// }
// nums.reduce(fn, 0);
// var reduce = (nums, fn, init) => {
//   let res = init;

//   for (const n of nums) {
//     res = fn(res, n);
//   }

//   return res;

//   //   return nums.reduce(fn, init);
// };

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var compose = function (functions) {
//   return function (x) {
//     for (const fn of functions.reverse()) {
//       x = fn(x);
//     }
//   };
//   //   const fn = (acc, f) => f(acc);
//   //   return function (x) {
//   //     return functions.reduceRight(fn, x);
//   //   };
// };

// const fn = compose([(x = x + 1), (x) => 2 * x]);
// fn(4); //9
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Day four:

// var once = function (fn) {
//   let called = false;

//   return function (...args) {
//     if (called) {
//       return undefined;
//     }
//     called = true;
//     return fn(...args);
//   };
// };

// function memo(fn) {
//   const cache = {};
//   return (...arg) => {
//     const key = JSON.stringify(arg);
//     if (key in cache) {
//       return cache[key];
//     }
//     cache[key] = fn(...arg);
//     return cache[key];
//   };
// }

// Ex:1-----------------------

// function findTheWordValue(word1) {
//   let wordValue = 0;
//   const alphabet = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5,
//     f: 6,
//     g: 7,
//     h: 8,
//     i: 9,
//     j: 10,
//     k: 11,
//     l: 12,
//     m: 13,
//     n: 14,
//     o: 15,
//     p: 16,
//     q: 17,
//     r: 18,
//     s: 19,
//     t: 20,
//     u: 21,
//     v: 22,
//     w: 23,
//     x: 24,
//     y: 25,
//     z: 26,
//   };

//   for (let i of word1.toLowerCase()) {
//     for (let j in alphabet) {
//       if (i === j) {
//         wordValue += alphabet[j];
//       }
//     }
//   }
//   return wordValue;
// }

// function showTheWord(word1, word2) {
//   let wordOneValue = findTheWordValue(word1);
//   let wordTwoValue = findTheWordValue(word2);

//   if (wordOneValue > wordTwoValue) {
//     console.log(
//       `WordOneValue is bigger, his value is:  ${wordOneValue} while WordTwoValue is ${wordTwoValue}`
//     );
//   } else if (wordOneValue < wordTwoValue) {
//     console.log(
//       `WordTwoValue is bigger, his value is:  ${wordTwoValue} while WordOneValue is ${wordOneValue}`
//     );
//   } else {
//     console.log("They are equal: " + wordOneValue);
//   }
// }

// showTheWord("red", "red");

// Ex:2-----------------------
// function sortAndFilter(arr) {
//   let finalArr = [];
//   let sortedArr = [];

//   arr.map((a) => {
//     if (Number(a)) {
//       sortedArr.push(a);
//     }
//   });

//   sortedArr.sort(function (a, b) {
//     return Number(a) - Number(b);
//   });

//   sortedArr.map((a, i) => {
//     finalArr.push({ [i]: a });
//   });
//   console.log(finalArr);
// }
// sortAndFilter(["a7", "11", "5", "v9", 1, 2, 4, 5, "22"]);
// sortAndFilter(["11", "5", "7a", "9v", 1, 2, 4, 5, "22"]);

// Ex:3-----------------------

// function findTheHiddenNumber(str) {
//   const ruleOne = /[0-9]+[a-z0-9]+[\-\\\+\*]+/gi;
//   const ruleTwo = /[\-\\\+\*]+[a-z0-9]+[0-9]+/gi;
//   const stringOne = str.match(ruleOne);
//   const stringTwo = str.match(ruleTwo);
//   const numbers = /[0-9]+/gi;
//   const sign = /[\-\\\+\*]/g;
//   const firstSetOfNumbers = stringOne[0].match(numbers);
//   const secondSetOfNumbers = stringTwo[0].match(numbers);
//   const operationValue = stringOne[0].match(sign);

//   let firstValue = 0;
//   let secondValue = 0;

//   for (let v of firstSetOfNumbers) {
//     firstValue += v;
//   }
//   for (let v of secondSetOfNumbers) {
//     secondValue += v;
//   }

//   switch (operationValue[0]) {
//     case "+":
//       console.log(Number(firstValue) + Number(secondValue));
//       break;
//     case "-":
//       console.log(Number(firstValue) - Number(secondValue));
//       break;
//     case "*":
//       console.log(Number(firstValue) * Number(secondValue));
//       break;
//     case "/":
//       console.log(Number(firstValue) / Number(secondValue));
//       break;

//     default:
//       break;
//   }
// }

// findTheHiddenNumber("gaQsfm234dg54gf*23sP42");

// Stacks---------------------------------------------------
// var letters = [];
// var word = "racecar";
// var rword = "";

// for (var i = 0; i < word.length; i++) {
//   letters.push(word[i]);
// }
// console.log(letters);

// for (var i = 0; i < word.length; i++) {
//   rword += letters.pop();
// }
// console.log(rword);

// if (rword === word) {
//   console.log(word + " is a palindrome");
// } else {
//   console.log(word + " isn't a palindrome");
// }
// ------------------------------------
// var Stack = function () {
//   this.count = 0;
//   this.storage = {};

//   this.push = function (value) {
//     this.storage[this.count] = value;
//     this.count++;
//   };

//   this.pop = function () {
//     if (this.count === 0) {
//       return undefined;
//     }
//     this.count--;
//     var result = this.storage[this.count];
//     delete this.storage[this.count];
//     return result;
//   };

//   this.size = function () {
//     return this.count;
//   };

//   this.peek = function () {
//     return this.storage[this.count - 1];
//   };
// };

// var myStack = new Stack();

// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
// console.log("-------------------");
// console.log(myStack.size());
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());

// Set---------------------------------------------------
// function mySet() {
//   var collection = [];

//   this.has = function (el) {
//     return collection.indexOf(el) !== -1;
//   };

//   this.values = function () {
//     return collection;
//   };

//   this.add = function (e) {
//     if (!this.has(e)) {
//       collection.push(e);
//       return true;
//     }
//     return false;
//   };

//   this.remove = function (e) {
//     if (this.has(e)) {
//       var index = collection.indexOf(e);
//       collection.splice(index, 1);
//       return true;
//     }
//     return false;
//   };

//   this.size = function () {
//     return collection.length;
//   };

//   this.union = function (otherSet) {
//     var unionSet = new Set();
//     var firstSet = this.values();
//     var secondSet = otherSet.values();
//     firstSet.forEach(function (e) {
//       unionSet.add(e);
//     });
//     secondSet.forEach(function (e) {
//       unionSet.add(e);
//     });
//     return unionSet;
//   };

//   this.intersection = function (otherSet) {
//     var intersectionSet = new Set();
//     var firstSet = this.values();
//     firstSet.forEach(function (e) {
//       if (otherSet.has(e)) {
//         intersectionSet.add(e);
//       }
//     });
//     return intersectionSet;
//   };

//   this.difference = function (otherSet) {
//     var differenceSet = new Set();
//     var firstSet = this.values();
//     firstSet.forEach(function (e) {
//       if (!otherSet.has(e)) {
//         differenceSet.add(e);
//       }
//     });
//     return differenceSet;
//   };

//   this.subset = function (otherSet) {
//     var firstSet = this.values();
//     return firstSet.every(function (value) {
//       return otherSet.has(value);
//     });
//   };
// }

// var setA = new mySet();
// var setB = new mySet();
// setA.add("a");
// setB.add("b");
// setB.add("c");
// setB.add("a");
// setB.add("d");
// console.log(setA.subset(setB));
// console.log(setA.intersection(setB));
// console.log(setB.difference(setA));

// Queues---------------------------------------------------

// function Queue() {
//   var collection = [];
//   this.print = function () {
//     console.log(collection);
//   };

//   this.enqueue = function (el) {
//     collection.push(el);
//   };

//   this.dequeue = function () {
//     return collection.shift();
//   };

//   this.front = function () {
//     return collection[0];
//   };

//   this.size = function () {
//     return collection.length;
//   };

//   this.isEmpty = function () {
//     return collection.length === 0;
//   };
// }

// var q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// console.log(q.front());
// console.log(q.size());
// console.log(q.isEmpty());

// Priority Queues---------------------------------------------------
// function PriorityQueue() {
//   var collection = [];
//   this.print = function () {
//     return collection;
//   };

//   this.enqueue = function (e) {
//     if (this.isEmpty()) {
//       collection.push(e);
//     } else {
//       var added = false;
//       for (var i = 0; i < collection.length; i++) {
//         if (e[1] < collection[i][1]) {
//           collection.splice(i, 0, e);
//           added = true;
//           break;
//         }
//       }
//       if (!added) {
//         collection.push(e);
//       }
//     }
//   };

//   this.dequeue = function () {
//     var value = collection.shift();
//     return value[0];
//   };

//   this.front = function () {
//     return collection[0];
//   };

//   this.size = function () {
//     return collection.length;
//   };

//   this.isEmpty = function () {
//     return collection.length === 0;
//   };
// }

// var pq = new PriorityQueue();
// pq.enqueue(["Beau Carnes", 2]);
// pq.enqueue(["Quincy Lrson", 3]);
// pq.enqueue(["Maddelyne Warlock", 1]);
// console.log(pq.print());
// console.log(pq.dequeue());

//Binary Search Tree ---------------------------------------------------

//Binary Search Tree: Traversal & Height ---------------------------------------------------

//Hash Tables ---------------------------------------------------

//Linked List ---------------------------------------------------

//Trie ---------------------------------------------------

//Heap (max and min) ---------------------------------------------------

//Heap visualization ---------------------------------------------------

//Graphs: adjacency list, adjacency matrix, incidence matrix ---------------------------------------------------
//Graphs: breadth-first search ---------------------------------------------------
